"use client";

import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HERO_BLUR } from "@/lib/hero-blur";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PressPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Section 1: Full-Screen Hero Editorial Cover */}
      <section
        className="relative h-dvh w-full overflow-hidden bg-black bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_BLUR["/press/bedroom-remodel-armoire-scene-lg.webp"]})`,
        }}>
        {/* Art-directed like FadingHeroBackdrop: <source media> makes the
            browser fetch exactly one pre-encoded crop, bypassing next/image. */}
        <picture>
          <source
            media="(max-width: 1023px)"
            srcSet="/press/bedroom-remodel-armoire-scene-sm.webp"
          />
          {/* eslint-disable-next-line @next/next/no-img-element -- art-directed pre-optimized webp */}
          <img
            src="/press/bedroom-remodel-armoire-scene-lg.webp"
            alt="Sarvian Design Group architecture and interior showcase"
            fetchPriority="high"
            decoding="async"
            style={{
              transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(1.1)`,
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        {/* Soft vertical gradient overlay (transparent at top, solid black at bottom where text sits) */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />

        <Container
          size="lg"
          className="flex flex-col justify-end z-20 pb-16 relative h-full">
          {/* topReveal: this text is the page's LCP element — the entrance
              must be CSS-only, never gated on hydration + observer. */}
          <ScrollReveal topReveal direction="down" delay={0}>
            <div className="max-w-250 space-y-6">
              <h2 className="eyebrow text-cream-200">
                A Fort Lauderdale Interior Design Firm
              </h2>
              <h1 className="display text-white">Press & Media</h1>
            </div>
          </ScrollReveal>
          <ScrollReveal topReveal direction="up" delay={100}>
            <p className="text-taupe-100 max-w-200">
              Every project tells a story—one shaped by thoughtful architecture,
              refined interiors, and the art of creating spaces that feel both
              luxurious and deeply personal. Our studio is proud to share the
              moments, publications, and press features that highlight our work
              in South Florida.
            </p>
          </ScrollReveal>
        </Container>
      </section>
      <main className="px-4 lg:px-8 mb-20">
        <Container>
          <div className="w-full flex flex-col items-center justify-center py-10 lg:py-30">
            <h2 className="h1">Featured In</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/assets/Florida-design-magazine-cover.jpg"
              alt="Florida Design Magazine Press Article"
              width={911}
              height={1069}
            />
            <Image
              src="/press/sarvian-design-florida-design-magazine_Page_1.webp"
              alt=""
              width={3000}
              height={1800}
            />
            <Image
              src="/press/sarvian-design-florida-design-magazine_Page_2.webp"
              alt=""
              width={3000}
              height={1800}
            />
            <Image
              src="/press/sarvian-design-florida-design-magazine_Page_3.webp"
              alt=""
              width={3000}
              height={1800}
            />
            <Image
              src="/press/sarvian-design-florida-design-magazine_Page_4.webp"
              alt=""
              width={3000}
              height={1800}
            />
          </div>
        </Container>
      </main>
    </>
  );
}
