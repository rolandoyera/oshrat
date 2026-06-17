// lib/structured-data.tsx
// Centralized JSON-LD (schema.org) for the site.

export const SITE_URL = "https://www.sarviandg.com";
export const BUSINESS_ID = `${SITE_URL}/#business`;

/**
 * Sitewide business node, rendered once in the root layout.
 * Per-page nodes reference it by @id (BUSINESS_ID) instead of redefining it.
 */
export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  "@id": BUSINESS_ID,
  name: "Sarvian Design Group",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo_sdg-horizontal.svg`,
  telephone: "+1-954-444-4803",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fort Lauderdale",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [
    "Miami, FL",
    "Miami Beach, FL",
    "Fort Lauderdale, FL",
    "Aventura, FL",
    "Hollywood, FL",
    "Davie, FL",
    "Plantation, FL",
    "Cooper City, FL",
    "Dania Beach, FL",
    "Sunny Isles Beach, FL",
    "Palm Beach, FL",
    "West Palm Beach, FL",
    "Key Largo, FL",
    "Broward County, FL",
    "Miami-Dade County, FL",
  ],
};

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

/** BreadcrumbList node. Last item omits `item` to mark the current page. */
function breadcrumbNode(slug: string, title: string) {
  const items = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Projects", url: `${SITE_URL}/projects` },
    { name: title },
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
  return {
    "@context": "https://schema.org",
    "@graph": [breadcrumbNode(p.slug, p.title), projectNode(p)],
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
