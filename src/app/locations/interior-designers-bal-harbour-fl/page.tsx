import type { Metadata } from "next";
import Cta from "@/components/Cta";
import LocationHero from "../_components/LocationHero";
import ServicesSequence from "../_components/LocationServices";
import Testimonials from "@/components/Testimonials";
import { socialMeta } from "@/lib/seo";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";
import LocationTopSection from "../_components/LocationTopSection";
import { LocationEditorial } from "../_components/LocationEditorial";
import FaqSection from "@/components/FaqSection";
import { FAQS } from "./_components/Faqs";
import { SERVICES } from "./_components/ServicesSequence";
import WhyBalHarbour from "../_components/seo/WhyBalHarbour";
import LocationProjects from "../_components/LocationProjects";
import Link from "next/link";
import HoverUnderline from "@/components/ui/HoverUnderline";

const PATH = "/locations/interior-designers-bal-harbour-fl";
const TITLE = "Interior Designers in Bal Harbour, FL | Sarvian Design Group";
const DESCRIPTION =
  "Full-service luxury interior design firm in Bal Harbour, FL. Residential and commercial interiors, renovations & new construction. Request a consultation.";

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
          src: "/assets/aventura-interior-design-5.webp",
          alt: "Sarvian Design Group Bal Harbour and Surfside showcase",
          blurKey: "/assets/aventura-interior-design-5.jpg",
        }}
        eyebrow="Bal Harbour Interior Design Firm"
        heading={["Finished", "not decorated."]}
        paragraph="From private residences to commercial and community spaces in Bal Harbour and across South Florida, Sarvian Design Group carries a project from space planning through custom millwork, materials, and final installation."
      />
      <LocationTopSection
        eyebrow="Featured Project"
        heading="Interior Design in Bal Harbour, FL"
        paragraph="In Bal Harbour, Sarvian Design Group is leading the renovation of The Shul, reimagining a space of daily gathering and reflection with a calmer design language. Curved walls in a textured, Jerusalem-stone-inspired finish wrap the main hall, framed by oak millwork and bronze that carries through every custom element — sculptural glass fixtures overhead, engraved bronze doors set in a bookmatched marble surround, and stained glass made for the room. Renovating a space already woven into a community's life asks for restraint. The result is reverent and genuinely new."
        projectSlug="the-shul-bal-harbour-surfside-fl"
      />
      <LocationProjects
        eyebrow="Selected work"
        heading="Latest Projects"
        slugs={[
          "golden-dreams-golden-beach-fl",
          "aventura-modern-living-aventura-fl",
          "the-shul-bal-harbour-surfside-fl",
          "miami-river-miami-fl",
        ]}
      >
        <p>
          A look at our most recent work from{" "}
          <Link
            href="/locations/interior-designers-miami-fl"
            className="group relative hover:text-accent transition-colors duration-300"
          >
            our interior designers in Miami
            <HoverUnderline className="text-accent" />
          </Link>
          , spanning oceanfront residences and full-home renovations to custom
          millwork, community and commercial spaces. It is the same approach we
          bring to every Bal Harbour project: understand how the space is
          actually used, then shape the design details around it.
        </p>
      </LocationProjects>
      <Cta />
      <ServicesSequence services={SERVICES} />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Designed for how", "Bal Harbour lives."]}
        paragraphs={[
          "As a full-service luxury interior design firm, Sarvian Design Group has had the honor of creating spaces that balance the intimate scale of home with the dramatic scope of coastal living. Much of Bal Harbour lives vertically, in residences where a wall of glass and the Atlantic beyond it are the first materials in the room. We design with that light rather than against it, using natural stone, warm neutrals, and furnishings selected piece by piece so an interior holds its composure from morning through late afternoon.",
          "Behind the towers, the bay side of Bal Harbour Village offers a quieter kind of privacy and a more direct relationship between indoor and outdoor living. We approach each residence with an understanding of its orientation to the water and the sun, balancing the clean, modern forms that suit a coastal environment with a material palette that adds warmth and depth. Through considered layouts, custom built-ins, and a seamless connection between spaces, we create homes that feel both curated and deeply connected to their surroundings.",
          "For us, luxury interior design is not about ornamentation—it’s about creating an environment that feels intentional and true to the people who use it. That standard holds whether the project is a private residence or the sanctuary we designed for The Shul of Bal Harbour, where custom bronze, stone, and millwork were drawn and specified down to the detail. As a full-service interior design firm, we work closely with our clients from the earliest concept stages through final installation, ensuring that every detail supports the overall vision.",
        ]}
      />
      <WhyBalHarbour />
    </main>
  );
}
