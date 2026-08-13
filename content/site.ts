import type { SiteContent } from "@/types/content";

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.kushagratiwari.xyz",
  name: "Kushagra Tiwari",
  description:
    "Kushagra Tiwari is a software engineer building APIs, automation runtimes, retrieval systems, and reliable product infrastructure.",
  locale: "en_US",
} as const;

export const content: SiteContent = {
  name: "Kushagra Tiwari",
  title: "Software Engineer · Backend Systems · Applied AI",
  tagline: "Systems-minded software for products that need to keep working.",
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
    headline: "I work closest to the parts users rarely see, but always feel.",
    paragraphs: [
      "I build service layers, automation runtimes, retrieval paths, and developer-facing tools across TypeScript, Go, and Python.",
      "Recent work includes recurring job schedulers, SaaS connectors, local-first memory systems, secure desktop-to-cloud bridges, and AWS-backed services with CI/CD.",
      "I'm studying Electrical and Electronics Engineering at NITK Surathkal, and I'm looking for software roles where I can own systems from design through launch.",
    ],
  },
  experience: [
    {
      company: "Magi",
      role: "Software Development Engineer Intern",
      period: "Apr 2026 – Present",
      location: "Remote",
      summary:
        "Recurring automation, workflow state, and backend APIs for agent-triggered jobs.",
      highlights: [
        "Built an event-driven scheduler covering recurring jobs, delayed execution, contextual dispatch, retries, and recovery.",
        "Integrated scheduler execution with a workflow orchestrator to chain tasks, manage workflow state, and launch agent-triggered jobs.",
        "Designed REST APIs for competitive intelligence, content pipelines, job lifecycle management, and schema-validated MCP tools.",
      ],
    },
    {
      company: "Spoken Tutorial",
      role: "AI Intern",
      period: "Dec 2025 – Present · 8 mos",
      location: "Mumbai, Maharashtra, India · Remote",
      summary:
        "Educational agent workflows, course generation, and secure internal tools.",
      highlights: [
        "Designed course outline generation flows for personalized academic material.",
        "Built context-aware conversational agents for multi-turn academic guidance.",
        "Implemented internal tooling with authentication and domain-level access controls.",
        "Optimized agent workflows and prompt routing for faster, more relevant responses.",
      ],
    },
    {
      company: "PipesHub",
      role: "Software Development Engineer Intern",
      period: "Jan 2026 – Jun 2026",
      location: "Remote",
      summary:
        "SaaS connectors and a secure Electron bridge between local files and cloud workflows.",
      highlights: [
        "Built SaaS connectors that linked enterprise apps with search, agents, workflow automation, and tool execution.",
        "Designed an Electron bridge for filesystem access, sandboxed execution, host orchestration, and desktop-to-cloud workflows.",
        "Built recursive file synchronization pipelines with delta tracking, resumability, conflict-safe writes, metadata handling, and failure recovery; applied schema-driven LLM action validation for deterministic tool execution.",
      ],
    },
    {
      company: "Acredge",
      role: "Software Development Engineer Intern",
      period: "Nov 2025 – Apr 2026",
      location: "Remote",
      summary:
        "Retrieval latency work, orchestration flows, and recommendation pipelines for real-estate data.",
      highlights: [
        "Reduced retrieval latency by 60% by parallelizing search pipelines, optimizing ranking stages, and eliminating API response bottlenecks.",
        "Built an orchestration system for real-estate workflows using n8n, LLM APIs, automation tools, and webhooks.",
        "Executed recommendation pipelines using graph databases to enable relevance ranking, personalization, behavioral recommendations, and improved retrieval quality.",
      ],
    },
    {
      company: "LeastActions",
      role: "Software Development Engineer Intern",
      period: "Oct 2025 – Feb 2026",
      location: "Remote",
      summary:
        "Sandboxed execution APIs, collaborative IDE workflows, and AWS deployment work.",
      highlights: [
        "Built backend APIs for sandboxed code execution and collaborative IDE workflows, including workspace state, execution metadata, and job results.",
        "Structured modular API contracts, validation layers, and request-state flows to improve service stability and reduce regressions.",
        "Deployed services to AWS EC2 through CI/CD pipelines, configuring Linux, Nginx, reverse proxying, and production process management.",
      ],
    },
    {
      company: "Bait AI",
      role: "Freelance Developer",
      period: "Dec 2025 – Jan 2026 · 2 mos",
      location: "Remote",
      summary:
        "Interview platform work across transcription, media storage, and structured capture flows.",
      highlights: [
        "Developed an interview system using Django for backend orchestration and API management.",
        "Integrated OpenAI Whisper with PCM16 audio pipelines for accurate real-time speech-to-text transcription.",
        "Designed scalable media storage using Google Cloud Storage for interview audio and metadata.",
        "Implemented end-to-end interview workflows covering capture, transcription, and response persistence.",
      ],
    },
    {
      company: "Qlue",
      role: "iOS Developer",
      period: "Jun 2025 – Aug 2025 · 3 mos",
      location: "Remote",
      summary:
        "Native iOS application work across UIKit, SwiftUI, authentication, notifications, and performance.",
      highlights: [
        "Built native iOS application features using Swift, UIKit, and SwiftUI following MVVM architecture.",
        "Integrated REST APIs, authentication flows, and persistent local storage.",
        "Worked across notification flows, app performance, memory usage, and UI responsiveness.",
      ],
    },
    {
      company: "Advista.live",
      role: "Frontend Developer",
      period: "Jan 2025 – Feb 2025 · 2 mos",
      location: "Remote",
      summary:
        "Responsive React interfaces translated from Figma with performance-conscious routing and state management.",
      highlights: [
        "Built modular, responsive UI with React.js and Tailwind CSS.",
        "Optimized performance using code splitting, lazy loading, and refined routing.",
        "Transformed Figma designs into interactive interfaces with efficient state management.",
      ],
    },
    {
      company: "Synkerr",
      role: "Web Developer",
      period: "May 2024 – Oct 2024 · 6 mos",
      location: "Remote",
      summary:
        "Web development internship across responsive interfaces, frontend implementation, and product-facing pages.",
      highlights: [
        "Built responsive web pages and reusable UI sections for product experiences.",
        "Implemented frontend layouts with attention to cross-device behavior and interaction polish.",
        "Collaborated on iterative improvements to page structure, styling, and user-facing content.",
      ],
    },
  ],
  projects: [
    {
      title: "Gapi",
      description:
        "A Go web framework exploring typed handlers, OpenAPI 3.1 generation, validation, and CLI ergonomics.",
      period: "Jun 2026 – Jul 2026",
      featured: true,
      highlights: [
        "Built on net/http with generic handlers, route groups, middleware, dependency injection, and type-safe routing APIs.",
        "Added request binding and validation for path, query, header, cookie, and body parameters with validation tags and custom validators.",
        "Implemented OpenAPI 3.1 generation, interactive API documentation, RFC 9457 problem details, response serialization, security metadata, testing helpers, and CLI tooling.",
      ],
      technologies: ["Go", "net/http", "OpenAPI 3.1", "Generics", "Validation", "Dependency Injection", "CLI"],
      github: "https://github.com/gapi-org/gapi",
    },
    {
      title: "VaultLens",
      description:
        "A local-first memory engine that indexes desktop context with SQLite, embeddings, semantic search, and citations.",
      period: "May 2026 – Jun 2026",
      featured: true,
      highlights: [
        "Built a private, local-first memory engine using Electron, TypeScript, SQLite, vector embeddings, semantic search, and desktop content indexing.",
        "Modeled RAG indexing and retrieval pipelines with chunking, metadata extraction, evidence-grounded generation, and source citations.",
        "Launched retrieval tracing, task extraction, timeline reconstruction, and context-aware synthesis to transform indexed content into actionable memory workflows.",
      ],
      technologies: ["Electron", "TypeScript", "SQLite", "RAG", "Embeddings", "Vector Search"],
      github: "https://github.com/Kushagra1122/VaultLens",
    },
    {
      title: "PokeShoot",
      description:
        "A realtime multiplayer game built around low-latency rooms, player state, and on-chain asset flows.",
      period: "Oct 2025 – Nov 2025",
      highlights: [
        "Built low-latency multiplayer gameplay loops with Phaser.js rendering and Socket.io event synchronization.",
        "Implemented SIWE authentication, ELO ranking, player state, and realtime room/session management.",
        "Integrated Moonbeam smart contracts, IPFS asset storage, and XCM cross-chain NFT transfer flows.",
      ],
      technologies: ["React", "Phaser.js", "Node.js", "Solidity", "Moonbeam"],
      github: "https://github.com/Kushagra1122/Pokeshoot",
    },
    {
      title: "ReplayX",
      description:
        "An incident response workflow that turns failures into diagnosis, fix plans, verification notes, and postmortems.",
      period: "Apr 2026",
      highlights: [
        "Built an incident orchestration pipeline covering intake, skill matching, repro, diagnosis, challenger review, fix planning, and artifact generation.",
        "Implemented a Next.js dashboard with replay and live-run modes so incidents can be visualized safely during demos.",
        "Added Slack intake and WebSocket updates to move incidents from report to structured engineering workflow.",
        "Generated reusable incident knowledge, postmortems, and verification plans from each analyzed failure.",
      ],
      technologies: ["TypeScript", "Next.js", "WebSockets", "Slack", "Codex SDK"],
      github: "https://github.com/Kushagra1122/ReplayX",
    },
    {
      title: "Approval Orchestrator",
      description:
        "Approval workflow automation with audit history, rollback paths, retries, and multi-channel routing.",
      period: "Sep 2025 – Oct 2025",
      highlights: [
        "Designed multi-step approval workflows with audit trails, rollback paths, and stateful decision history.",
        "Implemented Slack, email, and web notification channels for approval routing and operational visibility.",
        "Built retry scheduling, cron-based recovery, and a Recharts dashboard for workflow monitoring.",
      ],
      technologies: ["Node.js", "React", "SQLite", "Socket.io"],
      github: "https://github.com/Kushagra1122/approval-orchestrator",
    },
    {
      title: "StreamSync",
      description:
        "Realtime video streaming with WebRTC, chat, donations, room metadata, and reconnect-aware signaling.",
      period: "Mar 2025 – Jul 2025",
      highlights: [
        "Built WebRTC-based live streaming with concurrent rooms, chat, donations, and screen-sharing workflows.",
        "Improved signaling reliability with Socket.io session events, peer negotiation handling, and reconnect-aware flows.",
        "Designed Node.js and MongoDB backend paths for stream metadata, chat persistence, and creator interactions.",
      ],
      technologies: ["Node.js", "React", "MongoDB", "WebRTC", "Socket.io"],
      github: "https://github.com/Kushagra1122/StreamSync",
    },
  ],
  skills: [
    {
      label: "Languages",
      items: ["Go", "TypeScript", "JavaScript", "Python", "SQL", "C++"],
    },
    {
      label: "Backend and APIs",
      items: ["Node.js", "NestJS", "Express.js", "FastAPI", "Django", "REST APIs", "WebSockets", "RBAC"],
    },
    {
      label: "AI",
      items: ["Gen AI", "RAG", "AI Agents", "MCP", "LangChain", "LangGraph", "Tool Calling", "Embeddings", "Vector Search", "Semantic Search"],
    },
    {
      label: "Systems and Data",
      items: ["Distributed Systems", "Event-Driven Systems", "Async Workers", "Job Queues", "Cron Schedulers", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Kafka", "Celery", "BullMQ", "Firebase"],
    },
    {
      label: "Cloud and DevOps",
      items: ["AWS EC2", "Docker", "Linux", "Nginx", "Git", "CI/CD"],
    },
    {
      label: "Frontend",
      items: ["React", "Next.js", "Electron", "React Native", "Flutter", "Swift"],
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
    headline: "Bring me into the part of the product that has to hold.",
    body: "Open to backend, software, and applied AI internships or new grad roles where ownership matters.",
  },
};
