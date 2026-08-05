"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

/**
 * Scroll-driven services story (inspo: oevra.com). One tall section pins a
 * full-viewport stage; scroll progress drives four phases:
 *
 *  1. Converge — seven small numbered cards fly in from the screen edges and
 *     settle into a loose center cluster.
 *  2. Expand — the first card grows to full-bleed while the rest fade away.
 *  3. Reveal — the first service's title/copy rises in over the image.
 *  4. Slides — each next image rises solid from the bottom; once it's ~50%
 *     up, its text reveals. Repeats through all seven services.
 *
 * Text reveals mimic ScrollReveal's fade+rise, but are driven by scroll
 * progress — an IntersectionObserver can't gate anything inside a pinned
 * stage (everything is always "in view").
 */

export interface SequenceService {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
}

// --- Timeline (fractions of the section's total scroll) ---

const CONVERGE_START = 0.02; // cards begin flying while the stage scrolls in
const CONVERGE_STAGGER = 0.012; // per-card head start on the fly-in
const CONVERGE_LEN = 0.12; // duration of each card's flight
const TUCK: [number, number] = [0.21, 0.235]; // labels fade / cards reach center
const EXPAND_START = 0.24; // hero card starts growing to full-bleed
const EXPAND_END = 0.32;
const TEXT1_IN: [number, number] = [0.34, 0.38];
const SLIDES_START = 0.42; // first full-bleed transition begins
const slideLen = (count: number) => (1 - SLIDES_START) / (count - 1);
const RISE_LEN = 0.05; // portion of a slide window spent rising in

// Each card's flight: `from` is off-screen, `to` is a loose-cluster waypoint
// it passes through mid-flight (offsets from viewport center). The hero
// (index 0) settles dead-center; the rest continue on to center in one
// continuous move and vanish behind the hero before it expands.
const FLIGHTS: {
  from: { x: string; y: string };
  to: { x: string; y: string };
  w?: string;
  ratio?: string;
}[] = [
  // -80vw keeps the hero fully off-screen even on phones, where its 180px
  // minimum width is a large share of the viewport.
  { from: { x: "-80vw", y: "14vh" }, to: { x: "0vw", y: "0vh" } },
  {
    from: { x: "-75vw", y: "45vh" },
    to: { x: "-26vw", y: "14vh" },
    w: "clamp(120px,14vw,280px)",
    ratio: "3/4",
  },
  {
    from: { x: "75vw", y: "-45vh" },
    to: { x: "24vw", y: "-14vh" },
    w: "clamp(130px,15vw,320px)",
    ratio: "4/3",
  },
  {
    from: { x: "-75vw", y: "-40vh" },
    to: { x: "-31vw", y: "-15vh" },
    w: "clamp(110px,12vw,260px)",
    ratio: "4/3",
  },
  {
    from: { x: "78vw", y: "40vh" },
    to: { x: "28vw", y: "15vh" },
    w: "clamp(110px,12vw,260px)",
    ratio: "3/4",
  },
  {
    from: { x: "30vw", y: "-90vh" },
    to: { x: "9vw", y: "-20vh" },
    w: "clamp(100px,10vw,220px)",
    ratio: "3/4",
  },
  {
    from: { x: "-28vw", y: "90vh" },
    to: { x: "-9vw", y: "21vh" },
    w: "clamp(100px,10vw,220px)",
    ratio: "4/3",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

function flightRange(index: number): [number, number] {
  const start = CONVERGE_START + index * CONVERGE_STAGGER;
  return [start, start + CONVERGE_LEN];
}

// When service `index`'s text rises in / fades out. Text N fades while the
// next image is still rising over it — that overlap is the crossfade beat.
function textWindow(index: number, count: number) {
  const isLast = index === count - 1;
  const nextStart = SLIDES_START + index * slideLen(count);
  const out: [number, number] | null = isLast
    ? null
    : [nextStart, nextStart + 0.035];
  if (index === 0) return { in: TEXT1_IN, out };
  const windowStart = SLIDES_START + (index - 1) * slideLen(count);
  const halfRisen = windowStart + RISE_LEN / 2;
  return { in: [halfRisen, halfRisen + 0.04] as [number, number], out };
}

function CardLabel({ index, title }: { index: number; title: string }) {
  return (
    <span className="absolute left-0 top-full mt-3 block text-[10px] uppercase tracking-[0.2em] md:text-xs">
      <span className="block text-accent font-bold">({pad(index + 1)})</span>
      <span className="mt-1 block max-w-[16ch] text-foreground/80">
        {title}
      </span>
    </span>
  );
}

// First service: flies in with the cluster, then grows to fill the viewport.
function HeroCard({
  service,
  progress,
}: {
  service: SequenceService;
  progress: MotionValue<number>;
}) {
  const { from, to } = FLIGHTS[0];
  const range = flightRange(0);
  const x = useTransform(progress, range, [from.x, to.x]);
  const y = useTransform(progress, range, [from.y, to.y]);

  // Growth is interpolated inside a clamp() so the card keeps a usable
  // minimum size on small screens while still landing exactly full-bleed.
  // The pre-expand size (180px/22vw/360px × 240px/48vh/440px) must stay
  // larger than every small card so the tucked stack hides behind it.
  const grow = useTransform(progress, [EXPAND_START, EXPAND_END], [0, 1]);
  const width = useTransform(
    grow,
    (v) => `clamp(${180 * (1 - v)}px, ${22 + 78 * v}vw, ${360 + 5000 * v}px)`,
  );
  const height = useTransform(
    grow,
    (v) => `clamp(${240 * (1 - v)}px, ${48 + 52 * v}vh, ${440 + 5000 * v}px)`,
  );
  const labelOpacity = useTransform(progress, [0.2, 0.23], [1, 0]);

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center">
      <motion.div style={{ x, y, width, height }} className="relative">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <motion.span style={{ opacity: labelOpacity }} className="block">
          <CardLabel index={0} title={service.title} />
        </motion.span>
      </motion.div>
    </div>
  );
}

// Services 2–7 during the converge phase: fly in, pause in the cluster, then
// slide to dead-center and disappear behind the hero before it expands.
function SmallCard({
  index,
  service,
  progress,
}: {
  index: number;
  service: SequenceService;
  progress: MotionValue<number>;
}) {
  const { from, to, w, ratio } = FLIGHTS[index];
  const range = flightRange(index);
  // One continuous path: off-screen → cluster waypoint → dead-center. No
  // hold at the waypoint, so the tuck reads as a single fluid move.
  const x = useTransform(
    progress,
    [range[0], range[1], TUCK[1]],
    [from.x, to.x, "0vw"],
  );
  const y = useTransform(
    progress,
    [range[0], range[1], TUCK[1]],
    [from.y, to.y, "0vh"],
  );
  // Labels would peek out below the hero once tucked — gone before arrival.
  const labelOpacity = useTransform(progress, [TUCK[0], TUCK[1]], [1, 0]);
  // Tucked cards are covered by the hero; the quick fade only guards extreme
  // aspect ratios where a card could be taller than the pre-expand hero.
  const opacity = useTransform(
    progress,
    [EXPAND_START, EXPAND_START + 0.03],
    [1, 0],
  );

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <motion.div
        style={{ x, y, opacity, width: w, aspectRatio: ratio }}
        className="relative">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            quality={75}
            sizes="20vw"
            className="object-cover"
          />
        </div>
        <motion.span style={{ opacity: labelOpacity }} className="block">
          <CardLabel index={index} title={service.title} />
        </motion.span>
      </motion.div>
    </div>
  );
}

