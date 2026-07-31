import Cta from "@/components/Cta";
import ProjectsSection from "@/components/ProjectsSection";
import Hero from "./_components/Hero";
import ServicesSequence from "../interior-designers-fort-lauderdale-fl/_components/ServicesSequence";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return (
    <main>
      <Hero />
      <ProjectsSection content="Our latest interior design projects in Palm Beach, Florida and its surroundings." />
      <Cta />
      <ServicesSequence />
      <Testimonials />
    </main>
  );
}
