import Hero from "@/components/Hero";

import TopSection from "./_components/TopSection";
import type { Metadata } from "next";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";
import OurApproachSection from "./_components/Approach";
import ServicesBridge from "@/app/_components/ServicesBridge";
import Cta from "@/components/Cta";
import FaqSection from "@/components/FaqSection";
import { FAQS } from "./_components/Faqs";
import Why from "@/components/Why";
import ProjectsSectionHome from "./_components/ProjectsSectionHome";
import Link from "next/link";
import HoverUnderline from "@/components/ui/HoverUnderline";

const TITLE = "Interior Designers in Fort Lauderdale | Sarvian Design Group";
const DESCRIPTION =
  "Interior Designers in Fort Lauderdale serving Broward, Palm Beach, Miami-Dade & South Florida — interiors, renovations & new construction.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/" }),
};

export default function Home() {
  return (
    <main>
      <JsonLd data={faqPageGraph("/", FAQS)} />
      <Hero
        image="/slider/golden-beach-architecture-proposal-front-view.jpg"
        title="Golden Dreams"
        description="Sunlit luxury meets serene modern design"
        buttonText="Explore Now"
        buttonLink="/projects/golden-dreams-golden-beach-fl"
      />

      <section className="bg-cream-200 py-20 lg:py-48">
        <TopSection />
      </section>
      <section>
        <ProjectsSectionHome>
          <p className="mt-4">
            While our studio calls Fort Lauderdale home, our work extends across
            South Florida's most sought-after communities —{" "}
            <Link
              href="/locations/interior-designers-las-olas-fl"
              className="group relative hover:text-accent transition-colors duration-300">
              Las Olas
              <HoverUnderline className="text-accent" />
            </Link>
            , Rio Vista, and Coral Ridge locally, with projects reaching Boca
            Raton, Palm Beach,{" "}
            <Link
              href="/locations/interior-designers-golden-beach-fl"
              className="group relative hover:text-accent transition-colors duration-300">
              Golden Beach
              <HoverUnderline className="text-accent" />
            </Link>
            , Miami and beyond.
          </p>
        </ProjectsSectionHome>
      </section>
      <section className="bg-cream-200 py-20 lg:py-48">
        <OurApproachSection />
      </section>
      <section className="bg-cream-200 py-20 lg:py-48">
        <ServicesBridge />
      </section>

      <Cta />
      <FaqSection faqs={FAQS} />
      {/* Deliberately avoids process (Our Methodology covers that above) and
          the scope-and-handoff angles used on the location pages, so no
          section repeats another. */}
      <Why
        subtitle="Why Sarvian Design Group"
        title="An Interior Design Firm Chosen for How It Works"
        description="What we are chosen for is rarely a style. It is a way of working: restraint over ornament, decisions made early and drawn properly, and one design firm accountable from the first walkthrough to the day the art is hung.">
        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">No House Style.</h2>
          <p>
            We do not carry a signature look from one project to the next, and
            coastal does not mean nautical here. Each interior is drawn from
            what is already true about the home. Its architecture, orientation,
            the way light moves through it during the hours you are actually
            there and from how you intend to live in it. That is why our
            interior design projects do not look like one another, and makes us
            one of the best interior design firms in Fort Lauderdale, Florida.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">Drawn Before It Is Built.</h2>
          <p>
            Millwork drawings, lighting plans, elevations, and renderings are
            resolved before anything is ordered or fabricated. Every custom
            piece is specified down to the dimension, the material, and the
            hardware, then engineered in-house and made by partners we have
            worked with for years. The point is not paperwork. It is that what
            arrives on site is what was agreed to, and that the expensive
            surprises happen on paper instead of in your home.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">Start to Finish.</h2>
          <p>
            You are not introduced to a principal and then handed to someone
            else once the project is signed. The team that walks your space and
            shapes the concept is the team specifying finishes, coordinating
            with your architect and contractor, and standing in the room on
            installation day. One interior design firm, one point of
            accountability, and no gap between the design that was promised and
            the one that gets built.
          </p>
        </div>
      </Why>
    </main>
  );
}
