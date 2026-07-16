import { content } from "@/content/site";

export type OutputLine = {
  type: "system" | "command" | "output" | "error";
  content: string;
  style?: "bold";
};

export const welcomeLines: OutputLine[] = [
  {
    type: "system",
    content: "portfolio-cli",
  },
  {
    type: "system",
    content: "Kushagra Tiwari / Backend + AI leaning Software Engineer",
    style: "bold",
  },
  {
    type: "system",
    content: "───────────────────────────────────────────────────────────",
  },
  { type: "system", content: "" },
  {
    type: "system",
    content: "Browse sections as directories. Type help for commands. ESC to close.",
  },
  { type: "system", content: "" },
  {
    type: "system",
    content: "Quick start:  ls  ·  cd <dir>  ·  cat <dir>/<file>.txt",
    style: "bold",
  },
  { type: "system", content: "" },
];

export const filesystem: Record<string, string[]> = {
  "~/portfolio": [
    "home/",
    "about/",
    "education/",
    "experience/",
    "projects/",
    "skills/",
    "contact/",
    "resume.pdf",
  ],
  "~/portfolio/home": ["home.txt"],
  "~/portfolio/about": ["about.txt"],
  "~/portfolio/experience": ["experience.txt"],
  "~/portfolio/projects": ["projects.txt"],
  "~/portfolio/skills": ["skills.txt"],
  "~/portfolio/education": ["education.txt"],
  "~/portfolio/contact": ["contact.txt"],
};

function experienceBlock() {
  return content.experience
    .map(
      (job) => `${job.company} - ${job.role}
${job.period} · ${job.location}
${job.summary}
${job.highlights.map((h) => `  • ${h}`).join("\n")}`,
    )
    .join("\n\n");
}

function projectsBlock() {
  return content.projects
    .map(
      (p) => `${p.title} (${p.period})
${p.description}
${p.highlights.map((h) => `  • ${h}`).join("\n")}
  Tech: ${p.technologies.join(", ")}
  ${p.github ? `GitHub: ${p.github}` : ""}`,
    )
    .join("\n\n");
}

function skillsBlock() {
  return content.skills
    .map((s) => `${s.label}: ${s.items.join(", ")}`)
    .join("\n");
}

export const files: Record<string, string> = {
  "home/home.txt": `${content.name}
${content.title}

${content.tagline}

Backend and AI preferred; open to full-stack, frontend, DevOps, QA, systems, and product engineering roles.`,

  "about/about.txt": content.story.paragraphs.join("\n\n"),

  "experience/experience.txt": experienceBlock(),

  "projects/projects.txt": projectsBlock(),

  "skills/skills.txt": skillsBlock(),

  "education/education.txt": content.education
    .map(
      (e) => `${e.school}
${e.degree}
${e.period}
${e.detail}`,
    )
    .join("\n\n"),

  "contact/contact.txt": `EMAIL
${content.email}

PHONE
${content.phone}

LINKS
${content.socials.map((s) => `${s.label}: ${s.href}`).join("\n")}

RESUME
${content.resumePath}`,
};

export const helpText = `COMMANDS
────────────────────────────────────────────────────────────
  ls [directory]     List directory contents
  cd <directory>     Change directory (cd .. to go up, cd ~ for root)
  cat <file>         Display file (e.g. cat about/about.txt)
  pwd                Print working directory
  whoami             Display current user
  clear, cls         Clear screen
  history            Show command history
  echo <text>        Echo text
  resume             Resume download path
  help, ?            Show this help
  exit, quit         Close terminal

DIRECTORIES
────────────────────────────────────────────────────────────
  home/  about/  education/  experience/  projects/  skills/  contact/`;
