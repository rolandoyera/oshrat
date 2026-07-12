"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Full-viewport hero image + legibility scrim that stays pinned while the page
 * scrolls over it, fading out linearly until fully gone at half a viewport of
 * scroll. Sits at -z-10: above the body background, below any section that
 * paints its own background and below all content.
 */
export default function FadingHeroBackdrop({
  src,
  alt,
  blurDataURL,
}: {
  src: string;
  alt: string;
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
    <div ref={ref} className="fixed inset-0 -z-10">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={50}
        sizes="100vw"
        {...(blurDataURL ? { placeholder: "blur" as const, blurDataURL } : {})}
        className="object-cover"
      />
      {/* Scrim for text legibility */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[3px]" />
    </div>
  );
}
