import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { ArrowDownRight, GitPullRequest, Terminal, MapPin, FileText } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  return (
    <section className="relative border-b border-mono-800 bg-mono-950 pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Specification Top Meta Bar */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-mono text-mono-400">
          <span className="flex items-center gap-1.5 text-mono-300">
            <MapPin className="h-3.5 w-3.5 text-telemetry-amber" />
            {PROFILE_DATA.location}
          </span>
          <span className="text-mono-700">|</span>
          <span className="text-mono-400">Specialization:</span>
          <span className="rounded bg-mono-900 px-2 py-0.5 text-mono-200 border border-mono-800">
            {PROFILE_DATA.specialization}
          </span>
          <span className="text-mono-700">|</span>
          <span className="text-telemetry-emerald font-medium flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-telemetry-emerald" />
            Verified Upstream Contributor
          </span>
        </div>

        {/* Headline & Engineering Thesis */}
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-mono-50 sm:text-5xl lg:text-6xl font-sans">
            High-Throughput Backends, Distributed Systems & AI Infrastructure.
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-mono-300 font-sans max-w-3xl">
            I am <strong className="font-semibold text-mono-100">{PROFILE_DATA.name}</strong>, a software engineer specialized in event-driven architectures, ACID-compliant data pipelines, and production retrieval engines. Contributor to multi-thousand-star open-source platforms with verified merged code in upstream repositories.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#architecture"
            className="flex items-center gap-2 rounded bg-mono-100 px-5 py-2.5 text-sm font-semibold text-mono-950 transition-colors hover:bg-white"
          >
            <span>Inspect Systems Architecture</span>
            <ArrowDownRight className="h-4 w-4" />
          </a>

          <a
            href="#open-source"
            className="flex items-center gap-2 rounded border border-mono-700 bg-mono-900 px-5 py-2.5 text-sm font-medium text-mono-200 transition-colors hover:border-mono-600 hover:bg-mono-850"
          >
            <GitPullRequest className="h-4 w-4 text-telemetry-emerald" />
            <span>Open Source PRs</span>
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 rounded border border-mono-700 bg-mono-900 px-5 py-2.5 text-sm font-mono text-mono-200 transition-colors hover:border-mono-600 hover:bg-mono-850"
          >
            <FileText className="h-4 w-4 text-telemetry-cyan" />
            <span>ATS Resume</span>
          </button>

          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 rounded border border-mono-800 bg-mono-900/60 px-4 py-2.5 text-sm font-mono text-mono-300 transition-colors hover:border-mono-700 hover:text-mono-100"
          >
            <Terminal className="h-4 w-4 text-telemetry-amber" />
            <span>CLI Console</span>
          </button>
        </div>

        {/* Quantitative Telemetry Ribbon */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROFILE_DATA.heroMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="group rounded-md border border-mono-800 bg-mono-900/60 p-4 transition-all hover:border-mono-700 hover:bg-mono-900"
            >
              <div className="flex items-center justify-between text-xs font-mono text-mono-400">
                <span>{metric.label}</span>
                {metric.trend && (
                  <span className="text-[11px] text-telemetry-amber font-mono font-medium">
                    {metric.trend}
                  </span>
                )}
              </div>
              <div className="mt-2 text-2xl sm:text-3xl font-bold font-mono tracking-tight text-mono-50 tabular-nums">
                {metric.value}
              </div>
              <div className="mt-1 text-xs text-mono-400 font-sans leading-relaxed">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
