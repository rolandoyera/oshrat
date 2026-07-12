import Carousel from "@/components/Carousel";

import TopSection from "./_components/TopSection";
import type { Metadata } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
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

const TITLE = "Interior Designers in Fort Lauderdale | Sarvian Design Group";
const DESCRIPTION =
  "Interior Designers in Fort Lauderdale serving Broward, Palm Beach, Miami-Dade & South Florida — interiors, renovations & new construction.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/" }),
};

interface CarouselItem {
  id: string | number;
  image: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
}

const FALLBACK_SLIDER_ITEMS: CarouselItem[] = [
  {
    id: 1,
    image: "/slider/South-Beach-Living-Interior-Design.jpg",
    title: "South Beach Living",
    description: "Stunning sunset over the ocean waves",
    buttonText: "Explore Now",
    buttonLink: "/projects/south-beach",
  },
  {
    id: 2,
    image: "/projects/golden-beach-architecture-proposal-front-view.jpg",
    title: "Golden Dreams",
    description: "Sunlit luxury meets serene modern design",
    buttonText: "Explore Now",
    buttonLink: "/projects/golden-beach",
  },
  {
    id: 3,
    image: "/slider/aventura-interior-design.jpg",
    title: "Aventura",
    description: "Sunlit luxury meets serene modern design",
    buttonText: "Explore Now",
    buttonLink: "/projects/aventura-modern-living",
  },
];

const QUERY = groq`
  *[_type == "slide"] | order(coalesce(order, 0) asc, _createdAt desc){
    "id": _id,
    "image": image.asset->url,
    title,
    description,
    buttonText,
    "buttonLink": select(
      defined(project) => "/projects/" + project->slug.current,
      "/"
    )
  }
`;

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  let sliderItems: CarouselItem[] = [];

  try {
    sliderItems = await client.fetch(QUERY);
  } catch (error) {
    console.error("Failed to fetch homepage slides:", error);
  }

  // Fallback to local slides if Sanity doesn't return any slides yet
  if (!sliderItems || sliderItems.length === 0) {
    sliderItems = FALLBACK_SLIDER_ITEMS;
  }

  return (
    <>
      <JsonLd data={siteGraph()} />
      <Carousel items={sliderItems} autoPlayInterval={5000} showArrows={true} />

      <section className="min-h-dvh py-20 xl:p-0">
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
          alt="Completed image"
          fill
          quality={90}
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
            className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-4">
            Ready to start?
          </TextEffect>
          <h2 className="mt-6 text-4xl font-normal tracking-tight text-balance text-white lg:text-7xl">
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
            className="mt-6 max-w-xl text-white">
            Tell us about your home and how you want to live in it. We&apos;ll
            walk you through scope, timeline, and the right way to begin.
          </TextEffect>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <ProjectButton location="ready_to_start" className="px-7.5">
              Contact the studio
            </ProjectButton>
            <ArrowButton href={SITE.whatsappUrl} variant="secondary">
              Message on WhatsApp
            </ArrowButton>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white">
            <a href={`mailto:${SITE.email}`} className="hover:text-accent">
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phone}`} className="hover:text-accent">
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent">
              {SITE.instagramHandle}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
