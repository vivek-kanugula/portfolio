import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Briefcase, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { SpotlightCard } from './motion/SpotlightCard';
import { AnimatedCounter } from './motion/AnimatedCounter';
import { MagneticButton } from './motion/MagneticButton';
import { BorderBeam } from './motion/BorderBeam';
import { TimelineSpine } from './motion/TimelineSpine';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative border-b border-mono-800/80 bg-mono-950 py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Subtle Ambient Background Spotlight */}
      <div className="absolute inset-0 radial-spotlight-violet pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-amber font-semibold">
            <Briefcase className="h-4 w-4" />
            <span>Professional Career</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
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
                <div className="flex gap-4 items-stretch">
                  <div className="hidden sm:flex shrink-0">
                    <TimelineSpine />
                  </div>

                  <div className="flex-1">
                    <SpotlightCard
                      spotlightColor="rgba(99, 102, 241, 0.16)"
                      spotlightRadius={420}
                      enableTilt={true}
                      tiltIntensity={2.0}
                      featured={true}
                      className="group relative p-6 sm:p-7 hover:border-aurora-indigo/50 hover:shadow-2xl overflow-hidden"
                    >
                      {/* Active Border Beam on Accenture Experience */}
                      <BorderBeam size={260} duration={6} colorFrom="#f59e0b" colorTo="#818cf8" borderWidth={1.5} />

                      {/* Subtle top edge glow */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-aurora-indigo/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-mono-800/80 pb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-mono-50 font-sans group-hover:text-white transition-colors">
                            {exp.role}
                          </h3>
                          <span className="text-sm font-mono text-telemetry-amber font-semibold">
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

                      <ul className="mt-5 space-y-3 text-xs sm:text-sm text-mono-300 font-sans">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="text-telemetry-emerald font-mono font-bold shrink-0 mt-0.5">›</span>
                            <span className="text-justify leading-relaxed">
                              {bullet.includes('60%') ? (
                                <>
                                  Automated repetitive operational workflows using Python and AI tooling, parsing exported SAP short dumps (ST22) to cut daily audit time by{' '}
                                  <span className="inline-flex items-center font-mono font-bold text-telemetry-emerald bg-telemetry-emerald/15 border border-telemetry-emerald/40 px-1.5 py-0.2 rounded">
                                    <AnimatedCounter value={60} suffix="%" />
                                  </span>
                                  .
                                </>
                              ) : (
                                bullet
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </SpotlightCard>
                  </div>
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

            {PROFILE_DATA.achievements.map((item, idx) => {
              const isGate = item.badge.includes('7912');
              const isLeetcode = item.badge.includes('500');

              return (
                <AnimatedSection
                  key={idx}
                  delayMs={200 + idx * 100}
                >
                  <SpotlightCard
                    spotlightColor={isGate ? 'rgba(245, 158, 11, 0.16)' : 'rgba(6, 182, 212, 0.16)'}
                    spotlightRadius={320}
                    enableTilt={true}
                    tiltIntensity={2.5}
                    className="group relative p-5 sm:p-6 hover:border-aurora-indigo/40 hover:shadow-xl overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-mono-800/90 px-2.5 py-1 text-xs font-mono font-bold text-telemetry-amber border border-mono-700 shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-telemetry-amber animate-ping" />
                        {isGate ? (
                          <>AIR <AnimatedCounter value={7912} /></>
                        ) : isLeetcode ? (
                          <><AnimatedCounter value={500} suffix="+" /> Active Days</>
                        ) : (
                          item.badge
                        )}
                      </span>
                    </div>

                    <h4 className="mt-3 text-sm sm:text-base font-bold text-mono-100 font-sans group-hover:text-white transition-colors">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 text-xs sm:text-sm font-sans text-mono-400 leading-relaxed text-justify">
                      {isLeetcode ? (
                        <>
                          Earned the 500-Day Badge on LeetCode representing 500+ active days of problem solving, with over{' '}
                          <span className="font-mono font-semibold text-telemetry-cyan">
                            <AnimatedCounter value={850} suffix="+" />
                          </span>{' '}
                          problems solved across competitive programming platforms.
                        </>
                      ) : (
                        item.description
                      )}
                    </p>

                    {item.url && (
                      <MagneticButton strength={0.3}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shimmer-sweep btn-tactile mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-telemetry-cyan hover:text-white transition-colors font-medium"
                        >
                          <span>View LeetCode Profile (21241A0595)</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </MagneticButton>
                    )}
                  </SpotlightCard>
                </AnimatedSection>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
