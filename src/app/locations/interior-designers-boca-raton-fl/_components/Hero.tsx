"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HERO_BLUR } from "@/lib/hero-blur";
import { useEffect, useState } from "react";
import ArrowButton2 from "@/components/ui/ArrowButton2";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="relative h-[calc(100vh-2.25rem)] mt-9 w-full overflow-hidden bg-black">
      <Image
        src="/services/residential-interior-design-16x9.jpg"
        alt="Sarvian Design Group interior showcase"
        fill
        priority
        sizes="100vw"
        quality={90}
        placeholder="blur"
        blurDataURL={
          HERO_BLUR["/services/residential-interior-design-16x9.jpg"]
        }
        style={{
          transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(1.1)`,
        }}
        className="object-cover object-top"
      />
      {/* Soft vertical gradient overlay (transparent at top, solid black at bottom where text sits) */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />

      {/* Text and Title Overlay - aligned to bottom-left */}
      <Container
        size="lg"
        className="absolute inset-0 flex items-center justify-center z-20 pb-16">
        <ScrollReveal>
          <div className="space-y-6 backdrop-blur-xs p-4">
            <h1 className="eyebrow text-cream-200 text-center">
              Boca Raton Interior Design Firm
            </h1>

            <h2 className="lg:text-[6rem] text-[2.25rem] text-[color-mix(in_oklab,var(--color-taupe-800)_var(--hero-mix,0%),white)] leading-none space-y-2 mb-6">
              <span className="block">
                Coastal,
                <span
                  aria-hidden
                  className="inline-block h-0.5 w-[1.5em] bg-current align-middle"
                />
              </span>
              <span className="block w-fit">not themed.</span>
            </h2>
            <p className="text-taupe-100 max-w-200">
              The interior designers at Sarvian Design Group take on residential
              and commercial work across Boca Raton, drawing interiors that suit
              the coast without leaning on the shorthand everyone else is using
              for it.
            </p>
            <ArrowButton2
              href="/projects"
              variant="primary"
              className="w-full sm:w-auto justify-center">
              View Projects
            </ArrowButton2>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
