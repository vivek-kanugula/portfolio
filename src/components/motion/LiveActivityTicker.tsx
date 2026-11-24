import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

const ACTIVITIES = [
  "Tracing PostgreSQL distributed outbox & Kafka event streams",
  "Profiling SAP ST22 short dumps & automated log telemetry",
  "Tuning hybrid search fusing pgvector semantics + BM25 lexical indexing",
  "Benchmarking transactional outbox delivery across microservices",
  "Investigating distributed systems internals & consensus patterns",
];

export const LiveActivityTicker: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setFade(true);
      }, 300);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-aurora-indigo/25 bg-mono-900/80 px-3.5 py-1.5 text-xs font-mono backdrop-blur-md shadow-lg shadow-indigo-950/20 max-w-full overflow-hidden">
      <div className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-telemetry-cyan opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-telemetry-cyan" />
      </div>

      <span className="text-telemetry-cyan font-semibold shrink-0 flex items-center gap-1 text-[11px]">
        <Activity className="h-3 w-3 text-telemetry-cyan" />
        <span>CURRENT FOCUS:</span>
      </span>

      <span
        style={{
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0)' : 'translateY(4px)',
        }}
        className="text-mono-200 truncate font-sans text-xs"
      >
        {ACTIVITIES[index]}
      </span>
    </div>
  );
};
