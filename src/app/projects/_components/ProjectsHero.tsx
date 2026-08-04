import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HERO_BLUR } from "@/lib/hero-blur";

export default function ProjectsHero() {
  return (
    <section className="relative flex min-h-[80dvh] xl:min-h-[50dvh] w-full items-end overflow-hidden">
      <Image
        src="/assets/kitchen-counter.jpg"
        alt="Kitchen counter detail from a Sarvian Design Group project"
        fill
        priority
        quality={50}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={HERO_BLUR["/assets/kitchen-counter.jpg"]}
        className="object-cover"
      />
      {/* Scrim for text legibility */}
      <div className="absolute inset-0 bg-black/50 xl:backdrop-blur-[3px]" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 md:pb-8 lg:pb-16 2xl:pb-20">
          <ScrollReveal
            topReveal
            direction="left"
            className="space-y-6 lg:space-y-10 text-white lg:col-span-8"
          >
            <h1 className="eyebrow text-cream-200">
              Our Featured Interior Design Projects — South Florida
            </h1>

            <h2 className="display text-white">Recent Projects</h2>

            <p className="md:max-w-2xl text-cream-100">
              A portfolio of residences across Broward, Palm Beach, and
              Miami-Dade — waterfront estates, ground-up builds, and single-room
              transformations. Every project here began the same way: a
              conversation about how someone actually wants to live.
            </p>
          </ScrollReveal>

          <ScrollReveal topReveal direction="right" className="lg:col-span-4">
            <dl className="text-white lg:border-l lg:border-white/20 lg:pl-12 hidden lg:block">
              <dt className="eyebrow mb-2 text-cream-200">Locations</dt>
              <dd className="text-xl">Miami to Palm Beach & Beyond</dd>
              <dt className="eyebrow mt-12 mb-2 text-cream-200">Scope</dt>
              <dd className="text-xl">Interior Design in South Florida</dd>
              <dt className="eyebrow mt-12 mb-2 text-cream-200">Featured</dt>
              <dd className="text-xl">Bespoke Furnishings | Custom Lighting</dd>
            </dl>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
