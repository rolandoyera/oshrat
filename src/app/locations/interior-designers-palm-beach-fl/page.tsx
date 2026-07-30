"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HERO_BLUR } from "@/lib/hero-blur";
import Cta from "@/components/Cta";
import { useEffect, useState } from "react";

export default function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <section className="relative aspect-16/7.5 mt-26 w-full overflow-hidden bg-black">
        <Image
          src="/assets/onyx-master-bath-remodel-1920.webp"
          alt="Sarvian Design Group interior showcase"
          fill
          priority
          sizes="100vw"
          quality={90}
          placeholder="blur"
          blurDataURL={HERO_BLUR["/about/Sarvian-Design-Group.jpg"]}
          style={{
            transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(1.1)`,
          }}
          className="object-cover object-top"
        />
        {/* Soft vertical gradient overlay (transparent at top, solid black at bottom where text sits) */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent via-40% pointer-events-none z-10" />

        {/* Text and Title Overlay - aligned to bottom-left */}
        <Container
          size="lg"
          className="absolute inset-0 flex items-end z-20 pb-16">
          <ScrollReveal className="max-w-350 w-full">
            <div className="max-w-200 space-y-6">
              <h1 className="eyebrow text-cream-200">
                Palm Beach Interior Design Firm
              </h1>
              <h2 className="display text-white">
                Palm Beach Interior Design Firm
              </h2>
              <p className="text-taupe-100">
                Blending striking architectural forms with thoughtfully curated
                interiors, Sarvian Design Group creates South Florida homes that
                unite nature and design into one harmonious experience.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
      <Cta />
    </main>
  );
}
