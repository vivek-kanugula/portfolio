import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Compass, BookOpen, Film, Sparkles, Heart } from 'lucide-react';

export const InterestsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="h-5 w-5 text-telemetry-amber" />;
      case 1:
        return <BookOpen className="h-5 w-5 text-telemetry-cyan" />;
      case 2:
        return <Film className="h-5 w-5 text-purple-400" />;
      case 3:
      default:
        return <Sparkles className="h-5 w-5 text-telemetry-emerald" />;
    }
  };

  return (
    <section id="interests" className="border-b border-mono-800 bg-mono-950 py-6 sm:py-7 lg:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-amber">
            <Heart className="h-4 w-4" />
            <span>Beyond the Code</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Curiosity & Interests
          </h2>
          <p className="mt-2.5 text-mono-300 font-sans text-sm sm:text-base leading-relaxed text-justify">
            Writing code is how I solve problems, but genuine curiosity about how things work is what drives me. Here is a glimpse into what occupies my thoughts outside of the terminal.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROFILE_DATA.interests.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-lg border border-mono-800 bg-mono-900/50 p-6 sm:p-7 transition-colors hover:border-mono-700 hover:bg-mono-900"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-mono-800 bg-mono-850">
                    {getIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-mono-100 font-sans">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-mono-400">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-mono-300 font-sans leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
