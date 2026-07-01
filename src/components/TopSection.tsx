import Image from "next/image";
import H1 from "./ui/H1";
import ArrowButton from "./ui/ArrowButton";
import ScrollReveal from "./ui/ScrollReveal";

export default function TopSection() {
  return (
    <div className="min-h-dvh flex items-center justify-center max-w-[1800px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center mx-auto w-full">
        <ScrollReveal
          direction="left"
          threshold={0.3}
          className="lg:col-span-2">
          <div className="space-y-6 pl-4">
            <H1 className="leading-none">
              Architectural & Interior Design Firm
            </H1>
            <p>
              Sarvian Design Group is an award-winning architecture and
              interior design firm in Fort Lauderdale, serving clients
              throughout South Florida. By blending striking architectural forms with
              thoughtfully curated interiors, we create homes that flow
              effortlessly between indoor and outdoor spaces, uniting nature and
              design into one harmonious living experience.
            </p>
            <div className="flex flex-wrap gap-4 pl-4 mt-12">
              <ArrowButton href="/projects" variant="secondary">
                View Our Projects
              </ArrowButton>
              <ArrowButton href="/services" variant="secondary">
                View Our Services
              </ArrowButton>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal
          direction="right"
          threshold={0.3}
          delay={300}
          className="relative lg:col-span-3">
          <div className="p-[20px]">
            <Image
              src="/assets/about-us-top.jpg"
              alt="Home image"
              width={900}
              height={400}
              quality={90}
              className="w-full h-auto object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
