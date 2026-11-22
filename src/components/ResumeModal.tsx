import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { X, Printer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-mono-950/85 p-2 sm:p-4 backdrop-blur-sm overflow-y-auto">
      <div className="flex flex-col w-full max-w-4xl max-h-[95vh] rounded-lg border border-mono-700 bg-mono-900 shadow-2xl my-auto">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-mono-800 bg-mono-850 px-4 sm:px-6 py-3 rounded-t-lg">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-mono-200 uppercase tracking-wider">
              ATS-Calibrated Single-Column Resume
            </span>
            <span className="hidden sm:inline rounded bg-telemetry-emerald/10 border border-telemetry-emerald/30 px-2 py-0.5 text-[10px] font-mono text-telemetry-emerald font-medium">
              Verified 2026 Edition
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded border border-mono-700 bg-mono-800 px-3 py-1.5 text-xs font-mono text-mono-200 hover:text-white hover:bg-mono-700 transition-colors"
            >
              <Printer className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="rounded p-1.5 text-mono-400 hover:text-mono-100 transition-colors"
              title="Close Resume View"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white text-zinc-900 font-sans print:p-0 print:m-0 selection:bg-zinc-200 selection:text-zinc-900">
          
          {/* Header */}
          <div className="text-center border-b border-zinc-300 pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-sans">
              Vivek Kanugula
            </h1>
            <div className="mt-1.5 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-700 font-mono">
              <span>+91 8639216315</span>
              <span>•</span>
              <a href={`mailto:${PROFILE_DATA.email}`} className="text-blue-700 underline">
                {PROFILE_DATA.email}
              </a>
              <span>•</span>
              <span>Hyderabad, Telangana</span>
              <span>•</span>
              <a href={PROFILE_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href={PROFILE_DATA.socials.github} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                GitHub
              </a>
              <span>•</span>
              <a href={PROFILE_DATA.socials.leetcode} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                LeetCode
              </a>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-0.5">
              Technical Skills
            </h2>
            <ul className="mt-2 space-y-1 text-xs text-zinc-800 leading-relaxed">
              <li>
                <strong className="font-semibold">Languages & Core CS:</strong> Java, Python, Data Structures & Algorithms, Object-Oriented Design, Computer Networks, OS, DBMS
              </li>
              <li>
                <strong className="font-semibold">Backend Frameworks:</strong> Spring Boot 4, Spring Security, Spring Data JPA, Hibernate, RESTful APIs, Apache PDFBox
              </li>
              <li>
                <strong className="font-semibold">Distributed Systems & Caching:</strong> PostgreSQL, Apache Kafka (KRaft), Redis (Distributed Locks), Resilience4j, Quartz
              </li>
              <li>
                <strong className="font-semibold">AI Agents & Automation:</strong> Model Context Protocol (MCP), AI Agents & Workflows (n8n), LLM APIs (Gemini, Groq)
              </li>
              <li>
                <strong className="font-semibold">Cloud, DevOps & Testing:</strong> Microsoft Azure, Docker, GitHub Actions, Prometheus, Grafana, OpenTelemetry, k6 Load Testing, JUnit 5, Mockito
              </li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-0.5">
              Professional Experience
            </h2>
            <div className="mt-2">
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="font-bold text-zinc-900">Accenture</strong> | <em>Associate Software Engineer</em>
                </div>
                <div className="text-zinc-600 font-mono text-[11px]">
                  Oct 2025 – July 2026 | Hyderabad, India
                </div>
              </div>
              <ul className="mt-1.5 list-disc list-outside pl-4 space-y-1 text-xs text-zinc-800 leading-relaxed">
                <li>
                  Diagnosed system anomalies and memory bottlenecks across <strong>SAP application servers</strong> by analyzing work process utilization and error logs.
                </li>
                <li>
                  Triaged production incidents using <strong>Power BI and ICM</strong> operational dashboards, investigating CPU and memory telemetry to identify root causes.
                </li>
                <li>
                  Automated repetitive operational workflows using Python and AI tooling, parsing exported SAP short dumps (<strong>ST22</strong>) to <strong>cut daily audit time by 60%</strong>.
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-0.5">
              Projects
            </h2>
            
            {/* Notify */}
            <div className="mt-2">
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="font-bold text-zinc-900">Notify</strong> | 
                  <span className="text-zinc-700 italic ml-1">Java 25, Spring Boot 4, Kafka, PostgreSQL, Redis, Azure</span>
                </div>
                <div className="text-blue-700 text-[11px]">
                  github.com/vivek-kanugula/Notify
                </div>
              </div>
              <ul className="mt-1.5 list-disc list-outside pl-4 space-y-1 text-xs text-zinc-800 leading-relaxed">
                <li>
                  Architected a multi-tenant notification gateway (Email, Webhook, In-App) with PostgreSQL Transactional Outbox and Java 25 Virtual Threads for <strong>12.2ms median ingestion</strong>.
                </li>
                <li>
                  Eliminated PostgreSQL row-lock contention in outbox relay pipelines using <code>FOR UPDATE SKIP LOCKED</code>, <strong>cutting DB CPU from 95% to 12%</strong> under load.
                </li>
                <li>
                  Engineered two-tier idempotency using atomic Redis <code>SET NX</code> locks and PostgreSQL unique constraints, serving duplicate requests with <strong>zero database reads</strong>.
                </li>
                <li>
                  Partitioned Kafka event streams by tenant ID and integrated Resilience4j circuit breakers, achieving <strong>28.5ms p95 latency</strong> under 120 concurrent virtual users.
                </li>
              </ul>
            </div>

            {/* Morning Tech Pulse */}
            <div className="mt-3">
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="font-bold text-zinc-900">Morning Tech Pulse</strong> | 
                  <span className="text-zinc-700 italic ml-1">n8n, Python, GitHub Actions, Groq API, ReportLab, Gmail SMTP</span>
                </div>
                <div className="text-blue-700 text-[11px]">
                  github.com/vivek-kanugula/morning-tech-pulse
                </div>
              </div>
              <ul className="mt-1.5 list-disc list-outside pl-4 space-y-1 text-xs text-zinc-800 leading-relaxed">
                <li>
                  Architected a <strong>9-node n8n workflow</strong> across GitHub and Hacker News APIs, routing multi-source signals through <strong>Groq LPUs</strong> for daily technical synthesis.
                </li>
                <li>
                  Automated end-to-end report delivery via Python ReportLab and scheduled Gmail SMTP, distributing structured <strong>3-page executive PDFs daily at $0 compute cost</strong>.
                </li>
              </ul>
            </div>
          </div>

          {/* Open Source Contributions */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-0.5">
              Open Source Contributions
            </h2>
            
            {/* Traccar */}
            <div className="mt-2">
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="font-bold text-zinc-900">Traccar</strong> | <em>PR #6125 (Merged)</em>
                </div>
                <div className="text-zinc-600 italic text-[11px]">
                  Java 17/21, JAX-RS, Model Context Protocol (MCP), OpenAPI 3.0, Gradle
                </div>
              </div>
              <ul className="mt-1.5 list-disc list-outside pl-4 space-y-1 text-xs text-zinc-800 leading-relaxed">
                <li>
                  Engineered database-backed query bounding across REST telemetry APIs, restricting <strong>17,000-record payloads (~3 MB, ~800k tokens)</strong> to prevent LLM context overflows in MCP tooling.
                </li>
                <li>
                  Implemented database-level limit-offset pagination across telemetry REST APIs and <strong>7 core export engines</strong>, enabling chunked time-series streaming and removing memory bottlenecks.
                </li>
              </ul>
            </div>

            {/* Stirling PDF */}
            <div className="mt-3">
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="font-bold text-zinc-900">Stirling-Tools / Stirling-PDF</strong> | <em>PR #8947</em>
                </div>
                <div className="text-zinc-600 italic text-[11px]">
                  Java 21, Spring Boot 3, Apache PDFBox 3.0, Gradle, JUnit 5
                </div>
              </div>
              <ul className="mt-1.5 list-disc list-outside pl-4 space-y-1 text-xs text-zinc-800 leading-relaxed">
                <li>
                  Diagnosed unhandled HTTP 400 crashes on password-protected uploads (Issue #8947), auditing <strong>Apache PDFBox</strong> source code to disprove speculative null-pointer claims.
                </li>
                <li>
                  Refactored security inspection endpoints for password decryption and fallback metadata, exposing all <strong>8 standard ISO 32000-1 access flags</strong> with JUnit 5 regression tests.
                </li>
              </ul>
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-0.5">
              Achievements & Milestones
            </h2>
            <ul className="mt-1.5 list-disc list-outside pl-4 space-y-1 text-xs text-zinc-800 leading-relaxed">
              <li>
                Achieved <strong>AIR 7912</strong> in GATE CS 2025 and earned the <strong>500-Day Badge</strong> on LeetCode/GeeksforGeeks, securing a <strong>1534 contest rating</strong> (<strong>850+ problems solved</strong>).
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-0.5">
              Education
            </h2>
            <div className="mt-1.5 flex justify-between items-baseline text-xs">
              <div>
                <strong className="font-bold text-zinc-900">Gokaraju Rangaraju Institute of Engineering & Technology</strong>
                <div className="italic text-zinc-700">
                  Bachelor of Technology in Computer Science & Engineering <strong>-- CGPA: 9.21</strong>
                </div>
              </div>
              <div className="text-right text-zinc-600 font-mono text-[11px]">
                Nov 2021 – May 2025<br />
                Hyderabad, India
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
