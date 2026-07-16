import { Button } from "@/components/ui/Button";
import { content } from "@/content/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[680px] overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/hero/poster.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-65 saturate-[0.62]"
          poster="/media/hero/poster.jpg"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        >
          <source src="/media/hero/hero.webm" type="video/webm" />
          <source src="/media/hero/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,10,8,0.98)_0%,rgba(11,10,8,0.82)_48%,rgba(11,10,8,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,8,0.24)_0%,transparent_34%,rgba(11,10,8,0.98)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
        <div className="grain" />
      </div>

      <div className="relative z-10 flex h-full items-center px-5 pt-16 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-4xl">
            <p
              className="mb-6 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]"
            >
              Software engineer · India · backend systems
            </p>
            <h1 className="max-w-5xl font-[family-name:var(--font-sans)] text-[clamp(3.4rem,11vw,8.8rem)] font-medium leading-[0.88] tracking-[-0.085em] text-[var(--fg)]">
              {content.name}
            </h1>
            <p className="mt-7 max-w-3xl font-[family-name:var(--font-display)] text-2xl leading-[1.06] tracking-[-0.04em] text-[var(--fg)] md:text-5xl">
              {content.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--fg)]/82 md:text-xl md:leading-9">
              I build APIs, automation runtimes, retrieval systems, and launch paths with the boring details handled before they become incidents.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={content.resumePath}>Download resume</Button>
              <Button variant="outline" href="#projects">
                See selected work
              </Button>
            </div>
          </div>

          <div className="mt-16 grid max-w-5xl gap-6 border-t border-[var(--line)] pt-6 md:grid-cols-3">
            {[
              ["Current focus", "Backend foundations, applied AI workflows, and reliability-minded product delivery."],
              ["Core stack", "Go, TypeScript, Python, FastAPI, Next.js, SQLite, AWS, CI/CD."],
              ["Looking for", "Backend, software, and applied AI roles with real system ownership."],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--muted-2)]">
                  {label}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--muted)]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
