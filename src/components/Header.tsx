import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { FileText, Check, Copy, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-mono-800 bg-mono-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand & Status */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-mono-50">
            <span className="flex h-7 w-7 items-center justify-center rounded border border-mono-700 bg-mono-900 text-telemetry-amber font-bold">
              VK
            </span>
            <span className="hidden sm:inline-block font-sans text-mono-200">Vivek Kanugula</span>
          </a>
          <div className="hidden md:flex items-center gap-2 rounded-full border border-mono-800 bg-mono-900/80 px-2.5 py-1 text-xs text-mono-300">
            <span className="h-1.5 w-1.5 rounded-full bg-telemetry-emerald animate-pulse" />
            <span>{PROFILE_DATA.availability}</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-mono-400">
          <a href="#experience" className="transition-colors hover:text-mono-100">Experience</a>
          <a href="#projects" className="transition-colors hover:text-mono-100">Projects</a>
          <a href="#open-source" className="transition-colors hover:text-mono-100">Open Source</a>
          <a href="#skills" className="transition-colors hover:text-mono-100">Skills</a>
          <a href="#education" className="transition-colors hover:text-mono-100">Education</a>
          <a href="#interests" className="transition-colors hover:text-mono-100">Interests</a>
          <a href="#contact" className="transition-colors hover:text-mono-100">Contact</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 rounded border border-mono-800 bg-mono-900 px-3 py-1.5 text-xs font-mono text-mono-300 transition-colors hover:border-mono-700 hover:text-mono-100"
          >
            <FileText className="h-3.5 w-3.5 text-telemetry-cyan" />
            <span>Resume</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="hidden sm:flex items-center gap-1.5 rounded border border-mono-700 bg-mono-850 px-3 py-1.5 text-xs font-mono font-medium text-mono-100 transition-colors hover:bg-mono-800 hover:border-mono-600"
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
            className="lg:hidden rounded border border-mono-800 p-1.5 text-mono-400 hover:text-mono-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-mono-800 bg-mono-900 px-4 py-4 space-y-3 font-mono text-sm text-mono-300">
          <a 
            href="#experience" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-mono-100"
          >
            → Experience
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-mono-100"
          >
            → Projects
          </a>
          <a 
            href="#open-source" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-mono-100"
          >
            → Open Source
          </a>
          <a 
            href="#skills" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-mono-100"
          >
            → Skills
          </a>
          <a 
            href="#education" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-mono-100"
          >
            → Education
          </a>
          <a 
            href="#interests" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-mono-100"
          >
            → Interests
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-mono-100"
          >
            → Contact
          </a>
        </div>
      )}
    </header>
  );
};
