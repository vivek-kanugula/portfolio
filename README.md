# Vivek Kanugula — Software Engineering Monograph & Portfolio

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript 5.6](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite 5](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 3](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![WCAG AA](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-success?style=flat-square)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)

> **Live Portfolio:** [https://vivek-kanugula.github.io/portfolio](https://vivek-kanugula.github.io/portfolio) *(or connected custom domain)*

An authoritative, production-grade systems engineering portfolio and technical monograph built for **Vivek Kanugula** (Software Engineer — Java Backend, Distributed Systems & AI Infrastructure).

Designed with strict architectural discipline: **zero AI slop, zero generic glowing orbs, zero fake percentage bars, and zero boilerplate marketing buzzwords**. Every assertion is backed by verifiable upstream open-source code, empirical k6 benchmarks, and interactive system topology inspectors.

---

## Architecture & Systems Overview

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                               SPEC HEADER BAR                                │
│   [Avatar Monogram]  Vivek Kanugula  •  [Status Pill: Available for Hire]     │
│   Nav: Open Source  |  Architecture  |  Benchmarks  |  Stack  |  Experience  │
│   Actions: [CLI Console]  [ATS Resume]  [Copy Email]                         │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       │
┌──────────────────────────────────────▼───────────────────────────────────────┐
│                              HERO DOSSIER                                    │
│   High-Throughput Backends, Distributed Systems & AI Infrastructure          │
│   Quantitative Telemetry: 48k+ Stars | 12.2ms Latency | 850+ DSA | AIR 7912  │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       │
         ┌─────────────────────────────┼─────────────────────────────┐
         ▼                             ▼                             ▼
┌──────────────────┐          ┌──────────────────┐          ┌──────────────────┐
│  OPEN SOURCE PRs │          │   ARCHITECTURE   │          │    BENCHMARKS    │
│  • Traccar #6125 │          │  • Notify        │          │  • k6 Load Tests │
│  • Stirling #8947│          │  • QueryFusion   │          │  • DB Contention │
│  (Diff & Audit)  │          │  (Node Inspector)│          │  • CPU Savings   │
└──────────────────┘          └──────────────────┘          └──────────────────┘
         │                             │                             │
         └─────────────────────────────┼─────────────────────────────┘
                                       │
┌──────────────────────────────────────▼───────────────────────────────────────┐
│                           COMPETENCY MATRIX                                  │
│   Categorized by Architectural Layer (Distributed, Backend, AI, Cloud, CS)  │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       │
┌──────────────────────────────────────▼───────────────────────────────────────┐
│                        EXPERIENCE & EDUCATION                                │
│   Accenture (Associate SE)  •  GRIET (9.21 CGPA)  •  GATE CS 2025 (AIR 7912) │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       │
┌──────────────────────────────────────▼───────────────────────────────────────┐
│                  ENGINEERING LAB & AUTONOMOUS WORKFLOWS                      │
│   Morning Tech Pulse (9-node n8n workflow + Groq LPUs + ReportLab at $0 fee) │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       │
┌──────────────────────────────────────▼───────────────────────────────────────┐
│                       MODALS & SYSTEM TOOLS                                  │
│   • Interactive Terminal: help, whoami, curl notify/stats, git log, cat resume│
│   • ATS-Calibrated Printable Single-Column Resume Viewer                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## Key Engineering Features

### 1. Production Open Source Audit
Showcases verified contributions merged into multi-thousand-star open-source codebases:
* **[Traccar](https://github.com/traccar/traccar) (8.1k★) — [PR #6125 (Merged)](https://github.com/traccar/traccar/pull/6125):** Database-backed query bounding and offset-limit pagination across telemetry REST endpoints and 7 export engines, preventing 17,000-record payloads (~3 MB / ~800k tokens) from overflowing LLM context windows in Model Context Protocol (MCP) tooling.
* **[Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) (40k+★) — [PR #8947](https://github.com/Stirling-Tools/Stirling-PDF/pull/8947):** Diagnosed HTTP 400 crashes on password-protected uploads, audited Apache PDFBox 3.0 decryption routines, and exposed all 8 ISO 32000-1 document access flags with JUnit 5 regression test suites.

### 2. Interactive Systems Architecture Showcases
An interactive topology node inspector for flagship engineering systems:
* **Notify (Distributed Systems):** High-throughput multi-tenant notification gateway. Explores the PostgreSQL Transactional Outbox pattern with `FOR UPDATE SKIP LOCKED` (cutting DB CPU from 95% to 12%), two-tier atomic Redis `SET NX` idempotency (0 database reads on duplicate retries), and tenant-partitioned Kafka event streaming maintaining 28.5ms p95 latency under 120 concurrent virtual users.
* **QueryFusion (AI Systems):** Empirical hybrid retrieval engine unifying dense vector search (`pgvector` HNSW) and sparse lexical search (`bm25s`) via $\alpha$-Weighted Reciprocal Rank Fusion, with an adaptive cross-encoder bypass heuristic cutting query latency by 60% on CPU instances.

### 3. Empirical Benchmarks Explorer
Filterable telemetry comparing unoptimized baselines against engineered outcomes across concurrency, database I/O, and CPU inference.

### 4. Interactive CLI Console Terminal
An accessible, keyboard-traversable modal terminal emulator (`Terminal` button or `T` shortcut) supporting commands:
* `help` — View available commands
* `whoami` — Candidate engineering dossier
* `projects` — List production repositories
* `curl notify/stats` — Simulated HTTP response for Notify outbox telemetry
* `curl rag/metrics` — Simulated HTTP response for QueryFusion hybrid retrieval
* `git log` — Upstream merged PRs & commit history
* `grep skills` — Core backend and distributed competencies
* `cat resume` — Direct launch of ATS printable resume viewer

### 5. ATS-Calibrated Single-Column Resume
Clean, high-contrast, ATS-aligned resume modal calibrated for direct browser printing (`Ctrl+P` / `Cmd+P` or print button) to export a 1-page PDF.

---

## Design System: The Systems Ledger & Spec Sheet

Crafted under the **Impeccable** engineering design runtime:
* **Palette:** Deep obsidian ground (`#08090c`), cards (`#0c0d12`), hairline structural borders (`1px solid #232634`), warm amber telemetry accents (`#f59e0b`), and emerald verification indicators (`#10b981`).
* **Typography:** `Inter` for balanced editorial headings; `JetBrains Mono` for code, latency values, and queries; enforced `font-variant-numeric: tabular-nums` to prevent metric layout shifts.
* **Accessibility:** Full WCAG 2.1 AA compliance (contrast ratio ≥ 4.5:1 for all text; visible high-contrast focus rings for keyboard navigation; semantic HTML5 landmarks `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* **Browser Polish:** Themed selection colors, custom technical scrollbars, and styled caret cursors.

---

## Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | React 18 / 19 |
| **Language** | TypeScript 5.6 (Strict Mode) |
| **Build Tool** | Vite 5.4 |
| **Styling** | Tailwind CSS 3.4, PostCSS, Autoprefixer |
| **Iconography** | Lucide React (Clean, stroke-aligned SVG icons) |
| **Deployment** | Static HTML5 / Single-Page Application (SPA) |

---

## Getting Started Locally

### Prerequisites
* **Node.js:** v18.0.0 or later (v20+ recommended)
* **npm:** v9.0.0 or later

### Installation
```bash
# Clone the repository
git clone https://github.com/vivek-kanugula/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the local development server (http://localhost:3000)
npm run dev
```

### Production Build & Typecheck
```bash
# Compile TypeScript and bundle optimized static assets into dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## Deployment

Because this project compiles into pure static HTML, CSS, and JavaScript, it can be deployed with zero configuration to any global edge CDN:

### Option A: Vercel
1. Import the repository in [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.

### Option B: Cloudflare Pages
1. Connect repository in Cloudflare Pages dashboard.
2. Build Command: `npm run build`.
3. Build output directory: `dist`.

### Option C: GitHub Pages
A standard GitHub Actions workflow (`.github/workflows/deploy.yml`) can build and deploy the `dist/` directory to GitHub Pages on every push to `main`.

---

## Author & Contact

**Vivek Kanugula**  
*Software Engineer — Java Backend, Distributed Systems & AI Infrastructure*  
* Hyderabad, Telangana, India
* **Email:** [connectwithvivekk@gmail.com](mailto:connectwithvivekk@gmail.com)
* **LinkedIn:** [linkedin.com/in/vivek-kanugula](https://linkedin.com/in/vivek-kanugula)
* **GitHub:** [github.com/vivek-kanugula](https://github.com/vivek-kanugula)
* **LeetCode:** [leetcode.com/u/vivekkanugula](https://leetcode.com/u/vivekkanugula)

---

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.
