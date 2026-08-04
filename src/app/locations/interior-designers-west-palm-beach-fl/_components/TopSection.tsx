import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";

// No West Palm Beach project in the portfolio yet, so this section frames the
// approach rather than a local case study. Both links point at /projects
// instead of a single job.

export default function TopSection() {
  return (
    <section className="bg-cream-200 py-20 lg:py-48">
      <Container
        size="lg"
        className="flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center w-full">
          <ScrollReveal
            direction="left"
            threshold={0.3}
            delay={300}
            className="lg:col-span-5">
            <span className="eyebrow">Our Approach in West Palm Beach</span>
            <h2>
              Residential and Commercial Interior Design in West Palm Beach, FL
            </h2>
            <p>
              West Palm Beach is two cities at once, and the interiors have to
              answer both. A 1920s house in El Cid or Flamingo Park comes with
              plaster, casement windows, and rooms sized for a different era, and
              the work is to open it up without erasing what makes it worth
              owning. A tower residence or an office off Okeechobee starts from
              the opposite problem: a clean slate with no character at all. In
              both cases we design from the building outward, which is why the
              finished space never reads as a look that could have landed
              anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center md:justify-start">
              <ArrowButton
                href="/projects"
                variant="primary"
                className="w-full sm:w-auto justify-center">
                View Our Work
              </ArrowButton>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            threshold={0.3}
            delay={300}
            className="relative lg:col-span-7">
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
