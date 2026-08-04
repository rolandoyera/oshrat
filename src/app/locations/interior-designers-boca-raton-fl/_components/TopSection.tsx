import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";

// No Boca Raton project in the portfolio yet, so this section frames the
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
            <span className="eyebrow">Our Approach in Boca Raton</span>
            <h2>Residential Interior Design in Boca Raton, FL</h2>
            <p>
              A great deal of Boca is being rebuilt right now. Houses from the
              seventies and eighties are coming down, and what replaces them
              tends to arrive with the same white oak, the same shiplap, and the
              same soft blue-grey palette that every other new build on the
              street received. Our work here is to get past that default. We
              start with the site, the light, and how the family actually moves
              through the house, then draw the millwork, the ceilings, and the
              material palette specifically for it. The result still belongs to
              the coast. It just does not look like it came from the same
              catalog as the neighbors.
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
