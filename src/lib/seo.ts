import type { Metadata } from "next";

const OG_IMAGE = {
  url: "/assets/sarvian-design-group-og-image.jpg",
  width: 1200,
  height: 600,
  alt: "Sarvian Design Group — interior design studio in South Florida",
};

/**
 * Complete `openGraph` + `twitter` blocks for a page. Next.js replaces nested
 * metadata objects wholesale (no deep merge), so a page that sets a partial
 * `openGraph` silently drops the root siteName/title/images — always build
 * the full blocks through this helper instead.
 */
export function socialMeta({
  title,
  description,
  url,
  type = "website",
  images,
}: {
  title: string;
  description: string;
  /** Route path (e.g. "/services"); omit only for the root-layout fallback. */
  url?: string;
  type?: "website" | "article";
  /** Absolute image URLs; falls back to the sitewide OG image. */
  images?: string[];
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type,
      siteName: "Sarvian Design Group",
      locale: "en_US",
      title,
      description,
      ...(url ? { url } : {}),
      images: images ?? [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
