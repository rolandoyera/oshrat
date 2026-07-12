"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import ArrowButton from "@/components/ui/ArrowButton";
import ProjectButton from "@/components/ui/ProjectButton";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import Display from "@/components/ui/Display";
import { HERO_BLUR } from "@/lib/hero-blur";

const META = [
  { label: "Founded", value: "Fort Lauderdale, FL" },
  { label: "Scope", value: "Architecture & Interiors" },
  { label: "Engagements", value: "Seven core services" },
];

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-dvh w-full items-center overflow-hidden">
      <Image
        src="/assets/aventura-interior-design-5.jpg"
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

      <Container size="lg" className="relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-10 py-24 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:space-y-10 text-white lg:col-span-8">
            <TextEffect
              as="h1"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              className="text-sm uppercase tracking-[0.2em] text-cream-200">
              Interior Design Services in Fort Lauderdale & South Florida
            </TextEffect>

            <Display as="h2" className="uppercase text-white">
              <TextEffect
                as="span"
                preset="fade-in-blur"
                speedReveal={5}
                speedSegment={0.3}
                className="block">
                Interior
              </TextEffect>
              <span className="relative inline-flex flex-wrap items-baseline gap-x-12">
                <TextEffect
                  as="span"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  delay={0.25}>
                  design,
                </TextEffect>
                <TextEffect
                  as="span"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  delay={0.4}
                  className="font-serif text-accent font-medium normal-case text-[1.6em] leading-none">
                  fully
                </TextEffect>
                <TextEffect
                  as="span"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  delay={0.55}>
                  considered.
                </TextEffect>
              </span>
            </Display>

            <TextEffect
              as="p"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              delay={0.2}
              className="max-w-xl text-cream-100">
              A full-service studio for residential interiors, renovations, and
              new construction across Broward, Palm Beach, and Miami-Dade
              counties.
            </TextEffect>

            <div className="flex flex-wrap gap-4 pt-4">
              <ProjectButton location="services_hero">
                Start a Project
              </ProjectButton>
              <ArrowButton href="/projects" variant="secondary">
                Explore Projects
              </ArrowButton>
            </div>
          </div>

          <dl className="space-y-6 text-white lg:col-span-4 lg:border-l lg:border-white/20 lg:pl-12">
            {META.map(({ label, value }, index) => (
              <div key={label}>
                <TextEffect
                  as="dt"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  delay={0.4 + index * 0.15}
                  className="text-xs uppercase tracking-[0.2em] text-cream-200">
                  {label}
                </TextEffect>
                <TextEffect
                  as="dd"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  delay={0.5 + index * 0.15}
                  className="mt-1.5 text-xl">
                  {value}
                </TextEffect>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
