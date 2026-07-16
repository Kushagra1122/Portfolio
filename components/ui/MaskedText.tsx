import { cn } from "@/utils/cn";
import type { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
} & HTMLAttributes<HTMLElement>;

/** Clip-path mask target for createTextMask */
export function MaskedText({
  children,
  className,
  as: Tag = "span",
  ...rest
}: Props) {
  return (
    <Tag
      className={cn("inline-block will-change-transform", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
