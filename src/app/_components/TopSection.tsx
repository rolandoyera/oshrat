import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";

export default function TopSection() {
  return (
    <Container
      size="lg"
      className="flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 xl:gap-12 items-center w-full">
        <ScrollReveal
          direction="left"
          threshold={0.3}
          className="lg:col-span-2">
          <h1 className="text-left">Interior Designers in Fort Lauderdale</h1>
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
          <p>
            While our studio calls Fort Lauderdale home, our work extends across
            South Florida's most sought-after communities — Las Olas, Rio Vista,
            and Coral Ridge locally, with projects reaching Boca Raton, Delray
            Beach, Palm Beach, Golden Beach, and Miami. Each region brings its
            own architectural language and light, whether that means
            Intracoastal grandeur or contemporary restraint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center md:justify-start">
            <ArrowButton
              href="/projects"
              variant="secondary"
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
          direction="right"
          threshold={0.3}
          delay={300}
          className="relative lg:col-span-3">
          <Image
            src="/assets/about-us-top.jpg"
            alt="Home image"
            width={900}
            height={400}
            quality={90}
            className="w-full h-auto object-cover rounded-xs"
          />
        </ScrollReveal>
      </div>
    </Container>
  );
}
