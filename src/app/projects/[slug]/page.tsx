// app/projects/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import {
  urlFor,
  heroImageUrl,
  type SanityImageWithAlt,
} from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import type { PortableTextBlock } from "@portabletext/types";
import ProjectButton from "@/components/ui/ProjectButton";
import NextProject from "@/components/NextProject";
import PanoramaViewer from "@/components/ui/PanoramaViewer";
import ProjectDescription from "./project-description";
import ProjectGallery, { type GalleryImage } from "./project-gallery";
import { JsonLd, projectPageGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";

/* -------------------- Types -------------------- */

type Project = {
  _id: string;
  title: string;
  slug?: { current: string } | string;
  location?: string;
  type?: string;
  year?: number;
  size?: string | number;

  heroImage?: SanityImageWithAlt;
  mainImage?: SanityImageWithAlt;
  gallery?: SanityImageWithAlt[];
  panorama360?: SanityImageWithAlt;

  intro?: string;
  description?: PortableTextBlock[];
  body?: PortableTextBlock[];

  seoDescription?: string;
  keywords?: string[];
  materials?: string[];
};

/** Display labels for the `type` field's stored values (see sanity project schema). */
const PROJECT_TYPE_LABELS: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
  hospitality: "Hospitality",
  nonprofit: "Non-Profit",
  other: "Other",
};

/* -------------------- GROQ -------------------- */

const PROJECT_BY_SLUG = groq`*[_type=="project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  location,
  type,
  year,
  size,
  heroImage{ ..., alt, asset->{ url, metadata{ dimensions } } },
  mainImage{ ..., alt, asset->{ url, metadata{ dimensions } } },
  gallery[]{ ..., alt, asset->{ url, metadata{ dimensions } } },
  panorama360{ ..., alt, asset->{ url, metadata{ dimensions } } },
  intro,
  description,
  body,
  seoDescription,
  keywords,
  materials
}`;

const ALL_SLUGS = groq`*[_type=="project" && defined(slug.current)]{ "slug": slug.current }`;

const ALL_PROJECTS_SORTED = groq`*[_type=="project" && defined(slug.current)]{
  title,
  "slug": slug.current,
  location
} | order(coalesce(year, 0) desc, _createdAt desc)`;

/* -------------------- ISR -------------------- */

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(ALL_SLUGS);
  return slugs.map((s) => ({ slug: s.slug }));
}

/* -------------------- Metadata -------------------- */

const PROJECT_META = groq`*[_type=="project" && slug.current == $slug][0]{
  title,
  location,
  seoDescription,
  "descriptionText": pt::text(description),
  "ogImage": coalesce(heroImage.asset->url, mainImage.asset->url)
}`;