// Services 2–7 as full-bleed layers: rise solid from the bottom over the
// previous image.
function Slide({
  index,
  service,
  count,
  progress,
}: {
  index: number;
  service: SequenceService;
  count: number;
  progress: MotionValue<number>;
}) {
  const windowStart = SLIDES_START + (index - 1) * slideLen(count);
  const rise: [number, number] = [windowStart, windowStart + RISE_LEN];
  const y = useTransform(progress, rise, ["100vh", "0vh"]);

  return (
    <motion.div style={{ y, zIndex: 30 + index }} className="absolute inset-0">
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        quality={75}
        sizes="100vw"
        className="object-cover"
      />
    </motion.div>
  );
}

// Title + copy overlay for one service, plus prev/next markers on the right
// edge. Fade+rise timing matches ScrollReveal's entrance.
function SlideText({
  index,
  service,
  count,
  progress,
}: {
  index: number;
  service: SequenceService;
  count: number;
  progress: MotionValue<number>;
}) {
  const { in: tIn, out } = textWindow(index, count);
  const range = out ? [tIn[0], tIn[1], out[0], out[1]] : tIn;
  const fade = useTransform(progress, range, out ? [0, 1, 1, 0] : [0, 1]);
  const y = useTransform(progress, range, out ? [48, 0, 0, -24] : [48, 0]);
  // Animating opacity on an ancestor of a backdrop-filter flattens the subtree
  // into an isolated group mid-fade — the blur loses the page behind it and
  // pops back at opacity 1 (the "blink"). So the panel never fades: its blur
  // radius, tint, border, and shadow are driven directly, and only the text
  // content inside animates opacity.
  const blur = useTransform(fade, (v) => `blur(${12 * v}px)`);
  const backgroundColor = useTransform(
    fade,
    (v) => `rgba(0, 0, 0, ${0.35 * v})`,
  );
  const borderColor = useTransform(
    fade,
    (v) => `rgba(255, 255, 255, ${0.1 * v})`,
  );
  const boxShadow = useTransform(
    fade,
    (v) => `0 25px 50px -12px rgba(0, 0, 0, ${0.25 * v})`,
  );

  return (
    <motion.div
      style={{ y }}
      className="pointer-events-none absolute inset-0 z-40 flex items-end pb-8 lg:pb-8">
      <div className="w-full px-6 lg:px-8">
        <motion.div
          style={{
            backdropFilter: blur,
            WebkitBackdropFilter: blur,
            backgroundColor,
            borderColor,
            boxShadow,
          }}
          className="ml-auto max-w-3xl rounded-xs border p-4 text-white">
          <motion.div style={{ opacity: fade }}>
            <p className="eyebrow text-white">
              ({pad(index + 1)}) {service.category}
            </p>
            <h3 className="h2 text-white">{service.title}</h3>
            <p className="p mt-6 text-pretty text-cream-100">
              {service.description}
            </p>
            {index === 0 && (
              <div className="mt-6">
                <p className="p text-base text-cream-100">
                  Featured in Florida Design magazine, Art Basel Edition.
                </p>
                <Image
                  src="/assets/Florida-design-magazine-cover-top.jpg"
                  alt="Florida Design magazine logo"
                  width={794}
                  height={147}
                  className="mt-4 h-auto w-56"
                />
                <Link
                  href="/press"
                  className="group pointer-events-auto mt-10 inline-block text-xs uppercase tracking-wide font-bold text-cream-100 hover:text-accent">
                  View press release{" "}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Mobile: the pinned scroll story is unreadable on a phone — full-bleed images
// are cropped to a sliver and the text-over-image glass panel is cramped. So
// mobile gets a plain stacked layout instead: each service's image sits at
// container width (16:9) with its copy below in foreground color, no card.
function MobileServices({ services }: { services: SequenceService[] }) {
  return (
    <section className="bg-cream-200 py-20 lg:hidden">
      <div className="space-y-16 px-6">
        {services.map((service, index) => (
          <article key={service.title}>
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                quality={75}
                sizes="calc(100vw - 3rem)"
                className="object-cover"
              />
            </div>
            <p className="eyebrow mt-6">
              ({pad(index + 1)}) {service.category}
            </p>
            <h3 className="mt-2 text-3xl font-normal leading-h1 tracking-tight text-balance text-foreground">
              {service.title}
            </h3>
            <p className="p mt-4">{service.description}</p>
            {index === 0 && (
              <div className="mt-4">
                <p className="p">
                  This home was featured in Florida Design magazine, Art Basel
                  Edition.
                </p>
                <Image
                  src="/assets/Florida-design-magazine-cover-top.jpg"
                  alt="Florida Design magazine logo"
                  width={794}
                  height={147}
                  className="mt-6 h-auto w-56"
                />
                <Link
                  href="/press"
                  className="group mt-2 inline-block text-xs uppercase tracking-[0.2em] font-bold text-foreground hover:text-accent">
                  View press release{" "}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ServicesSequence({
  services,
  heading = "What we do",
}: {
  services: SequenceService[];
  /**
   * The section's <h2>. It stays sr-only because the converge animation flies
   * cards through this space, so nothing can be drawn here until the first
   * slide settles — but it is a real heading in the DOM and Google reads it,
   * so location pages pass a city-specific phrase. One natural phrase per
   * page; an invisible heading stuffed with keywords invites a manual action.
   */
  heading?: string;
}) {
  return (
    <>
      <h2 className="sr-only">{heading}</h2>
      <MobileServices services={services} />
      <DesktopSequence services={services} />
    </>
  );
}

function DesktopSequence({ services }: { services: SequenceService[] }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Track from the moment the section's top enters the viewport — not from
    // pin — so the cards are already mid-flight while the stage scrolls in
    // and there's no dead viewport between this and the section above. The
    // stage pins at roughly p = 100vh / 900vh ≈ 0.11.
    //
    // "start 1"/"end 1" is deliberate — it means exactly ["start end",
    // "end end"], but that spelling matches motion's Enter preset, which
    // silently promotes the value to a native ViewTimeline "entry" range.
    // For a target taller than the viewport, CSS ends "entry" at pin (one
    // viewport) while motion's JS math ends at the section bottom — so
    // natively-promoted styles (text opacity) ran on a wildly compressed
    // timeline while JS-driven transforms stayed correct. The numeric
    // spelling fails the preset match and keeps every style on the same
    // JS-computed progress.
    offset: ["start 1", "end 1"],
  });

  return (
    <section ref={ref} className="relative hidden h-[900vh] -mt-80 lg:block">
      <div className="sticky top-0 h-dvh overflow-hidden">
        {/* FLIGHTS only defines converge paths for 7 cards — extra services
            skip the fly-in but still get their slide + text. */}
        {services.slice(1, FLIGHTS.length).map((service, i) => (
          <SmallCard
            key={service.title}
            index={i + 1}
            service={service}
            progress={scrollYProgress}
          />
        ))}
        <HeroCard service={services[0]} progress={scrollYProgress} />
        {services.slice(1).map((service, i) => (
          <Slide
            key={service.title}
            index={i + 1}
            service={service}
            count={services.length}
            progress={scrollYProgress}
          />
        ))}
        {services.map((service, i) => (
          <SlideText
            key={service.title}
            index={i}
            service={service}
            count={services.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
