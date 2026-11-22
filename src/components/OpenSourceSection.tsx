import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { GitPullRequest, GitMerge, AlertCircle, ExternalLink, TrendingUp } from 'lucide-react';

export const OpenSourceSection: React.FC = () => {
  return (
    <section id="open-source" className="border-b border-mono-800 bg-mono-950 py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-emerald">
            <GitPullRequest className="h-4 w-4" />
            <span>Open Source</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Open Source Contributions
          </h2>
          <p className="mt-3 text-mono-300 font-sans text-sm sm:text-base leading-relaxed text-justify">
            Real-world bug fixes and feature contributions submitted to established open-source repositories.
          </p>
        </div>

        {/* Contributions Grid */}
        <div className="mt-7 sm:mt-8 space-y-6">
          {PROFILE_DATA.openSource.map((contrib) => {
            const isMerged = contrib.status === 'Merged';

            return (
              <article
                key={contrib.id}
                className="rounded-lg border border-mono-800 bg-mono-900/50 p-6 sm:p-8 transition-colors hover:border-mono-700 hover:bg-mono-900"
              >
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
                      className={`inline-flex items-center gap-1 rounded px-2.5 py-0.5 text-xs font-mono font-medium ${
                        isMerged
                          ? 'bg-telemetry-emerald/10 border border-telemetry-emerald/30 text-telemetry-emerald'
                          : 'bg-telemetry-amber/10 border border-telemetry-amber/30 text-telemetry-amber'
                      }`}
                    >
                      {isMerged ? <GitMerge className="h-3.5 w-3.5" /> : <AlertCircle className="h-3.5 w-3.5" />}
                      <span>{contrib.status}</span>
                    </span>
                  </div>

                  {/* Direct Issue and PR Links */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
                    {contrib.links.issues.map((issue, idx) => (
                      <a
                        key={idx}
                        href={issue.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mono-400 hover:text-mono-200 transition-colors flex items-center gap-1"
                      >
                        <span>{issue.label}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}

                    {contrib.links.prs.map((pr, idx) => (
                      <a
                        key={idx}
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-telemetry-cyan hover:text-white transition-colors flex items-center gap-1 font-semibold"
                      >
                        <span>{pr.label}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-mono-50 font-sans">
                    {contrib.title}
                  </h3>
                  
                  {/* Points from resume */}
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-mono-300 font-sans">
                    {contrib.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-telemetry-emerald font-mono font-bold shrink-0 mt-0.5">›</span>
                        <span className="text-justify leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Quantifiable Metrics Highlight Box */}
                  <div className="mt-5 rounded border border-mono-800 bg-mono-850/80 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-mono-400 uppercase tracking-wider">
                      <TrendingUp className="h-3.5 w-3.5 text-telemetry-emerald" />
                      <span>Quantifiable Outcomes & Metrics Achieved</span>
                    </div>

                    <ul className="space-y-1.5 text-xs sm:text-sm text-mono-200 font-sans">
                      {contrib.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-telemetry-cyan font-mono font-bold shrink-0 mt-0.5">•</span>
                          <span className="text-justify leading-relaxed">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
