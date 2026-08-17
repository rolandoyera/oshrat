import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";

export default function TopSection() {
  return (
    <Container className="flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 xl:gap-12 items-center w-full">
        <ScrollReveal topReveal direction="left" className="lg:col-span-2">
          <h1>Interior Designers in Fort Lauderdale</h1>
          <p>
            Based in Fort Lauderdale, Florida, Sarvian Design Group is a premier
            full-service interior design studio serving South Florida's most
            discerning homeowners. We merge the precision of architectural
            design with the artistry of interior styling to craft luxurious
            living environments tailored to coastal living. From custom
            furnishings to turnkey renovations and new construction interiors,
            our work focuses on functionality, materials, and spaces that
            enhance daily life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center md:justify-start">
            <ArrowButton
              href="/projects"
              variant="primary"
              className="w-full sm:w-auto justify-center">
              View Our Projects
            </ArrowButton>
            <ArrowButton
              href="/services"
              variant="secondary"
              className="w-full sm:w-auto justify-center">
              View Our Services
            </ArrowButton>
          </div>
        </ScrollReveal>
        <ScrollReveal
          topReveal
          direction="right"
          className="relative lg:col-span-3">
          {/* Full container width until xl, then 3 of 5 columns (48px gaps).
              Container caps at max-w-450 = 1800px, so the width freezes at
              ~1042px past that instead of tracking the viewport. */}
          <Image
            src="/assets/about-us-top.jpg"
            alt="Home image"
            width={2000}
            height={1334}
            quality={70}
            sizes="(min-width: 1800px) 1042px, (min-width: 1280px) 58vw, calc(100vw - 48px)"
            className="w-full h-auto object-cover rounded-xs"
          />
        </ScrollReveal>
      </div>
    </Container>
  );
}
