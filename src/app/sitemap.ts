import type { MetadataRoute } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const BASE_URL = "https://www.sarviandg.com";

const PROJECT_SITEMAP = groq`*[_type=="project" && defined(slug.current)]{
  "slug": slug.current,
  _updatedAt
}`;

// Keep the sitemap fresh as projects change in Sanity.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/press`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const projects = await client.fetch<{ slug: string; _updatedAt: string }[]>(
    PROJECT_SITEMAP,
  );

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(p._updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
