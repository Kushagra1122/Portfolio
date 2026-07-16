"use client";

import type { OutputLine } from "@/components/terminal/commands";
import { cn } from "@/utils/cn";

type Props = {
  lines: OutputLine[];
};

export function TerminalOutput({ lines }: Props) {
  return (
    <div className="space-y-0.5 whitespace-pre-wrap break-words font-[family-name:var(--font-mono)] text-[12px] leading-relaxed md:text-[13px]">
      {lines.map((line, index) => (
        <div
          key={`${index}-${line.content.slice(0, 24)}`}
          className={cn(
            line.type === "command" && "text-[var(--accent)]",
            line.type === "error" && "text-red-400",
            line.type === "system" && "text-[var(--muted)]",
            line.type === "output" && "text-[var(--fg)]",
            line.style === "bold" && "font-semibold text-[var(--fg)]",
          )}
        >
          {line.content || "\u00A0"}
        </div>
      ))}
    </div>
  );
}
