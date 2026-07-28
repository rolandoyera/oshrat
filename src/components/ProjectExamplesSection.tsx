import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import {
  heroImageUrl,
  heroPreloadSrcSet,
  type SanityImageWithAlt,
} from "@/sanity/lib/image";
import Container from "./ui/Container";
import TransitionLink from "./ui/TransitionLink";
import { TextEffect } from "./motion-primitives/text-effect";

export interface Project {
  _id: string;
  title: string;
  location?: string;
  slug: string;
  heroImage?: SanityImageWithAlt;
  mainImage: SanityImageWithAlt;
  imageAlt?: string;
}

// Latest 5 projects, newest first — mirrors the ordering on /projects.
// Order/slice the raw documents first, then project (so year/_createdAt are
// still available to order()).
const LATEST_PROJECTS = groq`*[_type == "project" && defined(slug.current) && defined(mainImage)]
  | order(coalesce(year, 0) desc, _createdAt desc)[0...5]{
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
          { viewTransitionName: `hero-${project.slug}` } as React.CSSProperties
        }
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent to-30%" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        {project.location && (
          <p className="eyebrow mb-0 text-cream-100/80">{project.location}</p>
        )}
        <h3 className="text-cream-100 mb-0">{project.title}</h3>
      </div>
    </TransitionLink>
  );
}

export default async function ProjectExamplesSection({
  content,
}: {
  content?: string;
}) {
  const projects = await client.fetch<Project[]>(LATEST_PROJECTS);

  if (!projects?.length) return null;

  const featured = projects.slice(0, 2);
  const secondary = projects.slice(2, 5);

  return (
    <section className="bg-cream-200 py-24 lg:py-32">
      <Container size="lg">
        <TextEffect
          as="p"
          preset="fade-in-blur"
          speedReveal={5}
          speedSegment={0.3}
          inView
          className="eyebrow">
          Selected work
        </TextEffect>
        <TextEffect
          as="h2"
          preset="fade-in-blur"
          speedReveal={5}
          speedSegment={0.3}
          inView
          delay={0.15}
          className="h2">
          Latest Projects
        </TextEffect>
        <TextEffect
          as="p"
          per="line"
          preset="fade-in-blur"
          speedReveal={5}
          speedSegment={0.3}
          inView
          delay={0.15}
          className="p mb-12! max-w-3xl">
          {content ?? ""}
        </TextEffect>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              aspect="aspect-16/10"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ))}
        </div>

        {secondary.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {secondary.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                aspect="aspect-5/4"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
