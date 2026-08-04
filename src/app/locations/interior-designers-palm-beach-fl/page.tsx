import type { Metadata } from "next";
import Cta from "@/components/Cta";
import ProjectsSection from "./_components/ProjectsSection";
import Hero from "./_components/Hero";
import ServicesSequence from "../_components/ServicesSequence";
import { SERVICES } from "./_components/ServicesSequence";
import Testimonials from "@/components/Testimonials";
import TopSection from "./_components/TopSection";
import Why from "@/components/Why";
import { WHY } from "./_components/WhyItems";
import { LocationEditorial } from "../_components/LocationEditorial";
import FaqSection from "@/components/FaqSection";
import { FAQS } from "./_components/Faqs";
import { socialMeta } from "@/lib/seo";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";

const PATH = "/locations/interior-designers-palm-beach-fl";
const TITLE = "Interior Designers in Palm Beach, FL | Sarvian Design Group";
const DESCRIPTION =
  "Luxury interior designers in Palm Beach, FL. Residential and commercial interiors, historic renovations, and new construction. Request a consultation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: PATH }),
};

export default function Page() {
  return (
    <main>
      <JsonLd data={faqPageGraph(PATH, FAQS)} />
      <Hero />
      <TopSection />
      <ProjectsSection />
      <Cta />
      <ServicesSequence services={SERVICES} />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Designed for how", "Palm Beach lives."]}
        paragraphs={[
          "Palm Beach is an island with a long memory, and its interiors are judged against decades of them. As a full-service luxury interior design firm, we treat that as a discipline rather than a constraint. The architecture already on the lot sets the terms, whether it is Mediterranean revival with plaster, arches, and pecky cypress or a restrained new build facing the ocean, and the residential interior is drawn to belong to the house instead of arriving on top of it.",
          "Much of the island is lived in seasonally, and that changes how a project is run more than how it looks. Lead times, procurement, and installation are planned against the calendar so a house is complete before anyone arrives, not finished in pieces around them. It also raises the standard on materials: fabrics and finishes have to survive months of strong light and closed-up humidity and still look right the day the family walks back in. Considered layouts, custom built-ins, and easy transitions between rooms are what separate the best interior designers from the rest.",
          "The same standard carries into commercial work. Luxury interior design, as we practice it, has little to do with ornament and everything to do with an environment that is true to the people using it, whether that is one family or a room full of guests. From the earliest concept conversations through final installation, we stay close to our clients so that every decision serves the same vision, and so the studio that starts your project is the one standing in the room when it is finished.",
        ]}
      />
      <Why {...WHY} />
    </main>
  );
}
