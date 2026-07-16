import type { SiteContent } from "@/types/content";

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kushagraportfolio12.netlify.app",
  name: "Kushagra Tiwari",
  description:
    "Software engineer building event-driven systems, AI workflows, and production backends. Portfolio of Kushagra Tiwari.",
  locale: "en_US",
} as const;

export const content: SiteContent = {
  name: "Kushagra Tiwari",
  title: "Software Development Engineer",
  tagline: "Event-driven systems. AI workflows. Production backends.",
  location: "India",
  email: "kushagratiwari24@gmail.com",
  phone: "+91 8318661731",
  resumePath: "/resume/Kushagra-Tiwari.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/Kushagra1122" },
    { label: "LinkedIn", href: "https://linkedin.com/in/kushagra-tiwari-aa2354283" },
    { label: "Email", href: "mailto:kushagratiwari24@gmail.com" },
  ],
  story: {
    eyebrow: "About",
    headline: "I design reliable systems that agents and humans can both trust.",
    paragraphs: [
      "I'm a Software Development Engineer focused on event-driven schedulers, AI orchestration, and secure desktop-to-cloud bridges. I care about latency, correctness, and APIs that stay predictable under load.",
      "Recently I've shipped recurring job systems, SaaS connectors for AI search, retrieval pipelines that cut latency by 60%, and local-first memory engines with RAG.",
      "I study Electrical and Electronics Engineering at NITK Surathkal, and I build in TypeScript, Go, Python, and systems tooling every day.",
    ],
  },
  experience: [
    {
      company: "Magi",
      role: "Software Development Engineer Intern",
      period: "Apr 2026 – Present",
      location: "Remote",
      summary:
        "Event-driven scheduling and AI workflow APIs exposed as MCP tools.",
      highlights: [
        "Built an event-driven scheduler for recurring jobs, delayed execution, distributed automation, contextual dispatch, and retries.",
        "Integrated scheduler execution with a workflow orchestrator for task chaining, workflow state, and agent-triggered jobs.",
        "Designed backend APIs for AI generation workflows, competitive intelligence, content pipelines, and job lifecycle state.",
        "Exposed workflows as MCP tools so agents can discover APIs, validate inputs, and execute backend capabilities.",
      ],
    },
    {
      company: "PipesHub",
      role: "Software Development Engineer Intern",
      period: "Jan 2026 – Jun 2026",
      location: "Remote",
      summary:
        "Production SaaS connectors and a secure Electron filesystem bridge.",
      highlights: [
        "Built production-grade SaaS connectors for AI search, agents, workflow automation, and tool execution.",
        "Engineered a secure Electron bridge for filesystem access, sandboxed execution, and desktop-to-cloud workflows.",
        "Designed recursive file sync with delta tracking, resumability, conflict-safe writes, and failure recovery.",
        "Implemented schema-driven LLM action validation for deterministic, safe tool execution.",
      ],
    },
    {
      company: "Acredge",
      role: "Software Development Engineer Intern",
      period: "Nov 2025 – Apr 2026",
      location: "Remote",
      summary:
        "Retrieval, ranking, and real-estate AI orchestration at production scale.",
      highlights: [
        "Reduced retrieval latency by 60% by parallelizing search pipelines and removing ranking bottlenecks.",
        "Built an AI orchestration system for real-estate workflows using n8n, LLM APIs, ranking services, and webhooks.",
        "Implemented Recombee pipelines for relevance ranking, personalization, and retrieval quality.",
        "Resolved production bottlenecks across retrieval, orchestration, recommendations, and API response paths.",
      ],
    },
    {
      company: "LeastActions",
      role: "Software Development Engineer Intern",
      period: "Oct 2025 – Feb 2026",
      location: "Remote",
      summary:
        "Sandboxed code execution APIs and AWS production hardening.",
      highlights: [
        "Built backend APIs for sandboxed code execution, collaborative IDE workflows, and job results.",
        "Designed modular API contracts, validation layers, and request flows to reduce regressions.",
        "Deployed services on AWS EC2 with CI/CD, Nginx reverse proxying, and process management.",
        "Improved reliability by refining APIs, simplifying deployments, and debugging runtime failures.",
      ],
    },
  ],
  projects: [
    {
      title: "Gapi",
      description:
        "FastAPI-inspired Go framework with typed generic handlers, OpenAPI 3.1, and CLI tooling.",
      period: "Jun 2026 – Jul 2026",
      featured: true,
      highlights: [
        "Typed generic handlers, route helpers, middleware, groups, and idiomatic net/http.",
        "Request binding for path, query, header, cookie, body with validation tags.",
        "OpenAPI 3.1 generation, docs UIs, RFC 9457 problem details, and testing helpers.",
      ],
      technologies: ["Go", "net/http", "OpenAPI 3.1", "CLI", "Validation"],
      github: "https://github.com/Kushagra1122",
    },
    {
      title: "VaultLens",
      description:
        "Local-first AI memory engine with SQLite, embeddings, semantic retrieval, and citations.",
      period: "May 2026 – Jun 2026",
      featured: true,
      highlights: [
        "Private desktop indexing with vector embeddings and local storage.",
        "RAG pipelines with chunking, metadata extraction, and evidence-grounded generation.",
        "Retrieval tracing, task extraction, timeline reconstruction, and memory workflows.",
      ],
      technologies: ["Electron", "TypeScript", "SQLite", "RAG", "Embeddings"],
      github: "https://github.com/Kushagra1122",
    },
    {
      title: "PokeShoot",
      description:
        "Real-time multiplayer game with Phaser.js, Socket.io, and Moonbeam NFT contracts.",
      period: "Oct 2025 – Nov 2025",
      highlights: [
        "ELO ranking, SIWE auth, IPFS storage, and XCM cross-chain NFT transfers.",
      ],
      technologies: ["React", "Phaser.js", "Node.js", "Solidity", "Moonbeam"],
      github: "https://github.com/Kushagra1122/PokeShoot",
    },
    {
      title: "Approval Orchestrator",
      description:
        "Workflow automation with audit trails, rollback, and multi-channel approvals.",
      period: "Sep 2025 – Oct 2025",
      highlights: [
        "Slack/Email/Web notifications, Recharts dashboard, cron-based retries.",
      ],
      technologies: ["Node.js", "React", "SQLite", "Socket.io"],
      github: "https://github.com/Kushagra1122/approval-orchestrator",
    },
    {
      title: "StreamSync",
      description:
        "Low-latency real-time video streaming with chat, donations, and WebRTC.",
      period: "Mar 2025 – Jul 2025",
      highlights: [
        "Concurrent streams, screen sharing, and improved WebRTC signaling.",
      ],
      technologies: ["Node.js", "React", "MongoDB", "WebRTC", "Socket.io"],
      github: "https://github.com/Kushagra1122/StreamSync",
    },
  ],
  skills: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "C++", "Bash"],
    },
    {
      label: "Backend",
      items: ["Node.js", "NestJS", "Express.js", "FastAPI", "Django", "REST", "WebSockets", "JWT", "RBAC"],
    },
    {
      label: "AI",
      items: ["RAG", "AI Agents", "MCP", "LangChain", "LangGraph", "Tool Calling", "Embeddings", "Vector Search"],
    },
    {
      label: "Systems",
      items: ["Redis", "Kafka", "Celery", "BullMQ", "Job Queues", "Event-Driven Systems"],
    },
    {
      label: "Databases",
      items: ["PostgreSQL", "MongoDB", "SQLite", "Redis", "Firebase", "Vector DBs"],
    },
    {
      label: "DevOps",
      items: ["Docker", "AWS EC2", "Linux", "Nginx", "GitHub Actions", "CI/CD"],
    },
    {
      label: "Frontend",
      items: ["React", "Next.js", "Electron", "React Native", "Flutter", "Tailwind CSS"],
    },
  ],
  education: [
    {
      school: "National Institute of Technology Karnataka (NITK), Surathkal",
      degree: "B.Tech in Electrical and Electronics Engineering",
      period: "Aug 2023 – Present",
      detail: "CGPA: 7.14/10",
    },
  ],
  cta: {
    headline: "Let's build something precise.",
    body: "Open to full-time and internship opportunities in backend, AI systems, and platform engineering.",
  },
};
