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

// md:-prefixed twin of the above, used by mobileStatic — below md nothing is
// hidden, so content renders in place with no animation.
const hiddenByDirectionMdUp: Record<Direction, string> = {
  up: "md:translate-y-5 md:blur-md",
  down: "md:-translate-y-5 md:blur-md",
  left: "md:-translate-x-5 md:blur-md",
  right: "md:translate-x-5 md:blur-md",
};

// Wraps a block with a buttery-smooth entrance transition triggered when it
// scrolls into view.
export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.15,
  mobileStatic = false,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  /** Milliseconds (unlike TextEffect's delay, which is in seconds). */
  delay?: number;
  threshold?: number;
  /** Skip the reveal below md (768px) — content renders in place on mobile. */
  mobileStatic?: boolean;
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
            : mobileStatic
              ? `${hiddenByDirectionMdUp[direction]} md:opacity-0`
              : `${hiddenByDirection[direction]} opacity-0`,
        )}>
        {children}
      </div>
    </div>
  );
}
