import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Briefcase, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative border-b border-mono-800 bg-mono-950 py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Subtle Ambient Background Spotlight */}
      <div className="absolute inset-0 radial-spotlight-cyan pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-amber">
            <Briefcase className="h-4 w-4" />
            <span>Professional Career</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Work Experience
          </h2>
        </AnimatedSection>

        <div className="mt-7 sm:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Work Experience Column (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {PROFILE_DATA.experience.map((exp, idx) => (
              <AnimatedSection
                key={idx}
                delayMs={idx * 100}
              >
                <div className="group relative rounded-xl border border-mono-800/90 bg-mono-900/60 p-6 sm:p-7 interactive-card hover:border-mono-700 hover:bg-mono-900 overflow-hidden">
                  {/* Subtle top edge glow */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-telemetry-amber/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-mono-800/80 pb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-mono-50 font-sans group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-mono text-telemetry-amber font-medium">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-mono-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-telemetry-cyan" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 mt-0.5">
                        <MapPin className="h-3.5 w-3.5 text-mono-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-mono-300 font-sans">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-telemetry-emerald font-mono font-bold shrink-0 mt-0.5">›</span>
                        <span className="text-justify leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Achievements Column (Spans 1 col) */}
          <div className="space-y-6">
            <AnimatedSection delayMs={150}>
              <h3 className="text-sm font-mono uppercase tracking-wider text-mono-400 flex items-center gap-2">
                <Award className="h-4 w-4 text-mono-300" />
                <span>Milestones & Coding</span>
              </h3>
            </AnimatedSection>

            {PROFILE_DATA.achievements.map((item, idx) => (
              <AnimatedSection
                key={idx}
                delayMs={200 + idx * 100}
              >
                <div className="group relative rounded-xl border border-mono-800/90 bg-mono-900/60 p-5 sm:p-6 interactive-card hover:border-mono-700 hover:bg-mono-900 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-mono-800/90 px-2.5 py-1 text-xs font-mono font-bold text-telemetry-amber border border-mono-700 shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm sm:text-base font-bold text-mono-100 font-sans group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm font-sans text-mono-400 leading-relaxed text-justify">
                    {item.description}
                  </p>

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-tactile mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-telemetry-cyan hover:text-white transition-colors font-medium"
                    >
                      <span>View LeetCode Profile (21241A0595)</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
