// app/projects/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { heroPreloadSrcSet, type SanityImageWithAlt } from "@/sanity/lib/image";
import { JsonLd, siteGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";

export const revalidate = 60; // Revalidate the page every 60 seconds

const DESCRIPTION =
  "Explore the latest architecture and interior design projects from Sarvian Design Group across South Florida: Miami, Fort Lauderdale, Coral Gables, Weston, Boca Raton, and Palm Beach.";

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

import Cta from "@/components/Cta";
import ProjectsHero from "./_components/ProjectsHero";
import TransitionLink from "@/components/ui/TransitionLink";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";

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
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 px-4 lg:px-8 my-4 lg:my-12">
          {projects.map((p, index) => {
            const heroSource = p.heroImage ?? p.mainImage;
            return (
              <TransitionLink
                key={p._id}
                href={`/projects/${p.slug}`}
                preloadSrcSet={
                  heroSource ? heroPreloadSrcSet(heroSource) : undefined
                }
                className="group relative overflow-hidden block project-card-animate rounded-xs shadow"
                style={
                  {
                    animationDelay: `${index * 0.12}s`,
                  } as React.CSSProperties
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
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent to-30%" />
                  <div className="absolute inset-x-0 bottom-0 p-4 pb-3">
                    {p.location && (
                      <p className="eyebrow font-normal mb-0 text-cream-100/80">
                        {p.location}
                      </p>
                    )}
                    <h3 className="text-cream-100 mb-0 h4">{p.title}</h3>
                  </div>
                </div>
              </TransitionLink>
            );
          })}
        </div>
        <Cta />
        <Testimonials />
        <Why
          subtitle="Why Sarvian Design Group"
          title="The Fort Lauderdale Interior Design Firm Behind Every Project"
          description="Every project in this portfolio ran through the same hands. Whole-home interior design, renovations, new builds, and luxury kitchen and bath work across South Florida are carried by one team of interior designers, from layout and finishes through procurement, installation, and final styling, which is why the finished work holds one standard regardless of scope."
        >
          <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
            <h2 className="font-semibold h3">Built on One Process.</h2>
            <p>
              The portfolio above runs from waterfront estates and full home
              renovations to new construction and single-room projects, and
              every one of them moved through the same sequence. Concept,
              layout, finishes, lighting, and furnishings are resolved in the
              same order whether the scope is a whole residence or one kitchen
              design, which is why projects of very different sizes still read
              as the work of the same interior design firm.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
            <h2 className="font-semibold h3">Drawn to Be Built.</h2>
            <p>
              Behind each photograph sits a set of drawings most clients never
              see: millwork sections, lighting plans, stone layouts, and custom
              furnishing details worked out long before anything was installed.
              We document at that depth because a luxury interior design only
              earns the name when the built room matches the intent, and it is
              the reason these rooms still look composed long after the
              photographer has gone.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
            <h2 className="font-semibold h3">From Sketch to Styling.</h2>
            <p>
              Every project shown here was carried by one studio from the first
              sketch to the final styling. Space planning, palettes, lighting,
              procurement, custom built-ins, art, and installation stayed under
              one roof, with our interior designers coordinating architects,
              contractors, and trades along the way. That continuity is what
              keeps a home reading as a single idea, and it is what clients in
              Fort Lauderdale and across South Florida hire us to protect.
            </p>
          </div>
        </Why>
      </main>
    </div>
  );
}
