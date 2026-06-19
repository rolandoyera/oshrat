// app/projects/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { heroPreloadSrcSet, type SanityImageWithAlt } from "@/sanity/lib/image";
import { JsonLd, siteGraph } from "@/lib/structured-data";
import H2 from "@/components/ui/H2";

export const revalidate = 60; // Revalidate the page every 60 seconds

const DESCRIPTION =
  "Explore our latest architecture and interior design projects across South Florida — Miami, Fort Lauderdale, Coral Gables, Weston, Boca Raton, and Palm Beach.";

export const metadata: Metadata = {
  title: "Projects",
  description: DESCRIPTION,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects",
    description: DESCRIPTION,
    url: "/projects",
  },
};

const QUERY = groq`
  *[_type == "project" && defined(mainImage)]{
    _id,
    title,
    location,
    year,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    heroImage,
    mainImage
  } | order(coalesce(year, 0) desc, _createdAt desc)
`;

import TransitionLink from "@/components/ui/TransitionLink";
import P from "@/components/ui/P";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import ProjectButton from "@/components/ui/ProjectButton";

export default async function ProjectsPage() {
  let projects: {
    _id: string;
    title: string;
    location: string;
    slug: string;
    imageUrl: string;
    heroImage?: SanityImageWithAlt;
    mainImage?: SanityImageWithAlt;
  }[] = [];

  try {
    projects = await client.fetch(QUERY);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    // Could add a user-friendly error message here
  }

  return (
    <div>
      <JsonLd data={siteGraph()} />
      <div className="h-24 bg-linear-to-b from-taupe-900 to-taupe-800"></div>
      <main className="px-4 lg:px-8 mb-20">
        <div className="w-full flex flex-col items-center justify-center py-10 lg:py-30">
          <TextEffect
            preset="fade-in-blur"
            className="text-4xl lg:text-7xl font-normal text-balance tracking-tight uppercase"
            speedReveal={5}
            speedSegment={0.3}
            as="h1">
            Latest Projects
          </TextEffect>
          <div className="max-w-[900px]">
            <TextEffect
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              className="text-base lg:text-[22px] font-light text-balance leading-[1.55] text-center">
              We've had the privilege of collaborating with clients across South
              Florida, including Miami, Fort Lauderdale, Coral Gables, Weston,
              Boca Raton, and Palm Beach.
            </TextEffect>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, index) => {
            const heroSource = p.heroImage ?? p.mainImage;
            return (
              <TransitionLink
                key={p._id}
                href={`/projects/${p.slug}`}
                preloadSrcSet={
                  heroSource ? heroPreloadSrcSet(heroSource) : undefined
                }
                className="group relative overflow-hidden block project-card-animate rounded shadow"
                style={
                  { animationDelay: `${index * 0.12}s` } as React.CSSProperties
                }
                aria-label={`${p.title} — ${p.location}`}>
                <div className="relative w-full aspect-4/3">
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    priority={index < 3}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    quality={90}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    style={
                      {
                        viewTransitionName: `hero-${p.slug}`,
                      } as React.CSSProperties
                    }
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[hsl(35,15,10)]/55 text-white backdrop-blur-xs">
                    <H2 className="text-white transition-all duration-300 ease-out translate-y-[-16px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      {p.title}
                    </H2>
                    <P className="text-lg mt-1 transition-all duration-300 ease-out translate-y-[16px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-75">
                      {p.location}
                    </P>
                  </div>
                </div>
              </TransitionLink>
            );
          })}
        </div>
      </main>
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
          src="/assets/kitchen-counter.jpg"
          alt="Completed image"
          width={3500}
          height={1200}
          quality={90}
          sizes="50vw"
          className="w-full h-auto object-cover xl:-translate-y-90 lg:-translate-y-40 md:-translate-y-20 translate-0"
        />
      </section>
    </div>
  );
}
