import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Container from "@/components/ui/Container";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { ProjectCard, type Project } from "@/components/ProjectExamplesSection";
import ArrowButton from "@/components/ui/ArrowButton";

// Three-up project section where the featured projects are hand-picked in
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

export default async function FeaturedProjects({
  slugs,
  eyebrow = "Selected work",
  heading,
  description,
}: {
  slugs: string[];
  eyebrow?: string;
  heading: string;
  /** Optional paragraph rendered under the heading. */
  description?: string;
}) {
  const projects = await client.fetch<Project[]>(PROJECTS_BY_SLUG, { slugs });

  if (!projects?.length) return null;

  // GROQ returns document order — restore the hand-picked order.
  projects.sort((a, b) => slugs.indexOf(a.slug) - slugs.indexOf(b.slug));

  return (
    <section className="bg-cream-200 pb-24 lg:py-32">
      <Container size="lg">
        <div className="mb-12">
          <TextEffect
            as="p"
            preset="fade-in-blur"
            speedReveal={5}
            speedSegment={0.3}
            inView
            className="eyebrow">
            {eyebrow}
          </TextEffect>
          <TextEffect
            as="h2"
            preset="fade-in-blur"
            speedReveal={5}
            speedSegment={0.3}
            inView
            delay={0.15}
            className="h2">
            {heading}
          </TextEffect>
          {description && (
            <TextEffect
              as="p"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              inView
              delay={0.25}
              className="p max-w-3xl">
              {description}
            </TextEffect>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              aspect="aspect-5/4"
              sizes="(min-width: 768px) 33vw, 100vw"
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
