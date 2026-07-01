import type { MetadataRoute } from "next";

const BASE_URL = "https://www.sarviandg.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/internal", "/external"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
