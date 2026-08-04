import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { heroImageUrl, type SanityImageWithAlt } from "@/sanity/lib/image";
import ArrowButton from "@/components/ui/ArrowButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";

const PROJECT_IMAGE = groq`*[_type == "project" && slug.current == $slug][0]{
  heroImage,
  mainImage,
  "imageAlt": coalesce(heroImage.alt, mainImage.alt)
}`;

export type LocationTopSectionProps = {
  eyebrow: string;
  heading: string;
  paragraph: string;
  /** When set, the CTA reads "View Project" and links to this project;
      otherwise it reads "View Our Work" and links to /projects. */
  projectSlug?: string;
  /** Static image. Omit (with projectSlug set) to show that project's hero
      image from Sanity instead. */
  image?: { src: string; alt: string; width: number; height: number };
};

export default async function LocationTopSection({
  eyebrow,
  heading,
  paragraph,
  projectSlug,
  image,
}: LocationTopSectionProps) {
  const project =
    !image && projectSlug
      ? await client.fetch<{
          heroImage?: SanityImageWithAlt;
          mainImage: SanityImageWithAlt;
          imageAlt?: string;
        } | null>(PROJECT_IMAGE, { slug: projectSlug })
      : null;
  const heroSource = project?.heroImage ?? project?.mainImage;

  return (
    <section className="bg-cream-200 py-20 lg:py-48">
      <Container className="flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center w-full">
          <ScrollReveal
            direction="left"
            threshold={0.3}
            delay={300}
            className="lg:col-span-5"
          >
            <span className="eyebrow">{eyebrow}</span>
            <h2>{heading}</h2>
            <p>{paragraph}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center md:justify-start">
              <ArrowButton
                href={projectSlug ? `/projects/${projectSlug}` : "/projects"}
                variant="primary"
                className="w-full sm:w-auto justify-center"
              >
                {projectSlug ? "View Project" : "View Our Work"}
              </ArrowButton>
            </div>
          </ScrollReveal>

          {(image || heroSource) && (
            <ScrollReveal
              direction="right"
              threshold={0.3}
              delay={300}
              className="relative lg:col-span-7"
            >
              {image ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  quality={90}
                  sizes="(min-width: 1280px) 60vw, 100vw"
                  className="w-full h-auto object-cover rounded-xs"
                />
              ) : (
                <div className="relative aspect-5/4 overflow-hidden rounded-xs bg-taupe-800">
                  <Image
                    src={heroImageUrl(heroSource!)}
                    alt={project?.imageAlt || heading}
                    fill
                    quality={90}
                    sizes="(min-width: 1280px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </ScrollReveal>
          )}
        </div>
      </Container>
    </section>
  );
}