/** Trim plain text to a meta-description-length excerpt at a word boundary. */
function excerpt(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await client.fetch<{
    title?: string;
    location?: string;
    seoDescription?: string;
    descriptionText?: string;
    ogImage?: string;
  } | null>(PROJECT_META, { slug });

  if (!data?.title) return { title: "Project | Sarvian Design Group" };

  const baseTitle = data.location
    ? `${data.title} | ${data.location}`
    : data.title;
  const title = `${baseTitle} | Sarvian Design Group`;
  const descriptionText = data.descriptionText?.trim();
  const description =
    data.seoDescription?.trim() ||
    (descriptionText ? excerpt(descriptionText) : "") ||
    `${data.title}${data.location ? ` in ${data.location}` : ""} — a project by Sarvian Design Group.`;
  const url = `/projects/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    // No brand in og:title — og:site_name already carries it.
    ...socialMeta({
      title: baseTitle,
      description,
      url,
      type: "article",
      images: data.ogImage
        ? [`${data.ogImage}?w=1200&h=630&fit=crop&auto=format`]
        : undefined,
    }),
  };
}

/* -------------------- Page -------------------- */

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [data, allProjects] = await Promise.all([
    client.fetch<Project | null>(PROJECT_BY_SLUG, { slug }),
    client.fetch<{ title: string; slug: string; location?: string }[]>(
      ALL_PROJECTS_SORTED,
    ),
  ]);

  if (!data) return notFound();

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex !== -1 && allProjects.length > 1
      ? allProjects[
          (currentIndex - 1 + allProjects.length) % allProjects.length
        ]
      : null;
  const nextProject =
    currentIndex !== -1 && allProjects.length > 1
      ? allProjects[(currentIndex + 1) % allProjects.length]
      : null;

  const hero = data.heroImage || data.mainImage;
  const rich = data.description ?? data.body;
  const gallery = Array.isArray(data.gallery) ? data.gallery : [];
  const panorama = data.panorama360;

  // Sort: landscapes first, then portraits, then square/unknown (stable within groups)
  const sortedGallery: SanityImageWithAlt[] = gallery
    .map((img, idx) => {
      const dims = img.asset.metadata?.dimensions;
      const ar =
        dims?.aspectRatio ??
        (dims?.width && dims?.height ? dims.width / dims.height : 1);
      const group = ar > 1.01 ? 0 : ar < 0.99 ? 1 : 2; // 0 = landscape, 1 = portrait, 2 = square/unknown
      return { img, idx, group };
    })
    .sort((a, b) => (a.group === b.group ? a.idx - b.idx : a.group - b.group))
    .map((x) => x.img);

  // Serializable image props for the client gallery + lightbox. `src` matches
  // the stack's previous next/image URL so cached entries stay warm.
  const galleryImages: GalleryImage[] = sortedGallery.map((img, i) => {
    const dims = img.asset.metadata?.dimensions;
    const ar = dims?.aspectRatio ?? 4 / 3;
    const width = Math.min(dims?.width ?? 1600, 1800);
    const height = Math.round(width / ar);
    return {
      src: urlFor(img).width(width).auto("format").url(),
      thumbSrc: urlFor(img).width(112).height(160).fit("crop").url(),
      alt: img.alt || `Project image ${i + 1}`,
      width,
      height,
    };
  });

  // Absolute image URLs for structured data: hero first, then gallery (deduped).
  const imageUrls = [
    ...new Set(
      [hero, ...sortedGallery]
        .map((img) => img?.asset?.url)
        .filter((url): url is string => Boolean(url)),
    ),
  ];

  return (
    <main>
      <JsonLd
        data={projectPageGraph({
          slug,
          title: data.title,
          location: data.location,
          description: data.seoDescription,
          keywords: data.keywords,
          materials: data.materials,
          year: data.year,
          images: imageUrls,
        })}
      />
      <div className="mx-auto">
        {/* 1) Full-bleed banner */}
        {hero && (
          <section className="relative h-dvh overflow-hidden">
            <Image
              src={heroImageUrl(hero)}
              alt={hero.alt || data.title}
              fill
              priority
              quality={90}
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
              style={
                { viewTransitionName: `hero-${slug}` } as React.CSSProperties
              }
            />
          </section>
        )}
        <nav aria-label="Breadcrumb" className="px-4 xl:px-6 mt-2">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="before:content-['>'] before:mr-2">
              <Link href="/projects">Projects</Link>
            </li>
            <li
              aria-current="page"
              className="before:content-['>'] before:mr-2"
            >
              {data.location ? `${data.title} | ${data.location}` : data.title}
            </li>
          </ol>
        </nav>

        {/* 2) Content row: left = info (sticky), right = gallery */}
        <section className="grid grid-cols-1 xl:grid-cols-12 gap-8 px-4 xl:p-6">
          {/* LEFT: Project info */}
          <aside className="xl:col-span-4">
            <div className="xl:sticky xl:top-22">
              <div className="bg-card p-2 sm:p-4 md:p-8 lg:p-12 rounded shadow">
                <h1 className="text-[38px]/[1.1] tracking-[-0.012em]">
                  {data.title}
                  {data.location && (
                    <span className="block text-[16px] lg:text-[22px] font-light tracking-normal text-balance leading-[1.55] -mb-4">
                      {data.location}
                    </span>
                  )}
                </h1>
                <div className="my-10 lg:my-16 space-y-2">
                  <div className="flex justify-between pb-2 relative">
                    <div className="absolute left-0 right-0 bottom-0 h-px bg-border/30" />
                    <div className="absolute left-0 right-0 -bottom-px h-px bg-white" />
                    <span className="text-[16px] font-medium font-mono">
                      Firm
                    </span>
                    <span className="text-[16px] font-mono">
                      Sarvian Design Group
                    </span>
                  </div>

                  {data.type && (
                    <div className="flex justify-between pb-2 relative">
                      <div className="absolute left-0 right-0 bottom-0 h-px bg-border/30" />
                      <div className="absolute left-0 right-0 -bottom-px h-px bg-white" />
                      <span className="text-[16px] font-medium font-mono">
                        Type
                      </span>
                      <span className="text-[16px] font-mono">
                        {PROJECT_TYPE_LABELS[data.type] ?? data.type}
                      </span>
                    </div>
                  )}

                  {data.size && (
                    <div className="flex justify-between pb-2 relative">
                      <div className="absolute left-0 right-0 bottom-0 h-px bg-border/30" />
                      <div className="absolute left-0 right-0 -bottom-px h-px bg-white" />
                      <span className="text-[16px] font-medium font-mono">
                        Size
                      </span>
                      <span className="text-[16px] font-mono">
                        {typeof data.size === "number"
                          ? `${data.size.toLocaleString()} Sq Ft`
                          : data.size}
                      </span>
                    </div>
                  )}

                  {typeof data.year === "number" && (
                    <div className="flex justify-between">
                      <span className="text-[16px] font-medium font-mono">
                        Year
                      </span>
                      <span className="text-[16px] font-mono">{data.year}</span>
                    </div>
                  )}
                </div>

                {data.intro && (
                  <p className="mt-16 text-sm leading-6 text-white/85">
                    {data.intro}
                  </p>
                )}

                {Array.isArray(rich) && rich.length > 0 && (
                  <ProjectDescription value={rich} />
                )}

                <div className="w-fit mt-16 mx-auto">
                  <ProjectButton location="project_detail">
                    Start a Similar Project
                  </ProjectButton>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: Image stack (single column, natural aspect, NO rounding) */}
          <div className="xl:col-span-8">
            {(sortedGallery.length > 0 || panorama) && (
              <div className="flex flex-col gap-8">
                {galleryImages.length > 0 && (
                  <ProjectGallery
                    images={galleryImages}
                    panorama={
                      panorama
                        ? {
                            imageUrl: panorama.asset.url,
                            thumbSrc: urlFor(panorama)
                              .width(112)
                              .height(160)
                              .fit("crop")
                              .url(),
                            alt: panorama.alt || "360 degree room view",
                          }
                        : undefined
                    }
                  />
                )}

                {panorama && (
                  <div className="w-full pt-4 border-t border-border/30">
                    <PanoramaViewer
                      imageUrl={panorama.asset.url}
                      alt={panorama.alt || "360 degree room view"}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
      <NextProject prevProject={prevProject} nextProject={nextProject} />
    </main>
  );
}
