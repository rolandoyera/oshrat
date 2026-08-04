"use client";
import { useEffect, useRef, useState } from "react";
import { heroPreloadSrcSet } from "@/lib/image-preload";

export const LINKS = [
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Press", href: "/press" },
  { name: "Locations", href: "/locations" },
  { name: "Contact", href: "/contact" },
];

// Full-bleed hero image each route paints first paint — warmed on hover so the
// destination's `sizes="100vw"` next/image request is already cached on arrival.
// `quality` MUST match the destination hero's `quality` prop or the preloaded
// URL won't match what's requested (wasted preload + browser warning). Routes
// without a single full-screen hero (Projects list, Contact drawer) are absent.
const ROUTE_HERO: Record<string, { src: string; quality?: number }> = {
  "/services": { src: "/assets/aventura-interior-design-5.webp", quality: 50 },
  "/about": { src: "/about/Sarvian-Design-Group.jpg" },
  "/press": { src: "/projects/sdg-bedroom-remodel-armoire-7.jpg" },
};

// Scroll state for the fixed bar: `isScrolled` past the top, `isHidden` while
// scrolling down (returns on scroll up, with a small deadband so tiny jitters
// like rubber-banding or trackpad noise don't toggle the bar).
export function useNavScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);

      const delta = y - lastScrollY.current;
      if (delta < -5 || y <= 0) setIsHidden(false);
      else if (delta > 5) setIsHidden(true);
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled, isHidden };
}

// Page scroll progress bar — style is mutated directly on the returned ref's
// element (no state, no re-renders).
export function useScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = progressRef.current;
    if (!el) return;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      el.style.transform = `scaleX(${progress})`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progressRef;
}

// Warm the destination hero the moment the user hovers/focuses the link —
// once per route. Uses a detached <img> rather than <link rel="preload">:
// same HTTP cache key, but exempt from Chrome's unused-preload warning when
// the hover doesn't convert. sizes must be set before srcset.
export function usePreloadHero() {
  const preloadedRoutes = useRef(new Set<string>());

  return (href: string) => {
    const hero = ROUTE_HERO[href];
    if (!hero || preloadedRoutes.current.has(href)) return;
    preloadedRoutes.current.add(href);

    const img = document.createElement("img");
    img.sizes = "100vw";
    img.srcset = heroPreloadSrcSet(hero.src, hero.quality);
  };
}
