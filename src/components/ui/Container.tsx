import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Element to render as, e.g. "section". Defaults to "div". */
  as?: "div" | "section" | "main" | "article" | "aside" | "header" | "footer";
}

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto px-6 xl:px-4 max-w-450", className)}>
      {children}
    </Tag>
  );
}
