export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  objective: string;
  description: string;
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
  summary: string;
  quantifiableMetric: string;
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

export interface InterestItem {
  title: string;
  subtitle: string;
  description: string;
}

export const PROFILE_DATA = {
  name: "Vivek Kanugula",
  role: "Software Engineer",
  specialization: "Java Backend, Distributed Systems & AI Tooling",
  location: "Hyderabad, India",
  availability: "Available for Software Engineering Roles",
  email: "connectwithvivekk@gmail.com",
  phone: "+91 8639216315",
  socials: {
    github: "https://github.com/vivek-kanugula",
    linkedin: "https://linkedin.com/in/vivek-kanugula",
    leetcode: "https://leetcode.com/u/21241A0595/",
  },
  bio: "I'm a software engineer who loves understanding how things actually work under the hood — whether that's tracing database internals, untangling distributed message queues, or experimenting with AI. Outside of engineering, I'm drawn to philosophy, enjoy watching great cinema, and am always curious about how humans and machines think.",

  projects: [
    {
      id: "notify",
      title: "Notify",
      tagline: "Reliable notification service built to handle high traffic without dropping alerts",
      objective: "Separate notification delivery (emails, webhooks, and alerts) from core services so slow third-party gateways or network blips never slow down user requests.",
      description: "An event-driven backend built with Java, Spring Boot, and Kafka. It uses PostgreSQL transactional outbox pattern to guarantee messages are safely recorded before dispatch, streams events partitioned by tenant, and suppresses duplicate retries using Redis caching.",
      techStack: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Redis", "Docker", "Azure"],
      githubUrl: "https://github.com/vivek-kanugula/Notify",
      liveDemoUrl: "https://notify-demo.azurecontainerapps.io",
    },
    {
      id: "queryfusion",
      title: "QueryFusion",
      tagline: "Smart search combining exact keyword matching with semantic AI search",
      objective: "Fix search blindspots where vector AI search fails on exact product codes or IDs, while basic keyword search misses conceptual meaning.",
      description: "A hybrid search platform that combines pgvector embeddings for conceptual search with BM25 lexical indexing for exact identifiers. Queries are fused and reranked to deliver answers that are both contextually relevant and factually exact.",
      techStack: ["Python", "FastAPI", "PostgreSQL (pgvector)", "BM25s", "Docker", "Azure"],
      githubUrl: "https://github.com/vivek-kanugula/QueryFusion",
      liveDemoUrl: "https://queryfusion-demo.azurecontainerapps.io",
    },
    {
      id: "morning-tech-pulse",
      title: "Morning Tech Pulse",
      tagline: "Automated daily tech & AI briefings delivered directly to my inbox",
      objective: "Stay on top of emerging engineering discussions, research, and trending repositories every morning without spending hours browsing feeds.",
      description: "An automated workflow built with n8n, Python, and Groq LLMs that collects top developer discussions from GitHub and tech communities, synthesizes the updates into clean executive digests, and emails them out every morning.",
      techStack: ["n8n", "Python", "GitHub Actions", "Groq API", "ReportLab", "Gmail SMTP"],
      githubUrl: "https://github.com/vivek-kanugula/morning-tech-pulse",
    },
  ] as ProjectItem[],

  openSource: [
    {
      id: "traccar-limit",
      repo: "traccar/traccar",
      repoUrl: "https://github.com/traccar/traccar",
      title: "Query Parameter Bounding for Positions Telemetry API",
      status: "Merged",
      prNumber: "#6125",
      prUrl: "https://github.com/traccar/traccar/pull/6125",
      issueNumber: "#6102",
      issueUrl: "https://github.com/traccar/traccar/issues/6102",
      summary: "Enforced defensive query parameter bounding on device position endpoints to prevent uncontrolled database fetches.",
      quantifiableMetric: "Bounded massive 17,000-record queries (~3 MB payload) to prevent server memory strain and downstream LLM context overflows.",
    },
    {
      id: "traccar-offset",
      repo: "traccar/traccar",
      repoUrl: "https://github.com/traccar/traccar",
      title: "Offset-Based Pagination for Historical Telemetry Endpoints",
      status: "Merged",
      prNumber: "#6126",
      prUrl: "https://github.com/traccar/traccar/pull/6126",
      issueNumber: "#5871",
      issueUrl: "https://github.com/traccar/traccar/issues/5871",
      summary: "Implemented backward-compatible offset pagination across historical device position queries and export routines.",
      quantifiableMetric: "Enabled chunked data retrieval across large telemetry streams, eliminating response timeouts on high-frequency device trackers.",
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
      summary: "Investigated, reported, and patched an unhandled server error during encrypted file security inspection.",
      quantifiableMetric: "Resolved unhandled HTTP 400 server crashes on encrypted uploads and correctly surfaced all 8 standard ISO 32000-1 document access flags.",
    },
  ] as OpenSourceItem[],

  skills: {
    languages: ["Java", "Python", "SQL"],
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
      summary: "Focused on keeping enterprise SAP servers healthy and responsive — troubleshooting server bottlenecks, digging into crash logs to find root causes, and writing Python tools to automate daily audit tasks.",
      bullets: [
        "Monitored enterprise application servers to identify memory bottlenecks and performance slowdowns before they affected operations.",
        "Investigated production incidents by analyzing system telemetry, work processes, and SAP short dumps (ST22).",
        "Wrote Python automation scripts to parse error logs automatically, cutting down the time required for routine morning system checks.",
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

  interests: [
    {
      title: "Under-the-Hood Curiosity",
      subtitle: "How things actually work",
      description: "I'm genuinely fascinated by what happens beneath high-level abstractions — whether it's understanding how database engines handle row locks, how the OS schedules threads, or how network packets route through distributed systems.",
    },
    {
      title: "Philosophy & Human Thought",
      subtitle: "Perspectives on reason & knowledge",
      description: "I enjoy reflecting on philosophical ideas — questions of ethics, reason, and how humans construct meaning. Thinking about these foundational questions keeps my thinking grounded, curious, and thoughtful beyond code.",
    },
    {
      title: "Cinema & Storytelling",
      subtitle: "Appreciating craft & narrative",
      description: "A passionate movie watcher. I appreciate great storytelling, nuanced character arcs, and creative direction in cinema. Good films offer a different kind of architectural beauty — structure, pacing, and human emotion.",
    },
    {
      title: "Continuous Learning in Tech",
      subtitle: "Always a student",
      description: "Technology evolves rapidly, but the fundamentals remain timeless. I love exploring emerging tools, reading open-source codebases, and building small experiments to test ideas from first principles.",
    },
  ] as InterestItem[],

  achievements: [
    {
      title: "GATE Computer Science 2025",
      badge: "AIR 7912",
      description: "Achieved All India Rank 7912 in the Graduate Aptitude Test in Engineering for Computer Science, demonstrating solid fundamentals across core CS subjects.",
    },
    {
      title: "LeetCode & Problem Solving",
      badge: "500+ Active Days",
      description: "Earned the 500-Day Badge on LeetCode representing 500+ active days of problem solving, with over 850 problems solved across competitive programming platforms.",
      url: "https://leetcode.com/u/21241A0595/",
    },
  ],
};
