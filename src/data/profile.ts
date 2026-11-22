export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  objective: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
}

export interface OpenSourceItem {
  id: string;
  repo: string;
  repoUrl: string;
  title: string;
  status: 'Merged' | 'Open / Under Review';
  prNumber: string;
  prUrl: string;
  issueNumber: string;
  issueUrl: string;
  techStack: string[];
  summary: string;
  details: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
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
  location: "Hyderabad, India",
  availability: "Available for Software Engineering Roles",
  email: "connectwithvivekk@gmail.com",
  phone: "+91 8639216315",
  socials: {
    github: "https://github.com/vivek-kanugula",
    linkedin: "https://linkedin.com/in/vivek-kanugula",
    leetcode: "https://leetcode.com/u/21241A0595/",
  },
  bio: "Software Engineer focused on building dependable backend systems, event-driven services, and practical AI integrations. Experienced in Java, Spring Boot, distributed data patterns, and open-source contributions.",

  projects: [
    {
      id: "notify",
      title: "Notify",
      tagline: "Multi-Tenant Notification Delivery Service",
      objective: "Decouple notification delivery (Email, Webhook, and In-App) from core business services so that slow third-party gateways and network drops never block customer requests or lose messages.",
      description: "A centralized notification gateway that accepts incoming alerts and reliably dispatches them across multiple delivery channels. It persists incoming messages to an outbox before acknowledgment, streams them through Kafka topics partitioned by tenant, and suppresses duplicate retries using distributed caching.",
      techStack: ["Java 25", "Spring Boot", "Apache Kafka", "PostgreSQL", "Redis", "Docker", "Azure"],
      githubUrl: "https://github.com/vivek-kanugula/Notify",
      liveDemoUrl: "https://notify-demo.azurecontainerapps.io",
    },
    {
      id: "queryfusion",
      title: "QueryFusion",
      tagline: "Hybrid Retrieval-Augmented Generation (RAG) Platform",
      objective: "Eliminate search blindspots in AI question-answering systems by pairing semantic meaning with exact keyword matching.",
      description: "An evaluation-driven search platform that processes queries using both vector similarity search (for conceptual understanding) and lexical BM25 search (for exact codes, error IDs, and identifiers). Results are fused, reranked for precision, and verified for factual accuracy before delivering answers.",
      techStack: ["Python", "FastAPI", "PostgreSQL (pgvector)", "BM25s", "Docker", "Azure"],
      githubUrl: "https://github.com/vivek-kanugula/QueryFusion",
      liveDemoUrl: "https://queryfusion-demo.azurecontainerapps.io",
    },
    {
      id: "morning-tech-pulse",
      title: "Morning Tech Pulse",
      tagline: "Automated Daily Technical Digest",
      objective: "Deliver curated, structured summaries of emerging software engineering and AI breakthroughs directly to subscriber inboxes every morning at zero operational cost.",
      description: "An automated workflow that monitors developer communities, extracts key technical discussions, synthesizes the updates into executive briefs using LLM APIs, and automatically formats and emails clean multi-page PDF digests on a daily schedule.",
      techStack: ["n8n", "Python", "GitHub Actions", "Groq API", "ReportLab", "Gmail SMTP"],
      githubUrl: "https://github.com/vivek-kanugula/morning-tech-pulse",
    },
  ] as ProjectItem[],

  openSource: [
    {
      id: "traccar",
      repo: "traccar/traccar",
      repoUrl: "https://github.com/traccar/traccar",
      title: "Query Bounding & Pagination for Telemetry REST APIs",
      status: "Merged",
      prNumber: "#6125",
      prUrl: "https://github.com/traccar/traccar/pull/6125",
      issueNumber: "#6102",
      issueUrl: "https://github.com/traccar/traccar/issues/6102",
      techStack: ["Java", "JAX-RS", "OpenAPI", "Gradle"],
      summary: "Implemented query limit and offset pagination across telemetry endpoints and data export engines.",
      details: "Addressed an issue where requesting historical device positions returned unbounded, massive datasets that could cause memory strain and context window overflows in automated tools. Added database-level offset and limit query bounding parameters to ensure safe, chunked data retrieval.",
    },
    {
      id: "stirling-pdf",
      repo: "Stirling-Tools/Stirling-PDF",
      repoUrl: "https://github.com/Stirling-Tools/Stirling-PDF",
      title: "Password-Protected PDF Security Inspection & Access Flags",
      status: "Open / Under Review",
      prNumber: "#8947",
      prUrl: "https://github.com/Stirling-Tools/Stirling-PDF/pull/8947",
      issueNumber: "#8947",
      issueUrl: "https://github.com/Stirling-Tools/Stirling-PDF/issues/8947",
      techStack: ["Java", "Spring Boot", "Apache PDFBox", "Gradle", "JUnit 5"],
      summary: "Diagnosed unhandled server errors on encrypted files, opened Issue #8947, and submitted PR #8947.",
      details: "Discovered that analyzing password-protected PDF files caused unhandled HTTP 400 server errors. Audited the underlying PDFBox library routines, identified the exception handling gap, and raised PR #8947 to handle encrypted documents gracefully, avoid application crashes, and properly surface document access permission flags.",
    },
  ] as OpenSourceItem[],

  skills: {
    languages: ["Java (17 / 21 / 25)", "Python", "SQL", "C / C++"],
    backend: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "FastAPI", "RESTful APIs"],
    dataAndDistributed: ["Apache Kafka", "PostgreSQL", "pgvector", "Redis", "Quartz Scheduler"],
    aiAndTools: ["Model Context Protocol (MCP)", "Hybrid RAG", "n8n Automation", "LLM APIs (Gemini, Groq)"],
    cloudAndDevOps: ["Microsoft Azure", "Docker", "GitHub Actions", "JUnit 5", "Mockito"],
    fundamentals: ["Data Structures & Algorithms", "Object-Oriented Design", "Operating Systems", "Computer Networks", "Database Management Systems"],
  },

  experience: [
    {
      company: "Accenture",
      role: "Associate Software Engineer",
      period: "Oct 2025 – July 2026",
      location: "Hyderabad, India",
      summary: "Worked on enterprise application server reliability, performance diagnostics, and operational workflow automation.",
      bullets: [
        "Monitored and diagnosed system anomalies across distributed SAP application servers to maintain high availability and prevent downtime.",
        "Conducted root-cause analysis on production incidents using telemetry dashboards and error log forensics.",
        "Built Python automation utilities to parse error dumps and streamline daily system health audits.",
      ],
      technologies: ["Python", "SAP Application Servers", "Power BI", "Log Forensics", "Telemetry"],
    },
  ] as ExperienceItem[],

  education: [
    {
      institution: "Gokaraju Rangaraju Institute of Engineering & Technology",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      period: "Nov 2021 – May 2025",
      location: "Hyderabad, India",
      grade: "CGPA: 9.21",
      highlights: [
        "Graduated with distinction (9.21 CGPA).",
        "Strong focus on Operating Systems, Distributed Systems, Data Structures, and Database Internals.",
      ],
    },
  ] as EducationItem[],

  achievements: [
    {
      title: "GATE Computer Science 2025",
      badge: "AIR 7912",
      description: "Achieved All India Rank 7912 in the Graduate Aptitude Test in Engineering for Computer Science, demonstrating solid fundamentals across core CS subjects.",
    },
    {
      title: "LeetCode & Problem Solving",
      badge: "850+ Solved",
      description: "Solved over 850 problems across LeetCode and GeeksforGeeks with a 500-day problem-solving streak and active contest participation.",
      url: "https://leetcode.com/u/21241A0595/",
    },
  ],
};
