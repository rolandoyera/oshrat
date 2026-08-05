import type { Metadata } from "next";
import Cta from "@/components/Cta";
import ServicesSequence from "../_components/LocationServices";
import { SERVICES } from "./_components/ServicesSequence";
import Testimonials from "@/components/Testimonials";
import { socialMeta } from "@/lib/seo";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";
import LocationTopSection from "../_components/LocationTopSection";
import { LocationEditorial } from "../_components/LocationEditorial";
import FaqSection from "@/components/FaqSection";
import { FAQS } from "./_components/Faqs";
import LocationProjects from "../_components/LocationProjects";
import LocationHero from "../_components/LocationHero";
import Link from "next/link";
import HoverUnderline from "@/components/ui/HoverUnderline";

const PATH = "/locations/interior-designers-golden-beach-fl";
const TITLE = "Interior Designers in Golden Beach, FL | Sarvian Design Group";
const DESCRIPTION =
  "Full-service luxury interior design firm in Golden Beach, FL. Interior and exterior design, renovations & new construction. Request a consultation.";

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
      <LocationHero
        image={{
          src: "/assets/onyx-master-bath-remodel-1920.webp",
          alt: "Sarvian Design Group Golden Beach showcase",
          position: "top",
        }}
        eyebrow="Golden Beach Interior Design Firm"
        heading={["A home equal", "to its address."]}
        paragraph="Blending striking architectural forms with thoughtfully curated
              interiors, Sarvian Design Group creates South Florida homes that
              unite nature and design into one harmonious experience."
      />

      <LocationTopSection
        eyebrow="Featured Projects"
        heading="Residential Interior Design in Golden Beach, FL"
        paragraph="Set on a quiet street in Golden Beach, this ground-up residence was designed as a single idea of architecture and landscape resolved together. Layered travertine volumes, bronze slat screens, and floor-to-ceiling glass open the home to the light and tropical canopy, while inside the same restrained palette continues in warm stone, natural wood, and softly diffused lighting."
        projectSlug="golden-dreams-golden-beach-fl"
        image={{
          src: "/projects/golden-beach-architecture-proposal-driveway.jpg",
          alt: "Golden Beach residence",
          width: 900,
          height: 400,
        }}
      />
      <LocationProjects
        eyebrow="Selected work"
        heading="Latest Projects near Golden Beach"
        slugs={[
          "aventura-modern-living-aventura-fl",
          "the-shul-bal-harbour-surfside-fl",
          "golden-dreams-golden-beach-fl",
          "miami-river-miami-fl",
        ]}
      >
        <p>
          A look at our most recent work across{" "}
          <Link
            href="/locations/interior-designers-miami-fl"
            className="group relative hover:text-accent transition-colors duration-300"
          >
            interior design in Miami
            <HoverUnderline className="text-accent" />
          </Link>
          , from oceanfront new construction to full-home renovations. It is the
          same approach we bring to every Golden Beach residence: understand how
          the family lives, then shape the architecture, interiors, and finishes
          around it.
        </p>
      </LocationProjects>
      <Cta />
      <ServicesSequence services={SERVICES} />
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
