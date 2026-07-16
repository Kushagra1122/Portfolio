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
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
    variant === "primary" &&
      "bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent-soft)]",
    variant === "ghost" &&
      "bg-transparent text-[var(--fg)] hover:bg-white/5",
    variant === "outline" &&
      "border border-white/20 bg-transparent text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
    className,
  );

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
}
