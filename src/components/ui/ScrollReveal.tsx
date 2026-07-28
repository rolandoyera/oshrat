"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

// All directions mirror TextEffect's fade-in-blur: a 20px drift + 12px blur
// that clears as the block fades in.
const hiddenByDirection: Record<Direction, string> = {
  up: "translate-y-5 blur-md",
  down: "-translate-y-5 blur-md",
  left: "-translate-x-5 blur-md",
  right: "translate-x-5 blur-md",
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

  // The observed wrapper stays in normal flow (and unblurred, so className
  // borders/shadows stay sharp); only the inner element animates.
  return (
    <div ref={ref} className={className}>
      <div
        style={{ transitionDelay: `${delay}ms` }}
        className={cn(
          "transition-all duration-1000",
          visible
            ? "translate-x-0 translate-y-0 blur-none opacity-100"
            : `${hiddenByDirection[direction]} opacity-0`,
        )}>
        {children}
      </div>
    </div>
  );
}
