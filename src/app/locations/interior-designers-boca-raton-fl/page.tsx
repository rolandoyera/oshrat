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

const PATH = "/locations/interior-designers-boca-raton-fl";
const TITLE = "Interior Designers in Boca Raton, FL | Sarvian Design Group";
const DESCRIPTION =
  "Luxury interior designers in Boca Raton, FL. Residential and commercial interiors, full home renovations, and new construction. Request a consultation.";

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
        heading={["Designed for how", "Boca Raton lives."]}
        paragraphs={[
          "Boca Raton is in the middle of replacing itself. Houses from the seventies and eighties are coming down street by street, and what goes up in their place is often better built and no more distinctive, because the interior arrives as a package rather than a design. As a full-service luxury interior design firm, that is the gap we work in. We start with the site, the light, and how the family actually moves through the house, then draw the millwork, the ceilings, and the material palette for that specific set of conditions.",
          "Getting in early is what makes the difference. Ceiling heights, window placement, how rooms connect, and where the lighting lands are all free to change on paper and expensive to change once framing is up, so the residential interior is developed alongside the architecture rather than reconciled with it afterward. Living this close to the water also raises the standard on specification, since finishes have to hold up to salt air, strong light, and daily use and still look right years in. Considered layouts, custom built-ins, and easy transitions between rooms are what separate the best interior designers from the rest.",
          "The same standard carries into commercial work. Luxury interior design, as we practice it, has little to do with ornament and everything to do with an environment that is true to the people using it, whether that is one family or a room full of guests. From the earliest concept conversations through final installation, we stay close to our clients so that every decision serves the same vision, and so the studio that starts your project is the one standing in the room when it is finished.",
        ]}
      />
      <Why {...WHY} />
    </main>
  );
}
