/**
 * Telemetry & Recruiter Activity Tracker
 * Silently records high-intent candidate review events:
 * 1. Page visits / visitor arrivals (with geo, organization, device, and campaign UTM parameters)
 * 2. Resume actions (opened, dwell time, PDF download, tab view)
 * 3. High-intent interactions (project GitHub, live demo, PR inspection, profile clicks, contact actions)
 * 4. Contact form inquiries
 * Dispatches rich real-time alert embeds to Discord Webhook at ₹0 cost.
 */

export type ResumeAction = 'opened' | 'closed' | 'downloaded' | 'opened_in_tab';

export type InteractionCategory =
  | 'project_github'
  | 'project_demo'
  | 'opensource_pr'
  | 'social_profile'
  | 'contact_action'
  | 'theme_toggle';

interface GeoTelemetry {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  org?: string;
}

interface DiscordEmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

interface DiscordEmbed {
  title: string;
  description?: string;
  color: number;
  fields: DiscordEmbedField[];
  footer: {
    text: string;
    icon_url?: string;
  };
  timestamp: string;
}

// In-session cache keys
const SESSION_KEYS = {
  GEO: 'vk_telemetry_geo',
  REF: 'vk_telemetry_ref',
  LANDED: 'vk_telemetry_landed',
  LAST_ACTION: 'vk_telemetry_last_action_',
};

/**
 * Extracts and persists any recruiter/campaign tag from URL query params.
 * e.g., portfolio.vivekstack.dev/?ref=google or ?src=cisco-application
 */
export const getRecruiterTag = (): string => {
  if (typeof window === 'undefined') return 'Direct / Organic';

  try {
    const cachedRef = sessionStorage.getItem(SESSION_KEYS.REF);
    if (cachedRef) return cachedRef;

    const urlParams = new URLSearchParams(window.location.search);
    const tag =
      urlParams.get('ref') ||
      urlParams.get('src') ||
      urlParams.get('utm_source') ||
      urlParams.get('company') ||
      urlParams.get('recruiter') ||
      'Direct / Organic';

    sessionStorage.setItem(SESSION_KEYS.REF, tag);
    return tag;
  } catch {
    return 'Direct / Organic';
  }
};

/**
 * Fetch approximate visitor location & corporate network silently with dual fallback.
 * Cached in sessionStorage for the duration of the visitor session.
 */
const getGeoContext = async (): Promise<GeoTelemetry> => {
  if (typeof window === 'undefined') return {};

  try {
    const cached = sessionStorage.getItem(SESSION_KEYS.GEO);
    if (cached) {
      return JSON.parse(cached);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    let geo: GeoTelemetry | null = null;

    try {
      const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
      if (res.ok) {
        const data = await res.json();
        geo = {
          city: data.city || 'Unknown',
          region: data.region || '',
          country: data.country_name || 'Unknown',
          org: data.org || 'Unknown Network',
        };
      }
    } catch {
      // Primary provider failed or aborted, try secondary fallback
    }

    if (!geo) {
      try {
        const res2 = await fetch('https://ipwho.is/');
        if (res2.ok) {
          const data2 = await res2.json();
          if (data2 && data2.success !== false) {
            geo = {
              city: data2.city || 'Unknown',
              region: data2.region || '',
              country: data2.country || 'Unknown',
              org: data2.connection?.org || data2.connection?.isp || 'Unknown Network',
            };
          }
        }
      } catch {
        // Fallback silently
      }
    }

    clearTimeout(timeoutId);

    if (geo) {
      sessionStorage.setItem(SESSION_KEYS.GEO, JSON.stringify(geo));
      return geo;
    }
  } catch {
    // Fail silently without disrupting user
  }

  return {
    city: 'Protected / VPN',
    country: 'Global',
    org: 'Private Network',
  };
};

/**
 * Detects device and browser for technical context.
 */
const getDeviceContext = (): string => {
  if (typeof window === 'undefined') return 'Server';
  const ua = navigator.userAgent;
  let browser = 'Unknown Browser';
  let os = 'Unknown OS';

  if (ua.includes('Chrome')) browser = 'Chrome';
  else if (ua.includes('Safari')) browser = 'Safari';
  else if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Edge')) browser = 'Edge';

  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac OS')) os = 'macOS';
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('Linux')) os = 'Linux';

  const isMobile = window.innerWidth < 768;
  return `${os} • ${browser} (${isMobile ? 'Mobile' : 'Desktop'} ${window.innerWidth}x${window.innerHeight})`;
};

