"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content/site";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[var(--line)] bg-[var(--bg-elevated)] px-5 pb-14 pt-24 md:px-8 md:pb-20 md:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Engineering toolkit."
          description="The languages, frameworks, infrastructure, and AI tooling I use to ship production systems."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.skills.map((cat) => (
            <div
              key={cat.label}
              className="border border-[var(--line)] bg-[var(--bg-elevated)] p-5 transition duration-300 hover:bg-[var(--fg)]/[0.025]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  {cat.label}
                </h3>
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted-2)]">
                  {cat.items.length} tools
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="border border-[var(--line)] bg-[var(--fg)]/[0.025] px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs text-[var(--fg)] transition hover:border-[var(--accent)]/50 hover:text-[var(--accent-soft)]"
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
