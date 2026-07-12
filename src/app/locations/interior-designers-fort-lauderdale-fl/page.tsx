import Container from "@/components/ui/Container";
import FadingHeroBackdrop from "../_components/FadingHeroBackdrop";
import HeroScrollColor from "../_components/HeroScrollColor";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import Display from "@/components/ui/Display";
import { HERO_BLUR } from "@/lib/hero-blur";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServicesSequence from "../_components/ServicesSequence";
import FeaturedProjects from "@/components/FeaturedProjects";
import CtaSection from "@/components/CtaSection";

// Hand-picked projects for this page — order here is display order.
const FEATURED_SLUGS = [
  "elevated-primary-suite-fort-lauderdale-fl",
  "modern-marble-haven-fort-lauderdale-fl",
  "aventura-modern-living-aventura-fl",
];

// Featured project cards render Sanity content — keep them fresh.
export const revalidate = 60;

export default function Page() {
  return (
    <main>
      <section className="relative flex min-h-dvh w-full items-end">
        <FadingHeroBackdrop
          src="/about/sarvian-design-group-oshrat-rothschild-16x9.jpg"
          alt="Sarvian Design Group interior in Fort Lauderdale, Florida"
          blurDataURL={HERO_BLUR["/assets/aventura-interior-design-5.jpg"]}
        />

        <Container size="lg" className="relative z-10 w-full">
          <HeroScrollColor>
            <div className="grid grid-cols-12 items-end gap-10 pb-12">
              <ScrollReveal className="col-span-12 lg:col-span-8 text-white">
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
                  className="text-[7.5rem] text-[color-mix(in_oklab,var(--color-taupe-800)_var(--hero-mix,0%),white)] leading-none space-y-6">
                  <span className="block">
                    A home equal{" "}
                    <span
                      aria-hidden
                      className="inline-block h-[2px] w-[2em] bg-current align-middle"
                    />
                  </span>
                  <span className="block w-fit">to it's address.</span>
                </Display>
              </ScrollReveal>
              <ScrollReveal className="col-span-12 lg:col-span-4 text-white">
                <TextEffect
                  as="p"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  delay={0.2}
                  className="max-w-xl text-[color-mix(in_oklab,var(--color-taupe-800)_var(--hero-mix,0%),var(--color-cream-100))]">
                  A full-service studio for commercial and residential
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
      />

      <CtaSection
        location="fort_lauderdale_cta"
        formSource="fort-lauderdale"
        ctaLabel="Request Consultation"
      />
    </main>
  );
}
