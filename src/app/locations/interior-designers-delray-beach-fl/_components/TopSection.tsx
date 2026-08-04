import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";

// No Delray Beach project in the portfolio yet, so this section frames the
// approach rather than a local case study. Both links point at /projects
// instead of a single job.

export default function TopSection() {
  return (
    <section className="bg-cream-200 py-20 lg:py-48">
      <Container className="flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center w-full">
          <ScrollReveal
            direction="left"
            threshold={0.3}
            delay={300}
            className="lg:col-span-5"
          >
            <span className="eyebrow">Our Approach in Delray Beach</span>
            <h2>
              Residential and Commercial Interior Design in Delray Beach, FL
            </h2>
            <p>
              Delray rewards restraint at a smaller scale than most of the
              coast. The houses around Lake Ida, Seagate, and the historic
              districts were built with modest footprints and real character,
              and the temptation is always to solve them by adding square
              footage. We would rather solve them with the plan. Storage gets
              designed rather than found, circulation is tightened so rooms stop
              borrowing space from each other, and the millwork is drawn to the
              inch because at this scale there is nowhere to hide a rough
              detail. The same discipline applies to the shops and restaurants
              off Atlantic Avenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center md:justify-start">
              <ArrowButton
                href="/projects"
                variant="primary"
                className="w-full sm:w-auto justify-center"
              >
                View Our Work
              </ArrowButton>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            threshold={0.3}
            delay={300}
            className="relative lg:col-span-7"
          >
            <Image
              src="/assets/palm-beach-architecture-proposal-street-view.jpg"
              alt="Street view of a luxury South Florida residence designed by Sarvian Design Group"
              width={1280}
              height={800}
              quality={90}
              sizes="(min-width: 1280px) 60vw, 100vw"
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
