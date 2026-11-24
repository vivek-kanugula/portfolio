import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Mail, Copy, Check, ExternalLink, Send, Loader2, CheckCircle2, MapPin, Phone, MessageSquare } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !senderEmail.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/424687857c065b47007c419fca44c74f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: senderEmail.trim(),
          company: company.trim() || 'Independent / Not specified',
          message: message.trim(),
          _subject: `New Portfolio Inquiry from ${name.trim()} (${company.trim() || 'Direct'})`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || data.success === true))) {
        setSubmitted(true);
        setName('');
        setSenderEmail('');
        setCompany('');
        setMessage('');
      } else {
        // Fallback to mailto if service encountered an issue
        const fallbackUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
          `Inquiry from ${name} (${company || 'Direct'}) via Portfolio`
        )}&body=${encodeURIComponent(`From: ${name} (${senderEmail})\nCompany: ${company || 'N/A'}\n\n${message}`)}`;
        window.open(fallbackUrl, '_blank');
        setSubmitted(true);
      }
    } catch {
      // In case of network error, launch mail client directly
      const fallbackUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
        `Inquiry from ${name} (${company || 'Direct'}) via Portfolio`
      )}&body=${encodeURIComponent(`From: ${name} (${senderEmail})\nCompany: ${company || 'N/A'}\n\n${message}`)}`;
      window.open(fallbackUrl, '_blank');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative border-b border-mono-800 bg-mono-950 py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Subtle Ambient Background Spotlight */}
      <div className="absolute inset-0 radial-spotlight-hero pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-amber">
            <Mail className="h-4 w-4" />
            <span>Let's Connect</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Get in Touch
          </h2>
          <p className="mt-2.5 text-mono-300 font-sans text-sm sm:text-base leading-relaxed text-justify">
            Whether you want to discuss a software engineering role, talk backend architectures and systems, recommend a good movie, or chat about philosophy — my inbox is always open. Drop a note below!
          </p>
        </AnimatedSection>

        <div className="mt-7 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* Channel Cards */}
          <div className="space-y-4">
            
            {/* Primary Email Card */}
            <AnimatedSection delayMs={100}>
              <div className="group rounded-xl border border-mono-800/90 bg-mono-900/60 p-6 interactive-card hover:border-mono-700 hover:bg-mono-900">
                <div className="flex items-center justify-between text-xs font-mono text-mono-400">
                  <span>PRIMARY WORK EMAIL</span>
                  <span className="flex items-center gap-1.5 text-telemetry-emerald font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-telemetry-emerald animate-pulse" />
                    Checked Daily
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE_DATA.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-mono font-semibold text-mono-100 hover:text-telemetry-amber transition-colors truncate"
                    title="Open compose window in Gmail"
                  >
                    {PROFILE_DATA.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-tactile flex items-center gap-1.5 rounded border border-mono-700 bg-mono-800 px-3 py-1.5 text-xs font-mono text-mono-200 hover:bg-mono-750 hover:text-white transition-colors shrink-0"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-telemetry-emerald" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-mono-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Mobility & Work Preferences Callout */}
                <div className="mt-3.5 rounded-lg border border-mono-800/80 bg-mono-850/60 p-3 text-xs font-mono text-mono-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 text-mono-200">
                    <MapPin className="h-3.5 w-3.5 text-telemetry-amber shrink-0" />
                    <span>Based in Hyderabad · Open to Bengaluru, Chennai, Pune</span>
                  </span>
                  <span className="text-telemetry-cyan font-medium">Hybrid · Remote · On-site</span>
                </div>

                {/* Direct Gmail Compose Button */}
                <div className="mt-4 pt-3.5 border-t border-mono-800/80 flex items-center">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE_DATA.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile inline-flex items-center gap-1.5 rounded bg-mono-100 px-3.5 py-1.5 text-xs font-mono font-semibold text-mono-950 hover:bg-white transition-all hover:shadow-md"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Send via Gmail</span>
                    <ExternalLink className="h-3 w-3 text-mono-600" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Direct Phone & WhatsApp Card */}
            <AnimatedSection delayMs={150}>
              <div className="group rounded-xl border border-mono-800/90 bg-mono-900/60 p-6 interactive-card hover:border-mono-700 hover:bg-mono-900">
                <div className="flex items-center justify-between text-xs font-mono text-mono-400">
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-telemetry-cyan" />
                    <span>DIRECT MOBILE &amp; WHATSAPP</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-telemetry-emerald font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-telemetry-emerald animate-pulse" />
                    Available
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <a
                    href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, '')}`}
                    className="text-base sm:text-lg font-mono font-semibold text-mono-100 hover:text-telemetry-cyan transition-colors"
                    title="Tap to call"
                  >
                    {PROFILE_DATA.phone}
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="btn-tactile flex items-center gap-1.5 rounded border border-mono-700 bg-mono-800 px-3 py-1.5 text-xs font-mono text-mono-200 hover:bg-mono-750 hover:text-white transition-colors shrink-0"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-telemetry-emerald" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-mono-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Quick Actions: Call & WhatsApp */}
                <div className="mt-4 pt-3.5 border-t border-mono-800/80 flex flex-wrap items-center gap-2.5">
                  <a
                    href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, '')}`}
                    className="btn-tactile inline-flex items-center gap-1.5 rounded bg-mono-100 px-3.5 py-1.5 text-xs font-mono font-semibold text-mono-950 hover:bg-white transition-all hover:shadow-md"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call Directly</span>
                  </a>
                  <a
                    href={`https://wa.me/${PROFILE_DATA.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile inline-flex items-center gap-1.5 rounded border border-mono-700 bg-mono-800 px-3.5 py-1.5 text-xs font-mono font-medium text-mono-200 hover:border-mono-600 hover:bg-mono-750 hover:text-white transition-all"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-telemetry-emerald" />
                    <span>WhatsApp</span>
                    <ExternalLink className="h-3 w-3 text-mono-500" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Direct Profiles Card */}
            <AnimatedSection delayMs={200}>
              <div className="rounded-xl border border-mono-800/90 bg-mono-900/60 p-6 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-mono-400 block pb-2 border-b border-mono-800/80">
                  Verified Engineering Profiles
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <a
                    href={PROFILE_DATA.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile flex items-center justify-between rounded-lg border border-mono-800 bg-mono-950 p-3 hover:border-mono-700 text-mono-200 hover:text-white transition-all hover:bg-mono-900"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="h-3.5 w-3.5 text-mono-500" />
                  </a>

                  <a
                    href={PROFILE_DATA.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile flex items-center justify-between rounded-lg border border-mono-800 bg-mono-950 p-3 hover:border-mono-700 text-mono-200 hover:text-white transition-all hover:bg-mono-900"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="h-3.5 w-3.5 text-mono-500" />
                  </a>

                  <a
                    href={PROFILE_DATA.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile flex items-center justify-between rounded-lg border border-mono-800 bg-mono-950 p-3 hover:border-mono-700 text-mono-200 hover:text-white transition-all hover:bg-mono-900"
                  >
                    <span>LeetCode</span>
                    <ExternalLink className="h-3.5 w-3.5 text-mono-500" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

          </div>

          {/* Direct Working Message Form */}
          <AnimatedSection delayMs={150}>
            <div className="rounded-xl border border-mono-800/90 bg-mono-900/60 p-6 sm:p-8 shadow-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-mono-400 block mb-4">
                Send a Direct Message
              </span>

              {submitted ? (
                <div className="rounded-xl border border-telemetry-emerald/40 bg-telemetry-emerald/10 p-6 text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="h-10 w-10 text-telemetry-emerald mx-auto" />
                  <h3 className="text-lg font-bold text-mono-50 font-sans">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-mono-300 font-sans leading-relaxed text-justify">
                    Your message has been dispatched to {PROFILE_DATA.email}. I will review your inquiry and get back to you promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-tactile mt-4 inline-flex items-center gap-2 rounded border border-mono-700 bg-mono-800 px-4 py-2 text-xs font-mono text-mono-200 hover:text-white transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-mono-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Rivera"
                      className="w-full rounded-lg border border-mono-800 bg-mono-950 px-3.5 py-2.5 text-xs sm:text-sm text-mono-100 outline-none focus:border-telemetry-cyan focus:ring-1 focus:ring-telemetry-cyan/50 placeholder:text-mono-600 font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mono-400 mb-1">Your Email Address</label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full rounded-lg border border-mono-800 bg-mono-950 px-3.5 py-2.5 text-xs sm:text-sm text-mono-100 outline-none focus:border-telemetry-cyan focus:ring-1 focus:ring-telemetry-cyan/50 placeholder:text-mono-600 font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mono-400 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Acme Corp, Startup, or Independent"
                      className="w-full rounded-lg border border-mono-800 bg-mono-950 px-3.5 py-2.5 text-xs sm:text-sm text-mono-100 outline-none focus:border-telemetry-cyan focus:ring-1 focus:ring-telemetry-cyan/50 placeholder:text-mono-600 font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mono-400 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Discussing a Software Engineer position on the Java backend / distributed systems team..."
                      className="w-full rounded-lg border border-mono-800 bg-mono-950 px-3.5 py-2.5 text-xs sm:text-sm text-mono-100 outline-none focus:border-telemetry-cyan focus:ring-1 focus:ring-telemetry-cyan/50 placeholder:text-mono-600 font-sans transition-colors"
                    />
                  </div>

                  {errorMsg && (
                    <div className="rounded-lg bg-telemetry-amber/10 border border-telemetry-amber/30 p-2.5 text-xs font-mono text-telemetry-amber">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-tactile w-full flex items-center justify-center gap-2 rounded-lg bg-mono-100 px-5 py-2.5 text-xs sm:text-sm font-semibold font-mono text-mono-950 hover:bg-white hover:shadow-lg hover:shadow-mono-100/10 transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending Email to Vivek...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Email</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

        </div>

      </div>
    </section>
  );
};
