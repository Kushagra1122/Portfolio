"use client";

import { createImageScale, createReveal } from "@/animations/factories";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content/site";
import { useEffect, useRef } from "react";

export function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    createReveal({
      id: "projects-reveal",
      trigger: section,
      targets: section.querySelectorAll("[data-reveal]"),
      stagger: 0.1,
    });
    section.querySelectorAll("[data-scale]").forEach((el, i) => {
      createImageScale({
        id: `project-scale-${i}`,
        trigger: el,
        target: el.querySelector("[data-scale-inner]") ?? el,
        from: 1.12,
        to: 1,
      });
    });
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="Frameworks, local-first AI, realtime systems, and workflow automation."
        />
        <div className="space-y-16">
          {content.projects.map((project, index) => (
            <article
              key={project.title}
              data-reveal
              className="grid items-center gap-8 border-t border-white/10 pt-12 md:grid-cols-12"
            >
              <div
                data-scale
                className="relative overflow-hidden md:col-span-5"
              >
                <div
                  data-scale-inner
                  className="flex aspect-[16/10] items-end bg-[linear-gradient(145deg,#10151c,#0a0c10_55%,rgba(45,212,191,0.18))] p-6"
                >
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")} / {project.period}
                  </span>
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-3xl text-[var(--fg)]">
                    {project.title}
                  </h3>
                  {project.featured ? (
                    <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--accent)]">
                      Featured
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-[var(--muted)]">{project.description}</p>
                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-sm text-[var(--muted)]">
                      — {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="border border-white/10 px-2 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-[var(--muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-sm text-[var(--accent)] hover:underline"
                  >
                    View on GitHub →
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
