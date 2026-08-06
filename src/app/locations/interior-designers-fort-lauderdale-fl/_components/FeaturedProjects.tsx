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
import ArrowButton from "@/components/ui/ArrowButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Project {
  _id: string;
  title: string;
  location?: string;
  slug: string;
  heroImage?: SanityImageWithAlt;
  mainImage: SanityImageWithAlt;
  imageAlt?: string;
}

// Two-up project section where the featured projects are hand-picked in
// code (by slug) instead of in Sanity — content still comes from Sanity, so
// titles/images stay in sync with edits there.
const PROJECTS_BY_SLUG = groq`*[_type == "project" && slug.current in $slugs && defined(mainImage)]{
  _id,
  title,
  location,
  "slug": slug.current,
  heroImage,
  mainImage,
  "imageAlt": coalesce(heroImage.alt, mainImage.alt)
}`;

function ProjectCard({
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
          { viewTransitionName: `hero-${project.slug}` } as React.CSSProperties
        }
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent to-30%" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        {project.location && (
          <p className="eyebrow font-normal mb-0 text-cream-100/80">
            {project.location}
          </p>
        )}
        <h3 className="text-cream-100 mb-0">{project.title}</h3>
      </div>
    </TransitionLink>
  );
}

export default async function FeaturedProjects({
  slugs,
  eyebrow = "Selected work",
  heading,
}: {
  slugs: string[];
  eyebrow?: string;
  heading: string;
}) {
  const projects = await client.fetch<Project[]>(PROJECTS_BY_SLUG, { slugs });

  if (!projects?.length) return null;

  // GROQ returns document order — restore the hand-picked order.
  projects.sort((a, b) => slugs.indexOf(a.slug) - slugs.indexOf(b.slug));

  return (
    <section className="bg-cream-200 pb-24 lg:py-46">
      <Container>
        <ScrollReveal className="mb-12">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{heading}</h2>
          <p className="max-w-3xl">
            Explore a selection of our Fort Lauderdale interiors, where
            thoughtful space planning, refined materials, and custom details
            come together to create homes that feel distinctive, cohesive, and
            personal.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              aspect="aspect-5/4"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <ArrowButton
            href="/projects"
            variant="secondary"
            className="mt-10 md:mt-20">
            View More Projects
          </ArrowButton>
        </div>
      </Container>
    </section>
  );
}
