import type { Metadata } from "next";
import Cta from "@/components/Cta";
import LocationProjects from "../_components/LocationProjects";
import LocationHero from "../_components/LocationHero";
import Link from "next/link";
import HoverUnderline from "@/components/ui/HoverUnderline";
import ServicesSequence from "../_components/LocationServices";
import { SERVICES } from "./_components/ServicesSequence";
import Testimonials from "@/components/Testimonials";
import LocationTopSection from "../_components/LocationTopSection";
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
      <LocationHero
        image={{
          src: "/services/residential-interior-design-16x9.jpg",
          alt: "Sarvian Design Group interior showcase",
          position: "top",
        }}
        eyebrow="Boca Raton Interior Design Firm"
        heading={["Finished", "not decorated."]}
        paragraph="The interior designers at Sarvian Design Group take on residential and commercial work across Boca Raton, drawing interiors that suit the coast without leaning on the shorthand everyone else is using for it."
      />
      <LocationTopSection
        eyebrow="Our Approach in Boca Raton"
        heading="Residential Interior Design in Boca Raton, FL"
        paragraph="A great deal of Boca is being rebuilt right now. Houses from the seventies and eighties are coming down, and what replaces them tends to arrive with the same white oak, the same shiplap, and the same soft blue-grey palette that every other new build on the street received. Our work here is to get past that default. We start with the site, the light, and how the family actually moves through the house, then draw the millwork, the ceilings, and the material palette specifically for it. The result still belongs to the coast. It just does not look like it came from the same catalog as the neighbors."
        image={{
          src: "/assets/palm-beach-architecture-proposal-street-view.jpg",
          alt: "Street view of a luxury South Florida residence designed by Sarvian Design Group",
          width: 1280,
          height: 800,
        }}
      />
      <LocationProjects
        eyebrow="Selected work"
        heading="Latest Projects"
        slugs={[
          "golden-dreams-golden-beach-fl",
          "aventura-modern-living-aventura-fl",
          "norwood-residence-oakhurst-new-jersey",
          "miami-river-miami-fl",
        ]}
      >
        <p>
          A selection of our residential and commercial interior design work,
          from ground-up new construction interiors and whole-home renovations
          to single rooms carried to the same standard of detail. It is the
          standard we bring to every Boca Raton project and to our{" "}
          <Link
            href="/locations/interior-designers-palm-beach-fl"
            className="group relative hover:text-accent transition-colors duration-300"
          >
            interior design work in Palm Beach
            <HoverUnderline className="text-accent" />
          </Link>{" "}
          just up the coast. Sarvian Design Group is{" "}
          <Link
            href="/locations/interior-designers-fort-lauderdale-fl"
            className="group relative hover:text-accent transition-colors duration-300"
          >
            a Fort Lauderdale interior design firm
            <HoverUnderline className="text-accent" />
          </Link>{" "}
          serving all of South Florida for 12 years.
        </p>
      </LocationProjects>
      <Cta />
      <ServicesSequence services={SERVICES} />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Designed for how", "Boca Raton lives."]}
        paragraphs={[
          "Boca Raton is in the middle of replacing itself. Houses from the seventies and eighties are coming down street by street, and what goes up in their place is often better built and no more distinctive, because the interior arrives as a package rather than a design. As a full-service luxury interior design firm, that is the gap we work in. We start with the site, the light, and how the family actually moves through the house, then draw the millwork, the ceilings, and the material palette for that specific set of conditions.",
          "Getting in early is what makes the difference. Ceiling heights, window placement, how rooms connect, and where the lighting lands are all free to change on paper and expensive to change once framing is up, so the residential interior is developed alongside the architecture rather than reconciled with it afterward. Living this close to the water also raises the standard on specification, since finishes have to hold up to salt air, strong light, and daily use and still look right years in. Thoughtful layouts, built-ins drawn for the exact wall they sit on, and rooms that hand off to one another naturally are what separate the best interior designers from the rest.",
          "The same standard carries into commercial work. As we practice it, luxury interior design has less to do with ornament than with making an environment honest about the people who use it, whether that is one family or a room full of guests. We stay close to our clients from the first concept conversation to the last day of installation, so every decision serves one vision and the studio that starts your project is the one standing in the room when it is finished.",
        ]}
      />
      <Why {...WHY} />
    </main>
  );
}
