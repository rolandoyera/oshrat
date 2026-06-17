// lib/structured-data.tsx
// Centralized JSON-LD (schema.org) for the site.

export const SITE_URL = "https://www.sarviandg.com";
export const BUSINESS_ID = `${SITE_URL}/#business`;

/** Sitewide business node. Referenced by @id from per-project nodes. */
export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  "@id": BUSINESS_ID,
  name: "Sarvian Design Group",
  url: SITE_URL,
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
export function projectJsonLd(p: {
  slug: string;
  title: string;
  location?: string;
  description?: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}/projects/${p.slug}`;
  const description =
    p.description?.trim() ||
    `A luxury ${p.location || "South Florida"} property by Sarvian Design Group.`;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: p.title,
    description,
    url,
    creator: { "@id": BUSINESS_ID },
    ...(p.location && {
      locationCreated: {
        "@type": "Place",
        name: p.location,
      },
    }),
    ...(p.keywords?.length && { about: p.keywords }),
  };
}

/** BreadcrumbList node. Last item omits `item` to mark the current page. */
export function breadcrumbJsonLd(
  items: { name: string; url?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
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
