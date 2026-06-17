import type { Metadata } from "next";
import { JsonLd, siteGraph } from "@/lib/structured-data";

export const metadata: Metadata = {
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
