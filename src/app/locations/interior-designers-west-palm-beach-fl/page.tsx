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

const PATH = "/locations/interior-designers-west-palm-beach-fl";
const TITLE =
  "Interior Designers in West Palm Beach, FL | Sarvian Design Group";
const DESCRIPTION =
  "Luxury interior designers in West Palm Beach, FL. Residential and commercial interiors, historic home renovations, and new construction.";

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
        heading={["Designed for how", "West Palm Beach lives."]}
        paragraphs={[
          "West Palm Beach holds two kinds of buildings at once, and a full-service luxury interior design firm has to be fluent in both. The historic neighborhoods along the water are full of houses built before open plans and modern kitchens, where the work is to bring in light and flow without stripping out the plaster, arches, and window rhythm that made the house worth owning. A block away, a new tower residence or an office floor starts from the opposite condition: a clean slate with no character to protect and none to inherit.",
          "That range is why we design from the building outward rather than applying a house style. The residential interior is drawn to belong to the architecture it sits in, and the commercial work gets the same treatment: materials specified for real traffic, lighting planned for long days instead of a launch photograph, and millwork drawn rather than ordered. Considered layouts, custom built-ins, and easy transitions between rooms are what separate the best interior designers from the rest.",
          "Luxury interior design, as we practice it, has little to do with ornament and everything to do with an environment that is true to the people using it, whether that is one family or a floor full of employees. From the earliest concept conversations through final installation, we stay close to our clients so that every decision serves the same vision, and so the studio that starts your project is the one standing in the room when it is finished.",
        ]}
      />
      <Why {...WHY} />
    </main>
  );
}
