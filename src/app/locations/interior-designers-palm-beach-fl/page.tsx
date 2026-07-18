import type { Metadata } from "next";
import LocationLanding, {
  type LocationContent,
} from "../_components/LocationLanding";
import { buildLocationFaqs } from "../_components/location-faqs";
import { socialMeta } from "@/lib/seo";

const PATH = "/locations/interior-designers-palm-beach-fl";
const TITLE = "Interior Designers in Palm Beach, FL | Sarvian Design Group";
const DESCRIPTION =
  "Full-service luxury interior design studio serving Palm Beach, FL — interiors, renovations & new construction. Request a consultation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: PATH }),
};

const CONTENT: LocationContent = {
  path: PATH,
  hero: {
    eyebrow: "Interior Designers in Palm Beach, Florida",
    paragraph:
      "A full-service studio for luxury residential and commercial interiors, renovations, and new construction across Palm Beach, Florida.",
    image: {
      mobile: "/about/sarvian-design-group-oshrat-rothschild-600.webp",
      tablet: "/about/sarvian-design-group-oshrat-rothschild-960.webp",
      desktop: "/about/sarvian-design-group-oshrat-rothschild-2000.webp",
      alt: "Sarvian Design Group interior design firm in Fort Lauderdale, Florida",
    },
  },
  featuredProjects: {
    // Hand-picked projects for this page — order here is display order.
    slugs: [
      "elevated-primary-suite-fort-lauderdale-fl",
      "modern-marble-haven-fort-lauderdale-fl",
      "aventura-modern-living-aventura-fl",
    ],
    heading: "Recent Projects",
    description:
      "Explore a selection of our recent work, where thoughtful space planning, refined materials, and custom details come together to create homes that feel distinctive, cohesive, and personal.",
  },
  editorial: {
    heading: ["Designed for how", "Palm Beach lives."],
    paragraphs: [
      "Fort Lauderdale interior designers work in a particular kind of light — low, warm, and reflected off water most of the year. At Sarvian Design Group, we design for it. Our studio serves the residences that define the city's waterfront — Las Olas Isles, Harbor Beach, Rio Vista, Coral Ridge — with interiors built to hold their composure against that light: natural stone, warm neutrals, and furnishings selected piece by piece rather than pulled from a catalog. It's the difference between a home that photographs well and one that lives well, and it's why the interior designers Fort Lauderdale, FL homeowners ultimately choose tend to be found through the homes they've already completed.",
      "Our interior design consulting in Fort Lauderdale begins before a single finish is selected. We start with how a home is actually used — where mornings happen, where guests gather, which rooms the breeze should reach — then carry the project from space planning and material palettes through procurement, custom furnishings, and installation. One studio, one point of accountability, from the first walkthrough to the day the art is hung.",
      "Interior design in Fort Lauderdale is too often reduced to a formula: white walls, blue accents, something nautical on a shelf. The city deserves better. Homes here are defined by their relationship to water and weather — deep terraces, Intracoastal views, rooms that open rather than close — and the interiors that succeed answer that architecture with restraint: layered texture, honest materials, a palette drawn from the landscape rather than a theme. That's the standard we hold every high-end interior design project to, whether it's a full renovation on the Isles or the furnishing of a new build in Harbor Beach.",
    ],
  },
  faqs: buildLocationFaqs({
    city: "Fort Lauderdale",
    neighborhoodsAnswer:
      "Most of our Fort Lauderdale interior design work is on and around the water — Las Olas Isles, Harbor Beach, Rio Vista, Coral Ridge, and the Intracoastal corridor — along with projects across Broward County and South Florida, from Aventura to Bal Harbour.",
  }),
  cta: {
    location: "fort_lauderdale_cta",
    formSource: "fort-lauderdale",
  },
};

// Featured project cards render Sanity content — keep them fresh.
export const revalidate = 60;

export default function Page() {
  return <LocationLanding content={CONTENT} />;
}
