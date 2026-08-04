import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";

// No Palm Beach Gardens project in the portfolio yet, so this section frames
// the approach rather than a local case study. Both links point at /projects
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
            <span className="eyebrow">Our Approach in Palm Beach Gardens</span>
            <h2>Residential Interior Design in Palm Beach Gardens, FL</h2>
            <p>
              Most houses in Palm Beach Gardens started from a builder&apos;s
              plan, which means the shell is generous and the interior is
              anonymous. Our work here usually begins by correcting that:
              reworking the layout, replacing stock cabinetry and thin trim with
              drawn millwork, and bringing tall volumes and long sightlines under
              control so the rooms feel considered rather than merely large. In
              club communities like PGA National, BallenIsles, and Old Palm, we
              plan around architectural review from the first meeting so
              approvals land on schedule instead of stalling the job.
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
