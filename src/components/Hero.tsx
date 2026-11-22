import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { ArrowDownRight, FileText, Download, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative border-b border-mono-800 bg-mono-950 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Meta Bar - Attention Grabbing Location, Mobility & Preferences */}
        <div className="mb-6 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono">
          <span className="inline-flex flex-wrap items-center gap-1.5 rounded-xl sm:rounded-full border border-mono-800 bg-mono-900/90 px-3 py-1.5 sm:py-1 text-mono-200 max-w-full">
            <MapPin className="h-3.5 w-3.5 text-telemetry-amber shrink-0" />
            <span>Hyderabad</span>
            <span className="text-mono-600">·</span>
            <span className="text-telemetry-amber font-medium">Open to Bengaluru, Chennai, Pune</span>
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-mono-800 bg-mono-900/90 px-3 py-1 text-mono-300">
            <span className="h-1.5 w-1.5 rounded-full bg-telemetry-cyan shrink-0" />
            <span>Hybrid · On-site · Remote</span>
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-telemetry-emerald/30 bg-telemetry-emerald/10 px-3 py-1 text-telemetry-emerald font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-telemetry-emerald animate-pulse shrink-0" />
            <span>{PROFILE_DATA.availability}</span>
          </span>
        </div>

        {/* Name & Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-mono-50 font-sans leading-tight">
            Hi, I'm {PROFILE_DATA.name}.
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-mono-300 font-sans max-w-3xl text-justify">
            {PROFILE_DATA.bio}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded bg-mono-100 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-mono-950 transition-colors hover:bg-white"
          >
            <span>View Experience</span>
            <ArrowDownRight className="h-4 w-4" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded border border-mono-700 bg-mono-900 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-mono-200 transition-colors hover:border-mono-600 hover:bg-mono-850"
          >
            <span>Projects</span>
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 rounded border border-mono-700 bg-mono-900 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-mono-200 transition-colors hover:border-mono-600 hover:bg-mono-850"
          >
            <FileText className="h-4 w-4 text-telemetry-cyan" />
            <span>View Resume</span>
          </button>

          <a
            href="/resume.pdf"
            download="Vivek_Kanugula_Resume.pdf"
            className="inline-flex items-center gap-2 rounded border border-mono-700 bg-mono-900 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-mono-200 transition-colors hover:border-mono-600 hover:bg-mono-850"
          >
            <Download className="h-4 w-4 text-telemetry-emerald" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Direct Profiles Row */}
        <div className="mt-8 pt-6 border-t border-mono-800/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-mono-400">
          <a
            href={PROFILE_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-mono-100 transition-colors"
          >
            <GithubIcon className="h-4 w-4 text-mono-300" />
            <span>GitHub</span>
          </a>

          <a
            href={PROFILE_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-mono-100 transition-colors"
          >
            <LinkedinIcon className="h-4 w-4 text-mono-300" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PROFILE_DATA.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-mono-100 transition-colors text-telemetry-amber font-medium"
          >
            <span>LeetCode (21241A0595)</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
