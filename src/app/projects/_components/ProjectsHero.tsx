"use client";

import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Display from "@/components/ui/Display";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProjectsHero() {
  const meta: { label: string; value: ReactNode }[] = [
    { label: "Locations", value: "Miami to Palm Beach & Beyond" },
    { label: "Scope", value: "Interior Design in South Florida" },
    {
      label: "Featured",
      value: "Bespoke Furnishings | Custom Lighting",
    },
  ];

  return (
    <section className="flex min-h-[50dvh] w-full items-center bg-cream-200">
      <Container size="lg" className="w-full">
        <div className="grid grid-cols-1 items-center mt-24 gap-10 xl:py-24 xl:grid-cols-12 xl:gap-12">
          <div className="space-y-6 xl:space-y-10 xl:col-span-8">
            <TextEffect
              as="h1"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              className="eyebrow">
              Our Featured Interior Design Projects — South Florida
            </TextEffect>

            <Display as="h2">
              <span className="relative inline-flex flex-wrap items-baseline gap-x-4 tracking-tight">
                <TextEffect
                  as="span"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}>
                  Recent Projects
                </TextEffect>
              </span>
            </Display>

            <ScrollReveal direction="up" delay={0.2} className="md:max-w-2xl">
              <p>
                A portfolio of residences across Broward, Palm Beach, and
                Miami-Dade — waterfront estates, ground-up builds, and
                single-room transformations. Every project here began the same
                way: a conversation about how someone actually wants to live.
              </p>
            </ScrollReveal>
          </div>

          {/* Meta: hidden on mobile, horizontal row under a rule md–xl, vertical side rail at xl+ */}
          <dl className="hidden md:grid md:grid-cols-3 gap-6 border-t border-foreground/15 pt-8 xl:block xl:space-y-6 xl:col-span-4 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-12">
            {meta.map(({ label, value }, index) => (
              <div key={label}>
                <TextEffect
                  as="dt"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  delay={0.4 + index * 0.15}
                  className="eyebrow mb-0">
                  {label}
                </TextEffect>
                {typeof value === "string" ? (
                  <TextEffect
                    as="dd"
                    preset="fade-in-blur"
                    speedReveal={5}
                    speedSegment={0.3}
                    delay={0.5 + index * 0.15}
                    className="mt-1.5 text-xl">
                    {value}
                  </TextEffect>
                ) : (
                  <dd className="mt-1.5 text-xl">{value}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
