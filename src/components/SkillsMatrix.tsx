import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Cpu, Server, Database, Bot, Terminal, Shield } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'Complete Stack', icon: Server },
    { key: 'distributed', label: 'Distributed Systems & Storage', icon: Database },
    { key: 'backend', label: 'Backend Engineering & Java', icon: Cpu },
    { key: 'aiSystems', label: 'AI Systems & Agentic Tooling', icon: Bot },
    { key: 'cloudObservability', label: 'Cloud, DevOps & Observability', icon: Terminal },
    { key: 'coreCs', label: 'Core CS Fundamentals', icon: Shield },
  ];

  return (
    <section id="skills" className="border-b border-mono-800 bg-mono-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-cyan">
            <Cpu className="h-4 w-4" />
            <span>Technical Competencies Matrix</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Engineered By Architectural Layer
          </h2>
          <p className="mt-3 text-mono-300 font-sans text-sm sm:text-base leading-relaxed">
            Technical competencies structured by operational responsibility rather than arbitrary percentage bars. Each capability represents hands-on production or benchmarking experience.
          </p>
        </div>

        {/* Layer Filters */}
        <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedLayer === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => setSelectedLayer(cat.key)}
                className={`flex items-center gap-1.5 rounded border px-3 py-1.5 transition-all ${
                  isSelected
                    ? 'border-telemetry-amber bg-mono-850 text-telemetry-amber'
                    : 'border-mono-800 bg-mono-900 text-mono-400 hover:text-mono-200 hover:border-mono-700'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Competencies Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Distributed Systems */}
          {(selectedLayer === 'all' || selectedLayer === 'distributed') &&
            PROFILE_DATA.skills.distributed.map((skill, idx) => (
              <div
                key={`dist-${idx}`}
                className="rounded-md border border-mono-800 bg-mono-900/50 p-4 transition-colors hover:border-mono-700"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-mono-100">
                    {skill.name}
                  </span>
                  <span className="rounded bg-mono-800 px-2 py-0.5 text-[10px] font-mono text-telemetry-amber border border-mono-700">
                    {skill.level}
                  </span>
                </div>
                <p className="mt-2 text-xs font-sans text-mono-400 leading-relaxed">
                  {skill.detail}
                </p>
              </div>
            ))}

          {/* Backend Engineering */}
          {(selectedLayer === 'all' || selectedLayer === 'backend') &&
            PROFILE_DATA.skills.backend.map((skill, idx) => (
              <div
                key={`back-${idx}`}
                className="rounded-md border border-mono-800 bg-mono-900/50 p-4 transition-colors hover:border-mono-700"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-mono-100">
                    {skill.name}
                  </span>
                  <span className="rounded bg-mono-800 px-2 py-0.5 text-[10px] font-mono text-telemetry-cyan border border-mono-700">
                    {skill.level}
                  </span>
                </div>
                <p className="mt-2 text-xs font-sans text-mono-400 leading-relaxed">
                  {skill.detail}
                </p>
              </div>
            ))}

          {/* AI Systems */}
          {(selectedLayer === 'all' || selectedLayer === 'aiSystems') &&
            PROFILE_DATA.skills.aiSystems.map((skill, idx) => (
              <div
                key={`ai-${idx}`}
                className="rounded-md border border-mono-800 bg-mono-900/50 p-4 transition-colors hover:border-mono-700"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-mono-100">
                    {skill.name}
                  </span>
                  <span className="rounded bg-mono-800 px-2 py-0.5 text-[10px] font-mono text-telemetry-emerald border border-mono-700">
                    {skill.level}
                  </span>
                </div>
                <p className="mt-2 text-xs font-sans text-mono-400 leading-relaxed">
                  {skill.detail}
                </p>
              </div>
            ))}

          {/* Cloud & Observability */}
          {(selectedLayer === 'all' || selectedLayer === 'cloudObservability') &&
            PROFILE_DATA.skills.cloudObservability.map((skill, idx) => (
              <div
                key={`cloud-${idx}`}
                className="rounded-md border border-mono-800 bg-mono-900/50 p-4 transition-colors hover:border-mono-700"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-mono-100">
                    {skill.name}
                  </span>
                  <span className="rounded bg-mono-800 px-2 py-0.5 text-[10px] font-mono text-mono-300 border border-mono-700">
                    {skill.level}
                  </span>
                </div>
                <p className="mt-2 text-xs font-sans text-mono-400 leading-relaxed">
                  {skill.detail}
                </p>
              </div>
            ))}

          {/* Core CS */}
          {(selectedLayer === 'all' || selectedLayer === 'coreCs') &&
            PROFILE_DATA.skills.coreCs.map((skill, idx) => (
              <div
                key={`cs-${idx}`}
                className="rounded-md border border-mono-800 bg-mono-900/50 p-4 transition-colors hover:border-mono-700"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-mono-100">
                    {skill.name}
                  </span>
                  <span className="rounded bg-mono-800 px-2 py-0.5 text-[10px] font-mono text-telemetry-rose border border-mono-700">
                    {skill.level}
                  </span>
                </div>
                <p className="mt-2 text-xs font-sans text-mono-400 leading-relaxed">
                  {skill.detail}
                </p>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};
