/**
 * Telemetry & Recruiter Activity Tracker
 * Silently records high-intent candidate review events (Resume opened, dwell time, PDF download)
 * and dispatches rich real-time alert embeds to Discord Webhook.
 */

export type ResumeAction = 'opened' | 'closed' | 'downloaded' | 'opened_in_tab';

interface GeoTelemetry {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  org?: string;
}

// In-session cache keys
const SESSION_KEYS = {
  GEO: 'vk_telemetry_geo',
  REF: 'vk_telemetry_ref',
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
 * Fetch approximate visitor location & corporate network silently.
 * Cached in sessionStorage for the duration of the visitor session.
 */
const getGeoContext = async (): Promise<GeoTelemetry> => {
  if (typeof window === 'undefined') return {};

  try {
    const cached = sessionStorage.getItem(SESSION_KEYS.GEO);
    if (cached) {
      return JSON.parse(cached);
    }

    // 2.5 second timeout to guarantee zero perception lag
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch('https://ipapi.co/json/', {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const geo: GeoTelemetry = {
        city: data.city || 'Unknown',
        region: data.region || '',
        country: data.country_name || 'Unknown',
        org: data.org || 'Unknown Network',
      };
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

const DEFAULT_WEBHOOK_URL =
  'https://discord.com/api/webhooks/1575379542548152351/AYSDXTb9U-lYeF9_QjkkZ0qzldxGbCwO42TEnpTsZ5A4AvzB9NEf-44yGVUZxoKtm8L_';

/**
 * Main telemetry dispatcher for Resume actions
 */
export const trackResumeAction = async (
  action: ResumeAction,
  durationSeconds?: number
): Promise<void> => {
  if (typeof window === 'undefined') return;

  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;

  // Debounce duplicate clicks on download/tab within 8 seconds
  const debounceKey = `${SESSION_KEYS.LAST_ACTION}${action}`;
  const lastTime = sessionStorage.getItem(debounceKey);
  const now = Date.now();
  if (lastTime && now - parseInt(lastTime, 10) < 8000 && action !== 'closed') {
    return;
  }
  sessionStorage.setItem(debounceKey, now.toString());

  // If no webhook configured in this environment, log friendly info in development
  if (!webhookUrl || typeof webhookUrl !== 'string' || !webhookUrl.startsWith('http')) {
    if (import.meta.env.DEV) {
      console.info(
        `%c[Telemetry]%c Resume action: ${action} | Tag: ${getRecruiterTag()}`,
        'background: #6366f1; color: white; padding: 2px 6px; border-radius: 4px;',
        'color: inherit;'
      );
    }
    return;
  }

  try {
    const geo = await getGeoContext();
    const tag = getRecruiterTag();
    const device = getDeviceContext();
    const referrer = document.referrer ? new URL(document.referrer).hostname : 'Direct / Bookmark';

    // Discord Embed Visual Configuration
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

    const payload = {
      username: 'Portfolio Recruiter Radar',
      avatar_url: 'https://portfolio.vivekstack.dev/favicon.png',
      embeds: [
        {
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
        },
      ],
    };

    // Use sendBeacon if closing/downloading, or non-blocking fetch
    const payloadStr = JSON.stringify(payload);
    if (action === 'closed' && navigator.sendBeacon) {
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
    // Completely silent fallback — ensures user experience is never impacted
  }
};
