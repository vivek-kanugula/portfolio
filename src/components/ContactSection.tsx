import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Mail, MapPin, Copy, Check, ExternalLink, Clock, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !senderEmail || !message) return;
    
    // Create mailto fallback link
    const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
      `Inquiry from ${name} via Portfolio`
    )}&body=${encodeURIComponent(`From: ${name} (${senderEmail})\n\n${message}`)}`;
    
    window.open(mailtoUrl, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contact" className="border-b border-mono-800 bg-mono-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-amber">
            <Mail className="h-4 w-4" />
            <span>Direct Channels</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Initiate Contact & Collaboration
          </h2>
          <p className="mt-3 text-mono-300 font-sans text-sm sm:text-base leading-relaxed">
            Available for Software Engineering roles focused on Java backends, distributed data pipelines, and AI engineering infrastructure.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Channel Cards */}
          <div className="space-y-4">
            
            {/* Primary Email Card */}
            <div className="rounded-lg border border-mono-800 bg-mono-900/60 p-6">
              <div className="flex items-center justify-between text-xs font-mono text-mono-400">
                <span>PRIMARY WORK EMAIL</span>
                <span className="flex items-center gap-1.5 text-telemetry-emerald font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-telemetry-emerald" />
                  Checked Daily
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4">
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="text-base sm:text-lg font-mono font-semibold text-mono-100 hover:text-telemetry-amber transition-colors truncate"
                >
                  {PROFILE_DATA.email}
                </a>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded border border-mono-700 bg-mono-800 px-3 py-1.5 text-xs font-mono text-mono-200 hover:bg-mono-750 transition-colors shrink-0"
                >
                  {copied ? (
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
            </div>

            {/* Direct Profiles Card */}
            <div className="rounded-lg border border-mono-800 bg-mono-900/60 p-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-mono-400 block pb-2 border-b border-mono-800">
                Verified Engineering Profiles
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <a
                  href={PROFILE_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded border border-mono-800 bg-mono-950 p-3 hover:border-mono-700 text-mono-200 hover:text-white transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5 text-mono-500" />
                </a>

                <a
                  href={PROFILE_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded border border-mono-800 bg-mono-950 p-3 hover:border-mono-700 text-mono-200 hover:text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3.5 w-3.5 text-mono-500" />
                </a>

                <a
                  href={PROFILE_DATA.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded border border-mono-800 bg-mono-950 p-3 hover:border-mono-700 text-mono-200 hover:text-white transition-colors"
                >
                  <span>LeetCode</span>
                  <ExternalLink className="h-3.5 w-3.5 text-mono-500" />
                </a>
              </div>
            </div>

            {/* Location & Timezone Indicator */}
            <div className="rounded-lg border border-mono-800 bg-mono-900/40 p-4 flex items-center justify-between text-xs font-mono text-mono-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-mono-400" />
                <span>{PROFILE_DATA.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-mono-300">
                <Clock className="h-3.5 w-3.5 text-telemetry-amber" />
                <span>IST (UTC +5:30)</span>
              </div>
            </div>

          </div>

          {/* Quick Message Form */}
          <div className="rounded-lg border border-mono-800 bg-mono-900/60 p-6 sm:p-8">
            <span className="text-xs font-mono uppercase tracking-wider text-mono-400 block mb-4">
              Send a Direct Engineering Inquiry
            </span>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-mono-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Rivera (Engineering Manager)"
                  className="w-full rounded border border-mono-800 bg-mono-950 px-3.5 py-2 text-xs sm:text-sm text-mono-100 outline-none focus:border-telemetry-amber placeholder:text-mono-600 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-mono-400 mb-1">Your Work Email</label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full rounded border border-mono-800 bg-mono-950 px-3.5 py-2 text-xs sm:text-sm text-mono-100 outline-none focus:border-telemetry-amber placeholder:text-mono-600 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-mono-400 mb-1">Message / Role Details</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Discussing a Software Engineer position on the distributed data / backend team..."
                  className="w-full rounded border border-mono-800 bg-mono-950 px-3.5 py-2 text-xs sm:text-sm text-mono-100 outline-none focus:border-telemetry-amber placeholder:text-mono-600 font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded bg-mono-100 px-5 py-2.5 text-xs sm:text-sm font-semibold font-mono text-mono-950 hover:bg-white transition-colors"
              >
                <Send className="h-4 w-4" />
                <span>Launch Mail Client with Pre-filled Message</span>
              </button>

              {sentSuccess && (
                <div className="rounded bg-telemetry-emerald/10 border border-telemetry-emerald/30 p-2 text-center text-xs font-mono text-telemetry-emerald">
                  Mail client launched. Direct dispatch ready!
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
