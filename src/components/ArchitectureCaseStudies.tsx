import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Layers, GitBranch, ExternalLink, Activity, CheckCircle, AlertCircle, Code } from 'lucide-react';

export const ArchitectureCaseStudies: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const activeProject = PROFILE_DATA.flagshipProjects[activeProjectIndex];
  const [selectedNodeId, setSelectedNodeId] = useState<string>(activeProject.architectureNodes[0].id);

  const selectedNode = activeProject.architectureNodes.find(n => n.id === selectedNodeId) || activeProject.architectureNodes[0];

  const handleSwitchProject = (idx: number) => {
    setActiveProjectIndex(idx);
    setSelectedNodeId(PROFILE_DATA.flagshipProjects[idx].architectureNodes[0].id);
  };

  return (
    <section id="architecture" className="border-b border-mono-800 bg-mono-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-amber">
              <Layers className="h-4 w-4" />
              <span>Architectural Monograph</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-mono-50 font-sans">
              Systems Architecture & Deep-Dive Case Studies
            </h2>
            <p className="mt-3 text-mono-300 font-sans text-sm sm:text-base leading-relaxed">
              Explore concrete system topologies, ACID transaction patterns, and latency optimizations. Click any architecture node below to inspect implementation code and failure recoveries.
            </p>
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex rounded-md border border-mono-800 bg-mono-900 p-1">
            {PROFILE_DATA.flagshipProjects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => handleSwitchProject(idx)}
                className={`rounded px-4 py-2 text-xs sm:text-sm font-mono font-medium transition-all ${
                  activeProjectIndex === idx
                    ? 'bg-mono-800 text-mono-50 shadow-sm border border-mono-700'
                    : 'text-mono-400 hover:text-mono-200'
                }`}
              >
                {proj.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Project Meta Dossier */}
        <div className="mt-8 rounded-lg border border-mono-800 bg-mono-900/40 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-mono-800 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-mono-50 font-sans">
                  {activeProject.title}
                </h3>
                <span className="rounded bg-mono-800 px-2 py-0.5 text-xs font-mono text-telemetry-amber border border-mono-700">
                  {activeProject.category}
                </span>
              </div>
              <p className="mt-1 text-sm text-mono-300 font-sans">
                {activeProject.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded border border-mono-700 bg-mono-850 px-3 py-1.5 text-xs font-mono text-mono-200 hover:bg-mono-800 hover:text-white transition-colors"
              >
                <GitBranch className="h-3.5 w-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="h-3 w-3 text-mono-400" />
              </a>

              {activeProject.liveDemoUrl && (
                <a
                  href={activeProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded border border-mono-700 bg-mono-100 px-3 py-1.5 text-xs font-mono font-medium text-mono-950 hover:bg-white transition-colors"
                >
                  <Activity className="h-3.5 w-3.5 text-telemetry-emerald" />
                  <span>Live Sandbox</span>
                </a>
              )}
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {activeProject.keyMetrics.map((m, i) => (
              <div key={i} className="rounded border border-mono-800/80 bg-mono-950/60 p-3">
                <span className="text-[11px] font-mono text-mono-400 uppercase tracking-wider block">
                  {m.label}
                </span>
                <span className="mt-1 text-lg sm:text-xl font-bold font-mono text-mono-100 block tabular-nums">
                  {m.value}
                </span>
                <span className="text-[11px] text-mono-400 font-sans block mt-0.5">
                  {m.context}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Topology Nodes Strip */}
          <div className="mt-8">
            <div className="flex items-center justify-between text-xs font-mono text-mono-400 mb-3">
              <span>SYSTEM TOPOLOGY (CLICK A NODE TO INSPECT COMPONENT CODE)</span>
              <span className="text-telemetry-amber font-mono">Interactive Node Inspector</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {activeProject.architectureNodes.map((node) => {
                const isSelected = selectedNodeId === node.id;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`text-left rounded-md border p-3 transition-all ${
                      isSelected
                        ? 'border-telemetry-amber bg-mono-850 shadow-sm'
                        : 'border-mono-800 bg-mono-950/70 hover:border-mono-700 hover:bg-mono-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-mono-800 text-mono-300">
                        {node.category}
                      </span>
                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-telemetry-amber" />
                      )}
                    </div>
                    <div className="mt-2 text-xs font-semibold text-mono-100 font-sans">
                      {node.title}
                    </div>
                    <div className="mt-1 text-[11px] text-mono-400 line-clamp-2">
                      {node.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Inspector Panel for Selected Node */}
          <div className="mt-6 rounded-md border border-mono-800 bg-mono-950 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-mono-800 pb-4">
              <div>
                <span className="text-xs font-mono text-telemetry-amber uppercase tracking-wider">
                  Inspecting: {selectedNode.category} Layer
                </span>
                <h4 className="text-lg font-bold text-mono-100 font-sans mt-0.5">
                  {selectedNode.title}
                </h4>
              </div>
              <div className="rounded bg-mono-900 px-3 py-1 text-xs font-mono text-mono-300 border border-mono-800">
                Performance: <strong className="text-mono-100">{selectedNode.metrics}</strong>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: Implementation & Trade-off */}
              <div className="space-y-4">
                <div className="rounded border border-mono-800/80 bg-mono-900/40 p-4">
                  <span className="text-xs font-mono font-semibold text-mono-300 uppercase tracking-wide flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-telemetry-emerald" />
                    Technical Implementation
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-mono-200 font-sans leading-relaxed">
                    {selectedNode.implementation}
                  </p>
                </div>

                <div className="rounded border border-mono-800/80 bg-mono-900/40 p-4">
                  <span className="text-xs font-mono font-semibold text-mono-300 uppercase tracking-wide flex items-center gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5 text-telemetry-amber" />
                    Engineering Trade-Off
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-mono-200 font-sans leading-relaxed">
                    {selectedNode.tradeoff}
                  </p>
                </div>
              </div>

              {/* Right Column: Code Snippet */}
              <div className="rounded border border-mono-800 bg-mono-900/80 p-4">
                <div className="flex items-center justify-between pb-2 border-b border-mono-800 text-xs font-mono text-mono-400">
                  <span className="flex items-center gap-1">
                    <Code className="h-3.5 w-3.5 text-telemetry-amber" />
                    Production Code Pattern
                  </span>
                  <span>{activeProject.title}</span>
                </div>
                <pre className="mt-3 overflow-x-auto text-xs font-mono text-mono-200 leading-relaxed max-h-64">
                  <code>{selectedNode.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Hard Engineering Challenges Solved */}
          <div className="mt-8">
            <h4 className="text-sm font-mono uppercase tracking-wider text-mono-400 mb-4">
              Hard Production Incidents & System Hardening
            </h4>
            <div className="space-y-4">
              {activeProject.engineeringChallenges.map((ec, idx) => (
                <div
                  key={idx}
                  className="rounded border border-mono-800/80 bg-mono-950/70 p-4 sm:p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h5 className="text-sm sm:text-base font-semibold text-mono-100 font-sans">
                      {ec.challenge}
                    </h5>
                    <span className="inline-flex items-center rounded bg-telemetry-emerald/10 border border-telemetry-emerald/30 px-2 py-0.5 text-xs font-mono text-telemetry-emerald">
                      {ec.outcomeMetric}
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-mono-300">
                    <div>
                      <strong className="font-mono text-mono-400 block mb-1">Root Cause & Bottleneck:</strong>
                      {ec.whyItHappens}
                    </div>
                    <div>
                      <strong className="font-mono text-telemetry-amber block mb-1">Engineering Fix:</strong>
                      {ec.engineeringResolution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
