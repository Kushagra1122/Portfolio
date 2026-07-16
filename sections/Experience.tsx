"use client";

import { createReveal } from "@/animations/factories";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content/site";
import { useEffect, useRef } from "react";

export function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    createReveal({
      id: "experience-reveal",
      trigger: section,
      targets: section.querySelectorAll("[data-reveal]"),
      stagger: 0.12,
      y: 56,
    });
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="border-t border-white/5 bg-[var(--bg-elevated)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Roles where systems had to ship."
          description="Internships across scheduling, AI connectors, retrieval, and sandboxed execution."
        />
        <ol className="space-y-0">
          {content.experience.map((job, index) => (
            <li
              key={job.company}
              data-reveal
              className="grid gap-4 border-t border-white/10 py-10 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-4">
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[var(--fg)]">
                  {job.company}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{job.role}</p>
                <p className="mt-3 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
                  {job.period} · {job.location}
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="text-[var(--fg)]">{job.summary}</p>
                <ul className="mt-4 space-y-3">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="border-l border-[var(--accent)]/40 pl-4 text-sm leading-relaxed text-[var(--muted)]"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
