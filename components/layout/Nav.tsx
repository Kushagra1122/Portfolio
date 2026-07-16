"use client";

import { content } from "@/content/site";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#story", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

type Props = {
  onOpenTerminal: () => void;
};

export function Nav({ onOpenTerminal }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-[var(--line)] bg-[var(--bg)]/86 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
        aria-label="Primary"
      >
        <a
          href="#hero"
          className="font-[family-name:var(--font-display)] text-lg tracking-[-0.035em] text-[var(--fg)]"
        >
          {content.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--muted)] transition hover:text-[var(--fg)]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={onOpenTerminal}
              className="border border-[var(--line)] px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs text-[var(--accent)] transition hover:border-[var(--accent)] hover:bg-[var(--fg)]/[0.04]"
            >
              terminal
            </button>
          </li>
          <li>
            <a
              href={content.resumePath}
              className="text-sm text-[var(--fg)] underline-offset-4 hover:underline"
              download
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex h-5 w-6 flex-col justify-between">
            <span className="h-px w-full bg-[var(--fg)]" />
            <span className="h-px w-full bg-[var(--fg)]" />
            <span className="h-px w-full bg-[var(--fg)]" />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--line)] md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-[var(--fg)]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="py-2 text-[var(--accent)]"
                  onClick={() => {
                    setOpen(false);
                    onOpenTerminal();
                  }}
                >
                  Open Terminal
                </button>
              </li>
              <li>
                <a
                  href={content.resumePath}
                  className="block py-2"
                  download
                  onClick={() => setOpen(false)}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
