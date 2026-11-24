import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { FileText, Check, Copy, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'open-source', label: 'Open Source' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');

  // Scroll Progress and ScrollSpy observer
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full border-b border-mono-800/90 bg-mono-950/85 backdrop-blur-md transition-colors">
      {/* Scroll Progress Bar at the top edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-mono-900/60 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-telemetry-cyan via-telemetry-emerald to-telemetry-amber transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            className="group flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-mono-50 transition-transform active:scale-95"
          >
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="VK"
                className="h-7 w-7 rounded-full object-cover object-top border border-mono-700 bg-mono-900 transition-all duration-300 group-hover:border-telemetry-cyan"
              />
              <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-telemetry-emerald ring-2 ring-mono-950 animate-pulse" />
            </div>
            <span className="hidden sm:inline-block font-sans text-mono-200 transition-colors group-hover:text-mono-50">
              Vivek Kanugula
            </span>
          </a>
        </div>

        {/* Desktop Navigation with active section indicator */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3.5 2xl:gap-5 text-xs font-mono uppercase tracking-wider text-mono-400">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-2 py-1 transition-all duration-200 hover:text-mono-100 ${
                  isActive ? 'text-mono-50 font-semibold' : 'text-mono-400'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-telemetry-cyan to-telemetry-emerald animate-fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenResume}
            className="btn-tactile flex items-center gap-1.5 rounded border border-mono-800 bg-mono-900/90 px-3 py-1.5 text-xs font-mono text-mono-300 transition-all hover:border-mono-700 hover:text-mono-100 hover:bg-mono-850"
            title="Open Resume"
          >
            <FileText className="h-3.5 w-3.5 text-telemetry-cyan" />
            <span>Resume</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className={`btn-tactile hidden sm:flex items-center gap-1.5 rounded border px-3 py-1.5 text-xs font-mono font-medium transition-all ${
              copied
                ? 'border-telemetry-emerald/50 bg-telemetry-emerald/10 text-telemetry-emerald'
                : 'border-mono-700 bg-mono-850 text-mono-100 hover:bg-mono-800 hover:border-mono-600'
            }`}
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-telemetry-emerald" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-mono-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-tactile lg:hidden rounded border border-mono-800 bg-mono-900 p-1.5 text-mono-400 hover:text-mono-100 hover:border-mono-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-mono-800 bg-mono-950/95 backdrop-blur-md px-4 py-4 space-y-2 font-mono text-sm text-mono-300 animate-fade-in">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded px-3 py-2 transition-colors ${
                  isActive
                    ? 'bg-mono-900 text-mono-50 border-l-2 border-telemetry-cyan font-medium'
                    : 'hover:bg-mono-900/60 hover:text-mono-100'
                }`}
              >
                <span>→ {item.label}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-telemetry-cyan" />
                )}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
