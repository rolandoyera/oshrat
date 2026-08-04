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

const PATH = "/locations/interior-designers-palm-beach-gardens-fl";
const TITLE =
  "Interior Designers in Palm Beach Gardens, FL | Sarvian Design Group";
const DESCRIPTION =
  "Interior designers in Palm Beach Gardens, FL. Luxury residential and commercial interiors, club community renovations, and new construction.";

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
        heading={["Designed for how", "Palm Beach Gardens lives."]}
        paragraphs={[
          "Palm Beach Gardens was largely built at once, community by community, and that shows up inside the houses. The lots are generous, the volumes are tall, and the interiors arrived as a builder's specification rather than a design. As a full-service luxury interior design firm, we spend most of our time here undoing that: reworking the plan so rooms connect the way the family actually uses them, drawing millwork that belongs to the house, and resolving lighting that was originally laid out on a grid.",
          "Club living also changes how a project runs. Architectural review boards meet on their own calendar, so submissions are assembled and sequenced against construction from the first meeting instead of handled at the end. It raises the standard on specification too, since these houses hold a lot of glass and strong western light, and fabrics and finishes have to sit through years of it and still look right. Considered layouts, custom built-ins, and easy transitions between rooms are what separate the best interior designers from the rest.",
          "The same standard carries into commercial work. Luxury interior design, as we practice it, has little to do with ornament and everything to do with an environment that is true to the people using it, whether that is one family or a room full of guests. From the earliest concept conversations through final installation, we stay close to our clients so that every decision serves the same vision, and so the studio that starts your project is the one standing in the room when it is finished.",
        ]}
      />
      <Why {...WHY} />
    </main>
  );
}
