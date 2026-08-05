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
      <LocationHero
        image={{
          src: "/services/residential-interior-design-16x9.jpg",
          alt: "Sarvian Design Group interior showcase",
          position: "top",
        }}
        eyebrow="Palm Beach Gardens Interior Design Firm"
        heading={["A home equal", "to its address."]}
        paragraph="Sarvian Design Group is a full-service interior design firm working across Palm Beach Gardens on residential and commercial projects, from a single reworked room to a house drawn alongside its architect."
      />
      <LocationTopSection
        eyebrow="Our Approach in Palm Beach Gardens"
        heading="Residential Interior Design in Palm Beach Gardens, FL"
        paragraph="Most houses in Palm Beach Gardens started from a builder's plan, which means the shell is generous and the interior is anonymous. Our work here usually begins by correcting that: reworking the layout, replacing stock cabinetry and thin trim with drawn millwork, and bringing tall volumes and long sightlines under control so the rooms feel considered rather than merely large. In club communities like PGA National, BallenIsles, and Old Palm, we plan around architectural review from the first meeting so approvals land on schedule instead of stalling the job."
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
          from full-home renovations and new construction interiors to single
          rooms drawn to the same level of detail. It is the standard we bring
          to every Palm Beach Gardens project and to our{" "}
          <Link
            href="/locations/interior-designers-palm-beach-fl"
            className="group relative hover:text-accent transition-colors duration-300"
          >
            interior design in Palm Beach
            <HoverUnderline className="text-accent" />
          </Link>{" "}
          on the island itself. As{" "}
          <Link
            href="/locations/interior-designers-fort-lauderdale-fl"
            className="group relative hover:text-accent transition-colors duration-300"
          >
            Fort Lauderdale interior designers
            <HoverUnderline className="text-accent" />
          </Link>
          , we have been working across South Florida for 12 years.
        </p>
      </LocationProjects>
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
