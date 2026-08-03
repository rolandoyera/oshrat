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

const SHUL_SLUG = "the-shul-bal-harbour-surfside-fl";

const SHUL_PROJECT = groq`*[_type == "project" && slug.current == $slug][0]{
  heroImage,
  mainImage,
  "imageAlt": coalesce(heroImage.alt, mainImage.alt)
}`;

export default async function TopSection() {
  const project = await client.fetch<{
    heroImage?: SanityImageWithAlt;
    mainImage: SanityImageWithAlt;
    imageAlt?: string;
  } | null>(SHUL_PROJECT, { slug: SHUL_SLUG });

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
            <h2>Interior Designers in Surfside, FL</h2>
            <p>
              Our most visible Surfside work stands on Collins Avenue: the
              renovation of The Shul, a sanctuary used by the community every
              day of the week. The room is shaped by curved walls in a textured
              finish that recalls Jerusalem stone, with oak millwork and bronze
              running through every custom piece — engraved bronze doors within
              a bookmatched marble surround, sculptural glass lighting, and
              stained glass designed for this room and no other. A building this
              woven into daily life calls for a careful hand, and the finished
              sanctuary feels both familiar and entirely new.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center md:justify-start">
              <ArrowButton
                href={`/projects/${SHUL_SLUG}`}
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
                href={`/projects/${SHUL_SLUG}`}
                preloadSrcSet={heroPreloadSrcSet(heroSource)}
                aria-label="View project: The Shul of Bal Harbour in Surfside"
                className="group relative block aspect-5/4 overflow-hidden rounded-xs bg-taupe-800">
                <Image
                  src={heroImageUrl(heroSource)}
                  alt={
                    project?.imageAlt ||
                    "Sanctuary interior at The Shul of Bal Harbour."
                  }
                  fill
                  quality={90}
                  sizes="(min-width: 1280px) 60vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  style={
                    {
                      viewTransitionName: `hero-${SHUL_SLUG}`,
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
