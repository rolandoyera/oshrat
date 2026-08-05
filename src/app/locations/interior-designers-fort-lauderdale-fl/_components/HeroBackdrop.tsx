"use client";

import { useEffect, useRef } from "react";

/**
 * Full-bleed hero image + legibility scrim, scoped to the hero section.
 *
 * The image parallaxes at 0.35 of scroll inside the section's overflow-hidden
 * box, the same rate as the shared `LocationHero`. `scale(1.1)` gives it the
 * headroom to drift without exposing an edge. The scrim is a sibling, not part
 * of the transform, so the copy keeps the same contrast the whole way up.
 *
 * Art direction: a <picture> with media sources guarantees the browser
 * downloads exactly one crop — phone portrait, tablet portrait, or desktop
 * landscape. (CSS-hidden <img> swaps would fetch every variant; <source
 * media> is resolved by the preload scanner before any request goes out.)
 * The files are pre-sized, pre-encoded webp, so this deliberately bypasses
 * next/image — its optimizer would only re-encode them.
 */
export default function HeroBackdrop({
  sources,
  alt,
  blurDataURL,
}: {
  /** One crop per breakpoint: <768px, 768–1023px, ≥1024px. */
  sources: { mobile: string; tablet: string; desktop: string };
  alt: string;
  /** Shown as a cover background behind the image while it loads. */
  blurDataURL?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      el.style.transform = `translate3d(0, ${window.scrollY * 0.35}px, 0) scale(1.1)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={
        blurDataURL ? { backgroundImage: `url(${blurDataURL})` } : undefined
      }>
      <div ref={ref} className="absolute inset-0 will-change-transform">
        <picture>
          <source media="(max-width: 767px)" srcSet={sources.mobile} />
          <source media="(max-width: 1023px)" srcSet={sources.tablet} />
          {/* eslint-disable-next-line @next/next/no-img-element -- art-directed pre-optimized webp; see component comment */}
          <img
            src={sources.desktop}
            alt={alt}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
      </div>
      {/* Scrim for text legibility — darkest at the bottom where the copy sits */}
      <div className="absolute inset-0 bg-linear-to-t from-black to-transparent to-60% " />
    </div>
  );
}
