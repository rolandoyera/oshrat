"use client";

import { useEffect, useRef } from "react";

/**
 * Full-viewport hero image + legibility scrim that stays pinned while the page
 * scrolls over it, fading out linearly until fully gone at half a viewport of
 * scroll. Sits at -z-10: above the body background, below any section that
 * paints its own background and below all content.
 *
 * Art direction: a <picture> with media sources guarantees the browser
 * downloads exactly one crop — phone portrait, tablet portrait, or desktop
 * landscape. (CSS-hidden <img> swaps would fetch every variant; <source
 * media> is resolved by the preload scanner before any request goes out.)
 * The files are pre-sized, pre-encoded webp, so this deliberately bypasses
 * next/image — its optimizer would only re-encode them.
 */
export default function FadingHeroBackdrop({
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
      const progress = Math.min(window.scrollY / (window.innerHeight / 2), 1);
      el.style.opacity = String(1 - progress);
      // Once invisible, drop it from paint entirely so the faded-out layer
      // (and its backdrop blur) costs nothing while reading the rest of the page.
      el.style.visibility = progress >= 1 ? "hidden" : "visible";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 -z-10 bg-cover bg-center"
      style={
        blurDataURL ? { backgroundImage: `url(${blurDataURL})` } : undefined
      }>
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
      {/* Scrim for text legibility — darkest at the bottom where the copy sits */}
      <div className="absolute inset-0 bg-linear-to-t from-black to-transparent to-60% " />
    </div>
  );
}
