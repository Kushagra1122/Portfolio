import type { SiteContent } from "@/types/content";

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kushagratiwari.com",
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
      "Recent work includes an MCP server with OAuth 2.0 and SSO, Google Chat and Slack apps, crash-safe file sync for an open-source AI platform, local-first memory systems, and AWS-backed services with CI/CD.",
      "I'm studying Electrical and Electronics Engineering at NITK Surathkal, and I'm looking for software roles where I can own systems from design through launch.",
    ],
  },
  experience: [
    {
      company: "Magi",
      role: "Software Development Engineer Intern",
      period: "Apr 2026 – Oct 2026",
      location: "Remote",
      summary:
        "Google Chat and Slack apps, the platform MCP server, and notification delivery for an AI marketing platform.",
      highlights: [
        "Built the @Magi Google Chat and Slack apps (slash commands, @mentions, interactive cards) for briefs, brand audits, knowledge search, and approvals, on a transport-neutral Concierge layer so Chat, Slack, Asana, and the web app share one service; verified inbound requests via Google-signed JWTs.",
        "Owned the platform's MCP server: 59 schema-validated tools across 8 domains with RBAC, secured by OAuth 2.0 (PKCE, refresh tokens, RFC 7591 dynamic client registration) and Microsoft Entra ID SSO.",
        "Added room-scoped notification delivery with retry/backoff and permanent-failure cancellation, and shipped Sanity CMS, Asana, and competitive-intelligence agent integrations; 150+ commits across backend and frontend, backed by 850+ tests.",
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
      period: "Dec 2025 – Apr 2026",
      location: "Remote",
      summary:
        "Electron desktop app, crash-safe file sync, and cloud connectors for an open-source AI platform.",
      highlights: [
        "Merged 31 pull requests into an open-source AI platform (3.2k+ GitHub stars); owned the Electron desktop app, its build and packaging pipeline, and a WebSocket proxy gateway with path-based access control.",
        "Engineered crash-safe local file synchronization using file watchers, a write-ahead journal, resumable batch cursors, deduplication windows, and poison-batch quarantine, feeding Python ingestion services; covered by 250+ tests.",
        "Shipped 5 cloud storage connectors (AWS S3, GCS, Azure Blob, Azure Files, GitLab) with revision-based change detection, and added a CI integration-test workflow that gates every pull request.",
      ],
    },
    {
      company: "Acredge",
      role: "Software Development Engineer Intern",
      period: "Aug 2025 – Dec 2025",
      location: "Remote",
      summary:
        "Retrieval latency, WhatsApp and web assistant channels, and recommendations for real-estate search.",
      highlights: [
        "Cut property-search retrieval latency by 60% by parallelizing vector and keyword retrieval, collapsing ranking stages, and removing blocking external API calls.",
        "Extended the AI property-enquiry assistant to website and WhatsApp channels using webhook-driven inbound message processing on the WhatsApp Business API.",
        "Built personalized property recommendations on Recombee by streaming user–item interaction events, and automated workflows across Google Sheets, email, and internal APIs.",
      ],
    },
    {
      company: "LeastAction Labs",
      role: "Software Development Engineer Intern",
      period: "Apr 2025 – Aug 2025",
      location: "Remote",
      summary:
        "Product surfaces, execution APIs, and AWS deployment for a self-hosted data workflow platform.",
      highlights: [
        "Shipped 3 core product surfaces of a self-hosted data workflow platform in React: pipeline authoring, embedded editing, and live execution output.",
        "Unified task orchestration behind a validated API contract to trigger and track sandboxed runs, returning workspace state, execution metadata, and job results.",
        "Deployed the marketplace and core platform to production on AWS EC2 with containerized Docker builds and a CI/CD pipeline, configuring Nginx as the reverse proxy routing traffic to 2 Linux services.",
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
        "Built a zero-dependency Go web framework on the standard net/http stack, using generics for compile-time type-safe handlers, route groups, middleware, and dependency injection.",
        "Auto-generated OpenAPI 3.1 specs and interactive API docs from typed handler definitions, with RFC 9457 problem-details error responses.",
        "Implemented request binding and validation for path, query, header, cookie, and body parameters with custom validators; 43 tests including fuzzing and benchmarks.",
      ],
      technologies: ["Go", "net/http", "OpenAPI 3.1", "Generics", "Validation", "Dependency Injection", "CLI"],
      github: "https://github.com/gapi-org/gapi",
    },
    {
      title: "VaultLens",
      description:
        "A local-first memory engine that indexes desktop context with SQLite, embeddings, semantic search, and citations.",
      period: "May 2026",
      featured: true,
      highlights: [
        "Built a local-first RAG engine that indexes desktop files into SQLite + sqlite-vec for natural-language search using local embedding models via Ollama.",
        "Implemented semantic chunking, metadata extraction, mandatory source citations, and task extraction to keep LLM answers grounded in indexed data.",
        "Enforced filesystem isolation via path canonicalization, symlink-escape prevention, and credential-file exclusion, with per-query privacy receipts and 73 tests.",
      ],
      technologies: ["Electron", "TypeScript", "SQLite", "sqlite-vec", "RAG", "Embeddings", "Ollama"],
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
      items: ["Go", "TypeScript", "JavaScript", "Python", "SQL", "C++", "Rust"],
    },
    {
      label: "Backend and APIs",
      items: ["Node.js", "NestJS", "Express.js", "FastAPI", "Django", "REST APIs", "WebSockets", "gRPC", "Celery", "BullMQ", "OAuth 2.0", "SSO", "RBAC"],
    },
    {
      label: "AI",
      items: ["MCP", "AI Agents", "LLM Tool Calling", "RAG", "Embeddings", "Vector Search", "Ollama", "LangChain", "LangGraph"],
    },
    {
      label: "Data and Messaging",
      items: ["PostgreSQL", "Redis", "MongoDB", "SQLite", "Kafka", "Firebase"],
    },
    {
      label: "Cloud and DevOps",
      items: ["AWS (EC2, S3)", "Azure", "GCP", "Docker", "Kubernetes", "Nginx", "Linux", "CI/CD", "GitHub Actions"],
    },
    {
      label: "Frontend and Mobile",
      items: ["React", "Next.js", "Electron", "Material UI", "React Native", "Flutter", "Swift"],
    },
    {
      label: "Concepts",
      items: ["System Design", "Distributed Systems", "Event-Driven Architecture", "TCP/IP", "DNS", "TLS", "Unit/Integration Testing"],
    },
  ],
  education: [
    {
      school: "National Institute of Technology Karnataka (NITK), Surathkal",
      degree: "B.Tech in Electrical and Electronics Engineering",
      period: "Aug 2023 – May 2027",
      detail: "CGPA: 7.14/10",
    },
  ],
  cta: {
    headline: "Bring me into the part of the product that has to hold.",
    body: "Open to backend, software, and applied AI internships or new grad roles where ownership matters.",
  },
};
