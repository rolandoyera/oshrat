import type { Metadata } from "next";
import AboutContent from "./about-content";
import { JsonLd, siteGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";

const TITLE =
  "About Sarvian Design Group | Fort Lauderdale Interior Designer | South Florida";
const DESCRIPTION =
  "Learn about Sarvian Design Group, a South Florida interior design studio serving Fort Lauderdale, Miami, Palm Beach, and surrounding communities.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/about" }),
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={siteGraph()} />
      <AboutContent />
    </>
  );
}
