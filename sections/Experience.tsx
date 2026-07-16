"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content/site";
import { useState } from "react";

export function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedJob = content.experience[selectedIndex] ?? content.experience[0];

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--bg-elevated)] px-5 py-24 md:px-8 md:py-36"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Experience"
            title="A timeline of systems work."
            description="Roles where the through-line is infrastructure thinking: APIs, orchestration, integrations, reliability, and product paths that are easier to operate."
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ol
            className="relative space-y-2 before:absolute before:bottom-5 before:left-[13px] before:top-5 before:w-px before:bg-[var(--line)]"
            aria-label="Experience roadmap"
          >
            {content.experience.map((job, index) => {
              const active = index === selectedIndex;
              return (
                <li key={`${job.company}-${job.period}`} className="relative">
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`group grid w-full grid-cols-[28px_1fr] gap-4 border px-4 py-3 text-left transition duration-300 ${
                      active
                        ? "border-[var(--accent)]/55 bg-[var(--fg)]/[0.045]"
                        : "border-transparent bg-transparent hover:border-[var(--line)] hover:bg-[var(--fg)]/[0.025]"
                    }`}
                    aria-pressed={active}
                    aria-controls="experience-detail"
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
                          active ? "border-[var(--accent)]/60" : "border-[var(--line)]"
                        }`}
                      />
                    </span>
                    <span>
                      <span className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-[family-name:var(--font-display)] text-xl leading-none tracking-[-0.04em] text-[var(--fg)] md:text-2xl">
                          {job.company}
                        </span>
                        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--muted-2)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </span>
                      <span
                        className={`mt-1 block text-sm ${
                          active ? "text-[var(--fg)]/85" : "text-[var(--muted)]"
                        }`}
                      >
                        {job.role}
                      </span>
                      <span className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--accent)]/85">
                        <span>{job.period}</span>
                        <span className="text-[var(--muted-2)]">{job.location.split(" · ")[0]}</span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <aside
            id="experience-detail"
            className="editorial-panel h-fit p-6 md:p-8 lg:self-center"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] pb-5">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                selected experience
              </p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--muted-2)]">
                roadmap.{String(selectedIndex + 1).padStart(2, "0")}
              </p>
            </div>

            <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl leading-none tracking-[-0.05em] text-[var(--fg)] md:text-4xl">
              {selectedJob.company}
            </h3>
            <p className="mt-2 text-base text-[var(--muted)]">{selectedJob.role}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["period", selectedJob.period],
                ["location", selectedJob.location],
              ].map(([label, value]) => (
                <div key={label} className="border border-[var(--line)] bg-[var(--fg)]/[0.025] p-4">
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg)]/85">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base leading-7 text-[var(--fg)]/90">
              {selectedJob.summary}
            </p>

            <ul className="mt-6 space-y-3">
              {selectedJob.highlights.map((h) => (
                <li
                  key={h}
                  className="relative pl-5 text-sm leading-6 text-[var(--muted)] before:absolute before:left-0 before:top-2.5 before:h-px before:w-2 before:bg-[var(--accent)]/70"
                >
                  {h}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
