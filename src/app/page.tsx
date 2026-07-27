import Hero from "@/components/Hero";

import TopSection from "./_components/TopSection";
import type { Metadata } from "next";
import { JsonLd, siteGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";
import OurApproachSection from "./_components/Approach";
import ServicesBridge from "@/app/_components/ServicesBridge";
import ProjectExamplesSection from "@/components/ProjectExamplesSection";
import Cta from "@/components/Cta";

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
    <>
      <JsonLd data={siteGraph()} />
      <Hero
        image="/slider/golden-beach-architecture-proposal-front-view.jpg"
        title="Golden Dreams"
        description="Sunlit luxury meets serene modern design"
        buttonText="Explore Now"
        buttonLink="/projects/golden-beach"
      />

      <section className="bg-cream-200 py-20 lg:py-48">
        <TopSection />
      </section>
      <section>
        <ProjectExamplesSection />
      </section>
      <section className="bg-cream-200 py-20 lg:py-48">
        <OurApproachSection />
      </section>
      <section className="bg-cream-200 py-20 lg:py-48">
        <ServicesBridge />
      </section>

      <Cta />
    </>
  );
}
