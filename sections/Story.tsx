"use client";

import { createTextMask } from "@/animations/factories";
import { MaskedText } from "@/components/ui/MaskedText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content/site";
import { useEffect, useRef } from "react";

export function Story() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    createTextMask({
      id: "story-mask",
      trigger: section,
      targets: section.querySelectorAll("[data-mask]"),
    });
  }, []);

  return (
    <section
      id="story"
      ref={ref}
      className="relative overflow-hidden px-5 py-24 md:px-8 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_10%,rgba(50,245,208,0.1),transparent_30rem)]" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <SectionHeading
            eyebrow={content.story.eyebrow}
            title={content.story.headline}
            className="mb-0"
          />
          <div className="space-y-5 border-l border-[var(--accent)]/20 pl-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            {content.story.paragraphs.map((p) => (
              <MaskedText key={p.slice(0, 24)} as="p" data-mask className="block">
                {p}
              </MaskedText>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Backend architecture",
              "Designing APIs, contracts, auth, validation, and database-backed services that stay predictable as complexity grows.",
            ],
            [
              "Distributed systems",
              "Building job runtimes, queues, retries, sync engines, and orchestration paths with clear failure behavior.",
            ],
            [
              "AI infrastructure",
              "Shipping retrieval, embeddings, agent workflows, tool execution, and AI product backends beyond prototype quality.",
            ],
            [
              "Reliability mindset",
              "Optimizing latency, observability, correctness, and operational clarity so systems are easy to debug under pressure.",
            ],
          ].map(([title, body]) => (
            <article
              key={title}
              data-mask
              className="bg-[var(--bg-elevated)] p-6 transition duration-300 hover:bg-[var(--accent)]/[0.035]"
            >
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                {title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                {body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={content.resumePath}
            download
            className="font-[family-name:var(--font-mono)] text-sm text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Download full resume →
          </a>
          <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            TypeScript · Go · Python · Node.js · FastAPI · AWS · RAG
          </div>
        </div>
      </div>
    </section>
  );
}
