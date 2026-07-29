"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SignatureDraw from "./SignatureDraw";
import { HERO_BLUR } from "@/lib/hero-blur";
import Cta from "@/components/Cta";
import { SITE } from "@/lib/site";

export default function AboutContent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-cream-200">
      {/* Section 1: Full-Screen Hero Editorial Cover */}
      <section className="relative h-dvh w-full overflow-hidden bg-black">
        <Image
          src="/about/Sarvian-Design-Group.jpg"
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
          className="object-cover"
        />
        {/* Soft vertical gradient overlay (transparent at top, solid black at bottom where text sits) */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent via-40% pointer-events-none z-10" />

        {/* Text and Title Overlay - aligned to bottom-left */}
        <div className="absolute inset-0 flex items-end z-20 pb-16 px-6">
          <ScrollReveal className="mx-auto max-w-350 w-full">
            <div className="max-w-200 space-y-6">
              <p className="eyebrow text-cream-200">About {SITE.name}</p>
              <h1 className="display text-white">
                A Fort Lauderdale Interior Design Firm
              </h1>
              <p className="text-taupe-100">
                Blending striking architectural forms with thoughtfully curated
                interiors, Sarvian Design Group creates South Florida homes that
                unite nature and design into one harmonious experience.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rest of the content wrapped in standard container */}
      <Container className="space-y-24 py-16 md:py-24 lg:py-32 max-w-375">
        {/* Section 2: Narrative & Vision Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-20">
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <h2>
                A Legacy <br />
                of Interior <span className="text-accent">Design</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal direction="right" delay={150}>
              <p>
                As a Fort Lauderdale interior design studio, we believe high-end
                spaces should do more than look extraordinary - they should move
                with you, quietly elevating the way you live. We design for
                clients who value scale, harmony, and timeless sophistication
                over passing trends.
              </p>

              <p>
                Since 2014, Sarvian Design Group has helped homeowners
                throughout Broward, Palm Beach, and Miami-Dade counties create
                sophisticated, highly personalized spaces - from full home
                renovations and new construction to kitchen and bath design,
                custom furnishings, and single-room transformations.
              </p>

              <p>
                Every project follows a complete design process, from initial
                concept through final installation. Using photorealistic 3D
                visualization along the way, we let you walk through your
                interiors, refine every material and finish, and move forward
                with total confidence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 3: Meet the Principal */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center pt-32 lg:py-50 border-t border-border/20">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5">
            <ScrollReveal className="rounded shadow-2xl group border border-border/10">
              <div className="relative w-full aspect-3/4 overflow-hidden">
                <Image
                  src="/about/sarvian-design-group-oshrat-rothschild.jpg"
                  alt="Oshrat Rothschild - Principal Interior Designer and owner of Sarvian Design Group"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={90}
                  className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(.215,.61,.355,1)] group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Creative Leadership
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-normal uppercase tracking-tight leading-none">
                Oshrat Rothschild
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150} className="-mt-4">
              <p className="text-sm md:text-base font-mono uppercase text-taupe-500">
                Principal Interior Designer, Fort Lauderdale
              </p>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <p>
                Oshrat's vision is rooted in clean lines, natural textures, and
                harmonious flow. By pairing organic, noble materials with
                curated modern details, she designs spaces that feel expansive
                yet deeply intimate.
              </p>

              <p>
                Her philosophy balances scale, comfort, and architectural
                honesty. Treating lighting, materials, and custom cabinetry as
                structural elements of design, she tailors every project in Fort
                Lauderdale, Miami, and the surrounding South Florida communities
                to the lifestyle and aspirations of the client.
              </p>
            </ScrollReveal>

            <div className="ml-auto w-fit pt-8 text-right">
              <ScrollReveal delay={350}>
                <p className="italic text-muted-foreground font-light">
                  "Let’s make something beautiful together."
                </p>
              </ScrollReveal>
              <SignatureDraw
                speed={1.2}
                className="w-65 h-auto mx-auto mt-8 text-accent"
              />
            </div>
          </div>
        </section>
      </Container>
      <Cta />
    </main>
  );
}
