import type { Metadata } from "next";
import Cta from "@/components/Cta";
import LocationProjects from "../_components/LocationProjects";
import Link from "next/link";
import HoverUnderline from "@/components/ui/HoverUnderline";
import LocationHero from "../_components/LocationHero";
import ServicesSequence from "../_components/LocationServices";
import { SERVICES } from "./_components/ServicesSequence";
import Testimonials from "@/components/Testimonials";
import LocationTopSection from "../_components/LocationTopSection";
import Why from "@/components/Why";
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
      <LocationHero
        image={{
          src: "/services/residential-interior-design-16x9.jpg",
          alt: "Sarvian Design Group interior showcase",
          position: "top",
        }}
        eyebrow="Palm Beach Interior Design Firm"
        heading={["A home equal", "to its address."]}
        paragraph="Sarvian Design Group is a luxury interior design firm working across Palm Beach, from Mediterranean revival estates to new oceanfront residences, drawing interiors measured against the island's long standard rather than this year's look."
      />
      <LocationTopSection
        eyebrow="Our Approach in Palm Beach"
        heading="Residential Interior Design in Palm Beach, FL"
        paragraph="Palm Beach rewards restraint and punishes anything that looks like it arrived in a hurry. Our work here starts with the architecture already standing, whether that is a Mizner-era house with plaster and pecky cypress or a new residence on the water, and the interior is drawn to belong to it rather than to a trend. Because so many houses on the island are lived in seasonally, we plan procurement and installation around the calendar, so a home is finished before the season rather than during it."
        image={{
          src: "/assets/palm-beach-architecture-proposal-street-view.jpg",
          alt: "Palm Beach Residence Architecture",
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
          A look at our residential and commercial interior design work across
          South Florida: new construction interiors, whole-home renovations,
          and single rooms finished to the island&apos;s standard. It is the
          level we bring to every Palm Beach project. The studio is run by{" "}
          <Link
            href="/locations/interior-designers-fort-lauderdale-fl"
            className="group relative hover:text-accent transition-colors duration-300"
          >
            luxury interior designers in Fort Lauderdale
            <HoverUnderline className="text-accent" />
          </Link>{" "}
          and has been designing across South Florida for 12 years.
        </p>
      </LocationProjects>
      <Cta />
      <ServicesSequence services={SERVICES} />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Designed for how", "Palm Beach lives."]}
        paragraphs={[
          "Palm Beach is an island with a long memory, and its interiors are judged against decades of them. As a full-service luxury interior design firm, we treat that as a discipline rather than a constraint. The architecture already on the lot sets the terms, whether it is Mediterranean revival with plaster, arches, and pecky cypress or a restrained new build facing the ocean, and the residential interior is drawn to belong to the house instead of arriving on top of it.",
          "Much of the island is lived in seasonally, and that changes how a project is run more than how it looks. Lead times, procurement, and installation are planned against the calendar so a house is complete before anyone arrives, not finished in pieces around them. It also raises the standard on materials: fabrics and finishes have to survive months of strong light and closed-up humidity and still look right the day the family walks back in. The best interior designers are separated from the rest by exactly these invisible logistics, and by rooms that flow into one another without a seam.",
          "Commercial work is held to the island's standard too. Luxury interior design, in our practice, is not a question of ornament; it is the discipline of making a space truthful about the people it serves, whether that is a family of four or a room of two hundred guests. Our clients keep the same team from the opening conversation to the final walkthrough, which is how the vision that won the commission is the one delivered at the end.",
        ]}
      />
      <Why
        subtitle="Why Sarvian Design Group"
        title="Top Interior Designers in Palm Beach, FL"
        description="Palm Beach has no shortage of decorators. What is harder to find is a firm that draws its own millwork, keeps its promises about the calendar, and answers for the finished rooms in person. That is the studio we run, across residential and commercial interiors, and it is why a first project on the island tends to become a second.">
        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">Built Around the Season.</h2>
          <p>
            On an island where many houses are occupied part of the year, the
            calendar is a design constraint rather than an afterthought. Custom
            pieces carry the longest lead times, so orders are placed early and
            sequenced against the season instead of the other way around. The
            goal is a single finished reveal: you arrive to a completed home,
            not to a punch list, a delivery schedule, and three rooms still
            under wraps. Getting that right takes the same attention as the
            design itself.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">The House Sets the Terms.</h2>
          <p>
            The best interior designers here don’t carry a signature look from
            one address to the next. A Mediterranean revival house with plaster
            walls, arched openings, and pecky cypress ceilings asks for
            something different than a restrained new residence built around
            glass and ocean light, and both deserve to be taken on their own
            terms. We work from the architecture outward, matching proportion,
            millwork profiles, and material weight to what is already standing,
            so a finished interior reads as though it were always meant to be
            there.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">One Chain of Custody.</h2>
          <p>
            A high-end interior passes through many specialist hands, and every
            pass is a chance for the idea to erode. We prevent that by keeping
            custody of the whole project: the plans, palettes, lighting, and
            renderings are made by the same people who then buy, build, style,
            and install, so the finished house holds together as one thought.
            As your interior design firm in Palm Beach, we manage your
            architect, contractor, and trades against the design intent, and
            the team that drew the first sketch is the team standing there when
            the house is handed back.
          </p>
        </div>
      </Why>
    </main>
  );
}
