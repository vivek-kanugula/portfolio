import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Compass, BookOpen, Film, Sparkles, Heart } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { SpotlightCard } from './motion/SpotlightCard';

export const InterestsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="h-5 w-5 text-telemetry-amber group-hover:rotate-45 transition-transform duration-500" />;
      case 1:
        return <BookOpen className="h-5 w-5 text-telemetry-cyan group-hover:scale-110 transition-transform duration-300" />;
      case 2:
        return <Film className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />;
      case 3:
      default:
        return <Sparkles className="h-5 w-5 text-telemetry-emerald group-hover:rotate-180 transition-transform duration-700" />;
    }
  };

  const getSpotlightColor = (idx: number) => {
    switch (idx) {
      case 0:
        return 'rgba(245, 158, 11, 0.12)';
      case 1:
        return 'rgba(6, 182, 212, 0.12)';
      case 2:
        return 'rgba(192, 132, 252, 0.12)';
      case 3:
      default:
        return 'rgba(16, 185, 129, 0.12)';
    }
  };

  return (
    <section id="interests" className="relative border-b border-mono-800/80 bg-mono-950 py-8 sm:py-10 lg:py-12 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-amber font-semibold">
            <Heart className="h-4 w-4" />
            <span>Beyond the Code</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
            Curiosity & Interests
          </h2>
          <p className="mt-2.5 text-mono-300 font-sans text-sm sm:text-base leading-relaxed text-justify">
            Writing code is how I solve problems, but genuine curiosity about how things work is what drives me. Here is a glimpse into what occupies my thoughts outside of the terminal.
          </p>
        </AnimatedSection>

        {/* Interests Grid */}
        <div className="mt-7 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {PROFILE_DATA.interests.map((item, idx) => (
            <AnimatedSection
              key={idx}
              delayMs={idx * 100}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor={getSpotlightColor(idx)}
                spotlightRadius={350}
                enableTilt={true}
                tiltIntensity={2.0}
                className="group h-full p-6 sm:p-7 hover:border-mono-600 hover:shadow-xl overflow-hidden"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-mono-800 bg-mono-850 shadow-inner group-hover:border-mono-700 transition-colors">
                      {getIcon(idx)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-mono-100 font-sans group-hover:text-white transition-colors">
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
              </SpotlightCard>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
