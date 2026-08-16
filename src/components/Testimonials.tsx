"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
    },
  },
  {
    quote:
      "I had an outstanding experience with my interior designer. From the very beginning, she demonstrated exceptional taste, creativity, and professionalism. She took time to understand my vision and transformed it into a beautiful space that exceeded my expectations. What impressed me most was her ability to stay mindful of my budget while never compromising on quality or style.",
    name: "Raphael Ammar",
    project: {
      title: "Aventura Modern Living",
      meta: "Whole Home · 2025",
      slug: "aventura-modern-living-aventura-fl",
    },
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];
  const count = TESTIMONIALS.length;

  return (
    <section
      data-dup-ignore
      className="bg-radial from-taupe-800 to-taupe-900 py-24 lg:py-32">
      <Container className="flex flex-col gap-4 lg:gap-16">
        <ScrollReveal className="flex flex-col items-center">
          <p className="eyebrow text-center">In their words</p>
          <h2 className="h2 text-center">
            <span className="block text-cream-200">The work speaks.</span>
            <span className="block italic text-accent h2 mt-0 mb-6 lg:mb-0 font-serif font-normal">
              So do the clients.
            </span>
          </h2>
        </ScrollReveal>
        <div className="flex items-center max-w-4xl mx-auto lg:min-h-99 min-h-90">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}>
              <blockquote className="text-[20px] md:text-2xl leading-[1.18] text-cream-100 lg:text-4xl font-serif">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="p text-cream-100 italic mt-8 text-right">
                &mdash; {t.name}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
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