/**
 * Formats duration nicely
 */
const formatDuration = (seconds?: number): string => {
  if (!seconds || seconds <= 0) return 'Instant';
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
};

/**
 * Internal Discord Webhook Dispatcher
 */
const dispatchDiscordWebhook = async (
  embed: DiscordEmbed,
  useBeacon = false
): Promise<void> => {
  if (typeof window === 'undefined') return;

  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

  if (!webhookUrl || typeof webhookUrl !== 'string' || !webhookUrl.startsWith('http')) {
    if (import.meta.env.DEV) {
      console.info(
        `%c[Telemetry]%c ${embed.title}`,
        'background: #6366f1; color: white; padding: 2px 6px; border-radius: 4px;',
        'color: inherit;'
      );
    }
    return;
  }

  const payload = {
    username: 'Portfolio Recruiter Radar',
    avatar_url: 'https://portfolio.vivekstack.dev/favicon.png',
    embeds: [embed],
  };

  const payloadStr = JSON.stringify(payload);

  try {
    if (useBeacon && navigator.sendBeacon) {
      const blob = new Blob([payloadStr], { type: 'application/json' });
      navigator.sendBeacon(webhookUrl, blob);
    } else {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payloadStr,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Fail silently
  }
};

/**
 * 1. General Portfolio Page View Telemetry
 * Fires once per session on visitor arrival.
 */
export const trackPageView = async (themeName?: string): Promise<void> => {
  if (typeof window === 'undefined') return;

  // Deduplicate landing event per session so refreshes don't spam
  if (sessionStorage.getItem(SESSION_KEYS.LANDED)) {
    return;
  }
  sessionStorage.setItem(SESSION_KEYS.LANDED, Date.now().toString());

  try {
    const geo = await getGeoContext();
    const tag = getRecruiterTag();
    const device = getDeviceContext();
    const referrer = document.referrer ? new URL(document.referrer).hostname : 'Direct / Bookmark';

    const embed: DiscordEmbed = {
      title: '🌐 New Portfolio Visitor Arrival',
      description: '**A visitor landed on portfolio.vivekstack.dev**',
      color: 0x38bdf8, // Telemetry Sky Blue
      fields: [
        {
          name: '🏢 Network / Organization',
          value: geo.org || 'Unknown Organization',
          inline: true,
        },
        {
          name: '📍 Location',
          value: [geo.city, geo.region, geo.country].filter(Boolean).join(', ') || 'Global',
          inline: true,
        },
        {
          name: '🏷️ Recruiter Campaign',
          value: tag !== 'Direct / Organic' ? `\`?ref=${tag}\`` : 'Direct / Organic',
          inline: true,
        },
        {
          name: '📱 Client Device',
          value: device,
          inline: true,
        },
        {
          name: '🔗 Referrer',
          value: referrer,
          inline: true,
        },
        {
          name: '🎨 Visual Theme',
          value: themeName || 'Obsidian Aurora',
          inline: true,
        },
      ],
      footer: {
        text: 'portfolio.vivekstack.dev • Live Recruiter Telemetry',
        icon_url: 'https://portfolio.vivekstack.dev/favicon.png',
      },
      timestamp: new Date().toISOString(),
    };

    await dispatchDiscordWebhook(embed);
  } catch {
    // Completely silent fallback
  }
};

/**
 * 2. Main Telemetry Dispatcher for Resume Actions
 */
export const trackResumeAction = async (
  action: ResumeAction,
  durationSeconds?: number
): Promise<void> => {
  if (typeof window === 'undefined') return;

  // Debounce duplicate clicks on download/tab within 8 seconds
  const debounceKey = `${SESSION_KEYS.LAST_ACTION}${action}`;
  const lastTime = sessionStorage.getItem(debounceKey);
  const now = Date.now();
  if (lastTime && now - parseInt(lastTime, 10) < 8000 && action !== 'closed') {
    return;
  }
  sessionStorage.setItem(debounceKey, now.toString());

  try {
    const geo = await getGeoContext();
    const tag = getRecruiterTag();
    const device = getDeviceContext();
    const referrer = document.referrer ? new URL(document.referrer).hostname : 'Direct / Bookmark';

    let title = '📄 Resume Modal Opened';
    let color = 0x6366f1; // Aurora Indigo
    let description = '**A recruiter or visitor is currently viewing your resume on screen.**';

    switch (action) {
      case 'downloaded':
        title = '📥 Resume PDF Downloaded (High Intent)';
        color = 0x10b981; // Emerald
        description = '🎯 **Recruiter saved your official PDF resume to their local device/ATS!**';
        break;
      case 'opened_in_tab':
        title = '🔍 Resume Opened in Dedicated Tab';
        color = 0x06b6d4; // Cyan
        description = '📖 **Visitor opened your resume in a full dedicated browser tab for deep reading.**';
        break;
      case 'closed':
        title = '⏱️ Resume Reading Finished';
        color = 0x8b5cf6; // Violet
        description = `Visitor closed the resume modal after reading for **${formatDuration(durationSeconds)}**.`;
        break;
      case 'opened':
      default:
        break;
    }

    const embed: DiscordEmbed = {
      title,
      description,
      color,
      fields: [
        {
          name: '🏢 Network / Organization',
          value: geo.org || 'Unknown Organization',
          inline: true,
        },
        {
          name: '📍 Location',
          value: [geo.city, geo.region, geo.country].filter(Boolean).join(', ') || 'Global',
          inline: true,
        },
        {
          name: '🏷️ Recruiter Campaign',
          value: tag !== 'Direct / Organic' ? `\`?ref=${tag}\`` : 'Direct / Organic',
          inline: true,
        },
        ...(durationSeconds
          ? [
              {
                name: '⏱️ Dwell Time',
                value: formatDuration(durationSeconds),
                inline: true,
              },
            ]
          : []),
        {
          name: '📱 Client Device',
          value: device,
          inline: true,
        },
        {
          name: '🔗 Referrer',
          value: referrer,
          inline: true,
        },
      ],
      footer: {
        text: 'portfolio.vivekstack.dev • Live Recruiter Telemetry',
        icon_url: 'https://portfolio.vivekstack.dev/favicon.png',
      },
      timestamp: new Date().toISOString(),
    };

    await dispatchDiscordWebhook(embed, action === 'closed');
  } catch {
    // Completely silent fallback
  }
};

/**
 * 3. High-Intent Interaction Tracker
 * Tracks clicks on GitHub projects, live demos, PR links, social profiles, and contact actions.
 */
export const trackInteraction = async (
  category: InteractionCategory,
  label: string,
  extraContext?: string
): Promise<void> => {
  if (typeof window === 'undefined') return;

  // Debounce duplicate clicks on the exact same label within 20 seconds
  const debounceKey = `${SESSION_KEYS.LAST_ACTION}${category}_${label}`;
  const lastTime = sessionStorage.getItem(debounceKey);
  const now = Date.now();
  if (lastTime && now - parseInt(lastTime, 10) < 20000) {
    return;
  }
  sessionStorage.setItem(debounceKey, now.toString());

  try {
    const geo = await getGeoContext();
    const tag = getRecruiterTag();
    const device = getDeviceContext();

    let title = `🎯 High-Intent Action: ${label}`;
    let color = 0x6366f1; // Aurora Indigo
    let description = `Visitor interacted with **${label}**.`;

    switch (category) {
      case 'project_demo':
        title = `🚀 Live Project Demo Launched: ${label}`;
        color = 0x10b981; // Emerald
        description = `Visitor opened live application demo for **${label}**.`;
        break;
      case 'project_github':
        title = `💻 Project Repository Inspected: ${label}`;
        color = 0xf59e0b; // Amber
        description = `Visitor opened GitHub source code repository for **${label}**.`;
        break;
      case 'opensource_pr':
        title = `🌟 Open-Source PR Inspected: ${label}`;
        color = 0x06b6d4; // Cyan
        description = `Visitor reviewed production pull request: **${label}**.`;
        break;
      case 'social_profile':
        title = `👤 Engineering Profile Explored: ${label}`;
        color = 0x8b5cf6; // Violet
        description = `Visitor opened engineering profile: **${label}**.`;
        break;
      case 'contact_action':
        title = `📞 Direct Contact Action: ${label}`;
        color = 0xec4899; // Pink / Rose
        description = `Visitor engaged contact action: **${label}**.`;
        break;
      case 'theme_toggle':
        title = `🎨 Theme Toggled: ${label}`;
        color = 0xa855f7; // Purple
        description = `Visitor switched visual portfolio theme to **${label}**.`;
        break;
    }

    const embed: DiscordEmbed = {
      title,
      description,
      color,
      fields: [
        {
          name: '🏢 Network / Organization',
          value: geo.org || 'Unknown Organization',
          inline: true,
        },
        {
          name: '📍 Location',
          value: [geo.city, geo.region, geo.country].filter(Boolean).join(', ') || 'Global',
          inline: true,
        },
        {
          name: '🏷️ Recruiter Campaign',
          value: tag !== 'Direct / Organic' ? `\`?ref=${tag}\`` : 'Direct / Organic',
          inline: true,
        },
        ...(extraContext
          ? [
              {
                name: '🔗 Target URL',
                value: extraContext,
                inline: false,
              },
            ]
          : []),
        {
          name: '📱 Client Device',
          value: device,
          inline: true,
        },
      ],
      footer: {
        text: 'portfolio.vivekstack.dev • Live Recruiter Telemetry',
        icon_url: 'https://portfolio.vivekstack.dev/favicon.png',
      },
      timestamp: new Date().toISOString(),
    };

    await dispatchDiscordWebhook(embed);
  } catch {
    // Fail silently
  }
};

/**
 * 4. Contact Form Submission Telemetry
 */
export const trackFormSubmission = async (
  name: string,
  email: string,
  company: string,
  messagePreview: string
): Promise<void> => {
  if (typeof window === 'undefined') return;

  try {
    const geo = await getGeoContext();
    const tag = getRecruiterTag();
    const device = getDeviceContext();

    const embed: DiscordEmbed = {
      title: '📬 Direct Contact Form Submission!',
      description: `**New message received from ${name} (${company || 'Direct'})!**`,
      color: 0x10b981, // Emerald
      fields: [
        {
          name: '👤 Sender Name',
          value: name,
          inline: true,
        },
        {
          name: '✉️ Email Address',
          value: email,
          inline: true,
        },
        {
          name: '🏢 Company',
          value: company || 'Not specified',
          inline: true,
        },
        {
          name: '📍 Sender Location',
          value: [geo.city, geo.region, geo.country].filter(Boolean).join(', ') || 'Global',
          inline: true,
        },
        {
          name: '🌐 Sender Network',
          value: geo.org || 'Unknown Network',
          inline: true,
        },
        {
          name: '🏷️ Recruiter Tag',
          value: tag !== 'Direct / Organic' ? `\`?ref=${tag}\`` : 'Direct / Organic',
          inline: true,
        },
        {
          name: '💬 Message Excerpt',
          value: messagePreview.length > 500 ? `${messagePreview.slice(0, 497)}...` : messagePreview,
          inline: false,
        },
        {
          name: '📱 Client Device',
          value: device,
          inline: true,
        },
      ],
      footer: {
        text: 'portfolio.vivekstack.dev • Live Contact Telemetry',
        icon_url: 'https://portfolio.vivekstack.dev/favicon.png',
      },
      timestamp: new Date().toISOString(),
    };

    await dispatchDiscordWebhook(embed);
  } catch {
    // Fail silently
  }
};
