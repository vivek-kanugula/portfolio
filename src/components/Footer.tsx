import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Terminal, GitCommit } from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal, onOpenResume }) => {
  return (
    <footer className="border-t border-mono-800 bg-mono-950 py-12 text-xs font-mono text-mono-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-mono-800">
          <div>
            <div className="flex items-center gap-2 font-semibold text-mono-200">
              <span className="flex h-5 w-5 items-center justify-center rounded border border-mono-700 bg-mono-900 text-telemetry-amber text-[10px]">
                VK
              </span>
              <span>{PROFILE_DATA.name}</span>
              <span className="text-mono-600">/</span>
              <span className="text-mono-400 font-normal">{PROFILE_DATA.specialization}</span>
            </div>
            <p className="mt-1 text-[11px] text-mono-500 font-sans">
              Authoritative systems engineering monograph. Zero AI slop, zero decoration.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 hover:text-mono-100 transition-colors"
            >
              <Terminal className="h-3.5 w-3.5 text-telemetry-amber" />
              <span>CLI Terminal</span>
            </button>

            <button
              onClick={onOpenResume}
              className="hover:text-mono-100 transition-colors"
            >
              Printable Resume
            </button>

            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mono-100 transition-colors"
            >
              GitHub
            </a>

            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mono-100 transition-colors"
            >
              LinkedIn
            </a>

            <a
              href={PROFILE_DATA.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mono-100 transition-colors"
            >
              LeetCode
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-mono-500">
          <div className="flex items-center gap-2">
            <GitCommit className="h-3.5 w-3.5 text-telemetry-emerald" />
            <span>Built with React 19, TypeScript & Tailwind CSS • Strict WCAG AA Accessible</span>
          </div>

          <div>
            © {new Date().getFullYear()} {PROFILE_DATA.name}. All verified technical benchmarks documented.
          </div>
        </div>

      </div>
    </footer>
  );
};
