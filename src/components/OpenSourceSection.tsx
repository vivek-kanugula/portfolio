import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { GitPullRequest, ExternalLink, TrendingUp } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { SpotlightCard } from './motion/SpotlightCard';
import { LivePulseBadge } from './motion/LivePulseBadge';
import { MagneticButton } from './motion/MagneticButton';
import { BorderBeam } from './motion/BorderBeam';
import { TelemetryWaveform } from './motion/TelemetryWaveform';
import { trackInteraction } from '../utils/telemetry';

export const OpenSourceSection: React.FC = () => {
  return (
    <section id="open-source" className="relative border-b border-mono-800/80 bg-mono-950 py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Subtle Ambient Background Spotlight */}
      <div className="absolute inset-0 radial-spotlight-emerald pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-emerald font-semibold">
            <GitPullRequest className="h-4 w-4" />
            <span>Open Source</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
            Open Source Contributions
          </h2>
          <p className="mt-2.5 text-mono-300 font-sans text-sm sm:text-base leading-relaxed text-justify">
            Real-world bug fixes and feature contributions submitted to established open-source repositories.
          </p>
        </AnimatedSection>

        {/* Contributions Grid */}
        <div className="mt-7 sm:mt-8 space-y-6">
          {PROFILE_DATA.openSource.map((contrib, idx) => {
            const isMerged = contrib.status === 'Merged';

            return (
              <AnimatedSection
                key={contrib.id}
                delayMs={idx * 120}
              >
                <SpotlightCard
                  spotlightColor={isMerged ? 'rgba(16, 185, 129, 0.16)' : 'rgba(245, 158, 11, 0.16)'}
                  spotlightRadius={420}
                  enableTilt={true}
                  tiltIntensity={1.8}
                  featured={isMerged}
                  className="group relative p-6 sm:p-8 hover:border-telemetry-emerald/40 hover:shadow-2xl overflow-hidden"
                >
                  {/* Active Border Beam on Merged Contribution */}
                  {isMerged && (
                    <BorderBeam size={280} duration={7} colorFrom="#10b981" colorTo="#06b6d4" borderWidth={1.5} />
                  )}

                  {/* Subtle top edge glow */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${isMerged ? 'via-telemetry-emerald/70' : 'via-telemetry-amber/70'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-mono-800/80 pb-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={contrib.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm sm:text-base font-semibold text-mono-200 hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        <span>{contrib.repo}</span>
                        <ExternalLink className="h-3.5 w-3.5 text-mono-500" />
                      </a>

                      <LivePulseBadge
                        label={contrib.status}
                        variant={isMerged ? 'emerald' : 'amber'}
                      />
                    </div>

                    {/* Direct Issue and PR Links */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
                      {contrib.links.issues.map((issue, iIdx) => (
                        <MagneticButton key={iIdx} strength={0.25}>
                          <a
                            href={issue.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackInteraction('opensource_pr', `${contrib.repo} ${issue.label}`, issue.url)}
                            className="btn-tactile text-mono-400 hover:text-mono-200 transition-colors flex items-center gap-1"
                          >
                            <span>{issue.label}</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </MagneticButton>
                      ))}

                      {contrib.links.prs.map((pr, pIdx) => (
                        <MagneticButton key={pIdx} strength={0.25}>
                          <a
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackInteraction('opensource_pr', `${contrib.repo} ${pr.label}`, pr.url)}
                            className="btn-tactile text-telemetry-cyan hover:text-white transition-colors flex items-center gap-1 font-semibold"
                          >
                            <span>{pr.label}</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </MagneticButton>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-4">
                    <h3 className="text-lg sm:text-xl font-bold text-mono-50 font-sans group-hover:text-white transition-colors">
                      {contrib.title}
                    </h3>
                    
                    {/* Points from resume */}
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-mono-300 font-sans">
                      {contrib.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="text-telemetry-emerald font-mono font-bold shrink-0 mt-0.5">›</span>
                          <span className="text-justify leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Quantifiable Metrics Highlight Box with Active Waveform */}
                    <div className="mt-5 rounded-xl border border-aurora-indigo/25 bg-mono-850/80 p-4 space-y-2.5 shadow-inner">
                      <div className="flex items-center justify-between text-xs font-mono text-mono-400 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-3.5 w-3.5 text-telemetry-emerald" />
                          <span>Quantifiable Outcomes & Metrics Achieved</span>
                        </div>
                        <TelemetryWaveform variant="emerald" barCount={4} />
                      </div>

                      <ul className="space-y-1.5 text-xs sm:text-sm text-mono-200 font-sans">
                        {contrib.metrics.map((metric, mIdx) => (
                          <li key={mIdx} className="flex items-start gap-2">
                            <span className="text-telemetry-cyan font-mono font-bold shrink-0 mt-0.5">•</span>
                            <span className="text-justify leading-relaxed">{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
};
