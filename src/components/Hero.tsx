import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { ArrowDownRight, FileText, Download, MapPin, ExternalLink, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative border-b border-mono-800 bg-mono-950 pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-14 lg:pb-14 overflow-hidden">
      {/* Ambient Radial Spotlight Background */}
      <div className="absolute inset-0 radial-spotlight-hero pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Meta Bar - Attention Grabbing Location, Mobility & Preferences */}
        <div className="mb-6 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono animate-fade-in">
          <span className="inline-flex flex-wrap items-center gap-1.5 rounded-xl sm:rounded-full border border-mono-800 bg-mono-900/90 px-3 py-1.5 sm:py-1 text-mono-200 max-w-full backdrop-blur-sm shadow-sm hover:border-mono-700 transition-colors">
            <MapPin className="h-3.5 w-3.5 text-telemetry-amber shrink-0" />
            <span>Hyderabad</span>
            <span className="text-mono-600">·</span>
            <span className="text-telemetry-amber font-medium">Open to Bengaluru, Chennai, Pune</span>
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-mono-800 bg-mono-900/90 px-3 py-1 text-mono-300 backdrop-blur-sm shadow-sm hover:border-mono-700 transition-colors">
            <span className="h-1.5 w-1.5 rounded-full bg-telemetry-cyan shrink-0" />
            <span>Hybrid · On-site · Remote</span>
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-telemetry-emerald/40 bg-telemetry-emerald/10 px-3 py-1 text-telemetry-emerald font-medium backdrop-blur-sm shadow-sm hover:border-telemetry-emerald/60 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-telemetry-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-telemetry-emerald"></span>
            </span>
            <span>{PROFILE_DATA.availability}</span>
          </span>
        </div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Bio & Core Actions */}
          <div className="md:col-span-7 xl:col-span-8">
            
            {/* Mobile Header Row: Headline on left, Portrait on right (Mobile normal view only) */}
            <div className="flex items-center justify-between gap-3.5 sm:gap-4 md:hidden">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-mono-50 font-sans leading-tight">
                Hi, I'm
                <span className="block mt-0.5 sm:mt-1 bg-gradient-to-r from-mono-50 via-mono-100 to-mono-300 bg-clip-text text-transparent">
                  Vivek Kanugula.
                </span>
              </h1>

              <div className="shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-telemetry-cyan/30 via-telemetry-emerald/20 to-telemetry-amber/20 blur-md opacity-70 group-hover:opacity-100 transition duration-300" />
                  <div className="relative w-[100px] h-[100px] sm:w-28 sm:h-28 rounded-2xl border border-mono-700/80 bg-gradient-to-b from-mono-900 to-mono-950 p-1.5 shadow-xl">
                    <div className="relative aspect-square w-full h-full overflow-hidden rounded-xl bg-mono-900">
                      <img
                        src="/profile.jpg"
                        alt={PROFILE_DATA.name}
                        className="h-full w-full object-cover object-top"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Headline (Hidden on mobile, visible on md+) */}
            <h1 className="hidden md:block md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-mono-50 font-sans leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-mono-50 via-mono-100 to-mono-300 bg-clip-text text-transparent">
                {PROFILE_DATA.name}.
              </span>
            </h1>

            {/* Bio Paragraph - Full width on mobile without jagged wrapping; clean typographic flow */}
            <p className="mt-4 sm:mt-5 md:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-mono-300 font-sans max-w-2xl text-left md:text-justify">
              {PROFILE_DATA.bio}
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-4">
              <a
                href="#experience"
                className="btn-tactile inline-flex items-center gap-2 rounded bg-mono-100 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-mono-950 transition-all hover:bg-white hover:shadow-lg hover:shadow-mono-100/10 hover:-translate-y-0.5"
              >
                <span>View Experience</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <a
                href="#projects"
                className="btn-tactile inline-flex items-center gap-2 rounded border border-mono-700 bg-mono-900 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-mono-200 transition-all hover:border-mono-600 hover:bg-mono-850 hover:text-white hover:-translate-y-0.5"
              >
                <span>Projects</span>
              </a>

              <button
                onClick={onOpenResume}
                className="btn-tactile inline-flex items-center gap-2 rounded border border-mono-700 bg-mono-900 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-mono-200 transition-all hover:border-mono-600 hover:bg-mono-850 hover:text-white hover:-translate-y-0.5"
              >
                <FileText className="h-4 w-4 text-telemetry-cyan" />
                <span>View Resume</span>
              </button>

              <a
                href="/resume.pdf"
                download="Vivek_Kanugula_Resume.pdf"
                className="btn-tactile inline-flex items-center gap-2 rounded border border-mono-700 bg-mono-900 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-mono-200 transition-all hover:border-mono-600 hover:bg-mono-850 hover:text-white hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4 text-telemetry-emerald" />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Direct Profiles Row */}
            <div className="mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-mono-800/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-mono-400">
              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile flex items-center gap-1.5 hover:text-mono-100 transition-colors"
              >
                <GithubIcon className="h-4 w-4 text-mono-300" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile flex items-center gap-1.5 hover:text-mono-100 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 text-mono-300" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PROFILE_DATA.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile flex items-center gap-1.5 hover:text-white transition-colors text-telemetry-amber font-medium"
              >
                <span>LeetCode (21241A0595)</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <a
                href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, '')}`}
                className="btn-tactile flex items-center gap-1.5 hover:text-mono-100 transition-colors text-mono-300"
                title="Call directly"
              >
                <Phone className="h-3.5 w-3.5 text-telemetry-cyan" />
                <span>{PROFILE_DATA.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Desktop Profile Portrait Card (Visible on md+ including Mobile 'Desktop Site' 980px & Laptops) */}
          <div className="hidden md:flex md:col-span-5 xl:col-span-4 justify-center md:justify-end">
            <div className="relative w-full max-w-[360px] lg:max-w-[380px] xl:max-w-[400px]">
              
              {/* Ambient Glow Aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-telemetry-cyan/20 via-telemetry-emerald/15 to-telemetry-amber/20 blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />

              {/* Card Container */}
              <div className="relative rounded-2xl border border-mono-700/80 bg-gradient-to-b from-mono-900/90 to-mono-950 p-2 sm:p-2.5 shadow-2xl backdrop-blur-sm group transition-all duration-300 hover:border-mono-600 hover:shadow-cyan-950/20">
                
                {/* Image Frame */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-mono-900">
                  <img
                    src="/profile.jpg"
                    alt={PROFILE_DATA.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
