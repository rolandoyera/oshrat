import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import HoverUnderline from "@/components/ui/HoverUnderline";
import FeaturedProjects from "./_components/FeaturedProjects";
import Hero from "./_components/Hero";
import ServicesSequence from "../_components/LocationServices";
import { SERVICES } from "./_components/ServicesSequence";
import Testimonials from "@/components/Testimonials";
import { LocationEditorial } from "../_components/LocationEditorial";
import FaqSection from "@/components/FaqSection";
import { FAQS } from "./_components/Faqs";
import { socialMeta } from "@/lib/seo";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";
import Why from "@/components/Why";

const PATH = "/locations/interior-designers-fort-lauderdale-fl";
const TITLE =
  "Interior Designers in Fort Lauderdale, FL | Sarvian Design Group";
const DESCRIPTION =
  "Full-service luxury interior design firm in Fort Lauderdale, FL. Interiors, renovations & new construction on the water. Request a consultation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: PATH }),
};

// Featured project cards render Sanity content — keep them fresh.
export const revalidate = 60;

export default function Page() {
  return (
    <main>
      <JsonLd data={faqPageGraph(PATH, FAQS)} />
      <Hero
        image={{
          mobile: "/about/sarvian-design-group-oshrat-rothschild-600.webp",
          tablet: "/about/sarvian-design-group-oshrat-rothschild-960.webp",
          desktop: "/about/sarvian-design-group-oshrat-rothschild-2000.webp",
          alt: "Sarvian Design Group interior design firm in Fort Lauderdale, Florida",
        }}
        eyebrow="Interior Designers in Fort Lauderdale, Florida"
        heading={["A home equal", "to its address."]}
        paragraph="Led by Oshrat Rothschild, we're full-service interior designers in Fort Lauderdale, Florida, for luxury residential and commercial interiors, renovations, and new construction."
      />
      <FeaturedProjects
        // Hand-picked projects for this page — order here is display order.
        // Fort Lauderdale projects only: this page argues it is a Fort
        // Lauderdale studio, so an Aventura project undercut the point.
        slugs={[
          "elevated-primary-suite-fort-lauderdale-fl",
          "modern-marble-haven-fort-lauderdale-fl",
        ]}
        heading="Our Interior Design in Fort Lauderdale"
      />
      <ServicesSequence
        services={SERVICES}
        heading="What Our Fort Lauderdale Interior Designers Do"
      />

      <Testimonials />
      <Cta />
      <LocationEditorial
        heading={["Designed for how", "Fort Lauderdale lives."]}
        paragraphs={[
          <>
            Fort Lauderdale interior designers work in a particular kind of
            light, low and warm, reflected off water most of the year. At
            Sarvian Design Group, we design for it. Our studio serves the
            residences that define the city's waterfront in Harbor Beach, Rio
            Vista, Coral Ridge, and the isles our{" "}
            <Link
              href="/locations/interior-designers-las-olas-fl"
              className="group relative hover:text-accent transition-colors duration-300">
              interior designers in Las Olas
              <HoverUnderline className="text-accent" />
            </Link>{" "}
            know best, with interiors built to hold their composure against that
            light: natural stone, warm neutrals, and furnishings selected piece
            by piece rather than pulled from a catalog. It's the difference
            between a home that photographs well and one that lives well, and
            it's why we're amongst the best interior designers in Fort
            Lauderdale, Florida.
          </>,
          "Our interior design consulting in Fort Lauderdale begins before a single finish is selected. We start with how a home is actually used: where mornings happen, where guests gather, which rooms the breeze should reach. From there we carry the project from space planning and material palettes through procurement, custom furnishings, and installation. One studio, one point of accountability, from the first walkthrough to the day the art is hung.",
          "Interior design is too often reduced to a formula: white walls, blue accents, something nautical on a shelf. The city deserves better. Homes here are defined by their relationship to water and weather, by deep terraces, Intracoastal views, and rooms that open rather than close. The interiors that succeed answer that architecture with restraint: layered texture, honest materials, a palette drawn from the landscape rather than a theme. That's the standard we hold every high-end interior design project to, whether it's a full renovation on the Isles or the furnishing of a new build in Harbor Beach.",
        ]}
      />
      <FaqSection faqs={FAQS} />
      <Why
        subtitle="Why Choose Us"
        title="Amongst the Best Interior Designers in Fort Lauderdale"
        description="We don’t try to be the right fit for every interior design project. But when our approach matches what a client is looking for we’re known for delivering something that feels deeply intentional. We keep the big picture of the interior design project in view while managing the details that make the difference.">
        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">Tropical Modern, Built Bespoke.</h2>
          <p>
            Our point of view is Tropical Modern: warm wood against natural
            stone, rooms that open to water and light, interiors that stay calm
            in the strong South Florida sun. What keeps that vision clear is
            that we build it ourselves. Bespoke millwork and furnishings and
            bespoke lighting are drawn and detailed by our in-house engineers,
            so every piece in your Fort Lauderdale interior design project
            exists for your home and nowhere else.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">Designed for the Coast.</h2>
          <p>
            An interior design firm has to specify for salt air, humidity, and
            the low reflected light that comes off the water most of the year.
            We choose natural stone, hardwoods, textiles, and hardware that hold
            up to it, and we plan around impact glass, deep terraces, and
            hurricane-season delivery windows. It is the difference between
            luxury interior design that photographs well in March and a
            waterfront home in Las Olas Isles, Rio Vista, or Harbor Beach that
            still reads right in its fifth year.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">
            One Fort Lauderdale Interior Design Firm.
          </h2>
          <p>
            Most high-end interior design in Fort Lauderdale comes apart in the
            handoffs. We hold it together: furniture selection and procurement,
            custom millwork and built-ins, art and home decor, styling and
            staging through final installation, with living room, primary suite,
            kitchen, bath, and home office resolved as one home rather than six
            separate rooms. We coordinate directly with your architect and
            contractor across Broward County, and you keep a single point of
            accountability the whole way through.
          </p>
        </div>
      </Why>
    </main>
  );
}
