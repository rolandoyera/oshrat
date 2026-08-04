"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ArrowButton2 from "@/components/ui/ArrowButton2";
import { HERO_BLUR } from "@/lib/hero-blur";
import { useEffect, useState } from "react";

export type LocationHeroProps = {
  image: {
    src: string;
    alt: string;
    /** HERO_BLUR key when the placeholder was generated from a different
        file than src (e.g. a .jpg blur for a .webp render). Defaults to src. */
    blurKey?: string;
    /** Which part of the photo survives the crop. Defaults to "bottom". */
    position?: "top" | "bottom" | "center";
  };
  eyebrow: string;
  /** [first line (gets the dash), second line] */
  heading: [string, string];
  paragraph: string;
};

export default function LocationHero({
  image,
  eyebrow,
  heading,
  paragraph,
}: LocationHeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blur = HERO_BLUR[image.blurKey ?? image.src];
  // Static class names so Tailwind's compiler sees them.
  const positionClass = {
    top: "object-top",
    bottom: "object-bottom",
    center: "object-center",
  }[image.position ?? "bottom"];

  return (
    <section className="relative h-[calc(100vh-2.25rem)] mt-9 w-full overflow-hidden bg-black">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        quality={90}
        placeholder={blur ? "blur" : "empty"}
        blurDataURL={blur}
        style={{
          transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(1.1)`,
        }}
        className={`object-cover ${positionClass}`}
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />

      {/* Text and Title Overlay - centered */}
      <Container className="absolute inset-0 flex items-center justify-center z-20 pb-16">
        <div className="relative">
          {/* The glass panel lives outside ScrollReveal: while an animating
              ancestor's opacity is below 1 a backdrop-filter can't sample the
              page behind it, so the blur snapped in when the reveal finished.
              As a sibling it fades in on its own. */}
          <div
            aria-hidden
            className="absolute inset-0 backdrop-blur-xs animate-in fade-in fill-mode-both duration-1000 [animation-delay:400ms]"
          />
          <ScrollReveal>
            <div className="space-y-6 p-4">
              <h1 className="eyebrow text-cream-200 text-center">{eyebrow}</h1>

              <h2 className="lg:text-[6rem] text-[2.25rem] text-[color-mix(in_oklab,var(--color-taupe-800)_var(--hero-mix,0%),white)] leading-none space-y-2 mb-6">
                <span className="block">
                  {heading[0]}
                  <span
                    aria-hidden
                    className="inline-block h-0.5 w-[1.25em] bg-current align-middle ml-2"
                  />
                </span>
                <span className="block w-fit">{heading[1]}</span>
              </h2>
              <p className="text-taupe-100 max-w-200">{paragraph}</p>
              <ArrowButton2
                href="/projects"
                variant="primary"
                className="w-full sm:w-auto justify-center">
                View Projects
              </ArrowButton2>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
