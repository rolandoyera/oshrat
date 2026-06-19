"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

const hiddenByDirection: Record<Direction, string> = {
  up: "translate-y-12",
  down: "-translate-y-12",
  left: "-translate-x-full",
  right: "translate-x-full",
};

// Wraps a block with a buttery-smooth entrance transition triggered when it
// scrolls into view.
export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  // The observed wrapper stays in normal flow so the IntersectionObserver always
  // measures its real position. Only the inner element transforms — otherwise a
  // full off-screen slide (e.g. -translate-x-full) would never intersect and the
  // reveal would never trigger.
  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        style={{ transitionDelay: `${delay}ms` }}
        className={cn(
          "transition-all duration-1000 ease-[cubic-bezier(.215,.61,.355,1)]",
          visible
            ? "translate-x-0 translate-y-0 opacity-100"
            : `${hiddenByDirection[direction]} opacity-0`,
        )}>
        {children}
      </div>
    </div>
  );
}
