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
              Resume View
            </span>
            <span className="hidden sm:inline rounded bg-telemetry-emerald/10 border border-telemetry-emerald/30 px-2 py-0.5 text-[10px] font-mono text-telemetry-emerald font-medium">
              Vivek Kanugula
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
                LeetCode (21241A0595)
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
                <strong className="font-semibold">Languages & Core CS:</strong> Java, Python, SQL, Data Structures & Algorithms, Object-Oriented Design, Computer Networks, Operating Systems, Database Management Systems
              </li>
              <li>
                <strong className="font-semibold">Backend Frameworks:</strong> Spring Boot, Spring Security, Spring Data JPA, Hibernate, RESTful APIs, Apache PDFBox
              </li>
              <li>
                <strong className="font-semibold">Distributed Systems & Databases:</strong> PostgreSQL, Apache Kafka, Redis, Resilience4j, Quartz
              </li>
              <li>
                <strong className="font-semibold">AI Tools & Automation:</strong> Model Context Protocol (MCP), AI Workflows (n8n), LLM APIs
              </li>
              <li>
                <strong className="font-semibold">Cloud, DevOps & Testing:</strong> Microsoft Azure, Docker, GitHub Actions, Prometheus, Grafana, OpenTelemetry, JUnit 5, Mockito
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
                  Oct 2025 – Present | Hyderabad, India
                </div>
              </div>
              <ul className="mt-1.5 list-disc list-outside pl-4 space-y-1 text-xs text-zinc-800 leading-relaxed">
                <li>
                  Diagnosed system anomalies and performance bottlenecks across enterprise application servers by analyzing work process utilization and error logs.
                </li>
                <li>
                  Triaged production incidents using operational dashboards and system telemetry, investigating CPU and memory metrics to identify root causes.
                </li>
                <li>
                  Automated repetitive operational workflows using Python and automation scripts to accelerate daily audit and log analysis tasks.
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
                  <span className="text-zinc-700 italic ml-1">Java, Spring Boot, Kafka, PostgreSQL, Redis, Azure</span>
                </div>
                <div className="text-blue-700 text-[11px]">
                  <a href="https://github.com/vivek-kanugula/Notify" target="_blank" rel="noreferrer" className="underline">
                    github.com/vivek-kanugula/Notify
                  </a>
                </div>
              </div>
              <ul className="mt-1.5 list-disc list-outside pl-4 space-y-1 text-xs text-zinc-800 leading-relaxed">
                <li>
                  Built a multi-tenant notification gateway supporting Email, Webhook, and In-App channels using PostgreSQL Transactional Outbox pattern and Java Virtual Threads.
                </li>
                <li>
                  Optimized database concurrency during outbox event relay using non-blocking row selection to avoid lock contention under high traffic.
                </li>
                <li>
                  Implemented two-tier request idempotency with atomic Redis locks and database unique constraints to eliminate duplicate deliveries.
                </li>
                <li>
                  Partitioned Kafka topic streams by tenant ID and integrated Resilience4j circuit breakers to isolate failures and maintain high availability.
                </li>
              </ul>
            </div>

            {/* QueryFusion */}
            <div className="mt-3">
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="font-bold text-zinc-900">QueryFusion</strong> | 
                  <span className="text-zinc-700 italic ml-1">Java, Spring Boot, PostgreSQL, Redis, Groq API</span>
                </div>
                <div className="text-blue-700 text-[11px]">
                  <a href="https://github.com/vivek-kanugula/QueryFusion" target="_blank" rel="noreferrer" className="underline">
                    github.com/vivek-kanugula/QueryFusion
                  </a>
                </div>
              </div>
              <ul className="mt-1.5 list-disc list-outside pl-4 space-y-1 text-xs text-zinc-800 leading-relaxed">
                <li>
                  Designed an intelligent SQL query generation and optimization assistant translating natural language requests into schema-safe SQL queries.
                </li>
                <li>
                  Implemented schema introspection, automated index recommendations, and query cost analysis with cached performance plans.
                </li>
              </ul>
            </div>

            {/* Morning Tech Pulse */}
            <div className="mt-3">
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="font-bold text-zinc-900">Morning Tech Pulse</strong> | 
                  <span className="text-zinc-700 italic ml-1">Python, n8n, GitHub Actions, ReportLab, Groq API</span>
                </div>
                <div className="text-blue-700 text-[11px]">
                  <a href="https://github.com/vivek-kanugula/morning-tech-pulse" target="_blank" rel="noreferrer" className="underline">
                    github.com/vivek-kanugula/morning-tech-pulse
                  </a>
                </div>
              </div>
              <ul className="mt-1.5 list-disc list-outside pl-4 space-y-1 text-xs text-zinc-800 leading-relaxed">
                <li>
                  Built an automated news digestion and synthesis workflow aggregating top engineering topics and GitHub trending repos.
                </li>
                <li>
                  Automated scheduled daily email report generation and dispatch using Python and GitHub Actions.
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
                <div className="text-blue-700 text-[11px]">
                  <a href="https://github.com/traccar/traccar/pull/6125" target="_blank" rel="noreferrer" className="underline">
                    PR #6125
                  </a>
                </div>
              </div>
              <ul className="mt-1.5 list-disc list-outside pl-4 space-y-1 text-xs text-zinc-800 leading-relaxed">
                <li>
                  Implemented database-level limit-offset pagination across telemetry REST APIs and core export engines to support streaming and prevent memory exhaustion.
                </li>
                <li>
                  Added request bounds to prevent oversized telemetry responses during external API and Model Context Protocol (MCP) integrations.
                </li>
              </ul>
            </div>

            {/* Stirling PDF */}
            <div className="mt-3">
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="font-bold text-zinc-900">Stirling-Tools / Stirling-PDF</strong> | <em>Issue #8947 & PR #8947 (Under Review)</em>
                </div>
                <div className="text-blue-700 text-[11px] flex gap-2">
                  <a href="https://github.com/Stirling-Tools/Stirling-PDF/issues/8947" target="_blank" rel="noreferrer" className="underline">
                    Issue #8947
                  </a>
                  <span>•</span>
                  <a href="https://github.com/Stirling-Tools/Stirling-PDF/pull/8947" target="_blank" rel="noreferrer" className="underline">
                    PR #8947
                  </a>
                </div>
              </div>
              <ul className="mt-1.5 list-disc list-outside pl-4 space-y-1 text-xs text-zinc-800 leading-relaxed">
                <li>
                  Identified, reproduced, and reported an HTTP 400 error triggered during upload of password-protected PDF files, opening Issue #8947.
                </li>
                <li>
                  Submitted PR #8947 refactoring security inspection endpoints with Apache PDFBox to handle password decryption, ISO 32000-1 access flags, and unit regression tests.
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
                <strong>GATE CS 2025:</strong> All India Rank (AIR) 7912.
              </li>
              <li>
                <strong>LeetCode:</strong> Consistent problem solving (Username: <a href="https://leetcode.com/u/21241A0595/" target="_blank" rel="noreferrer" className="text-blue-700 underline">21241A0595</a>) with 500-day badge and 850+ problems solved across competitive programming platforms.
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
                  Bachelor of Technology in Computer Science & Engineering — <strong>CGPA: 9.21</strong>
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
