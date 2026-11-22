import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { GitPullRequest, GitMerge, ExternalLink, Code2, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const OpenSourceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('traccar-pr-6125');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="open-source" className="border-b border-mono-800 bg-mono-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-emerald">
            <GitPullRequest className="h-4 w-4" />
            <span>Production Open Source Audit</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Upstream Contributions in Real-World Infrastructure
          </h2>
          <p className="mt-3 text-mono-300 font-sans text-sm sm:text-base leading-relaxed">
            Rather than isolated toy applications, my engineering is proven in established, multi-thousand-star open-source platforms. Below are pull requests and issues resolved in production codebases.
          </p>
        </div>

        {/* Contribution Cards */}
        <div className="mt-10 space-y-6">
          {PROFILE_DATA.openSource.map((contrib) => {
            const isExpanded = expandedId === contrib.id;

            return (
              <article
                key={contrib.id}
                className="rounded-lg border border-mono-800 bg-mono-900/50 transition-colors hover:border-mono-700"
              >
                {/* Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 border-b border-mono-800/80">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1.5 rounded bg-mono-800/80 px-2.5 py-1 text-xs font-mono font-medium text-mono-200 border border-mono-700">
                      {contrib.repo}
                      <span className="text-telemetry-amber font-semibold">{contrib.repoStars}</span>
                    </span>

                    <span className="flex items-center gap-1 rounded bg-telemetry-emerald/10 border border-telemetry-emerald/30 px-2 py-0.5 text-xs font-mono font-medium text-telemetry-emerald">
                      <GitMerge className="h-3 w-3" />
                      {contrib.status} ({contrib.prNumber})
                    </span>

                    {contrib.issueNumber && (
                      <span className="text-xs font-mono text-mono-400">
                        Fixes Issue {contrib.issueNumber}
                      </span>
                    )}
                  </div>

                  {/* Actions & Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={contrib.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-mono text-mono-300 hover:text-mono-100 transition-colors"
                    >
                      <span>View GitHub PR</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    <button
                      onClick={() => toggleExpand(contrib.id)}
                      className="flex items-center gap-1 text-xs font-mono text-mono-400 hover:text-mono-200"
                    >
                      {isExpanded ? (
                        <>
                          <span>Hide Details</span>
                          <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          <span>Inspect Code</span>
                          <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Card Title & Core Summary */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-mono-100 font-sans">
                    {contrib.title}
                  </h3>

                  {/* Tech Stack Pills */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {contrib.stack.map((item, i) => (
                      <span
                        key={i}
                        className="rounded border border-mono-800 bg-mono-850 px-2 py-0.5 text-xs font-mono text-mono-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Breakdown Grid: Problem vs Solution */}
                  <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
                    <div className="rounded border border-mono-800/80 bg-mono-950/60 p-4">
                      <div className="flex items-center gap-2 font-mono text-xs font-semibold text-telemetry-rose">
                        <AlertTriangle className="h-4 w-4" />
                        <span>The Production Problem</span>
                      </div>
                      <p className="mt-2 text-mono-300 font-sans leading-relaxed text-xs sm:text-sm">
                        {contrib.problem}
                      </p>
                    </div>

                    <div className="rounded border border-mono-800/80 bg-mono-950/60 p-4">
                      <div className="flex items-center gap-2 font-mono text-xs font-semibold text-telemetry-emerald">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>The Engineering Solution</span>
                      </div>
                      <p className="mt-2 text-mono-300 font-sans leading-relaxed text-xs sm:text-sm">
                        {contrib.solution}
                      </p>
                    </div>
                  </div>

                  {/* Verifiable Impact Metrics */}
                  <div className="mt-5 rounded border border-mono-800/60 bg-mono-950/40 p-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-mono-400">
                      Verifiable Engineering Impact
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-mono-300 font-sans">
                      {contrib.impactMetrics.map((metric, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-telemetry-amber font-mono font-bold">✓</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Collapsible Source Code Diff View */}
                  {isExpanded && contrib.codeDiffSnippet && (
                    <div className="mt-6 rounded-md border border-mono-800 bg-mono-950 p-4">
                      <div className="flex items-center justify-between pb-3 border-b border-mono-800 text-xs font-mono text-mono-400">
                        <span className="flex items-center gap-1.5">
                          <Code2 className="h-4 w-4 text-telemetry-amber" />
                          <span>{contrib.codeDiffSnippet.filename}</span>
                        </span>
                        <span className="text-mono-500">Upstream Diff Preview</span>
                      </div>
                      <pre className="mt-3 overflow-x-auto text-xs font-mono text-mono-200 leading-relaxed">
                        <code>{contrib.codeDiffSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
