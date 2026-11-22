import React, { useState } from 'react';
import { BarChart3, Activity, Zap } from 'lucide-react';

interface BenchmarkRow {
  scenario: string;
  baseline: string;
  optimized: string;
  improvement: string;
  metricType: string;
  notes: string;
}

export const BenchmarkExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'concurrency' | 'database' | 'ai'>('all');

  const benchmarks: BenchmarkRow[] = [
    {
      scenario: "PostgreSQL Outbox Relay Contention",
      baseline: "95% DB CPU (Standard SELECT FOR UPDATE)",
      optimized: "12% DB CPU (FOR UPDATE SKIP LOCKED)",
      improvement: "87% CPU Drop",
      metricType: "database",
      notes: "Tested under sustained 1,000 req/sec polling across 8 parallel relay nodes.",
    },
    {
      scenario: "REST Notification Median Ingestion",
      baseline: "48.6ms (Platform Threads / Thread-Pool)",
      optimized: "12.2ms (Java 25 Virtual Threads + Outbox)",
      improvement: "75% Faster",
      metricType: "concurrency",
      notes: "k6 load test executing HTTP 202 Accepted ingestion with PostgreSQL append.",
    },
    {
      scenario: "P95 End-to-End Delivery Latency",
      baseline: "142.0ms (Synchronous SMTP/Webhook Handoff)",
      optimized: "28.5ms (Kafka Partitioned Event Stream)",
      improvement: "80% Reduction",
      metricType: "concurrency",
      notes: "Sustained under 120 concurrent virtual users with 5 concurrent tenants.",
    },
    {
      scenario: "Duplicate Request Ingestion I/O",
      baseline: "1 Database Read + 1 Write Lock",
      optimized: "0 Database Reads (Redis SET NX Token)",
      improvement: "100% DB Bypass",
      metricType: "database",
      notes: "Two-tier idempotency intercepts duplicated client retries at Redis memory layer.",
    },
    {
      scenario: "Cross-Encoder Reranking on CPU",
      baseline: "520ms (All Candidates Through Cross-Encoder)",
      optimized: "185ms (Adaptive Ratio Bypass when s1/s2 >= 1.35)",
      improvement: "64% Latency Save",
      metricType: "ai",
      notes: "Bypasses CPU attention layers when top candidate has overwhelming rank confidence.",
    },
    {
      scenario: "Traccar MCP Telemetry Payloads",
      baseline: "17,000 Records (~3 MB / 800k tokens overflow)",
      optimized: "500 Records Bounded Limit-Offset Chunking",
      improvement: "100% Overflow Prevention",
      metricType: "database",
      notes: "Prevents LLM agent context window blowups in Model Context Protocol tools.",
    },
  ];

  const filtered = activeCategory === 'all' 
    ? benchmarks 
    : benchmarks.filter(b => b.metricType === activeCategory);

  return (
    <section id="benchmarks" className="border-b border-mono-800 bg-mono-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-emerald">
              <BarChart3 className="h-4 w-4" />
              <span>Empirical Telemetry</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-mono-50 font-sans">
              Verifiable Benchmarks & Stress Test Telemetry
            </h2>
            <p className="mt-3 text-mono-300 font-sans text-sm sm:text-base leading-relaxed">
              Real performance gains recorded across k6 load suites, PostgreSQL profiling, and CPU inference runs. No speculative claims.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {(['all', 'concurrency', 'database', 'ai'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded border px-3 py-1.5 uppercase transition-colors ${
                  activeCategory === cat
                    ? 'border-telemetry-amber bg-mono-850 text-telemetry-amber'
                    : 'border-mono-800 bg-mono-900 text-mono-400 hover:text-mono-200'
                }`}
              >
                {cat === 'all' ? 'All Metrics' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Telemetry Table */}
        <div className="mt-8 overflow-hidden rounded-lg border border-mono-800 bg-mono-900/40">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-sans">
              <thead className="border-b border-mono-800 bg-mono-900 font-mono text-xs uppercase tracking-wider text-mono-400">
                <tr>
                  <th className="px-5 py-3.5">Engineering Scenario</th>
                  <th className="px-5 py-3.5">Unoptimized Baseline</th>
                  <th className="px-5 py-3.5">Engineered Outcome</th>
                  <th className="px-5 py-3.5">Delta Improvement</th>
                  <th className="px-5 py-3.5 hidden md:table-cell">Verification Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mono-800/60 font-mono text-mono-300">
                {filtered.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-mono-900/60">
                    <td className="px-5 py-4 font-sans font-medium text-mono-100">
                      <div className="flex items-center gap-2">
                        <Activity className="h-3.5 w-3.5 text-telemetry-amber shrink-0" />
                        <span>{row.scenario}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-mono-400 tabular-nums text-xs">
                      {row.baseline}
                    </td>
                    <td className="px-5 py-4 font-semibold text-mono-100 tabular-nums text-xs">
                      {row.optimized}
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1 rounded bg-telemetry-emerald/10 border border-telemetry-emerald/30 px-2 py-0.5 text-xs font-semibold text-telemetry-emerald tabular-nums">
                        <Zap className="h-3 w-3" />
                        {row.improvement}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-sans text-xs text-mono-400 hidden md:table-cell">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
