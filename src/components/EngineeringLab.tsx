import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Bot, ExternalLink, Workflow, CheckCircle2 } from 'lucide-react';

export const EngineeringLab: React.FC = () => {
  const lab = PROFILE_DATA.engineeringLab;

  return (
    <section className="border-b border-mono-800 bg-mono-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-rose">
            <Bot className="h-4 w-4" />
            <span>Systems Automation & Agentic Workflows</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            The Autonomous Engineering Lab
          </h2>
          <p className="mt-3 text-mono-300 font-sans text-sm sm:text-base leading-relaxed">
            Hands-on exploration of scheduled serverless automation, AI agent workflows, and dynamic PDF generation pipelines.
          </p>
        </div>

        {/* Showcase Card */}
        <div className="mt-8 rounded-lg border border-mono-800 bg-mono-900/40 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-mono-800 pb-5">
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-xl sm:text-2xl font-bold text-mono-50 font-sans">
                  {lab.title}
                </h3>
                <span className="rounded bg-mono-800 px-2.5 py-0.5 text-xs font-mono text-telemetry-rose border border-mono-700">
                  {lab.costPerRun}
                </span>
              </div>
              <p className="mt-1 text-sm text-mono-300 font-sans">
                {lab.tagline}
              </p>
            </div>

            <a
              href={lab.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded border border-mono-700 bg-mono-850 px-4 py-2 text-xs font-mono text-mono-200 hover:bg-mono-800 hover:text-white transition-colors self-start lg:self-auto"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Description & Highlights */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-xs sm:text-sm text-mono-200 font-sans leading-relaxed">
                {lab.summary}
              </p>

              <div className="rounded border border-mono-800 bg-mono-950 p-4 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-mono-400 block mb-2">
                  Key System Characteristics
                </span>
                {lab.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-mono-300 font-sans">
                    <CheckCircle2 className="h-4 w-4 text-telemetry-emerald shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {lab.stack.map((s, idx) => (
                  <span
                    key={idx}
                    className="rounded border border-mono-800 bg-mono-850 px-2.5 py-1 text-xs font-mono text-mono-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Workflow Schematic Box */}
            <div className="rounded border border-mono-800 bg-mono-950 p-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-mono-400 flex items-center gap-1.5 pb-3 border-b border-mono-800">
                  <Workflow className="h-3.5 w-3.5 text-telemetry-amber" />
                  <span>9-Node Execution Topology</span>
                </span>

                <div className="mt-4 space-y-3 font-mono text-xs text-mono-300">
                  <div className="flex items-center justify-between p-2 rounded bg-mono-900 border border-mono-800">
                    <span>1. GitHub Cron Trigger</span>
                    <span className="text-telemetry-emerald">Daily 06:00 IST</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-mono-900 border border-mono-800">
                    <span>2. Multi-API Ingestion</span>
                    <span className="text-mono-400">HN + GitHub</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-mono-900 border border-mono-800">
                    <span>3. Groq LPU Synthesis</span>
                    <span className="text-telemetry-amber">Llama 3.3 70B</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-mono-900 border border-mono-800">
                    <span>4. ReportLab PDF Compiler</span>
                    <span className="text-mono-400">3-Page Layout</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-mono-900 border border-mono-800">
                    <span>5. Gmail SMTP Delivery</span>
                    <span className="text-telemetry-emerald">Verified Send</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-mono-800 text-[11px] font-mono text-mono-500">
                Guaranteed zero cloud subscription bills through intelligent resource routing.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
