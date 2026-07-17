import Container from "@/components/ui/Container";
import FadingHeroBackdrop from "../_components/FadingHeroBackdrop";
import HeroScrollColor from "../_components/HeroScrollColor";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import Display from "@/components/ui/Display";
import { HERO_BLUR } from "@/lib/hero-blur";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServicesSequence from "../_components/ServicesSequence";
import FeaturedProjects from "../_components/FeaturedProjects";
import Testimonials from "../_components/Testimonials";
import CtaSection from "@/components/CtaSection";
import { FortLauderdaleEditorial } from "../_components/FortLauderdaleEditorial";
import FaqSection from "../../contact/_components/FaqSection";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";

// Hand-picked projects for this page — order here is display order.
const FEATURED_SLUGS = [
  "elevated-primary-suite-fort-lauderdale-fl",
  "modern-marble-haven-fort-lauderdale-fl",
  "aventura-modern-living-aventura-fl",
];

// Also feeds the FAQPage JSON-LD below — keep schema and page in sync.
const FAQS: { question: string; answer: string }[] = [
  {
    question:
      "What does it cost to hire an interior designer in Fort Lauderdale?",
    answer:
      "It depends on scope, and we believe in being direct about it. A single-space project like a kitchen or primary suite is a different investment than a full home renovation or new construction interior, so every engagement is quoted per project after an initial consultation. We provide a detailed fee proposal before any work begins, so there are no surprises at install.",
  },
  {
    question: "Which Fort Lauderdale neighborhoods do you work in?",
    answer:
      "Most of our Fort Lauderdale interior design work is on and around the water — Las Olas Isles, Harbor Beach, Rio Vista, Coral Ridge, and the Intracoastal corridor — along with projects across Broward County and South Florida, from Aventura to Bal Harbour.",
  },
  {
    question:
      "Do you offer interior design consulting, or only full-service projects?",
    answer:
      "Both. Our interior design consulting engagements suit clients who want expert direction on layout, palette, and sourcing while managing execution themselves. Full-service work — the majority of our studio — carries a project from space planning through procurement, custom furnishings, and installation with a single point of accountability.",
  },
  {
    question: "Do I need an interior decorator or an interior designer?",
    answer:
      "An interior decorator works with what a room already is — furnishings, palettes, styling. An interior designer works with what it could be: space planning, renovations, and coordination with your architect and contractor. Sarvian is a full-service interior design studio, so both live under one roof — turnkey projects carried from structural space planning to the final styled shelf.",
  },
  {
    question:
      "Do you work with my architect and contractor, or bring your own team?",
    answer:
      "Either. On new construction we prefer to join alongside your architect early, so the interior and the architecture are resolved together rather than negotiated later. For renovations we coordinate closely with your contractor — or introduce trusted builders and trades we've worked with across Fort Lauderdale when you need them.",
  },
  {
    question: "How long does a full home project take?",
    answer:
      "A furnishings-focused project typically runs four to eight months from concept to install; full renovations and new builds run with the construction schedule, usually twelve to twenty-four months. Lead times on custom pieces are the honest constraint — we sequence orders early so the home installs in one coherent reveal, not in pieces.",
  },
  {
    question:
      "What makes Sarvian different from other interior design firms in Fort Lauderdale?",
    answer:
      "Restraint, mostly. We don't design to a house style or a coastal formula — each project is drawn from the architecture, the light, and the way you actually live. Every piece is specified before fabrication begins, and the principal who starts your project is the one who finishes it.",
  },
  {
    question: "Do you offer consultations?",
    answer:
      "Yes. We offer consultations for most projects, though availability can vary by scope, location, and schedule. Reach out through the contact form and we'll let you know what's possible.",
  },
  {
    question: "Can you help with custom furniture or built-ins?",
    answer:
      "Yes. Sarvian Design Group can assist with custom design elements such as built-ins, lighting, furniture pieces, and other details that may require drawings, specifications, or coordination with fabricators.",
  },
];

// Featured project cards render Sanity content — keep them fresh.
export const revalidate = 60;

export default function Page() {
  return (
    <main>
      <JsonLd
        data={faqPageGraph(
          "/locations/interior-designers-fort-lauderdale-fl",
          FAQS,
        )}
      />
      <section className="relative flex min-h-dvh w-full items-end">
        <FadingHeroBackdrop
          src="/about/sarvian-design-group-oshrat-rothschild-16x9.jpg"
          alt="Sarvian Design Group interior in Fort Lauderdale, Florida"
          blurDataURL={
            HERO_BLUR["/about/sarvian-design-group-oshrat-rothschild-16x9.jpg"]
          }
        />

        <Container size="lg" className="relative z-10 w-full">
          <HeroScrollColor>
            <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-10 pb-12">
              <ScrollReveal className="lg:col-span-8 text-white">
                <TextEffect
                  as="h1"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  className="text-sm uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--color-taupe-800)_var(--hero-mix,0%),var(--color-cream-200))] mb-6">
                  Interior Designers in Fort Lauderdale, Florida
                </TextEffect>

                <Display
                  as="h2"
                  className="lg:text-[7.5rem] text-[2.25rem] text-[color-mix(in_oklab,var(--color-taupe-800)_var(--hero-mix,0%),white)] leading-none space-y-2 lg:space-y-6">
                  <span className="block">
                    A home equal{" "}
                    <span
                      aria-hidden
                      className="inline-block h-[2px] w-[2em] bg-current align-middle"
                    />
                  </span>
                  <span className="block w-fit">to its address.</span>
                </Display>
              </ScrollReveal>
              <ScrollReveal className="lg:col-span-4 text-white">
                <TextEffect
                  as="p"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  delay={0.2}
                  className="max-w-xl text-[color-mix(in_oklab,var(--color-taupe-800)_var(--hero-mix,0%),var(--color-cream-100))]">
                  A full-service studio for luxury residential and commercial
                  interiors, renovations, and new construction across Fort
                  Lauderdale, Florida in Broward County.
                </TextEffect>
              </ScrollReveal>
            </div>
          </HeroScrollColor>
        </Container>
      </section>

      <ServicesSequence />

      <FeaturedProjects
        slugs={FEATURED_SLUGS}
        heading="Projects in Fort Lauderdale"
        description="Explore a selection of our Fort Lauderdale interiors, where thoughtful space planning, refined materials, and custom details come together to create homes that feel distinctive, cohesive, and personal."
      />

      <Testimonials />
      <CtaSection
        location="fort_lauderdale_cta"
        formSource="fort-lauderdale"
        ctaLabel="Request Consultation"
      />
      <FortLauderdaleEditorial />
      <FaqSection faqs={FAQS} />
    </main>
  );
}
