import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "lg";
}

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6",
        size === "lg" ? "max-w-[1800px]" : "max-w-[1400px]",
        className,
      )}>
      {children}
    </div>
  );
}
