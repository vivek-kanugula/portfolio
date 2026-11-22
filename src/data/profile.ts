export interface MetricItem {
  label: string;
  value: string;
  detail: string;
  trend?: string;
}

export interface OpenSourceContribution {
  id: string;
  repo: string;
  repoStars: string;
  repoUrl: string;
  title: string;
  prNumber: string;
  prUrl: string;
  issueNumber?: string;
  issueUrl?: string;
  status: 'Merged' | 'Open' | 'Resolved';
  stack: string[];
  problem: string;
  auditFindings: string;
  solution: string;
  impactMetrics: string[];
  codeDiffSnippet?: {
    filename: string;
    code: string;
  };
}

export interface ArchitectureNode {
  id: string;
  title: string;
  category: 'Ingress' | 'Storage' | 'Queue' | 'Worker' | 'Observability' | 'AI / Search';
  description: string;
  implementation: string;
  tradeoff: string;
  codeSnippet: string;
  metrics: string;
}

export interface FlagshipProject {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  githubUrl: string;
  liveDemoUrl?: string;
  techStack: string[];
  summary: string;
  keyMetrics: { label: string; value: string; context: string }[];
  problemContext: string;
  architectureNodes: ArchitectureNode[];
  engineeringChallenges: {
    challenge: string;
    whyItHappens: string;
    engineeringResolution: string;
    outcomeMetric: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
  highlights: string[];
}

export const PROFILE_DATA = {
  name: "Vivek Kanugula",
  role: "Software Engineer",
  specialization: "Java Backend, Distributed Systems & AI Engineering",
  location: "Hyderabad, India (IST / UTC+5:30)",
  availability: "Available for Full-Time Roles",
  email: "connectwithvivekk@gmail.com",
  phone: "+91 8639216315",
  socials: {
    github: "https://github.com/vivek-kanugula",
    linkedin: "https://linkedin.com/in/vivek-kanugula",
    leetcode: "https://leetcode.com/u/vivekkanugula",
  },
  bio: "Software Engineer focused on high-throughput backend services, event-driven architectures, and production AI retrieval pipelines. Merged contributor to multi-thousand-star open-source infrastructure (Traccar, Stirling-PDF). Strong background in systems reliability, ACID transaction guarantees, and latency optimization.",

  heroMetrics: [
    {
      label: "Open Source Stars",
      value: "48k+",
      detail: "Merged PRs & security audits across Traccar (8k★) & Stirling-PDF (40k★)",
      trend: "Merged in Production",
    },
    {
      label: "Median Ingestion Latency",
      value: "12.2ms",
      detail: "Java 25 Virtual Threads & PostgreSQL Transactional Outbox pipeline",
      trend: "P95: 28.5ms @ 120 VUs",
    },
    {
      label: "LeetCode & GfG Problems",
      value: "850+",
      detail: "1534 contest rating with 500-Day continuous streak badge",
      trend: "Top Percentile Consistency",
    },
    {
      label: "GATE CS 2025 Rank",
      value: "AIR 7912",
      detail: "National benchmark in OS, DBMS, Algorithms, Networks & Compilers",
      trend: "Core CS Rigor",
    },
  ] as MetricItem[],

  openSource: [
    {
      id: "traccar-pr-6125",
      repo: "traccar/traccar",
      repoStars: "8.1k★",
      repoUrl: "https://github.com/traccar/traccar",
      title: "Query Bounding & Offset-Limit Pagination for Telemetry REST & Export Engines",
      prNumber: "#6125",
      prUrl: "https://github.com/traccar/traccar/pull/6125",
      issueNumber: "#6102",
      issueUrl: "https://github.com/traccar/traccar/issues/6102",
      status: "Merged",
      stack: ["Java 17/21", "JAX-RS", "Model Context Protocol (MCP)", "OpenAPI 3.0", "Gradle"],
      problem:
        "External LLM agents calling Traccar's telemetry REST endpoints via MCP tooling encountered catastrophic context window overflows caused by unpaginated 17,000+ position record payloads (~3 MB / ~800k tokens), exhausting agent memory and driving API timeouts.",
      auditFindings:
        "Audited the positions repository and found that getPositionsStream loaded unrestricted time-series directly into memory. Downstream exporters across 7 formats suffered synchronous memory spikes.",
      solution:
        "Implemented database-level offset and limit query bounding parameters across the REST resource controllers, repository layer, and all 7 core telemetry export engines. Structured queries to enforce chunked streaming without breaking backward compatibility.",
      impactMetrics: [
        "Eliminated 17k record payload floods, bounding responses to token-safe chunk sizes",
        "Refactored 7 core export engines to support stream chunking with zero memory blowup",
        "Merged into upstream master for official release in Traccar",
      ],
      codeDiffSnippet: {
        filename: "src/main/java/org/traccar/api/resource/PositionResource.java",
        code: `// Added limit and offset query parameters with bounded fallback
@GET
public Response getPositions(
        @QueryParam("deviceId") long deviceId,
        @QueryParam("from") Date from,
        @QueryParam("to") Date to,
        @QueryParam("limit") @DefaultValue("500") int limit,
        @QueryParam("offset") @DefaultValue("0") int offset) {
    var positions = storage.getPositions(deviceId, from, to, Math.min(limit, 1000), offset);
    return Response.ok(positions).build();
}`,
      },
    },
    {
      id: "stirling-pdf-pr-8947",
      repo: "Stirling-Tools/Stirling-PDF",
      repoStars: "40k+★",
      repoUrl: "https://github.com/Stirling-Tools/Stirling-PDF",
      title: "Password-Protected PDF Security Inspection & ISO 32000-1 Flag Exposure",
      prNumber: "#8947",
      prUrl: "https://github.com/Stirling-Tools/Stirling-PDF/pull/8947",
      issueNumber: "#8947",
      issueUrl: "https://github.com/Stirling-Tools/Stirling-PDF/issues/8947",
      status: "Resolved",
      stack: ["Java 21", "Spring Boot 3", "Apache PDFBox 3.0", "Gradle", "JUnit 5"],
      problem:
        "Unhandled HTTP 400 crashes occurred when users uploaded password-protected PDFs to security analysis endpoints. Community discussions hypothesized a null-pointer bug in Apache PDFBox.",
      auditFindings:
        "Conducted a deep source audit of Apache PDFBox 3.0 internal decryption routines. Disproved the null-pointer speculation: the failure was caused by Stirling's inspection controller failing to catch PDFBox's CryptographyException on password challenge and aborting the entire request lifecycle.",
      solution:
        "Refactored the inspection service layer to intercept password-required states gracefully, implemented decryption fallback routines, and surfaced all 8 standard ISO 32000-1 document access permissions (print, modify, copy, annotate, etc.) with comprehensive JUnit 5 regression tests.",
      impactMetrics: [
        "Prevented unhandled HTTP 400 server crashes on encrypted file inspection",
        "Exposed all 8 standard ISO 32000-1 document permissions in API response schema",
        "Verified with automated JUnit 5 test suites covering encrypted and corrupted files",
      ],
      codeDiffSnippet: {
        filename: "src/main/java/stirling/software/SPDF/controller/api/security/SecurityService.java",
        code: `try (PDDocument document = Loader.loadPDF(fileBytes, password)) {
    AccessPermission permission = document.getCurrentAccessPermission();
    return new PdfSecurityMetadata(
        permission.canPrint(),
        permission.canModify(),
        permission.canExtractContent(),
        permission.canAssembleDocument(),
        document.isEncrypted()
    );
} catch (InvalidPasswordException e) {
    return PdfSecurityMetadata.unauthenticatedEncrypted();
}`,
      },
    },
  ] as OpenSourceContribution[],

  flagshipProjects: [
    {
      id: "notify",
      slug: "notify",
      title: "Notify",
      tagline: "High-Throughput Multi-Tenant Distributed Notification Infrastructure",
      category: "Distributed Systems & Infrastructure",
      githubUrl: "https://github.com/vivek-kanugula/Notify",
      liveDemoUrl: "https://notify-demo.azurecontainerapps.io",
      techStack: [
        "Java 25",
        "Spring Boot 4",
        "Apache Kafka (KRaft)",
        "PostgreSQL 17",
        "Redis 7.2",
        "Resilience4j",
        "Quartz Clustered",
        "Docker",
        "Prometheus",
        "Grafana",
        "k6",
        "React 19",
      ],
      summary:
        "Engineered a production-ready notification routing isolation layer delivering messages across Email, Webhook, and In-App channels. Guarantees zero message loss, sub-30ms p95 latency under load, and strict multi-tenant partition ordering.",
      keyMetrics: [
        { label: "Median Ingestion", value: "12.2ms", context: "Java 25 Virtual Threads + Outbox" },
        { label: "P95 Latency", value: "28.5ms", context: "120 Concurrent Virtual Users" },
        { label: "DB CPU Contention", value: "95% → 12%", context: "FOR UPDATE SKIP LOCKED" },
        { label: "Duplicate Reads", value: "0 Reads", context: "Two-Tier Redis Lock Idempotency" },
      ],
      problemContext:
        "Direct synchronous notification dispatching from core business services blocks user threads during third-party gateway lag (e.g. SMTP or remote webhooks taking 2–5s). Transient network drops cause silent receipt loss, while retries trigger duplicate delivery and double-charge alerts.",
      architectureNodes: [
        {
          id: "node-ingress",
          title: "REST Ingress & Validation",
          category: "Ingress",
          description: "High-scale ingestion gateway receiving delivery requests from tenant microservices.",
          implementation: "Spring Boot 4 running on Java 25 Virtual Threads for lightweight request concurrency.",
          tradeoff: "Virtual Threads eliminate thread-pool exhaustion while avoiding reactive programming callback hell.",
          codeSnippet: `@PostMapping("/api/v1/notifications")
public ResponseEntity<IngestResponse> enqueueNotification(
        @RequestHeader("X-Tenant-ID") String tenantId,
        @RequestHeader("X-Idempotency-Key") String idempotencyKey,
        @Valid @RequestBody NotificationPayload payload) {
    String messageId = outboxService.enqueue(tenantId, idempotencyKey, payload);
    return ResponseEntity.accepted().body(new IngestResponse(messageId, "ENQUEUED"));
}`,
          metrics: "12.2ms median HTTP 202 Accepted response time",
        },
        {
          id: "node-outbox",
          title: "Transactional Outbox & SKIP LOCKED",
          category: "Storage",
          description: "ACID-compliant state persistence preventing dual-write inconsistencies between DB and message queue.",
          implementation: "PostgreSQL outbox table polled by relay workers using SELECT ... FOR UPDATE SKIP LOCKED.",
          tradeoff: "Avoids 2PC distributed transactions while eliminating lock contention across concurrent poller nodes.",
          codeSnippet: `@Query(value = """
    SELECT * FROM notification_outbox
    WHERE status = 'PENDING'
    ORDER BY created_at ASC
    LIMIT :batchSize
    FOR UPDATE SKIP LOCKED
    """, nativeQuery = true)
List<NotificationOutboxEntity> fetchAndLockPendingBatch(@Param("batchSize") int batchSize);`,
          metrics: "Database CPU dropped from 95% down to 12% under 1,000 req/s load",
        },
        {
          id: "node-idempotency",
          title: "Two-Tier Idempotency Engine",
          category: "Storage",
          description: "Protects webhook subscribers and end users from duplicate notification processing.",
          implementation: "Fast-path atomic Redis SET NX key-value locks backed by PostgreSQL composite unique constraints.",
          tradeoff: "Redis absorbs 99.9% of repeated burst attempts; PostgreSQL serves as the durable fallback ground truth.",
          codeSnippet: `public boolean acquireLock(String tenantId, String idempotencyKey) {
    String lockKey = "idemp:" + tenantId + ":" + idempotencyKey;
    Boolean acquired = redisTemplate.opsForValue()
        .setIfAbsent(lockKey, "LOCKED", Duration.ofMinutes(15));
    return Boolean.TRUE.equals(acquired);
}`,
          metrics: "0 database reads incurred on repeated duplicate delivery requests",
        },
        {
          id: "node-kafka",
          title: "Partitioned Kafka Stream",
          category: "Queue",
          description: "Tenant-partitioned event log coordinating asynchronous delivery across decoupled dispatchers.",
          implementation: "Kafka 3.8 KRaft cluster with tenant-keyed partitioning and consumer group auto-rebalancing.",
          tradeoff: "Guarantees FIFO ordering per individual tenant while allowing horizontal parallel worker scaling.",
          codeSnippet: `var producerRecord = new ProducerRecord<>(
    "notifications-stream",
    payload.tenantId(), // Partition Key
    serializedMessage
);
kafkaTemplate.send(producerRecord);`,
          metrics: "Zero message loss across simulated node failover tests",
        },
        {
          id: "node-workers",
          title: "Resilient Channel Workers",
          category: "Worker",
          description: "Channel-specific delivery workers (Email SMTP, Webhook Dispatcher, In-App WebSocket).",
          implementation: "Resilience4j circuit breakers, exponential backoff retries with jitter, and dead-letter queues (DLQ).",
          tradeoff: "Failing remote third-party webhooks fail fast without degrading other healthy tenants.",
          codeSnippet: `@CircuitBreaker(name = "webhookService", fallbackMethod = "routeToDeadLetterQueue")
public void dispatchWebhook(WebhookTask task) {
    httpClient.post(task.destinationUrl(), task.payload());
}`,
          metrics: "Isolated tenant blast radius during external third-party outages",
        },
      ],
      engineeringChallenges: [
        {
          challenge: "PostgreSQL Outbox Row-Lock Contention Under Polling Bursts",
          whyItHappens:
            "Multiple poller worker threads attempting to read PENDING outbox records simultaneously executed standard SELECT FOR UPDATE, causing row-lock waiting, connection pool starvation, and database CPU spikes reaching 95%.",
          engineeringResolution:
            "Refactored the outbox relay query to utilize PostgreSQL's FOR UPDATE SKIP LOCKED clause with bounded batch retrieval, allowing poller threads to skip locked rows without blocking other workers.",
          outcomeMetric: "Reduced PostgreSQL CPU utilization from 95% to 12% and unlocked linear scaling.",
        },
        {
          challenge: "Network Flicker Causing Duplicate Notification Storms",
          whyItHappens:
            "Mobile clients retrying failed network connections sent duplicate payment receipt notifications within milliseconds of each other.",
          engineeringResolution:
            "Engineered two-tier atomic idempotency: incoming requests execute an atomic Redis SET NX token check with a 15-minute TTL. Duplicates are immediately served cached status with zero database I/O.",
          outcomeMetric: "100% duplicate suppression with 0 DB reads for repeat calls.",
        },
        {
          challenge: "Third-Party Webhook Latency Spikes Blocking Dispatch Threads",
          whyItHappens:
            "Unresponsive customer webhook endpoints (hanging for 10–30s) consumed worker thread pools, starving email and in-app queues.",
          engineeringResolution:
            "Implemented Resilience4j circuit breakers with custom sliding-window failure rate thresholds (50% failure opens breaker) and an automatic dead-letter queue (DLQ) with exponential jittered backoff.",
          outcomeMetric: "Maintained 28.5ms p95 delivery latency on healthy channels even when 20% of webhooks were dead.",
        },
      ],
    },
    {
      id: "queryfusion",
      slug: "queryfusion",
      title: "QueryFusion",
      tagline: "Production-Grade Hybrid RAG & Empirical Evaluation Engine",
      category: "AI Infrastructure & Retrieval",
      githubUrl: "https://github.com/vivek-kanugula/QueryFusion",
      liveDemoUrl: "https://queryfusion-demo.azurecontainerapps.io",
      techStack: [
        "Python 3.12",
        "FastAPI",
        "PostgreSQL 17",
        "pgvector (HNSW)",
        "BM25s",
        "FastEmbed (ONNX CPU)",
        "Cross-Encoder",
        "Google Gemini 3.5",
        "Groq (Llama 3.3)",
        "Docker",
        "Azure Container Apps",
      ],
      summary:
        "High-precision hybrid retrieval and automated claim verification engine. Combines dense vector semantics with sparse lexical precision, utilizing dynamic cross-encoder reranking and claim-level groundedness checking.",
      keyMetrics: [
        { label: "Lexical Accuracy", value: "100% Hit", context: "Alphanumeric IDs & Error Codes" },
        { label: "Reranker Speedup", value: "60% Faster", context: "Adaptive Cross-Encoder Bypass" },
        { label: "CI Test Suites", value: "64 Passing", context: "Automated Regression Gates" },
        { label: "Groundedness Verifier", value: "Zero Hallucination", context: "Automated Claim Auditing" },
      ],
      problemContext:
        "Standard dense-only vector search fails catastrophically on exact alphanumeric queries (e.g. error codes like 'DB-204', SKU numbers, or variable names), pulling irrelevant semantic neighbors. Furthermore, standard RAG frequently hallucinates citations without verifying passage groundedness.",
      architectureNodes: [
        {
          id: "qf-dense-sparse",
          title: "Dual-Stream Dense + Sparse Ingestion",
          category: "AI / Search",
          description: "Simultaneously embeds semantic concepts into vector space and indexes lexical token occurrences.",
          implementation: "pgvector HNSW cosine index paired with an in-memory BM25s sparse lexical index.",
          tradeoff: "Slightly higher indexing overhead in exchange for zero blindspots on exact symbols.",
          codeSnippet: `async def hybrid_retrieve(query: str, top_k: int = 20):
    # Execute semantic and lexical searches in parallel
    dense_task = asyncio.create_task(vector_store.similarity_search(query, k=top_k))
    sparse_task = asyncio.create_task(bm25_store.lexical_search(query, k=top_k))
    dense_results, sparse_results = await asyncio.gather(dense_task, sparse_task)
    return weighted_rrf(dense_results, sparse_results, alpha=0.6)`,
          metrics: "100% precision on exact variable names & error codes",
        },
        {
          id: "qf-rrf",
          title: "Weighted Reciprocal Rank Fusion (α-RRF)",
          category: "AI / Search",
          description: "Merges candidate rankings from heterogeneous scoring distributions without scale calibration bias.",
          implementation: "Adjustable alpha-weighted RRF formula: RRF_score(d) = α / (k + rank_dense(d)) + (1-α) / (k + rank_sparse(d)).",
          tradeoff: "Rank-based fusion is immune to uncalibrated raw score skewing common in vector cosine distances.",
          codeSnippet: `def weighted_rrf(dense_ranks, sparse_ranks, alpha=0.6, k=60):
    scores = defaultdict(float)
    for rank, doc_id in enumerate(dense_ranks):
        scores[doc_id] += alpha / (k + rank)
    for rank, doc_id in enumerate(sparse_ranks):
        scores[doc_id] += (1.0 - alpha) / (k + rank)
    return sorted(scores.items(), key=lambda x: x[1], reverse=True)`,
          metrics: "Outperforms isolated dense search by +24% MRR@10",
        },
        {
          id: "qf-cross-encoder",
          title: "Adaptive Cross-Encoder Reranker",
          category: "AI / Search",
          description: "Re-scores top candidate passages using full cross-attention between question and document.",
          implementation: "ONNX-quantized cross-encoder model with a dynamic early-bypass heuristic.",
          tradeoff: "When the top candidate is an overwhelming winner (s1 / s2 >= 1.35), bypasses reranker to save CPU latency.",
          codeSnippet: `def adaptive_rerank(candidates, query):
    s1, s2 = candidates[0].score, candidates[1].score
    # Invariant: Skip heavy cross-encoder if confidence ratio exceeds threshold
    if s2 > 0 and (s1 / s2) >= 1.35:
        return candidates[:5]  # Zero CPU rerank latency penalty
    return cross_encoder.predict([(query, c.text) for c in candidates[:10]])`,
          metrics: "60% latency reduction on commodity cloud CPU instances",
        },
        {
          id: "qf-claim-verifier",
          title: "Automated Claim Groundedness Verifier",
          category: "AI / Search",
          description: "Post-generation verification decomposing generated answers into atomic claims and checking source evidence.",
          implementation: "Token-aligned NLI claim verification validating that every assertion is supported by retrieved context.",
          tradeoff: "Adds a fast 150ms verification step that flags ungrounded hallucinations before streaming to users.",
          codeSnippet: `def verify_claims(generated_answer: str, retrieved_contexts: list[str]) -> VerificationReport:
    claims = extract_atomic_claims(generated_answer)
    return [
        ClaimAudit(claim=c, grounded=verify_entailment(c, retrieved_contexts))
        for c in claims
    ]`,
          metrics: "Zero unsupported claims delivered in evaluation benchmarks",
        },
      ],
      engineeringChallenges: [
        {
          challenge: "Dense Search Blindspots on Technical Identifiers",
          whyItHappens:
            "Embedding models compress high-level semantic meaning into continuous vector representations. Queries for specific configuration flags (e.g. 'Standard_B1ms') return conceptual synonyms rather than the exact identifier.",
          engineeringResolution:
            "Paired pgvector HNSW with BM25s sparse lexical indexing and implemented α-Weighted Reciprocal Rank Fusion to synthesize dense semantic candidates with exact alphanumeric token hits.",
          outcomeMetric: "Achieved 100% recall on technical error codes and variable lookups.",
        },
        {
          challenge: "CPU Latency Bottlenecks During Cross-Encoder Reranking",
          whyItHappens:
            "Running full cross-attention across candidate document pairs on CPU hardware added 400–600ms of latency per query, unacceptable for interactive applications.",
          engineeringResolution:
            "Analyzed score distributions and established an adaptive bypass heuristic: when the leading RRF score exceeds the second candidate by a ratio of ≥1.35, the cross-encoder is safely bypassed.",
          outcomeMetric: "Cut median query latency by 60% with zero measurable loss in MRR@10.",
        },
      ],
    },
  ] as FlagshipProject[],

  skills: {
    distributed: [
      { name: "Apache Kafka (KRaft)", level: "Production", detail: "Partition keys, consumer rebalancing, transactional commits" },
      { name: "PostgreSQL 17", level: "Production", detail: "Transactional outbox, SKIP LOCKED, indexing, vacuum tuning" },
      { name: "Redis 7.2", level: "Production", detail: "Distributed locks (SET NX), two-tier idempotency, cache eviction" },
      { name: "Resilience4j", level: "Production", detail: "Circuit breakers, rate limiters, retry jitter strategies" },
      { name: "Quartz Clustered", level: "Production", detail: "Distributed job scheduling, database-backed locking" },
      { name: "pgvector", level: "Production", detail: "HNSW indexing, cosine similarity, hybrid query execution" },
    ],
    backend: [
      { name: "Java (17 / 21 / 25)", level: "Expert", detail: "Virtual Threads, memory model, concurrency primitives, streams" },
      { name: "Spring Boot 4", level: "Expert", detail: "Auto-configuration, Spring Data JPA, Spring Security, Actuator" },
      { name: "FastAPI & Python 3.12", level: "Advanced", detail: "Async IO, Pydantic v2, dependency injection, Starlette" },
      { name: "Hibernate / JPA", level: "Advanced", detail: "N+1 prevention, entity lifecycle, batch queries, connection pooling" },
      { name: "JAX-RS / RESTful APIs", level: "Advanced", detail: "HTTP semantics, OpenAPI 3.0, custom filter pipelines" },
      { name: "Apache PDFBox 3.0", level: "Advanced", detail: "Byte-level document parsing, ISO 32000-1 security analysis" },
    ],
    aiSystems: [
      { name: "Model Context Protocol (MCP)", level: "Advanced", detail: "Tool schema bounding, context overflow prevention" },
      { name: "Hybrid Retrieval (Dense + Sparse)", level: "Advanced", detail: "pgvector HNSW + BM25s sparse lexical search" },
      { name: "Reciprocal Rank Fusion (α-RRF)", level: "Advanced", detail: "Heterogeneous score unification, ranking algorithms" },
      { name: "Cross-Encoder Reranking", level: "Advanced", detail: "Attention reranking, adaptive score bypass heuristics" },
      { name: "LLM APIs & Automation", level: "Advanced", detail: "Google Gemini 3.5, Groq LPUs, n8n multi-node agent workflows" },
    ],
    cloudObservability: [
      { name: "Microsoft Azure", level: "Proficient", detail: "Azure Container Apps, Container Registry, Blob Storage" },
      { name: "Docker & Containerization", level: "Advanced", detail: "Multi-stage builds, minimal distroless images, compose" },
      { name: "Prometheus & Grafana", level: "Advanced", detail: "Custom metrics, JVM telemetry, latency percentiles, dashboards" },
      { name: "Grafana Loki & Tempo", level: "Advanced", detail: "Structured log aggregation, distributed trace context propagation" },
      { name: "k6 Load Testing", level: "Advanced", detail: "Virtual user ramp-up scripts, threshold gates, stress testing" },
      { name: "JUnit 5 & Mockito", level: "Expert", detail: "Unit testing, integration testing, Testcontainers, regression suites" },
      { name: "GitHub Actions", level: "Advanced", detail: "CI/CD automated test gates, multi-environment deployments" },
    ],
    coreCs: [
      { name: "Data Structures & Algorithms", level: "Expert", detail: "850+ problems solved, LeetCode 1534 contest rating" },
      { name: "Operating Systems", level: "Advanced", detail: "Processes, virtual memory, threads, synchronization, scheduler" },
      { name: "Computer Networks", level: "Advanced", detail: "TCP/IP, HTTP/1.1-3, TLS handshake, socket lifecycle, DNS" },
      { name: "Database Internals", level: "Advanced", detail: "ACID guarantees, WAL, B-Trees, transaction isolation levels" },
    ],
  },

  experience: [
    {
      company: "Accenture",
      role: "Associate Software Engineer",
      period: "Oct 2025 – July 2026",
      location: "Hyderabad, India",
      type: "Full-Time",
      summary:
        "Focused on large-scale SAP application server telemetry diagnostics, system reliability, and automated operational forensics.",
      bullets: [
        "Diagnosed system anomalies and memory bottlenecks across multi-node SAP application servers by analyzing work process utilization and error logs.",
        "Triaged production incidents using Power BI and ICM operational dashboards, investigating CPU and memory telemetry to identify root causes.",
        "Automated repetitive operational workflows using Python and AI tooling, parsing exported SAP short dumps (ST22) to cut daily audit time by 60%.",
      ],
      technologies: ["Python", "SAP Application Servers", "Power BI", "ICM Dashboards", "Telemetry Analysis", "Log Forensics"],
    },
  ] as ExperienceItem[],

  education: [
    {
      institution: "Gokaraju Rangaraju Institute of Engineering & Technology",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      period: "Nov 2021 – May 2025",
      location: "Hyderabad, India",
      grade: "9.21 CGPA",
      highlights: [
        "Specialized in core systems, distributed architectures, algorithms, and database management.",
        "Graduated with distinction (9.21 CGPA) with consistent academic honors across all semesters.",
      ],
    },
  ] as EducationItem[],

  milestones: [
    {
      title: "GATE Computer Science 2025",
      badge: "AIR 7912",
      description: "Achieved All India Rank 7912 in the national Graduate Aptitude Test in Engineering for Computer Science, demonstrating rigorous mastery of core computer science fundamentals.",
    },
    {
      title: "LeetCode & GeeksforGeeks",
      badge: "850+ Problems / 500-Day Streak",
      description: "Maintained a continuous 500-day problem-solving streak with an active contest rating of 1534, solving complex problems across graphs, dynamic programming, trees, and concurrency.",
    },
    {
      title: "Production Open Source Contributor",
      badge: "48,000+ Upstream Stars",
      description: "Code contributions merged and running in production across Traccar GPS tracking platform and Stirling-PDF document processing engine.",
    },
  ],

  engineeringLab: {
    title: "Morning Tech Pulse",
    tagline: "Autonomous Executive Technical Briefing Engine",
    githubUrl: "https://github.com/vivek-kanugula/morning-tech-pulse",
    workflowNodes: 9,
    costPerRun: "$0.00 compute cost",
    stack: ["n8n", "Python", "GitHub Actions", "Groq API (LPUs)", "ReportLab", "Gmail SMTP"],
    summary:
      "Engineered an autonomous multi-node n8n workflow orchestrated via GitHub Actions. Queries developer signals across GitHub trending repositories and Hacker News, routes them through Groq LPUs for daily synthesis, and dynamically compiles structured, publication-grade 3-page executive PDFs delivered via Gmail SMTP.",
    highlights: [
      "9-node autonomous n8n workflow executing daily on schedule",
      "Dynamic PDF typesetting engine generated via Python ReportLab",
      "Production-grade pipeline running serverless with zero cloud hosting bills",
    ],
  },
};
