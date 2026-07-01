import Carousel from "@/components/Carousel";

import TopSection from "@/components/TopSection";
import type { Metadata } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { JsonLd, siteGraph } from "@/lib/structured-data";
import OurApproachSection from "@/components/Approach";
import Image from "next/image";
import ProjectButton from "@/components/ui/ProjectButton";
import { TextEffect } from "@/components/motion-primitives/text-effect";

export const metadata: Metadata = {
  title: "Fort Lauderdale-based interior design studio serving South Florida",
  description:
    "Fort Lauderdale interior design studio serving Broward, Palm Beach, Miami-Dade & South Florida — residential interiors, renovations & new construction.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Fort Lauderdale-based interior design studio serving South Florida | Sarvian Design Group",
    description:
      "Fort Lauderdale interior design studio serving Broward, Palm Beach, Miami-Dade & South Florida — residential interiors, renovations & new construction.",
    url: "/",
    siteName: "Sarvian Design Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fort Lauderdale-based interior design studio serving South Florida",
    description:
      "Fort Lauderdale interior design studio serving Broward, Palm Beach, Miami-Dade & South Florida — residential interiors, renovations & new construction.",
  },
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

      <section className="min-h-dvh p-6 xl:p-0">
        <TopSection />
      </section>
      <section>
        <OurApproachSection />
      </section>

      {/* <Connect /> */}
      <section className="h-[180px] md:h-[340px] lg:h-[420px] 2xl:h-[500px] min-[1920px]:h-[600px] overflow-hidden relative">
        <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 z-20 flex flex-col gap-8 items-center justify-center ">
          <TextEffect
            preset="fade-in-blur"
            speedReveal={5}
            speedSegment={0.3}
            as="h2"
            inView
            className="text-4xl lg:text-6xl font-normal text-balance uppercase text-white">
            Ready To Start?
          </TextEffect>
          <ProjectButton location="ready_to_start">Let's Talk</ProjectButton>
        </div>
        <Image
          src="/projects/sdg-bedroom-remodel-armoire-7.jpg"
          alt="Completed image"
          width={3500}
          height={1200}
          quality={90}
          sizes="50vw"
          className="w-full h-auto object-cover xl:-translate-y-60 lg:-translate-y-40 md:-translate-y-20 translate-0"
        />
      </section>
    </>
  );
}
