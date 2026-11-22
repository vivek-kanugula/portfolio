import React from 'react';
import { Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const ThankYouSection: React.FC = () => {
  return (
    <section className="border-b border-mono-800/80 bg-mono-900/30 pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-10 lg:pb-14 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Accent Pill */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-mono-800 bg-mono-900 px-3.5 py-1 text-xs font-mono text-telemetry-amber">
          <Sparkles className="h-3.5 w-3.5 text-telemetry-amber" />
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
          <span className="h-1.5 w-1.5 rounded-full bg-telemetry-emerald" />
          <span>— {PROFILE_DATA.name}</span>
        </div>
      </div>
    </section>
  );
};
