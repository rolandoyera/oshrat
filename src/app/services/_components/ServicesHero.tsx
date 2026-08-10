"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { HERO_BLUR } from "@/lib/hero-blur";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-dvh w-full items-center overflow-hidden">
      <Image
        src="/assets/aventura-interior-design-5.webp"
        alt="Sarvian Design Group interior in Aventura, Florida"
        fill
        priority
        quality={50}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={HERO_BLUR["/assets/aventura-interior-design-5.jpg"]}
        className="object-cover"
      />
      {/* Scrim for text legibility */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[3px]" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-10 py-24 lg:grid-cols-12 lg:gap-12">
          <ScrollReveal
            topReveal
            direction="left"
            className="space-y-6 lg:space-y-10 text-white lg:col-span-8"
          >
            <h1 className="eyebrow text-cream-200">
              Interior Design Firm Services in Fort Lauderdale
            </h1>

            <h2 className="display text-white flex flex-col">
              <span className="block">Interior</span>
              <span className="mr-4">
                design, <span className="italic text-accent mr-4">fully</span>
              </span>
              <span>considered.</span>
            </h2>

            <p className="max-w-xl text-cream-100">
              A full-service interior design firm handling residential and
              commercial interiors, renovations, and ground-up new construction
              throughout Broward, Palm Beach, and Miami-Dade counties.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" className="lg:col-span-4">
            <dl className="text-white lg:border-l lg:border-white/20 lg:pl-12 hidden lg:block">
              <dt className="eyebrow mb-2 text-cream-200">Founded</dt>
              <dd className="text-xl">Fort Lauderdale, FL</dd>
              <dt className="eyebrow mt-12 mb-2 text-cream-200">Scope</dt>
              <dd className="text-xl">Full-service interior design</dd>
              <dt className="eyebrow mt-12 mb-2 text-cream-200">Engagements</dt>
              <dd className="text-xl">Seven core services</dd>
            </dl>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
