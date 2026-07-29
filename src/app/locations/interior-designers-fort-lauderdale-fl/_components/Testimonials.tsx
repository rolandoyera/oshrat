"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "../../../../components/ui/Container";
import { TextEffect } from "../../../../components/motion-primitives/text-effect";

// Testimonial slider: quote left, linked project card right, progress bar +
// counter below. One testimonial visible at a time, advanced manually.

// TODO: replace mock quotes/names with real client testimonials.
type Testimonial = {
  quote: string;
  name: string;
  project: {
    title: string;
    meta: string;
    slug: string;
    image: string;
    imageAlt: string;
  };
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "After using Sarvian Design group on my Florida home, my husband and I hired them again to design our dream home in New Jersey. (Oshrat) is extremely talented and my 2 houses came out stunning..",
    name: "The Djamal Family",
    project: {
      title: "Aventura Modern Living",
      meta: "Whole Home · 2025",
      slug: "aventura-modern-living-aventura-fl",
      image: "/assets/aventura-interior-design-5.jpg",
      imageAlt: "Aventura modern living room interior by Sarvian Design Group",
    },
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];
  const count = TESTIMONIALS.length;

  return (
    <section className="bg-taupe-800 py-24 lg:py-32">
      <Container size="lg">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <TextEffect
              as="p"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              inView
              className="eyebrow">
              In their words
            </TextEffect>
            <h2 className="h2">
              <TextEffect
                as="span"
                preset="fade-in-blur"
                speedReveal={5}
                speedSegment={0.3}
                inView
                delay={0.15}
                className="block text-cream-200">
                The work speaks.
              </TextEffect>
              <TextEffect
                as="span"
                preset="fade-in-blur"
                speedReveal={5}
                speedSegment={0.3}
                inView
                delay={0.35}
                className="block italic text-accent h2 mt-0 lg:mt-2 mb-6 lg:mb-0 font-reader font-normal">
                So do the clients.
              </TextEffect>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}>
                <blockquote className="text-2xl leading-[1.18] text-cream-100 lg:text-5xl font-reader font-[250]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-foreground/15 pt-6">
                  <div>
                    <p className="italic text-cream-100">- {t.name}</p>
                  </div>
                  <Link
                    href={`/projects/${t.project.slug}`}
                    className="group text-xs uppercase tracking-[0.2em] font-medium text-cream-200 hover:text-accent">
                    See this project{" "}
                    <span
                      aria-hidden
                      className="inline-block transition-all duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}>
                <Link
                  href={`/projects/${t.project.slug}`}
                  className="group block">
                  <div className="relative aspect-4/5 overflow-hidden">
                    <Image
                      src={t.project.image}
                      alt={t.project.imageAlt}
                      fill
                      quality={75}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <p className="text-lg">{t.project.title}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">
                        {t.project.meta}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {count > 1 && (
          <div className="mt-16 flex items-center gap-6">
            <div className="relative h-1 flex-1 bg-cream-300/10">
              <div
                className="absolute left-0 top-0 h-1 bg-accent transition-all duration-500"
                style={{ width: `${((index + 1) / count) * 100}%` }}
              />
            </div>
            <p className="text-xs tracking-[0.2em] text-cream-200">
              {pad(index + 1)} / {pad(count)}
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setIndex((index - 1 + count) % count)}
                className="group text-accent transition cursor-pointer rounded-full border-[1.5px] border-accent size-10">
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
                  ←
                </span>
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setIndex((index + 1) % count)}
                className="group text-accent transition cursor-pointer rounded-full border-[1.5px] border-accent size-10">
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
