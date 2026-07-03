// lib/structured-data.tsx
// Centralized JSON-LD (schema.org) for the site.

import { SITE } from "@/lib/site";

export const SITE_URL = "https://www.sarviandg.com";
export const BUSINESS_ID = `${SITE_URL}/#business`;

/**
 * Sitewide business node. Always the first node in every page's @graph
 * (see `siteGraph`); page-specific nodes reference it by @id (BUSINESS_ID).
 */
const businessNode = {
  "@type": "HomeAndConstructionBusiness",
  "@id": BUSINESS_ID,
  name: "Sarvian Design Group",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo_sdg-horizontal.svg`,
  sameAs: [
    SITE.instagramUrl,
    "https://www.houzz.com/hznb/professionals/interior-designers-and-decorators/sarvian-design-group-pfvwus-pf~1582672692",
    "https://www.linkedin.com/company/sarviandg/",
  ],
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fort Lauderdale",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [
    "Miami, FL",
    "Miami Beach, FL",
    "Coral Gables, FL",
    "Coconut Grove, FL",
    "Bal Harbour, FL",
    "Fisher Island, FL",
    "Golden Beach, FL",
    "Fort Lauderdale, FL",
    "Las Olas, Fort Lauderdale, FL",
    "Aventura, FL",
    "Hollywood, FL",
    "Davie, FL",
    "Plantation, FL",
    "Cooper City, FL",
    "Dania Beach, FL",
    "Sunny Isles Beach, FL",
    "Weston, FL",
    "Parkland, FL",
    "Palm Beach, FL",
    "West Palm Beach, FL",
    "Boca Raton, FL",
    "Delray Beach, FL",
    "Jupiter, FL",
    "Key Largo, FL",
    "Broward County, FL",
    "Miami-Dade County, FL",
    "Palm Beach County, FL",
  ],
};

/**
 * Wraps page-specific nodes into a single @graph that always leads with the
 * sitewide business node. Every page renders exactly one of these.
 */
export function siteGraph(nodes: object[] = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [businessNode, ...nodes],
  };
}

/** Per-project CreativeWork node, linked to the business as its creator. */
function projectNode(p: {
  slug: string;
  title: string;
  location?: string;
  description?: string;
  keywords?: string[];
  materials?: string[];
  year?: number;
  images?: string[];
}) {
  const url = `${SITE_URL}/projects/${p.slug}`;
  const description =
    p.description?.trim() ||
    `A luxury ${p.location || "South Florida"} property by Sarvian Design Group.`;

  return {
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: p.title,
    description,
    url,
    mainEntityOfPage: url,
    creator: { "@id": BUSINESS_ID },
    ...(p.location && {
      locationCreated: { "@type": "Place", name: p.location },
    }),
    ...(p.year && { dateCreated: String(p.year) }),
    ...(p.materials?.length && { material: p.materials.join(", ") }),
    ...(p.keywords?.length && { about: p.keywords }),
    ...(p.images?.length && { image: p.images }),
  };
}

/** BreadcrumbList node. Every crumb (including the current page) carries its `item` URL. */
function breadcrumbNode(slug: string, title: string) {
  const items = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Projects", url: `${SITE_URL}/projects` },
    { name: title, url: `${SITE_URL}/projects/${slug}` },
  ];
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/projects/${slug}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

/**
 * Full JSON-LD @graph for a project detail page: breadcrumb + project node.
 * The business node is defined once in the root layout and referenced by @id.
 */
export function projectPageGraph(p: {
  slug: string;
  title: string;
  location?: string;
  description?: string;
  keywords?: string[];
  materials?: string[];
  year?: number;
  images?: string[];
}) {
  return siteGraph([breadcrumbNode(p.slug, p.title), projectNode(p)]);
}

/** "Single-Room Transformations" → "single-room-transformations" (for stable @id fragments). */
function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Services page @graph: the business node enriched with a hasOfferCatalog of the
 * studio's services. Same business @id as everywhere else — only this page adds
 * the catalog. Pass the same list the page renders so schema tracks the copy.
 */
export function servicesPageGraph(
  services: { name: string; description: string }[],
) {
  const hasOfferCatalog = {
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/services#catalog`,
    name: "Interior Design Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${SITE_URL}/services#${slugify(s.name)}`,
        name: s.name,
        description: s.description,
        provider: { "@id": BUSINESS_ID },
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [{ ...businessNode, hasOfferCatalog }],
  };
}

/** Renders a JSON-LD <script>. Escapes `<` so CMS content can't break out of the tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
