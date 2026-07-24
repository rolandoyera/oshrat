import Hero from "@/components/Hero";

import TopSection from "./_components/TopSection";
import type { Metadata } from "next";
import { JsonLd, siteGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";
import OurApproachSection from "./_components/Approach";
import ServicesBridge from "@/app/_components/ServicesBridge";
import Image from "next/image";
import ProjectButton from "@/components/ui/ProjectButton";
import ArrowButton from "@/components/ui/ArrowButton";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import InstagramIcon from "@/components/icons/InstagramIcon";
import MailIcon from "@/components/icons/MailIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const TITLE = "Interior Designers in Fort Lauderdale | Sarvian Design Group";
const DESCRIPTION =
  "Interior Designers in Fort Lauderdale serving Broward, Palm Beach, Miami-Dade & South Florida — interiors, renovations & new construction.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/" }),
};

export default function Home() {
  return (
    <>
      <JsonLd data={siteGraph()} />
      <Hero
        image="/slider/golden-beach-architecture-proposal-front-view.jpg"
        title="Golden Dreams"
        description="Sunlit luxury meets serene modern design"
        buttonText="Explore Now"
        buttonLink="/projects/golden-beach"
      />

      <section className="min-h-dvh pb-20 pt-10 lg:py-20 xl:p-0">
        <TopSection />
      </section>
      <section className="bg-cream-300 py-20 xl:py-60">
        <OurApproachSection />
      </section>
      <section className="bg-cream-200 py-20 lg:py-32">
        <ServicesBridge />
      </section>

      {/* <Connect /> */}
      <section className="relative overflow-hidden py-20 lg:py-50">
        <Image
          src="/projects/sdg-bedroom-remodel-armoire-7.jpg"
          alt="Interior design background image"
          fill
          quality={50}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-[2px]" />
        <Container className="relative z-20 flex flex-col items-center text-center">
          <TextEffect
            as="p"
            per="char"
            preset="fade-in-blur"
            speedReveal={5}
            speedSegment={0.3}
            inView
            className="eyebrow mb-4">
            Ready to start?
          </TextEffect>
          <h2 className="text-4xl font-normal tracking-tight text-balance text-white lg:text-7xl">
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
            className="mt-6 max-w-2xl text-white">
            Tell us about your home and how you want to live in it. We'll walk
            you through scope, timeline, and the right way to begin.
          </TextEffect>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <ProjectButton
              location="ready_to_start"
              className="w-full sm:w-auto justify-center">
              Request Consultation
            </ProjectButton>
            <ArrowButton
              href={`tel:${SITE.phone}`}
              variant="secondary"
              className="w-full sm:w-auto justify-center">
              {SITE.phoneDisplay}
            </ArrowButton>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (opens in a new tab)"
              className="text-white hover:text-accent hover:scale-110 transition-all duration-200 ease-in-out flex items-center justify-center">
              <InstagramIcon size={30} color="currentColor" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Send email to Sarvian Design Group (opens in a new tab)"
              className="text-white hover:text-accent hover:scale-110 transition-all duration-200 ease-in-out flex items-center justify-center">
              <MailIcon size={34} color="currentColor" />
            </a>
            <a
              href={SITE.whatsappUrl}
              aria-label="Call or text Sarvian Design Group"
              className="text-white hover:text-accent hover:scale-110 transition-all duration-200 ease-in-out flex items-center justify-center">
              <WhatsAppIcon size={28} color="currentColor" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
