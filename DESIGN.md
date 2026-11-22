---
name: Systems Ledger & Spec Sheet
description: High-density, authoritative engineering monograph and systems dossier for Vivek Kanugula
colors:
  ground-deep: "#08090c"
  surface-card: "#0c0d12"
  surface-raised: "#111318"
  surface-overlay: "#181a22"
  border-subtle: "#232634"
  border-strong: "#34384b"
  text-primary: "#f6f7fa"
  text-secondary: "#cdd2e1"
  text-muted: "#7b829a"
  telemetry-amber: "#f59e0b"
  telemetry-emerald: "#10b981"
  telemetry-cyan: "#06b6d4"
  telemetry-rose: "#f43f5e"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "#f6f7fa"
    textColor: "#08090c"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "#111318"
    textColor: "#cdd2e1"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
---

## Overview

The Systems Ledger & Spec Sheet is an editorial and engineering monograph design system. It eschews generic startup templates, purple/neon gradients, floating glassmorphic orb halos, and unearned marketing boilerplate in favor of architectural rigor, verifiable empirical telemetry, and high-density technical specifications.

## Colors

The palette is anchored in deep, warm obsidian neutrals with purposeful telemetry accents:
- **Ground & Surfaces:** `#08090c` (viewport root), `#0c0d12` (cards and modules), `#111318` (interactive states).
- **Hairline Borders:** `1px solid #232634` provides crisp mathematical boundaries without visual noise.
- **Text Contrast:** High-contrast `#f6f7fa` for primary headings and values (contrast ratio > 14:1), `#cdd2e1` for body copy (contrast ratio > 9:1), and `#7b829a` for technical metadata (contrast ratio > 4.5:1).
- **Telemetry Accents:**
  - `Amber (#f59e0b)`: Live system status, active nodes, architectural focus.
  - `Emerald (#10b981)`: Merged upstream pull requests, passing CI gates, low-latency delta gains.
  - `Cyan (#06b6d4)`: Backend frameworks, protocols, and documentation anchors.
  - `Rose (#f43f5e)`: Production bottlenecks, contention problems, and failure modes.

## Typography

Typography establishes clear intellectual hierarchy between narrative explanation and technical proof:
- **Sans-Serif (`Inter`):** Headings, value propositions, challenge narratives, and user-facing copy.
- **Monospace (`JetBrains Mono`):** Code snippets, database queries, latency values, telemetry deltas, and terminal commands.
- **Tabular Numerals (`font-variant-numeric: tabular-nums`):** Enforced across all benchmark tables and hero metrics to prevent layout wobble during live status updates.

## Layout

- **Container:** Structured 7xl (`1280px`) maximum container with consistent horizontal padding (`px-4 sm:px-6 lg:px-8`).
- **Vertical Rhythm:** Deliberate section separation (`py-16 lg:py-24`) with thin structural border dividers (`border-b border-mono-800`).
- **Responsive Stacking:** Desktop two/four-column grids collapse gracefully into single-column or dual-column configurations on mobile devices.

## Elevation & Depth

No artificial floating drop-shadows or zero-offset glowing halos are permitted. Depth is created through:
1. **Layered Tone:** Surface hierarchy progressing from `#08090c` (canvas) to `#0c0d12` (card) to `#181a22` (selected interactive node).
2. **Hairline Structural Borders:** Crisp `1px solid #232634` dividing distinct architectural modules.
3. **Subtle Background Technical Grid:** Mathematical `32px` faint coordinate grid (`rgba(255, 255, 255, 0.02)`) evoking systems telemetry consoles.

## Shapes

- **Radius:** Functional, restrained radii (`4px` for pills/buttons, `6px` to `8px` for major containers). Roundness communicates structure rather than novelty.
- **Focus Rings:** High-visibility 2px solid `#f59e0b` with `2px` offset for accessible keyboard navigation (`*:focus-visible`).

## Components

1. **Header & Spec Bar:** Sticky, high-contrast bar featuring avatar monogram, live role availability indicator, navigation landmarks, CLI console trigger, and printable resume launcher.
2. **Telemetry Ribbon:** Four quantitative proof points with exact tabular numbers, labels, and context.
3. **Open-Source Audit Cards:** Structured upstream cards displaying repository stars, merged status, problem/solution grids, and interactive diff inspection.
4. **Interactive Architecture Visualizer:** Clickable topology nodes dynamically swapping implementation details, failure modes, trade-offs, and verified production code patterns.
5. **Empirical Benchmarks Table:** Tabular telemetry comparing unoptimized baselines against engineered outcomes with verified deltas.
6. **System Terminal:** Accessible, keyboard-traversable modal console responding to `help`, `whoami`, `curl notify/stats`, `curl rag/metrics`, `git log`, `grep skills`, `cat resume`.
7. **ATS-Calibrated Resume Modal:** Pixel-accurate, single-column resume viewer equipped with browser print and PDF export.

## Do's and Don'ts

### Do
- Back every performance assertion with concrete units (`ms`, `req/s`, `% CPU reduction`).
- Provide direct, functioning hyperlinks to GitHub pull requests and issues.
- Maintain high contrast ratios (≥ 4.5:1 for copy, ≥ 3:1 for large display elements).
- Use monospace exclusively for code, measurements, and commands.

### Don't
- Never use colorful gradient text or rainbow borders.
- Never use decorative blurred orb blobs (`backdrop-blur-3xl` colored halos).
- Never use emoji icons in place of crisp, single-stroke SVG developer icons.
- Never display arbitrary percentage bars ("Java 90%", "Spring 85%").
- Never include vague generic filler ("Passionate coder who loves coffee").
