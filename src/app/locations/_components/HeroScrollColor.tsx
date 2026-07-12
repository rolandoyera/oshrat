"use client";

import { useEffect, useRef } from "react";

/**
 * Exposes hero scroll progress as `--hero-mix` (0% → 100%) on its wrapper,
 * using the same half-viewport range FadingHeroBackdrop fades over. Children
 * scroll-link their text color with e.g.
 * `[color:color-mix(in_oklab,var(--color-taupe-800)_var(--hero-mix,0%),white)]`.
 */
export default function HeroScrollColor({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight / 2), 1);
      el.style.setProperty("--hero-mix", `${progress * 100}%`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref}>{children}</div>;
}
