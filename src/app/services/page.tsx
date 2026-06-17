import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <Container className="min-h-dvh">
      <h1>Services</h1>
    </Container>
  );
}
