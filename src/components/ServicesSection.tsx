import Image from "next/image";
import Container from "./ui/Container";
import H2 from "./ui/H2";
import ScrollReveal from "./ui/ScrollReveal";
import { TextEffect } from "./motion-primitives/text-effect";

interface Service {
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  fig: string;
  image: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    index: "S·01",
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Curated interiors for primary residences, waterfront estates, and pieds-à-terre. We compose furniture plans, finishes, lighting, and art into rooms that feel gathered over time — not staged.",
    tags: [
      "Furniture plans",
      "Finishes & palette",
      "Lighting design",
      "Art & styling",
    ],
    fig: "Fig. 01 — Living",
    image: "/services/residential-interior-design.jpg",
    imageAlt:
      "A modern, luxury home corridor showcasing bespoke art and styling. Features large, vibrant contemporary portraits above a floating wood console, a sleek open staircase, integrated linear ceiling lighting, and a long, minimalist hallway leading to a bright living space.",
  },
  {
    index: "S·02",
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Down-to-the-studs remodels handled from layout to last detail. We reshape the plan, design the millwork, and coordinate closely with your contractor and trades to protect the design intent on site.",
    tags: [
      "Space planning",
      "Custom millwork",
      "Trade coordination",
      "Finishes & fixtures",
    ],
    fig: "Fig. 02 — Remodel",
    image: "/services/full-home-renovations.jpg",
    imageAlt:
      "Exterior view of a luxury modern multi-story estate renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls. The structural layout includes private balconies with glass railings, integrated wood slat accents, tropical landscaping, and a view of a silver sports car parked in an integrated glass garage.",
  },
  {
    index: "S·03",
    title: "New Construction",
    category: "New build",
    description:
      "Interiors developed alongside your architect from the ground up, so flow, finishes, and lighting are resolved before the first wall is framed — and the finished home reads as a single, coherent idea.",
    tags: [
      "Architect collaboration",
      "Early finishes",
      "Lighting plans",
      "Spatial flow",
    ],
    fig: "Fig. 03 — Build",
    image: "/services/new-construction.jpg",
    imageAlt:
      "Interior view of a luxury double-height living room featuring an open-concept layout with floor-to-ceiling glass walls looking out onto a landscaped garden. The modern space showcases a massive textured accent wall with a mounted television, a large neutral sectional sofa accented with deep teal pillows, lush indoor plants, and three large, sculptural spherical pendant lights suspended from the high ceiling.",
  },
  {
    index: "S·04",
    title: "Kitchen Design",
    category: "Single space",
    description:
      "Cabinetry, stone, and appliance planning built around how you actually cook and gather — detailed for the way the room is used every day, morning through dinner party.",
    tags: [
      "Cabinetry",
      "Stone & surfaces",
      "Appliance planning",
      "Task lighting",
    ],
    fig: "Fig. 04 — Kitchen",
    image: "/services/kitchen-design.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets. The space showcases floor-to-ceiling flat-panel wood cabinetry, integrated double wall ovens, a matching marble backsplash, and a sophisticated black track lighting layout paired with minimalist linear pendants.",
  },
  {
    index: "S·05",
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Spa-calm bathrooms with considered stone, fixtures, and layered lighting. Every surface is specified for daily use and easy upkeep, without losing the quiet luxury of the room.",
    tags: ["Stone & tile", "Fixtures", "Vanities", "Layered lighting"],
    fig: "Fig. 05 — Bath",
    image: "/services/bathroom-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration. Features a double vanity with a heavily veined Calacatta marble countertop, dual white rectangular vessel sinks with brushed gold fixtures, a floating walnut cabinet, and an oval freestanding soaking tub in the background.",
  },
  {
    index: "S·06",
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Bespoke case goods, upholstery, and built-ins fabricated to fit the room and the way you live in it. Designed in-house, made by trusted workrooms, and detailed to the millimeter.",
    tags: ["Case goods", "Upholstery", "Built-ins", "Workroom liaison"],
    fig: "Fig. 06 — Bespoke",
    image: "/services/custom-furnishings.jpg",
    imageAlt:
      "A conceptual product design graphic for a luxury custom cabinet, split down the center. The left side displays a detailed technical wireframe drawing with architectural measurements and millimeter dimensions, while the right side shows the completed 3D rendering of the bespoke dark wood veneer armoire with a partially open door.",
  },
  {
    index: "S·07",
    title: "Single-Room Transformations",
    category: "Single space",
    description:
      "One room, fully realized — ideal for a primary suite, study, or living room that needs to come together quickly and beautifully, with the same rigor as a whole-home engagement.",
    tags: [
      "Focused scope",
      "Faster timeline",
      "Full furnishing",
      "Final styling",
    ],
    fig: "Fig. 07 — Suite",
    image: "/services/single-room-transformations.jpg",
    imageAlt:
      "High-end modern primary suite transformation featuring a low-profile upholstered bed with monochromatic grey and white linens. The fully realized bedroom includes floor-to-ceiling wood wall paneling, fluted drum nightstands with dark stone tops, minimalist pendant lights, an open display shelving unit accented with a heavily veined marble ledge, chevron wood flooring, and a plush area rug.",
  },
];

