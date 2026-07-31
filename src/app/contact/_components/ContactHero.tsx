import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HERO_BLUR } from "@/lib/hero-blur";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[80dvh] xl:min-h-[40dvh] w-full items-end overflow-hidden">
      <Image
        src="/assets/kitchen-counter.jpg"
        alt="Kitchen counter detail from a Sarvian Design Group project"
        fill
        priority
        quality={50}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={HERO_BLUR["/assets/kitchen-counter.jpg"]}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <Container size="lg" className="relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 md:pb-8 lg:pb-16 2xl:pb-20">
          <ScrollReveal
            topReveal
            direction="left"
            className="space-y-6 lg:space-y-10 text-white lg:col-span-8">
            <h1 className="display text-cream-100">Contact Us</h1>

            <p className="md:max-w-2xl text-cream-200">
              Let's make something amazing together.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
