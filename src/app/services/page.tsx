import type { Metadata } from "next";
import { JsonLd, servicesPageGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";
import ServicesHero from "@/components/ServicesHero";
import ServicesSection, { SERVICES } from "@/components/ServicesSection";
import WhereWeWorkSection from "@/components/WhereWeWorkSection";
import ProjectExamplesSection from "@/components/ProjectExamplesSection";
import CtaSection from "@/components/CtaSection";

const TITLE = "Interior Design Services in Fort Lauderdale & South Florida";
const DESCRIPTION =
  "Full-service interior design firm serving Fort Lauderdale, Miami, Palm Beach, Broward, and South Florida — renovations, new construction, custom furnishings, kitchens, and bathrooms.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/services" }),
};

// Keep the "Project Examples" list fresh as projects change in Sanity.
export const revalidate = 60;

export default function Services() {
  return (
    <>
      <JsonLd
        data={servicesPageGraph(
          SERVICES.map((s) => ({ name: s.title, description: s.description })),
        )}
      />
      <ServicesHero />
      <ServicesSection />
      <WhereWeWorkSection />
      <ProjectExamplesSection />
      <CtaSection />
    </>
  );
}
