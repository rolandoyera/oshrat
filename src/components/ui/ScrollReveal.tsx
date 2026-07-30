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

// topReveal's entrance: a CSS-only animation (tw-animate-css) that starts as
// soon as the HTML paints — no hydration/observer wait, so above-the-fold
// content can't become a late LCP element.
const entranceByDirection: Record<Direction, string> = {
  up: "animate-in fade-in slide-in-from-bottom-5",
  down: "animate-in fade-in slide-in-from-top-5",
  left: "animate-in fade-in slide-in-from-left-5",
  right: "animate-in fade-in slide-in-from-right-5",
};

// Wraps a block with a buttery-smooth entrance transition triggered when it
// scrolls into view.
export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.15,
  topReveal = false,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  /** Milliseconds (unlike TextEffect's delay, which is in seconds). */
  delay?: number;
  threshold?: number;
  /** Reveal immediately on all viewports via CSS animation instead of
      waiting for hydration + scroll — use on above-the-fold content so it
      doesn't blow out LCP. */
  topReveal?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (topReveal) return;
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
  }, [threshold, topReveal]);

  // The observed wrapper stays in normal flow (and unblurred, so className
  // borders/shadows stay sharp); only the inner element animates.
  return (
    <div ref={ref} className={className}>
      <div
        style={{
          transitionDelay: `${delay}ms`,
          animationDelay: `${delay}ms`,
        }}
        className={cn(
          "duration-1000",
          topReveal
            ? `${entranceByDirection[direction]} fill-mode-both`
            : [
                "transition-all",
                visible
                  ? "translate-x-0 translate-y-0 blur-none opacity-100"
                  : `${hiddenByDirection[direction]} opacity-0`,
              ],
        )}>
        {children}
      </div>
    </div>
  );
}
