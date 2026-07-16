import { cn } from "@/utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
  children: ReactNode;
  asChild?: boolean;
  href?: string;
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: Props) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 border px-5 py-3 font-[family-name:var(--font-sans)] text-sm font-semibold tracking-[-0.01em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
    variant === "primary" &&
      "border-[var(--accent)] bg-[var(--accent)] hover:bg-[var(--accent-soft)]",
    variant === "ghost" &&
      "border-transparent bg-transparent text-[var(--fg)] hover:border-[var(--line)] hover:bg-[var(--fg)]/[0.04]",
    variant === "outline" &&
      "border border-[var(--line)] bg-transparent text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent-soft)]",
    className,
  );
  const primaryStyle = variant === "primary" ? { color: "var(--ink)" } : undefined;

  if (href) {
    return (
      <a href={href} className={styles} style={primaryStyle}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={styles}
      {...props}
      style={{ ...props.style, ...primaryStyle }}
    >
      {children}
    </button>
  );
}
