import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { GitPullRequest, GitMerge, AlertCircle, ExternalLink, TrendingUp } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const OpenSourceSection: React.FC = () => {
  return (
    <section id="open-source" className="relative border-b border-mono-800 bg-mono-950 py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Subtle Ambient Background Spotlight */}
      <div className="absolute inset-0 radial-spotlight-emerald pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-emerald">
            <GitPullRequest className="h-4 w-4" />
            <span>Open Source</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-mono-50 font-sans">
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
                <article className="group relative rounded-xl border border-mono-800/90 bg-mono-900/60 p-6 sm:p-8 interactive-card hover:border-mono-700 hover:bg-mono-900 overflow-hidden">
                  {/* Subtle top edge glow */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-telemetry-emerald/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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

                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-mono font-medium ${
                          isMerged
                            ? 'bg-telemetry-emerald/10 border border-telemetry-emerald/40 text-telemetry-emerald'
                            : 'bg-telemetry-amber/10 border border-telemetry-amber/40 text-telemetry-amber'
                        }`}
                      >
                        <span className="relative flex h-2 w-2">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isMerged ? 'bg-telemetry-emerald' : 'bg-telemetry-amber'}`} />
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${isMerged ? 'bg-telemetry-emerald' : 'bg-telemetry-amber'}`} />
                        </span>
                        {isMerged ? <GitMerge className="h-3.5 w-3.5" /> : <AlertCircle className="h-3.5 w-3.5" />}
                        <span>{contrib.status}</span>
                      </span>
                    </div>

                    {/* Direct Issue and PR Links */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
                      {contrib.links.issues.map((issue, iIdx) => (
                        <a
                          key={iIdx}
                          href={issue.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-tactile text-mono-400 hover:text-mono-200 transition-colors flex items-center gap-1"
                        >
                          <span>{issue.label}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}

                      {contrib.links.prs.map((pr, pIdx) => (
                        <a
                          key={pIdx}
                          href={pr.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-tactile text-telemetry-cyan hover:text-white transition-colors flex items-center gap-1 font-semibold"
                        >
                          <span>{pr.label}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
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

                    {/* Quantifiable Metrics Highlight Box */}
                    <div className="mt-5 rounded-lg border border-mono-800 bg-mono-850/90 p-4 space-y-2 shadow-inner">
                      <div className="flex items-center gap-2 text-xs font-mono text-mono-400 uppercase tracking-wider">
                        <TrendingUp className="h-3.5 w-3.5 text-telemetry-emerald" />
                        <span>Quantifiable Outcomes & Metrics Achieved</span>
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
                </article>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
};
