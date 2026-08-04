import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import {
  heroImageUrl,
  heroPreloadSrcSet,
  type SanityImageWithAlt,
} from "@/sanity/lib/image";
import ArrowButton from "@/components/ui/ArrowButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";
import TransitionLink from "@/components/ui/TransitionLink";

const PROJECT_SLUG = "modern-marble-haven-fort-lauderdale-fl";

const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{
  heroImage,
  mainImage,
  "imageAlt": coalesce(heroImage.alt, mainImage.alt)
}`;

export default async function TopSection() {
  const project = await client.fetch<{
    heroImage?: SanityImageWithAlt;
    mainImage: SanityImageWithAlt;
    imageAlt?: string;
  } | null>(PROJECT_QUERY, { slug: PROJECT_SLUG });

  // Match the detail page's hero source + view-transition name so this image
  // morphs into the destination hero, and warm that exact image on hover.
  const heroSource = project?.heroImage ?? project?.mainImage;

  return (
    <section className="bg-cream-200 py-20 lg:py-48">
      <Container
        size="lg"
        className="flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 xl:gap-12 items-center w-full">
          <ScrollReveal
            direction="left"
            threshold={0.3}
            delay={300}
            className="lg:col-span-2">
            <span className="eyebrow">Featured Project</span>
            <h2>Interior Designers Las Olas</h2>
            <p>
              A primary bath in Fort Lauderdale, minutes from Las Olas, designed
              as a quiet retreat rather than a showpiece. Fluted Calacatta
              marble wraps the walls, and the veining carries across the floor,
              the shower, and the vanity surfaces so the room reads as a single
              piece of stone. Warm walnut cabinetry and brushed gold fixtures
              keep it from turning cold, while a freestanding tub sits framed by
              sheer drapery and soft light. Every decision here, down to where
              the storage went, was made for how the room gets used each
              morning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center md:justify-start">
              <ArrowButton
                href={`/projects/${PROJECT_SLUG}`}
                variant="primary"
                transition
                preloadSrcSet={
                  heroSource ? heroPreloadSrcSet(heroSource) : undefined
                }
                className="w-full sm:w-auto justify-center">
                View Project
              </ArrowButton>
            </div>
          </ScrollReveal>
          {heroSource && (
            <ScrollReveal
              direction="right"
              threshold={0.3}
              delay={300}
              className="relative lg:col-span-3">
              <TransitionLink
                href={`/projects/${PROJECT_SLUG}`}
                preloadSrcSet={heroPreloadSrcSet(heroSource)}
                aria-label="View project: Modern Marble Haven in Fort Lauderdale"
                className="group relative block aspect-5/4 overflow-hidden rounded-xs bg-taupe-800">
                <Image
                  src={heroImageUrl(heroSource)}
                  alt={
                    project?.imageAlt ||
                    "Modern bathroom with marble and wood finishes in Las Olas, Fort Lauderdale."
                  }
                  fill
                  quality={90}
                  sizes="(min-width: 1280px) 60vw, 100vw"
                  className="object-cover"
                  style={
                    {
                      viewTransitionName: `hero-${PROJECT_SLUG}`,
                    } as React.CSSProperties
                  }
                />
              </TransitionLink>
            </ScrollReveal>
          )}
        </div>
      </Container>
    </section>
  );
}
