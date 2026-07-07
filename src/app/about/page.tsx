import type { Metadata } from "next";
import AboutContent from "./about-content";
import { JsonLd, siteGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";

const TITLE =
  "About Sarvian Design Group | Fort Lauderdale Interior Designer";
const DESCRIPTION =
  "Meet Oshrat Rothschild and the Sarvian Design Group studio — Fort Lauderdale interior designers crafting refined, livable homes across South Florida.";

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
