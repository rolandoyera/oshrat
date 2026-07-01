import type { Metadata } from "next";
import { JsonLd, siteGraph } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Publications and press features highlighting Sarvian Design Group's architecture and interior design work across South Florida, including Florida Design Magazine.",
  alternates: { canonical: "/press" },
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
