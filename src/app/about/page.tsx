import type { Metadata } from "next";
import AboutContent from "./about-content";
import { JsonLd, siteGraph } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "About Sarvian Design Group | Fort Lauderdale Interior Designer | South Florida",
  description:
    "Learn about Sarvian Design Group, a South Florida interior design studio serving Fort Lauderdale, Miami, Palm Beach, and surrounding communities.",
  alternates: { canonical: "/about" },
  openGraph: {
    title:
      "About Sarvian Design Group | Fort Lauderdale Interior Designer | South Florida",
    description:
      "Learn about Sarvian Design Group, a South Florida interior design studio serving Fort Lauderdale, Miami, Palm Beach, and surrounding communities.",
    url: "/about",
    siteName: "Sarvian Design Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Sarvian Design Group | Fort Lauderdale Interior Designer | South Florida",
    description:
      "Learn about Sarvian Design Group, a South Florida interior design studio serving Fort Lauderdale, Miami, Palm Beach, and surrounding communities.",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={siteGraph()} />
      <AboutContent />
    </>
  );
}
