import type { Metadata } from "next";
import Cta from "@/components/Cta";
import ProjectsSection from "@/components/ProjectsSection";
import Hero from "./_components/Hero";
import ServicesSequence from "../interior-designers-fort-lauderdale-fl/_components/ServicesSequence";
import Testimonials from "@/components/Testimonials";
import { socialMeta } from "@/lib/seo";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";
import TopSection from "./_components/TopSection";
import { LocationEditorial } from "../_components/LocationEditorial";
import FaqSection from "@/components/FaqSection";
import { FAQS } from "./_components/Faqs";

const PATH = "/locations/interior-designers-bal-harbour-fl";
const TITLE = "Interior Designers in Bal Harbour, FL | Sarvian Design Group";
const DESCRIPTION =
  "Full-service luxury interior design firm in Bal Harbour, FL. Interior and exterior design, renovations & new construction. Request a consultation.";

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
      <ProjectsSection content="A look at our most recent work across South Florida, from oceanfront new construction to full-home renovations. It is the same approach we bring to every Golden Beach residence: understand how the family lives, then shape the architecture, interiors, and finishes around it." />
      <Cta />
      <ServicesSequence />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Luxury takes root."]}
        paragraphs={[
          "As a full-service luxury interior design firm, Sarvian Design Group has had the honor of creating spaces that balance the intimate scale of home with the dramatic scope of coastal living. Working with Golden Beach’s unique waterfront settings, we shape environments that feel both curated and deeply connected to their surroundings. Whether designing a complete home or thoughtfully transforming individual spaces, our approach is centered on clarity, intention, and a deep understanding of how light, material, and form shape daily life.",
          "The island-like atmosphere of Golden Beach creates a rare kind of privacy—one that invites a more intentional relationship between indoor and outdoor living. We approach each home with an understanding of its unique orientation to the water and sunlight. Our work balances the clean, modern forms that suit a coastal environment with a material palette that adds warmth and depth. Through considered layouts, custom built-ins, and a seamless connection between spaces, we create homes that feel both curated and deeply connected to their surroundings.",
          "For us, luxury interior design is not about ornamentation—it’s about creating an environment that feels intentional and true to the people who live there. It’s in the way a space invites you to pause, the way natural light moves through a room, and the feeling of being surrounded by materials that are both beautiful and honest. As a full-service interior design firm, we work closely with our clients from the earliest concept stages through final installation, ensuring that every detail supports the overall vision for the home.",
        ]}
      />
    </main>
  );
}
