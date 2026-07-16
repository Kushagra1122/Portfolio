"use client";

import { createReveal } from "@/animations/factories";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content/site";
import { useEffect, useRef } from "react";

export function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    createReveal({
      id: "skills-reveal",
      trigger: section,
      targets: section.querySelectorAll("[data-reveal]"),
      stagger: 0.06,
      y: 32,
    });
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="border-t border-white/5 bg-[var(--bg-elevated)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Stack I ship with."
          description="Languages, backends, AI systems, data, and delivery."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.skills.map((cat) => (
            <div key={cat.label} data-reveal>
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                {cat.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="border border-white/10 bg-[var(--bg)] px-3 py-1.5 text-sm text-[var(--fg)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
