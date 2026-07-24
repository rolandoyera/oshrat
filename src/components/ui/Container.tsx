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
        "mx-auto px-6 xl:px-0",
        size === "lg" ? "max-w-450" : "max-w-350",
        className,
      )}>
      {children}
    </div>
  );
}
