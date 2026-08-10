import { Fragment } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
      "Curated interiors for primary residences, waterfront estates, and pieds-à-terre. The furniture plan, finishes, lighting, and art are developed in relation to one another rather than selected piece by piece, so rooms feel accumulated over years of good judgment and the home carries one continuous idea from the entry inward.",
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
      "Remodels taken to the studs and managed from first layout to last detail. We reshape the plan, design the millwork, and work shoulder to shoulder with your contractor and trades so the design intent holds on site. Renovation is a demanding process; our job is to keep it moving, keep it coordinated, and keep the outcome true to the original vision.",
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
      "Interiors worked out with your architect before the first wall is framed, so flow, finishes, and lighting are settled while they are still easy to change and the finished home reads as one coherent idea. Joining this early spares the compromises that surface later, and it keeps the architecture and the interior design from ever fighting each other.",
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
      "Cabinetry, stone, and appliance planning shaped by how you actually cook and gather, detailed for the way the room runs from an early weekday morning through a dinner party. No room earns its keep like this one, so the plan starts with where things live, how prep moves, and what you see from the island, and every finish decision supports a cohesive luxury kitchen design.",
    tags: [
      "Cabinetry",
      "Stone & surfaces",
      "Appliance planning",
      "Task lighting",
      "Luxury Kitchen Design",
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
      "Bathrooms with the calm of a spa and the durability of a working room. Light, water, and material are treated as one experience, with stone, fixtures, and layered lighting considered together, and every surface chosen to take daily use and easy upkeep without giving up the quiet luxury of the space. The measure is a room that feels as good to be in as it looks.",
    tags: [
      "Stone & tile",
      "Fixtures",
      "Vanities",
      "Layered lighting",
      "Luxury Bathroom Design",
    ],
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
      "Bespoke case goods and built-ins made for the room and the way you live in it. Each piece is designed in-house, refined on paper, and dimensioned to the millimeter before fabrication begins with artisans we trust, so what arrives on site is exactly what was drawn: no substitutions, no compromises.",
    tags: [
      "Case goods",
      "Built-ins",
      "Woodworking",
      "Finishes & hardware",
      "Artisan-crafted",
    ],
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
      "A single room carried all the way through: a primary suite, a study, or a living room that needs to come together quickly and beautifully. The tight scope buys faster decisions and a shorter run from concept to finished room, while the rigor stays at the level of a whole-home engagement and not a single corner gets cut.",
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
    <section id="services" className="bg-cream-200 py-24 xl:py-32">
      <Container>
        {/* Intro */}
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-12 xl:gap-12">
          <ScrollReveal direction="left" delay={150} className="lg:col-span-6">
            <p className={eyebrow}>The studio</p>
            <h2 className="flex flex-col gap-2 display-sm">
              <span>One team,</span>
              <span className="ml-10">first sketch</span>
              <span className="ml-20">
                to final <span className="italic text-accent">styling.</span>
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            delay={150}
            className="space-y-6 lg:col-span-6 items-center flex"
          >
            <p>
              We design homes that move easily between indoors and out, pairing
              strong architectural forms with interiors that feel collected
              rather than decorated.
            </p>
            <p>
              Whether the project is a ground-up build, a residence stripped to
              the studs, or a single room, the work runs end to end: layout,
              finishes, lighting, furnishings, procurement, and installation.
              These are the seven ways clients typically engage our interior
              design firm in Fort Lauderdale.
            </p>
          </ScrollReveal>
        </div>

        {/* Services index header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between pb-6 mt-20 lg:mt-60">
          <ScrollReveal direction="left" delay={150}>
            <p className={eyebrow}>What we do</p>
            <h2 className="mb-0">Services</h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={150}>
            <p className="uppercase">Schedule — 07 Engagements</p>
          </ScrollReveal>
        </div>
        <hr className="etched-line" />

        {/* Rows */}
        <div>
          {SERVICES.map((service, index) => (
            <Fragment key={service.index}>
              <ScrollReveal
                direction={index % 2 === 0 ? "left" : "right"}
                threshold={0.5}
              >
                <article className="grid grid-cols-1 py-12 xl:grid-cols-12 gap-0 lg:gap-6 xl:gap-8 xl:py-14">
                  <div className="lg:col-span-4">
                    <span className="eyebrow">{service.index}</span>

                    <h3 className="max-w-[14ch] leading-tight">
                      {service.title}
                    </h3>
                    <p className="mb-6 lg:mb-0 text-xs uppercase tracking-[0.2em] text-foreground">
                      <span className="mr-1.5 text-accent font-bold">•</span>
                      {service.category}
                    </p>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="text-foreground/85">{service.description}</p>
                    <ul className="mt-6 mb-6 lg:mb-0 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative aspect-5/4 w-full overflow-hidden rounded-xs">
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
              <hr className="etched-line" />
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
