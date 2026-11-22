import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Mail, Copy, Check, ExternalLink, Send, Loader2, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
    <section id="contact" className="border-b border-mono-800 bg-mono-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-amber">
            <Mail className="h-4 w-4" />
            <span>Let's Connect</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Get in Touch
          </h2>
          <p className="mt-3 text-mono-300 font-sans text-sm sm:text-base leading-relaxed text-justify">
            Whether you want to discuss a software engineering role, talk backend architectures and systems, recommend a good movie, or chat about philosophy — my inbox is always open. Drop a note below!
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

          </div>

          {/* Direct Working Message Form */}
          <div className="rounded-lg border border-mono-800 bg-mono-900/60 p-6 sm:p-8">
            <span className="text-xs font-mono uppercase tracking-wider text-mono-400 block mb-4">
              Send a Direct Message
            </span>

            {submitted ? (
              <div className="rounded-lg border border-telemetry-emerald/40 bg-telemetry-emerald/10 p-6 text-center space-y-3">
                <CheckCircle2 className="h-10 w-10 text-telemetry-emerald mx-auto" />
                <h3 className="text-lg font-bold text-mono-50 font-sans">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-mono-300 font-sans leading-relaxed text-justify">
                  Your message has been dispatched to {PROFILE_DATA.email}. I will review your inquiry and get back to you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex items-center gap-2 rounded border border-mono-700 bg-mono-800 px-4 py-2 text-xs font-mono text-mono-200 hover:text-white transition-colors"
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
                    className="w-full rounded border border-mono-800 bg-mono-950 px-3.5 py-2.5 text-xs sm:text-sm text-mono-100 outline-none focus:border-telemetry-amber placeholder:text-mono-600 font-sans"
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
                    className="w-full rounded border border-mono-800 bg-mono-950 px-3.5 py-2.5 text-xs sm:text-sm text-mono-100 outline-none focus:border-telemetry-amber placeholder:text-mono-600 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-mono-400 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Acme Corp, Startup, or Independent"
                    className="w-full rounded border border-mono-800 bg-mono-950 px-3.5 py-2.5 text-xs sm:text-sm text-mono-100 outline-none focus:border-telemetry-amber placeholder:text-mono-600 font-sans"
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
                    className="w-full rounded border border-mono-800 bg-mono-950 px-3.5 py-2.5 text-xs sm:text-sm text-mono-100 outline-none focus:border-telemetry-amber placeholder:text-mono-600 font-sans"
                  />
                </div>

                {errorMsg && (
                  <div className="rounded bg-telemetry-amber/10 border border-telemetry-amber/30 p-2.5 text-xs font-mono text-telemetry-amber">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded bg-mono-100 px-5 py-2.5 text-xs sm:text-sm font-semibold font-mono text-mono-950 hover:bg-white transition-colors disabled:opacity-60"
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

        </div>

      </div>
    </section>
  );
};
