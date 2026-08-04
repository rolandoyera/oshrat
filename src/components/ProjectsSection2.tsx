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
import ScrollReveal from "./ui/ScrollReveal";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HoverUnderline from "./ui/HoverUnderline";
import ArrowButton from "./ui/ArrowButton";

export interface Project {
  _id: string;
  title: string;
  location?: string;
  slug: string;
  heroImage?: SanityImageWithAlt;
  mainImage: SanityImageWithAlt;
  imageAlt?: string;
}

const LATEST_PROJECTS = groq`*[_type == "project" && defined(slug.current) && defined(mainImage)]
  | order(coalesce(year, 0) desc, _createdAt desc)[0...4]{
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

export default async function ProjectsSection2({
  className,
}: {
  className?: string;
}) {
  const projects = await client.fetch<Project[]>(LATEST_PROJECTS);

  if (!projects?.length) return null;

  const featured = projects.slice(0, 4);

  return (
    <section className={cn("bg-cream-200 pt-24 pb-24 lg:py-32", className)}>
      <Container>
        <ScrollReveal>
          <p className="eyebrow">Selected work</p>
          <h2>Latest Projects</h2>
          <div className="max-w-3xl">
            {/* This line is only for SEO */}
            <p>
              While our studio calls Fort Lauderdale home, our work extends
              across South Florida's most sought-after communities —{" "}
              <Link
                href="/locations/interior-designers-las-olas-fl"
                className="group relative hover:text-accent transition-colors duration-300"
              >
                Las Olas
                <HoverUnderline className="text-accent" />
              </Link>
              , Rio Vista, and Coral Ridge locally, with projects reaching Boca
              Raton, Palm Beach,{" "}
              <Link
                href="/locations/interior-designers-golden-beach-fl"
                className="group relative hover:text-accent transition-colors duration-300"
              >
                Golden Beach
                <HoverUnderline className="text-accent" />
              </Link>
              , Miami and beyond.
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
