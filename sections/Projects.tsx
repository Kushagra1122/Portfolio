"use client";

import { createReveal } from "@/animations/factories";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content/site";
import { useEffect, useRef, useState } from "react";

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = content.projects[selectedIndex] ?? content.projects[0];

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    createReveal({
      id: "projects-reveal",
      trigger: section,
      targets: section.querySelectorAll("[data-reveal]"),
      stagger: 0.1,
    });
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative overflow-hidden px-5 py-24 md:px-8 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(50,245,208,0.08),transparent_34rem)]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected systems and developer tools."
          description="A focused list of builds. Select a project to inspect the architecture, scope, and stack."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ol
            className="relative space-y-2 before:absolute before:bottom-5 before:left-[13px] before:top-5 before:w-px before:bg-white/10"
            aria-label="Project list"
          >
            {content.projects.map((project, index) => {
              const active = index === selectedIndex;
              return (
                <li key={`${project.title}-${project.period}`} data-reveal className="relative">
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`group grid w-full grid-cols-[28px_1fr] gap-4 border px-4 py-3 text-left transition duration-300 ${
                      active
                        ? "border-[var(--accent)]/45 bg-white/[0.045]"
                        : "border-transparent bg-transparent hover:border-white/10 hover:bg-white/[0.025]"
                    }`}
                    aria-pressed={active}
                    aria-controls="project-detail"
                  >
                    <span className="relative mt-1 flex h-7 w-7 items-center justify-center">
                      <span
                        className={`absolute h-2.5 w-2.5 rounded-full ${
                          active
                            ? "signal-dot bg-[var(--accent)]"
                            : "bg-[var(--muted)]/55 group-hover:bg-[var(--accent)]"
                        }`}
                      />
                      <span
                        className={`h-7 w-7 rounded-full border transition ${
                          active ? "border-[var(--accent)]/55" : "border-white/10"
                        }`}
                      />
                    </span>
                    <span>
                      <span className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-[family-name:var(--font-display)] text-xl leading-none text-[var(--fg)] md:text-2xl">
                          {project.title}
                        </span>
                        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-[var(--muted)]">
                        {project.description}
                      </span>
                      <span className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]/85">
                        <span>{project.period}</span>
                        {project.featured ? <span>featured</span> : null}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <aside
            id="project-detail"
            data-reveal
            className="h-fit border border-white/10 bg-black/20 p-6 backdrop-blur-sm md:p-8 lg:self-center"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                selected project
              </p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
                case.{String(selectedIndex + 1).padStart(2, "0")}
              </p>
            </div>

            <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl leading-none tracking-tight text-[var(--fg)] md:text-4xl">
              {selectedProject.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--fg)]/85">
              {selectedProject.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="border border-white/10 bg-white/[0.025] p-4">
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  period
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg)]/85">
                  {selectedProject.period}
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.025] p-4">
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  stack
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg)]/85">
                  {selectedProject.technologies.slice(0, 3).join(" · ")}
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {selectedProject.highlights.map((h) => (
                <li
                  key={h}
                  className="relative pl-5 text-sm leading-relaxed text-[var(--muted)] before:absolute before:left-0 before:top-2.5 before:h-px before:w-2 before:bg-[var(--accent)]/70"
                >
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.technologies.map((t) => (
                <span
                  key={t}
                  className="border border-white/10 bg-black/25 px-2 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-[var(--muted)]"
                >
                  {t}
                </span>
              ))}
            </div>

            {selectedProject.github ? (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block text-sm text-[var(--accent)] hover:underline"
              >
                View on GitHub →
              </a>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  );
}
