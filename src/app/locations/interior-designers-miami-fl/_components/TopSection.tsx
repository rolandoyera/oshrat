import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";

export default function TopSection() {
  return (
    <section className="bg-cream-200 py-20 lg:py-48">
      <Container
        size="lg"
        className="flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 xl:gap-12 items-center w-full">
          <ScrollReveal
            direction="left"
            threshold={0.3}
            delay={300}
            className="lg:col-span-2">
            <span className="eyebrow">Featured Projects</span>
            <h2>Interior Design in Miami, FL</h2>
            <p>
              Set on a quiet street in Miami, this ground-up residence was
              designed as a single idea of architecture and landscape resolved
              together. Layered travertine volumes, bronze slat screens, and
              floor-to-ceiling glass open the home to the light and tropical
              canopy, while inside the same restrained palette continues in warm
              stone, natural wood, and softly diffused lighting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center md:justify-start">
              <ArrowButton
                href="/projects/old-river"
                variant="primary"
                className="w-full sm:w-auto justify-center">
                View Project
              </ArrowButton>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            threshold={0.3}
            delay={300}
            className="relative lg:col-span-3">
            <Image
              src="/assets/old-river-miami-front-view.webp"
              alt="Old River, Miami residence front view"
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
