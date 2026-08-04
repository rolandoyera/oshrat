import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";

// No Palm Beach project in the portfolio yet, so this section frames the
// approach rather than a local case study. The image is a recent oceanfront
// residence and both links point at /projects instead of a single job.

export default async function TopSection() {
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
            <span className="eyebrow">Our Approach in Palm Beach</span>
            <h2>Residential Interior Design in Palm Beach, FL</h2>
            <p>
              Palm Beach rewards restraint and punishes anything that looks like
              it arrived in a hurry. Our work here starts with the architecture
              already standing, whether that is a Mizner-era house with plaster
              and pecky cypress or a new residence on the water, and the
              interior is drawn to belong to it rather than to a trend. Because
              so many houses on the island are lived in seasonally, we plan
              procurement and installation around the calendar, so a home is
              finished before the season rather than during it.
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
              alt="Palm Beach Residence Architecture"
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
