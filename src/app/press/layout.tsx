import type { Metadata } from "next";
import { JsonLd, siteGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";

const TITLE =
  "Press & Media | South Florida Interior Designer | Sarvian Design Group";
const DESCRIPTION =
  "Publications and press highlighting Sarvian Design Group's architecture and interior design work across South Florida.";

// The page itself is "use client", so all metadata (including social tags)
// must live in this layout.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/press" },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/press" }),
};

export default function PressLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={siteGraph()} />
      {children}
    </>
  );
}
