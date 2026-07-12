// app/projects/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { heroPreloadSrcSet, type SanityImageWithAlt } from "@/sanity/lib/image";
import { JsonLd, siteGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";
import H2 from "@/components/ui/H2";

export const revalidate = 60; // Revalidate the page every 60 seconds

const DESCRIPTION =
  "Explore our latest architecture and interior design projects across South Florida — Miami, Fort Lauderdale, Coral Gables, Weston, Boca Raton, and Palm Beach.";

const TITLE =
  "Projects | Fort Lauderdale Interior Designer | Sarvian Design Group";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/projects" },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/projects" }),
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

import CtaSection from "@/components/CtaSection";
import ProjectsHero from "./_components/ProjectsHero";
import WhereWeWorkSection from "@/components/WhereWeWorkSection";
import TransitionLink from "@/components/ui/TransitionLink";
import P from "@/components/ui/P";

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
      <ProjectsHero />
      <main className="px-4 lg:px-8 my-20 lg:my-30">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
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
      <WhereWeWorkSection />
      <CtaSection
        heading={{ plain: "Yours could be", accent: "next" }}
        location="ready_to_start"
        formSource="project"
      />
    </div>
  );
}
