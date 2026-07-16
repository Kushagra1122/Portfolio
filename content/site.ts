import type { SiteContent } from "@/types/content";

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kushagraportfolio12.netlify.app",
  name: "Kushagra Tiwari",
  description:
    "Backend, systems, and AI infrastructure engineer building reliable platforms, retrieval systems, and developer tools. Portfolio of Kushagra Tiwari.",
  locale: "en_US",
} as const;

export const content: SiteContent = {
  name: "Kushagra Tiwari",
  title: "Backend, Systems & AI Infrastructure Engineer",
  tagline: "Distributed systems. AI infrastructure. Production backends.",
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
    headline: "I build backend and AI systems that are fast, reliable, and safe to operate.",
    paragraphs: [
      "I'm a backend and systems engineer focused on production APIs, distributed automation, AI product infrastructure, and secure desktop-to-cloud bridges. I care about latency, correctness, and systems that stay predictable under load.",
      "Recently I've shipped automation engines, SaaS connectors for AI search, retrieval pipelines that cut latency by 60%, and local-first memory systems powered by RAG.",
      "I study Electrical and Electronics Engineering at NITK Surathkal, and I build in TypeScript, Go, Python, and systems tooling every day.",
    ],
  },
  experience: [
    {
      company: "Magi",
      role: "SDE Intern",
      period: "Apr 2026 – Present · 4 mos",
      location: "San Francisco Bay Area · Remote",
      summary:
        "Backend automation platform for AI workflows, production jobs, and agent-facing APIs.",
      highlights: [
        "Built a distributed automation layer for recurring jobs, delayed execution, contextual dispatch, and retries.",
        "Integrated job execution with workflow orchestration for task chaining, workflow state, and agent-triggered operations.",
        "Designed backend APIs for AI generation workflows, competitive intelligence, content pipelines, and job lifecycle state.",
        "Created structured tool interfaces so agents can discover capabilities, validate inputs, and execute backend operations safely.",
      ],
    },
    {
      company: "Spoken Tutorial",
      role: "AI Intern",
      period: "Dec 2025 – Present · 8 mos",
      location: "Mumbai, Maharashtra, India · Remote",
      summary:
        "AI internship across educational agents, course intelligence, and secure internal tooling.",
      highlights: [
        "Designed and deployed educational AI workflows for personalized course outline generation.",
        "Engineered context-aware conversational agents supporting multi-turn academic guidance.",
        "Implemented secure internal tooling with authentication and domain-level access controls.",
        "Optimized agent workflows and prompt routing for faster, more relevant responses.",
      ],
    },
    {
      company: "Pipeshub",
      role: "SDE Intern",
      period: "Dec 2025 – Jun 2026 · 7 mos",
      location: "San Francisco, California, United States · Remote",
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
      role: "SDE Intern",
      period: "Nov 2025 – Apr 2026 · 6 mos",
      location: "Gurugram, Haryana, India · Remote",
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
      company: "LeastAction Labs",
      role: "Software Engineer",
      period: "Oct 2025 – Feb 2026 · 5 mos",
      location: "Vancouver, British Columbia, Canada · Remote",
      summary:
        "Sandboxed code execution APIs and AWS production hardening.",
      highlights: [
        "Built backend APIs for sandboxed code execution, collaborative IDE workflows, and job results.",
        "Designed modular API contracts, validation layers, and request flows to reduce regressions.",
        "Deployed services on AWS EC2 with CI/CD, Nginx reverse proxying, and process management.",
        "Improved reliability by refining APIs, simplifying deployments, and debugging runtime failures.",
      ],
    },
    {
      company: "Bait AI",
      role: "Freelance Developer",
      period: "Dec 2025 – Jan 2026 · 2 mos",
      location: "Remote",
      summary:
        "AI-powered interview platform with speech transcription, media storage, and structured interview workflows.",
      highlights: [
        "Developed an AI-powered interview system using Django for backend orchestration and API management.",
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
        "FastAPI-inspired Go framework with typed generic handlers, OpenAPI 3.1, and CLI tooling.",
      period: "Jun 2026 – Jul 2026",
      featured: true,
      highlights: [
        "Typed generic handlers, route helpers, middleware, groups, and idiomatic net/http.",
        "Request binding for path, query, header, cookie, body with validation tags.",
        "OpenAPI 3.1 generation, docs UIs, RFC 9457 problem details, and testing helpers.",
      ],
      technologies: ["Go", "net/http", "OpenAPI 3.1", "CLI", "Validation"],
      github: "https://github.com/Kushagra1122/gapi",
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
      github: "https://github.com/Kushagra1122/VaultLens",
    },
    {
      title: "PokeShoot",
      description:
        "Real-time multiplayer game with Phaser.js, Socket.io, and Moonbeam NFT contracts.",
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
        "Codex-first incident response system that turns production failures into diagnosis, fixes, verification plans, and postmortems.",
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
        "Workflow automation with audit trails, rollback, and multi-channel approvals.",
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
        "Low-latency real-time video streaming with chat, donations, and WebRTC.",
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
      items: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "C++", "Bash"],
    },
    {
      label: "Backend",
      items: ["Node.js", "NestJS", "Express.js", "FastAPI", "Django", "REST", "WebSockets", "JWT", "RBAC"],
    },
    {
      label: "AI",
      items: ["RAG", "AI Agents", "Agent APIs", "LangChain", "LangGraph", "Tool Calling", "Embeddings", "Vector Search"],
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
    headline: "Let’s build something robust.",
    body: "Open to full-time and internship opportunities across backend, AI infrastructure, developer tooling, and platform engineering.",
  },
};
