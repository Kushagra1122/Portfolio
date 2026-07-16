"use client";

import { createReveal } from "@/animations/factories";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content/site";
import { useEffect, useRef } from "react";

export function Education() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    createReveal({
      id: "education-reveal",
      trigger: section,
      targets: section.querySelectorAll("[data-reveal]"),
    });
  }, []);

  return (
    <section
      id="education"
      ref={ref}
      className="px-5 py-24 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Education" title="Where I’m studying." />
        {content.education.map((edu) => (
          <div
            key={edu.school}
            data-reveal
            className="border-t border-white/10 pt-10 md:flex md:items-end md:justify-between"
          >
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--fg)] md:text-3xl">
                {edu.school}
              </h3>
              <p className="mt-2 text-[var(--muted)]">{edu.degree}</p>
            </div>
            <div className="mt-4 text-left md:mt-0 md:text-right">
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--accent)]">
                {edu.period}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">{edu.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
