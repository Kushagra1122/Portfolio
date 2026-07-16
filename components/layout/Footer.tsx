import { content } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--bg-elevated)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl text-[var(--fg)]">
            {content.name}
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">{content.title}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-[var(--muted)]">
          {content.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="transition hover:text-[var(--accent)]"
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {s.label}
            </a>
          ))}
          <a
            href={content.resumePath}
            className="transition hover:text-[var(--accent)]"
            download
          >
            Resume
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-4 text-center font-[family-name:var(--font-mono)] text-xs text-[var(--muted)] md:px-8">
        © {year} {content.name}. Built with Next.js, GSAP & Lenis.
      </div>
    </footer>
  );
}
