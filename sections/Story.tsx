"use client";

import { createParallax, createTextMask } from "@/animations/factories";
import { MaskedText } from "@/components/ui/MaskedText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content/site";
import { useEffect, useRef } from "react";

export function Story() {
  const ref = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    createTextMask({
      id: "story-mask",
      trigger: section,
      targets: section.querySelectorAll("[data-mask]"),
    });
    if (mediaRef.current) {
      createParallax({
        id: "story-parallax",
        trigger: section,
        target: mediaRef.current,
        yPercent: 18,
      });
    }
  }, []);

  return (
    <section
      id="story"
      ref={ref}
      className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <SectionHeading
            eyebrow={content.story.eyebrow}
            title={content.story.headline}
          />
          <div className="space-y-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            {content.story.paragraphs.map((p) => (
              <MaskedText key={p.slice(0, 24)} as="p" data-mask className="block">
                {p}
              </MaskedText>
            ))}
          </div>
          <div className="mt-8">
            <a
              href={content.resumePath}
              download
              className="font-[family-name:var(--font-mono)] text-sm text-[var(--accent)] underline-offset-4 hover:underline"
            >
              Download full resume →
            </a>
          </div>
        </div>
        <div className="relative md:col-span-5">
          <div
            ref={mediaRef}
            className="aspect-[4/5] overflow-hidden rounded-sm bg-[var(--bg-elevated)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.22),transparent_55%),linear-gradient(160deg,#12161c,#0a0c10)]" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Focus
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[var(--fg)]">
                Schedulers · Agents · APIs
              </p>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Building systems where latency, correctness, and discoverability matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
