"use client";

import { welcomeLines, type OutputLine } from "@/components/terminal/commands";
import { runCommand } from "@/components/terminal/runCommand";
import { TerminalOutput } from "@/components/terminal/TerminalOutput";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function InteractiveTerminal({ open, onClose }: Props) {
  const [output, setOutput] = useState<OutputLine[]>(welcomeLines);
  const [cwd, setCwd] = useState("~/portfolio");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [current, setCurrent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output]);

  const submit = (cmd: string) => {
    const result = runCommand(cmd, cwd, history);
    if (result.exit) {
      onClose();
      return;
    }
    if (result.clear) {
      setOutput(result.lines);
    } else if (result.lines.length) {
      setOutput((prev) => [...prev, ...result.lines]);
    }
    if (result.nextDirectory) setCwd(result.nextDirectory);
    if (cmd.trim()) {
      setHistory((prev) => [...prev, cmd]);
      setHistoryIndex(-1);
    }
    setCurrent("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submit(current);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const next =
        historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setCurrent(history[next] ?? "");
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < 0) return;
      const next = historyIndex + 1;
      if (next >= history.length) {
        setHistoryIndex(-1);
        setCurrent("");
      } else {
        setHistoryIndex(next);
        setCurrent(history[next] ?? "");
      }
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Interactive terminal"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="flex h-[min(720px,88svh)] w-full max-w-3xl flex-col overflow-hidden rounded-sm border border-white/15 bg-[#0b0e12] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
                  portfolio-cli — zsh
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="font-[family-name:var(--font-mono)] text-xs text-[var(--muted)] hover:text-[var(--fg)]"
              >
                ESC
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4"
              onClick={() => inputRef.current?.focus()}
            >
              <TerminalOutput lines={output} />
            </div>

            <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
              <span className="shrink-0 font-[family-name:var(--font-mono)] text-xs text-[var(--accent)]">
                {cwd} $
              </span>
              <input
                ref={inputRef}
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                onKeyDown={onKeyDown}
                className="w-full bg-transparent font-[family-name:var(--font-mono)] text-sm text-[var(--fg)] outline-none"
                aria-label="Terminal command"
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
