import React, { useState, useRef, useEffect } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Terminal, X, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';

interface SystemTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandOutput {
  command: string;
  response: string | React.ReactNode;
}

export const SystemTerminal: React.FC<SystemTerminalProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'system --init',
      response: `Vivek Kanugula Systems Telemetry Console v2.5.0
Type 'help' to inspect available system commands.`,
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const lower = cmd.toLowerCase();
    let response: string | React.ReactNode = '';

    switch (lower) {
      case 'help':
        response = `AVAILABLE COMMANDS:
  help              - Display this command index
  whoami            - Print candidate profile dossier
  projects          - List flagship production systems
  curl notify/stats - Check Notify load test & outbox telemetry
  curl rag/metrics  - Check QueryFusion hybrid retrieval metrics
  git log           - View upstream merged open-source PRs
  grep skills       - List core technical competencies
  cat resume        - Launch ATS resume viewer modal
  contact           - Display verified contact channels
  clear             - Reset terminal output buffer`;
        break;

      case 'whoami':
        response = `${PROFILE_DATA.name}
Role: ${PROFILE_DATA.role} (${PROFILE_DATA.specialization})
Location: ${PROFILE_DATA.location}
Status: ${PROFILE_DATA.availability}
Gate CS 2025: AIR 7912 | LeetCode: 850+ Solved (1534 rating)`;
        break;

      case 'projects':
        response = `FLAGSHIP REPOSITORIES:
1. Notify: High-Throughput Notification Gateway (Java 25, Kafka, PostgreSQL Outbox)
   -> 12.2ms median ingestion, FOR UPDATE SKIP LOCKED
2. QueryFusion: Hybrid RAG & Empirical Evaluation Engine (FastAPI, pgvector, BM25s)
   -> 60% CPU cross-encoder bypass, 64 passing CI suites
3. Morning Tech Pulse: Autonomous Executive Digest (n8n, Groq, ReportLab)
   -> 3-page daily PDF delivered at $0 compute cost`;
        break;

      case 'curl notify/stats':
        response = `HTTP/2 200 OK
content-type: application/json; charset=utf-8

{
  "service": "notify-gateway",
  "runtime": "Java 25 Virtual Threads + Spring Boot 4",
  "median_ingestion_ms": 12.2,
  "p95_latency_ms": 28.5,
  "concurrent_vus": 120,
  "outbox_clause": "SELECT ... FOR UPDATE SKIP LOCKED",
  "db_cpu_reduction": "95% -> 12%",
  "idempotency_cache_hit_rate": "100%",
  "duplicate_db_reads": 0
}`;
        break;

      case 'curl rag/metrics':
        response = `HTTP/2 200 OK
content-type: application/json; charset=utf-8

{
  "service": "queryfusion-engine",
  "retrieval": "Dense (pgvector HNSW) + Sparse (BM25s)",
  "fusion_algorithm": "Weighted Reciprocal Rank Fusion (alpha=0.6)",
  "cross_encoder_bypass_ratio": ">= 1.35",
  "reranker_latency_reduction": "60%",
  "ci_test_suites": "64 passing",
  "groundedness_verifier": "Zero hallucinated claims"
}`;
        break;

      case 'git log':
        response = `UPSTREAM PRODUCTION MERGES:
* [traccar/traccar] PR #6125 (Merged): Query bounding & pagination for telemetry REST API (prevents 17k record MCP context overflows).
* [Stirling-Tools/Stirling-PDF] PR #8947: Password-required PDF security inspection & ISO 32000-1 flag exposure.`;
        break;

      case 'grep skills':
        response = `BACKEND & DISTRIBUTED SYSTEMS:
Java (17/21/25), Spring Boot 4, Apache Kafka (KRaft), PostgreSQL 17, Redis 7.2 (Distributed Locks), Quartz, Resilience4j.
AI & AGENTS:
Model Context Protocol (MCP), Hybrid RAG, pgvector, BM25s, n8n Agent Workflows, Groq LPUs.`;
        break;

      case 'cat resume':
        onOpenResume();
        response = `Launching ATS Resume Viewer modal...`;
        break;

      case 'contact':
        response = `EMAIL:    ${PROFILE_DATA.email}
PHONE:    ${PROFILE_DATA.phone}
LINKEDIN: ${PROFILE_DATA.socials.linkedin}
GITHUB:   ${PROFILE_DATA.socials.github}
LOCATION: ${PROFILE_DATA.location}`;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        response = `Command not recognized: '${cmd}'. Type 'help' to see valid commands.`;
    }

    setHistory(prev => [...prev, { command: cmd, response }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-mono-950/80 p-4 backdrop-blur-sm">
      <div 
        className={`flex flex-col rounded-lg border border-mono-700 bg-mono-900 shadow-2xl transition-all ${
          isExpanded ? 'w-full h-full max-w-5xl max-h-[90vh]' : 'w-full max-w-3xl h-[520px]'
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between border-b border-mono-800 bg-mono-850 px-4 py-2.5 rounded-t-lg">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-mono-700" />
            <span className="h-3 w-3 rounded-full bg-mono-700" />
            <span className="h-3 w-3 rounded-full bg-mono-700" />
            <span className="ml-2 font-mono text-xs text-mono-300 flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-telemetry-amber" />
              <span>vivek@system-telemetry: ~</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-mono-400 hover:text-mono-200"
              title={isExpanded ? 'Minimize' : 'Maximize'}
            >
              {isExpanded ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 text-mono-400 hover:text-mono-100"
              title="Close Terminal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-4 font-mono text-xs sm:text-sm text-mono-200 space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-mono-400">
                <span className="text-telemetry-emerald font-bold">vivek@telemetry:~$</span>
                <span className="text-mono-100">{item.command}</span>
              </div>
              <div className="pl-4 whitespace-pre-wrap text-mono-300 leading-relaxed">
                {item.response}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <form onSubmit={handleCommand} className="flex items-center border-t border-mono-800 bg-mono-950 px-4 py-3 rounded-b-lg">
          <span className="text-telemetry-emerald font-mono text-xs sm:text-sm font-bold mr-2">
            vivek@telemetry:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or 'curl notify/stats'..."
            className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-mono-100 outline-none placeholder:text-mono-600"
          />
          <button type="submit" className="text-mono-400 hover:text-mono-200">
            <CornerDownLeft className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
