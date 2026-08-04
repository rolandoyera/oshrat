"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HERO_BLUR } from "@/lib/hero-blur";
import { useEffect, useState } from "react";

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
        src="/assets/master-bath-interior-design-front.webp"
        alt="Sarvian Design Group Las Olas showcase"
        fill
        priority
        sizes="100vw"
        quality={90}
        placeholder="blur"
        blurDataURL={
          HERO_BLUR["/assets/master-bath-interior-design-front.webp"]
        }
        style={{
          transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(1.1)`,
        }}
        className="object-cover object-bottom"
      />
      {/* Soft vertical gradient overlay (transparent at top, solid black at bottom where text sits) */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent via-20% pointer-events-none z-10" />

      {/* Text and Title Overlay - aligned to bottom-left */}
      <Container
        size="lg"
        className="absolute inset-0 flex items-end z-20 pb-16"
      >
        <ScrollReveal className="w-full">
          <div className="space-y-6">
            <h1 className="eyebrow text-cream-200">
              Interior Designers in Las Olas, FL
            </h1>

            <h2 className="lg:text-[6rem] text-[2.25rem] text-[color-mix(in_oklab,var(--color-taupe-800)_var(--hero-mix,0%),white)] leading-none space-y-2 mb-6">
              <span className="block">
                Every detail
                <span
                  aria-hidden
                  className="inline-block h-0.5 w-[1.5em] bg-current align-middle"
                />
              </span>
              <span className="block w-fit">on purpose.</span>
            </h2>
            <p className="text-taupe-100 max-w-200">
              We are interior designers in Las Olas, Florida, working across
              residential and commercial interiors — the waterfront homes along
              the isles and the shops and restaurants that give the boulevard
              its character. Every layout, material, and detail with purpose.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
