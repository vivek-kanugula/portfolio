import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { GitCommit, Phone } from 'lucide-react';
import { MagneticButton } from './motion/MagneticButton';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="bg-mono-950 py-7 sm:py-9 text-xs font-mono text-mono-400 border-t border-mono-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-mono-800/80">
          <div>
            <div className="flex items-center gap-2.5 font-semibold text-mono-200">
              <img
                src="/profile.jpg"
                alt="VK"
                className="h-5 w-5 rounded-full object-cover object-top border border-aurora-indigo/40 bg-mono-900"
              />
              <span className="text-white font-medium">{PROFILE_DATA.name}</span>
              <span className="text-mono-600">/</span>
              <span className="text-mono-400 font-normal">{PROFILE_DATA.specialization}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <MagneticButton strength={0.25}>
              <button
                onClick={onOpenResume}
                className="hover:text-white transition-colors"
              >
                Resume
              </button>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors text-mono-300"
                title="Call directly"
              >
                <Phone className="h-3.5 w-3.5 text-telemetry-cyan" />
                <span>{PROFILE_DATA.phone}</span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href={PROFILE_DATA.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LeetCode
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href={PROFILE_DATA.socials.codolio}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Codolio
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-mono-500">
          <div className="flex items-center gap-2">
            <GitCommit className="h-3.5 w-3.5 text-telemetry-emerald" />
            <span>Built with React, TypeScript &amp; Tailwind CSS • Obsidian Aurora Design System</span>
          </div>

          <div>
            © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
