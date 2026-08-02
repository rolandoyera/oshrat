import type { Metadata } from "next";
import Cta from "@/components/Cta";
import ProjectsSection from "@/components/ProjectsSection";
import Hero from "./_components/Hero";
import ServicesSequence from "../_components/ServicesSequence";
import { SERVICES } from "./_components/ServicesSequence";
import Testimonials from "@/components/Testimonials";
import TopSection from "./_components/TopSection";

// Pre-launch: keep this unfinished page out of search indexes. Remove when the
// page goes live (and add it to sitemap.ts + real metadata at the same time).
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main>
      <Hero />
      <TopSection />
      <ProjectsSection content="Our latest interior design projects in Palm Beach, Florida and its surroundings." />
      <Cta />
      <ServicesSequence services={SERVICES} />
      <Testimonials />
    </main>
  );
}
