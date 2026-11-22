import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { GitPullRequest, GitMerge, AlertCircle, ExternalLink } from 'lucide-react';

export const OpenSourceSection: React.FC = () => {
  return (
    <section id="open-source" className="border-b border-mono-800 bg-mono-950 py-16 sm:py-20 lg:py-24">
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
            Real-world bug fixes and feature contributions submitted to established open-source projects.
          </p>
        </div>

        {/* Contributions Grid */}
        <div className="mt-10 sm:mt-12 space-y-6">
          {PROFILE_DATA.openSource.map((contrib) => {
            const isMerged = contrib.status === 'Merged';

            return (
              <article
                key={contrib.id}
                className="rounded-lg border border-mono-800 bg-mono-900/50 p-6 sm:p-7 transition-colors hover:border-mono-700 hover:bg-mono-900"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-mono-800/80 pb-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={contrib.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs sm:text-sm font-semibold text-mono-200 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <span>{contrib.repo}</span>
                      <ExternalLink className="h-3 w-3 text-mono-500" />
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

                  {/* Links Row */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                    <a
                      href={contrib.issueUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mono-400 hover:text-mono-200 transition-colors flex items-center gap-1"
                    >
                      <span>Issue {contrib.issueNumber}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href={contrib.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-telemetry-cyan hover:text-white transition-colors flex items-center gap-1 font-semibold"
                    >
                      <span>Pull Request {contrib.prNumber}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-mono-50 font-sans">
                    {contrib.title}
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm text-mono-300 font-sans leading-relaxed text-justify">
                    {contrib.summary}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-mono-400 font-sans leading-relaxed text-justify">
                    {contrib.details}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-mono-800/60">
                    {contrib.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded border border-mono-800 bg-mono-850 px-2 py-0.5 text-xs font-mono text-mono-400"
                      >
                        {tech}
                      </span>
                    ))}
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
