"use client";

import { SmoothScrollProvider } from "@/components/layout/SmoothScroll";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { OPEN_TERMINAL_EVENT } from "@/utils/terminalEvents";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState, type ReactNode } from "react";

const InteractiveTerminal = dynamic(
  () =>
    import("@/components/terminal/InteractiveTerminal").then(
      (m) => m.InteractiveTerminal,
    ),
  { ssr: false },
);

export function SiteShell({ children }: { children: ReactNode }) {
  const [terminalOpen, setTerminalOpen] = useState(false);

  const handleOpen = useCallback(() => setTerminalOpen(true), []);
  const handleClose = useCallback(() => setTerminalOpen(false), []);

  useEffect(() => {
    const onOpen = () => setTerminalOpen(true);
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setTerminalOpen((v) => !v);
      }
    };
    window.addEventListener(OPEN_TERMINAL_EVENT, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_TERMINAL_EVENT, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <SmoothScrollProvider>
      <Nav onOpenTerminal={handleOpen} />
      <main id="main">{children}</main>
      <Footer />
      <InteractiveTerminal open={terminalOpen} onClose={handleClose} />
    </SmoothScrollProvider>
  );
}
