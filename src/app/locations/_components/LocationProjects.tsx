import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import {
  heroImageUrl,
  heroPreloadSrcSet,
  type SanityImageWithAlt,
} from "@/sanity/lib/image";
import Container from "@/components/ui/Container";
import TransitionLink from "@/components/ui/TransitionLink";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import ArrowButton from "@/components/ui/ArrowButton";

export interface Project {
  _id: string;
  title: string;
  location?: string;
  slug: string;
  heroImage?: SanityImageWithAlt;
  mainImage: SanityImageWithAlt;
  imageAlt?: string;
}

const FEATURED_PROJECTS = groq`*[_type == "project" && slug.current in $slugs && defined(mainImage)]{
  _id,
  title,
  location,
  "slug": slug.current,
  heroImage,
  mainImage,
  "imageAlt": coalesce(heroImage.alt, mainImage.alt)
}`;

export function ProjectCard({
  project,
  aspect,
  sizes,
}: {
  project: Project;
  aspect: string;
  sizes: string;
}) {
  // Match the detail page's hero source + view-transition name so the card
  // morphs into the destination hero, and warm that exact image on hover.
  const heroSource = project.heroImage ?? project.mainImage;

  return (
    <div className="flex flex-col">
      <TransitionLink
        href={`/projects/${project.slug}`}
        preloadSrcSet={heroPreloadSrcSet(heroSource)}
        aria-label={`${project.title}${project.location ? ` — ${project.location}` : ""}`}
        className={`group relative block overflow-hidden rounded-xs bg-taupe-800 ${aspect}`}>
        <Image
          src={heroImageUrl(heroSource)}
          alt={project.imageAlt || project.title}
          fill
          quality={90}
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          style={
            {
              viewTransitionName: `hero-${project.slug}`,
            } as React.CSSProperties
          }
        />
      </TransitionLink>

      <div className="py-4">
        {project.location && (
          <p className="eyebrow font-normal mb-0">{project.location}</p>
        )}
        <h3 className="mb-0 h4">{project.title}</h3>
      </div>
    </div>
  );
}

export default async function LocationProjects({
  children,
  className,
  eyebrow,
  heading,
  slugs,
}: {
  children: React.ReactNode;
  className?: string;
  eyebrow: string;
  heading: string;
  /** Hand-picked project slugs, shown in exactly this order. */
  slugs: string[];
}) {
  const fetched = await client.fetch<Project[]>(FEATURED_PROJECTS, { slugs });

  // GROQ returns matches in document order — restore the hand-picked order.
  // A renamed/unpublished slug simply drops out instead of breaking the page.
  const featured = slugs
    .map((slug) => fetched.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));

  if (!featured.length) return null;

  return (
    <section className={cn("bg-cream-200 pt-24 pb-24 lg:py-32", className)}>
      <Container size="lg">
        <ScrollReveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{heading}</h2>
          <div className="max-w-3xl">
            {/* This line is only for SEO */}
            {children}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-10 lg:mt-20">
            {featured.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                aspect="aspect-16/10"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <ArrowButton
              href="/projects"
              variant="secondary"
              className="w-full sm:w-auto justify-center">
              View More Projects
            </ArrowButton>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
