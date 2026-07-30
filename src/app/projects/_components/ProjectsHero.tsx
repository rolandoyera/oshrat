import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProjectsHero() {
  return (
    <section className="flex min-h-[40dvh] w-full items-center bg-cream-200 mt-24">
      <Container size="lg" className="w-full ">
        <div className="grid grid-cols-1 items-center gap-10 pt-12 lg:py-24 lg:grid-cols-12 lg:gap-12">
          <ScrollReveal
            topReveal
            direction="left"
            className="space-y-6 lg:space-y-10 lg:col-span-8">
            <h1 className="eyebrow">
              Our Featured Interior Design Projects — South Florida
            </h1>

            <h2 className="display">Recent Projects</h2>

            <p className="md:max-w-2xl">
              A portfolio of residences across Broward, Palm Beach, and
              Miami-Dade — waterfront estates, ground-up builds, and single-room
              transformations. Every project here began the same way: a
              conversation about how someone actually wants to live.
            </p>
          </ScrollReveal>

          <ScrollReveal topReveal direction="right" className="lg:col-span-4">
            <dl className="lg:pl-12 hidden lg:block">
              <dt className="eyebrow mb-2">Locations</dt>
              <dd className="text-xl">Miami to Palm Beach & Beyond</dd>
              <dt className="eyebrow mt-12 mb-2">Scope</dt>
              <dd className="text-xl">Interior Design in South Florida</dd>
              <dt className="eyebrow mt-12 mb-2">Featured</dt>
              <dd className="text-xl">Bespoke Furnishings | Custom Lighting</dd>
            </dl>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
