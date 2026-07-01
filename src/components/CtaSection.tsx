import Container from "./ui/Container";
import ArrowButton from "./ui/ArrowButton";
import ProjectButton from "./ui/ProjectButton";
import { TextEffect } from "./motion-primitives/text-effect";

export default function CtaSection() {
  return (
    <section className="bg-cream-200 py-24 lg:py-50">
      <Container className="flex flex-col items-center text-center">
        <TextEffect
          as="p"
          per="char"
          preset="fade-in-blur"
          speedReveal={5}
          speedSegment={0.3}
          inView
          className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-4">
          Ready to start?
        </TextEffect>
        <h2 className="mt-6 text-xl font-normal tracking-tight text-balance lg:text-7xl">
          <TextEffect
            as="span"
            preset="fade-in-blur"
            speedReveal={5}
            speedSegment={0.3}
            inView
            className="block">
            Let&apos;s design
          </TextEffect>
          <span className="block">
            <TextEffect
              as="span"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              inView
              delay={0.2}
              className="inline">
              something
            </TextEffect>{" "}
            <TextEffect
              as="span"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              inView
              delay={0.35}
              className="font-serif text-accent text-[1.6em] leading-none ml-2 inline-block">
              beautiful
            </TextEffect>
            .
          </span>
        </h2>
        <TextEffect
          as="p"
          preset="fade-in-blur"
          speedReveal={5}
          speedSegment={0.3}
          inView
          delay={0.2}
          className="mt-6 max-w-xl text-foreground">
          Tell us about your home and how you want to live in it. We&apos;ll
          walk you through scope, timeline, and the right way to begin.
        </TextEffect>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <ProjectButton
            location="services_cta"
            formSource="services_email_studio">
            Contact the studio
          </ProjectButton>
          <ArrowButton href="https://wa.me/16466394147" variant="secondary">
            Message on WhatsApp
          </ArrowButton>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-foreground/60">
          <a href="mailto:osh@sarviandg.com" className="hover:text-accent">
            osh@sarviandg.com
          </a>
          <a href="tel:+19544444803" className="hover:text-accent">
            (954) 444-4803
          </a>
          <a
            href="https://www.instagram.com/sarviandesigngroup/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent">
            @sarviandesigngroup
          </a>
        </div>
      </Container>
    </section>
  );
}
