import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { JsonLd, siteGraph } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <Container className="min-h-dvh">
      <JsonLd data={siteGraph()} />
      <h1>Services</h1>
    </Container>
  );
}
