"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import Container from "../../../components/ui/Container";
import P from "../../../components/ui/P";

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

// This section owns its content — editing titles/copy/images here changes
// nothing on the /services page (which keeps its own list in
// ServicesSection). Swap each `image` to its -16x9.jpg variant as those are
// exported to /public/services.
interface SequenceService {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
}

const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Curated interiors for primary residences, waterfront estates, and pieds-à-terre. We compose furniture plans, finishes, lighting, and art into rooms that feel gathered over time — not staged. Every choice is made in relation to the next, so a home reads as one continuous idea rather than a series of decorated rooms.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Down-to-the-studs remodels handled from layout to last detail. We reshape the plan, design the millwork, and coordinate closely with your contractor and trades to protect the design intent on site. It's a demanding process — our job is to keep it moving, keep it coordinated, and keep the outcome true to the original vision.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "Interiors developed alongside your architect from the ground up, so flow, finishes, and lighting are resolved before the first wall is framed — and the finished home reads as a single, coherent idea. Getting involved this early means fewer compromises later — the architecture and the interior are never fighting each other.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "Cabinetry, stone, and appliance kitchen planning built around how you actually cook and gather — detailed for the way the room is used every day, morning through dinner party. It's usually the hardest-working room in the house, so every decision — storage, sightlines, workflow — is made with that in mind during the kitchen design process.",
    image: "/services/kitchen-design.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Spa-calm bathrooms with considered stone, fixtures, and layered lighting. Every surface is specified for daily use and easy upkeep, without losing the quiet luxury of the room. Light, water, and material are treated as a single experience — the goal is a room that feels as good to be in as it looks.",
    image: "/services/bathroom-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Bespoke case goods and built-ins fabricated to fit the room and the way you live in it. Designed in-house, made by trusted artisans, and detailed to the millimeter. Every piece is drawn, refined, and specified before fabrication begins, so what arrives on site matches the vision exactly.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
  {
    title: "Single-Room Transformations",
    category: "Single space",
    description:
      "One room, fully realized — ideal for a primary suite, study, or living room that needs to come together quickly and beautifully, with the same rigor as a whole-home engagement. A focused scope means faster decisions and a shorter path from concept to finished room, without cutting a single corner.",
    image: "/services/single-room-transformations-16x9.jpg",
    imageAlt:
      "High-end modern primary suite transformation featuring a low-profile upholstered bed with custom millwork throughout.",
  },
];

// --- Timeline (fractions of the section's total scroll) ---

const CONVERGE_START = 0.02; // cards begin flying while the stage scrolls in
const CONVERGE_STAGGER = 0.012; // per-card head start on the fly-in
const CONVERGE_LEN = 0.12; // duration of each card's flight
const TUCK: [number, number] = [0.21, 0.235]; // labels fade / cards reach center
const EXPAND_START = 0.24; // hero card starts growing to full-bleed
const EXPAND_END = 0.32;
const TEXT1_IN: [number, number] = [0.34, 0.38];
const SLIDES_START = 0.42; // first full-bleed transition begins
const SLIDE_LEN = (1 - SLIDES_START) / (SERVICES.length - 1);
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
function textWindow(index: number) {
  const isLast = index === SERVICES.length - 1;
  const nextStart = SLIDES_START + index * SLIDE_LEN;
  const out: [number, number] | null = isLast
    ? null
    : [nextStart, nextStart + 0.035];
  if (index === 0) return { in: TEXT1_IN, out };
  const windowStart = SLIDES_START + (index - 1) * SLIDE_LEN;
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
function HeroCard({ progress }: { progress: MotionValue<number> }) {
  const service = SERVICES[0];
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
  // Legibility scrim eases in as the image reaches full-bleed.
  const scrimOpacity = useTransform(progress, [0.28, 0.34], [0, 1]);

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
          <motion.div
            style={{ opacity: scrimOpacity }}
            className="absolute inset-0 bg-black/40"
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
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const service = SERVICES[index];
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
            alt=""
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
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const service = SERVICES[index];
  const windowStart = SLIDES_START + (index - 1) * SLIDE_LEN;
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
      <div className="absolute inset-0 bg-black/40" />
    </motion.div>
  );
}

// Title + copy overlay for one service, plus prev/next markers on the right
// edge. Fade+rise timing matches ScrollReveal's entrance.
function SlideText({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const service = SERVICES[index];
  const prev = SERVICES[index - 1];
  const next = SERVICES[index + 1];
  const { in: tIn, out } = textWindow(index);
  const range = out ? [tIn[0], tIn[1], out[0], out[1]] : tIn;
  const opacity = useTransform(progress, range, out ? [0, 1, 1, 0] : [0, 1]);
  const y = useTransform(progress, range, out ? [48, 0, 0, -24] : [48, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none absolute inset-0 z-40 flex items-center">
      <Container size="lg" className="w-full">
        <div className="max-w-3xl text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-cream-100 font-bold">
            ({pad(index + 1)}) — {service.category}
          </p>
          <h3 className="mt-8 text-[clamp(2.25rem,1.5rem+3vw,4.5rem)] font-normal leading-[1.05] tracking-tight text-balance">
            {service.title}
          </h3>
          <P className="mt-10 max-w-md text-cream-100/90 lg:ml-32">
            {service.description}
          </P>
        </div>
      </Container>

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 space-y-12 text-[11px] uppercase tracking-[0.2em] text-cream-100 lg:block xl:right-10">
        {prev && (
          <p>
            <span aria-hidden className="block">
              ←
            </span>
            <span className="mt-2 block text-cream-100">({pad(index)})</span>
            <span className="mt-1 block max-w-[14ch]">{prev.title}</span>
          </p>
        )}
        {next && (
          <p>
            <span aria-hidden className="block">
              →
            </span>
            <span className="mt-2 block text-cream-100">
              ({pad(index + 2)})
            </span>
            <span className="mt-1 block max-w-[14ch]">{next.title}</span>
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function ServicesSequence() {
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
    <section ref={ref} className="relative h-[900vh] -mt-80">
      <h2 className="sr-only">What we do</h2>
      <div className="sticky top-0 h-dvh overflow-hidden">
        {SERVICES.slice(1).map((service, i) => (
          <SmallCard
            key={service.title}
            index={i + 1}
            progress={scrollYProgress}
          />
        ))}
        <HeroCard progress={scrollYProgress} />
        {SERVICES.slice(1).map((service, i) => (
          <Slide key={service.title} index={i + 1} progress={scrollYProgress} />
        ))}
        {SERVICES.map((service, i) => (
          <SlideText key={service.title} index={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
