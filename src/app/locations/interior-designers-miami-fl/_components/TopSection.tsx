import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";

export default function TopSection() {
  return (
    <section className="bg-cream-200 py-20 lg:py-48">
      <Container className="flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 xl:gap-12 items-center w-full">
          <ScrollReveal
            direction="left"
            threshold={0.3}
            delay={300}
            className="lg:col-span-2"
          >
            <span className="eyebrow">Featured Project</span>
            <h2>Interior Design in Miami, FL</h2>
            <p>
              A tropical modern residence in the heart of Miami, built around
              the idea that indoor and outdoor living are one continuous space.
              Warm wood softens the geometry, expansive glass pulls daylight
              deep into the plan, and architectural lighting takes over at dusk
              to hold the clean silhouettes. Outside, the pool deck does the
              work of a second living room, with shaded overhangs and open-air
              pavilions that keep the house comfortable year round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center md:justify-start">
              <ArrowButton
                href="/projects/miami-river-miami-fl"
                variant="primary"
                className="w-full sm:w-auto justify-center"
              >
                View Project
              </ArrowButton>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            threshold={0.3}
            delay={300}
            className="relative lg:col-span-3"
          >
            <Image
              src="/assets/old-river-miami-front-view.webp"
              alt="Miami River residence, a tropical modern home with expansive glass, warm wood, and lush landscaping"
              width={900}
              height={400}
              quality={90}
              className="w-full h-auto object-cover rounded-xs"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
