import React from 'react';
import { Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { AnimatedSection } from './AnimatedSection';

export const ThankYouSection: React.FC = () => {
  return (
    <section className="relative border-b border-mono-800/80 bg-gradient-to-b from-mono-950 via-mono-900/40 to-mono-950 py-12 sm:py-14 lg:py-16 overflow-hidden">
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute inset-0 radial-spotlight-hero pointer-events-none" />

      {/* Shimmer accent line at the top */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-telemetry-amber/40 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          {/* Subtle Accent Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-mono-800 bg-mono-900/90 px-3.5 py-1 text-xs font-mono text-telemetry-amber backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-telemetry-amber animate-pulse" />
            <span>THANK YOU</span>
          </div>

          {/* Large, Bold, Refined Heading */}
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Thank you for taking the time to explore my work.
          </h2>

          {/* Genuine, Polished Subtext */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-mono-300 font-sans max-w-2xl mx-auto leading-relaxed">
            I truly appreciate your time and interest in my journey and projects.
          </p>

          {/* Personal Sign-off */}
          <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-telemetry-emerald font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-telemetry-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-telemetry-emerald"></span>
            </span>
            <span>— {PROFILE_DATA.name}</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