const eyebrow = "text-xs uppercase tracking-[0.2em] text-accent font-bold";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-cream-200 py-24 lg:py-32">
      <Container>
        {/* Intro */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lgmt-38">
          <div className="lg:col-span-12">
            <TextEffect
              as="p"
              per="char"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              inView
              className={eyebrow}>
              The studio
            </TextEffect>
          </div>
          <div className="lg:col-span-5">
            <H2 className="flex flex-col gap-2 lg:text-6xl">
              <TextEffect
                as="span"
                preset="fade-in-blur"
                speedReveal={5}
                speedSegment={0.3}
                inView>
                One team,
              </TextEffect>
              <TextEffect
                as="span"
                preset="fade-in-blur"
                speedReveal={5}
                speedSegment={0.3}
                inView
                delay={0.15}
                className="lg:relative lg:top-2 lg:ml-8">
                first sketch
              </TextEffect>
              <span className="lg:relative lg:ml-16">
                <TextEffect
                  as="span"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  inView
                  delay={0.3}
                  className="inline relative md:top-3 xl:top-0">
                  to final
                </TextEffect>
                <TextEffect
                  as="span"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  inView
                  delay={0.45}
                  className="font-serif text-accent text-[1.6em] leading-none ml-4 inline-block">
                  styling
                </TextEffect>
                .
              </span>
            </H2>
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            <TextEffect
              as="p"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              inView
              delay={0.2}>
              We design homes that move effortlessly between indoors and out —
              pairing striking architectural forms with interiors that feel
              collected rather than decorated.
            </TextEffect>
            <TextEffect
              as="p"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              inView
              delay={0.35}>
              Whether you&apos;re building from the ground up, taking a
              residence down to the studs, or transforming a single room, the
              work is handled end to end: layout, finishes, lighting,
              furnishings, procurement, and installation. Below are the ways we
              typically engage.
            </TextEffect>
          </div>
        </div>

        {/* Services index header */}
        <div className="flex items-end justify-between border-b border-border pb-6 mt-60">
          <div>
            <TextEffect
              as="p"
              per="char"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              inView
              className={eyebrow}>
              What we do
            </TextEffect>
            <TextEffect
              as="h2"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              inView
              delay={0.15}
              className="mt-4 text-3xl lg:text-5xl font-normal text-balance tracking-tight text-foreground">
              Services
            </TextEffect>
          </div>
          <TextEffect
            as="p"
            preset="fade-in-blur"
            speedReveal={5}
            speedSegment={0.3}
            inView
            delay={0.2}
            className="text-xs uppercase tracking-[0.2em] text-foreground">
            Schedule — 07 Engagements
          </TextEffect>
        </div>

        {/* Rows */}
        <div>
          {SERVICES.map((service, index) => (
            <ScrollReveal
              key={service.index}
              direction={index % 2 === 0 ? "left" : "right"}
              threshold={0.6}>
              <article className="grid grid-cols-1 gap-6 border-b border-border py-12 lg:grid-cols-12 lg:gap-8 lg:py-14">
                <div className="lg:col-span-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
                    {service.index}
                  </span>
                </div>

                <div className="lg:col-span-3">
                  <h3 className="max-w-[14ch] text-2xl font-normal leading-tight tracking-tight lg:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-foreground">
                    <span className="mr-1.5 text-accent font-bold">•</span>
                    {service.category}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-foreground/85">{service.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4">
                  <div className="relative aspect-5/4 w-full overflow-hidden rounded">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      quality={90}
                      sizes="(min-width: 1024px) 25vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-cream-100/90">
                      {service.fig}
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
