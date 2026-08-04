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
import Link from "next/link";
import HoverUnderline from "@/components/ui/HoverUnderline";
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

// Hand-picked projects for this page, shown in exactly this order.
// Edit this list to change what the Las Olas page features.
const FEATURED_SLUGS = [
  "elevated-primary-suite-fort-lauderdale-fl",
  "modern-marble-haven-fort-lauderdale-fl",
  "aventura-modern-living-aventura-fl",
  "the-shul-bal-harbour-surfside-fl",
];

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
        className={`group relative block overflow-hidden rounded-xs bg-taupe-800 ${aspect}`}
      >
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

export default async function ProjectsSection({
  className,
}: {
  className?: string;
}) {
  const fetched = await client.fetch<Project[]>(FEATURED_PROJECTS, {
    slugs: FEATURED_SLUGS,
  });

  // GROQ returns matches in document order — restore the hand-picked order.
  // A renamed/unpublished slug simply drops out instead of breaking the page.
  const featured = FEATURED_SLUGS.map((slug) =>
    fetched.find((p) => p.slug === slug),
  ).filter((p): p is Project => Boolean(p));

  if (!featured.length) return null;

  return (
    <section className={cn("bg-cream-200 pt-24 pb-24 lg:py-32", className)}>
      <Container>
        <ScrollReveal>
          <p className="eyebrow">Selected work</p>
          <h2>Latest Projects</h2>
          <div className="max-w-3xl">
            {/* This line is only for SEO */}
            <p>
              A selection of our interior design projects in{" "}
              <Link
                href="/locations/interior-designers-fort-lauderdale-fl"
                className="group relative hover:text-accent transition-colors duration-300"
              >
                Fort Lauderdale
                <HoverUnderline className="text-accent" />
              </Link>
              , from full-home renovations and new construction interiors to
              single rooms drawn to the same level of detail. Las Olas is one of
              the neighborhoods we return to most.
            </p>
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
              className="w-full sm:w-auto justify-center"
            >
              View More Projects
            </ArrowButton>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
