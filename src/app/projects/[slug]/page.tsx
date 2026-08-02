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
import { JsonLd, projectPageGraph, SITE_URL } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";
import Cta from "@/components/Cta";
import { TiSocialPinterest } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoWhatsapp } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import ShareLinks from "./share-links";
import Container from "@/components/ui/Container";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";
import { WHY as BAL_HARBOUR_WHY } from "@/app/locations/interior-designers-bal-harbour-fl/_components/WhyItems";

// Projects that get a Why section above the footer, keyed by slug — copy is
// shared with the matching location page. Extend as copy is arranged for
// other projects.
const PROJECT_WHY: Record<string, React.ComponentProps<typeof Why>> = {
  "the-shul-bal-harbour-surfside-fl": BAL_HARBOUR_WHY,
};

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

  // Share intents — plain hrefs, no JS. mailto stays in-tab; the rest open a
  // new tab. Pinterest wants a media image alongside the URL.
  const pageUrl = `${SITE_URL}/projects/${slug}`;
  const shareText = `${data.title}${data.location ? ` | ${data.location}` : ""} — Sarvian Design Group`;
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedText = encodeURIComponent(shareText);
  const shareLinks = [
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <BiLogoFacebook className="size-6.5" />,
    },
    {
      label: "Share on X",
      href: `https://x.com/intent/post?url=${encodedUrl}&text=${encodedText}`,
      icon: <BsTwitterX className="size-4.5" />,
    },
    {
      label: "Share on Pinterest",
      href: `https://www.pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedText}${hero ? `&media=${encodeURIComponent(heroImageUrl(hero))}` : ""}`,
      icon: <TiSocialPinterest className="size-7.5" />,
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <BiLogoLinkedin className="size-6" />,
    },
    {
      label: "Share via Email",
      href: `mailto:?subject=${encodedText}&body=${encodedUrl}`,
      icon: <HiOutlineMail className="size-6" />,
    },
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}`,
      icon: <BiLogoWhatsapp className="size-6.5" />,
    },
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
          <section className="relative h-[40svh] md:h-[55svh] xl:h-dvh overflow-hidden">
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
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-450 px-4 xl:px-6 my-2 text-sm"
        >
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
              {data.title}
              {data.location && (
                <span className="hidden sm:inline">{` | ${data.location}`}</span>
              )}
            </li>
          </ol>
        </nav>

        {/* 2) Content row: left = info (sticky), right = gallery */}
        {/* Capped like Container size="lg" — on viewports wider than 1800px
            the columns stop growing (otherwise the left card shrinks to a few
            lines and the gallery images balloon). */}
        <Container
          size="lg"
          className="grid grid-cols-1 xl:grid-cols-12 gap-8 py-4"
        >
          {/* LEFT: Project info */}
          <aside className="xl:col-span-5">
            <div className="xl:sticky xl:top-22">
              <div className="bg-card p-2 sm:p-4 sm:pt-3 rounded-xs shadow">
                <h1 className="h3">
                  {data.title}
                  {data.location && (
                    <span className="block -mb-4 p">{data.location}</span>
                  )}
                </h1>
                <div className="my-10 space-y-1 text-[16px] font-medium font-mono">
                  {data.type && (
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <span>Type</span>
                        <span>
                          {PROJECT_TYPE_LABELS[data.type] ?? data.type}
                        </span>
                      </div>
                      <hr className="etched-line mt-2" />
                    </div>
                  )}

                  {data.size && (
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <span>Size</span>
                        <span>
                          {typeof data.size === "number"
                            ? `${data.size.toLocaleString()} Sq Ft`
                            : data.size}
                        </span>
                      </div>
                      <hr className="etched-line mt-2" />
                    </div>
                  )}

                  {typeof data.year === "number" && (
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <span>Year</span>
                        <span>{data.year}</span>
                      </div>
                      <hr className="etched-line mt-2" />
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Location</span>
                    <span>{data.location}</span>
                  </div>
                </div>

                {data.intro && (
                  <p className="mt-16 text-sm leading-6 text-white/85">
                    {data.intro}
                  </p>
                )}

                {Array.isArray(rich) && rich.length > 0 && (
                  <ProjectDescription value={rich} />
                )}
                <ShareLinks links={shareLinks} />

                <div className="w-fit mt-10 mx-auto">
                  <ProjectButton location="project_detail">
                    Start a Similar Project
                  </ProjectButton>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: Image stack (single column, natural aspect, NO rounding) */}
          <div className="xl:col-span-7">
            {(sortedGallery.length > 0 || panorama) && (
              <div className="flex flex-col gap-8">
                {/* The 360° room view leads the column when a project has one. */}
                {panorama && (
                  <div className="w-full pb-4 border-b border-border/30">
                    <PanoramaViewer
                      imageUrl={panorama.asset.url}
                      alt={panorama.alt || "360 degree room view"}
                    />
                  </div>
                )}

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
              </div>
            )}
          </div>
        </Container>
      </div>
      <NextProject prevProject={prevProject} nextProject={nextProject} />
      <Cta />
      <Testimonials />
      {PROJECT_WHY[slug] && <Why {...PROJECT_WHY[slug]} />}
    </main>
  );
}
