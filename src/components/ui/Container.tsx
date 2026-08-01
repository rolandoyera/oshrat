import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "lg";
  /** Element to render as, e.g. "section". Defaults to "div". */
  as?: "div" | "section" | "main" | "article" | "aside" | "header" | "footer";
}

export default function Container({
  children,
  className = "",
  size = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto px-6 xl:px-0",
        size === "lg" ? "max-w-450" : "max-w-350",
        className,
      )}>
      {children}
    </Tag>
  );
}
