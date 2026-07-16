import H2 from "@/components/ui/H2";
import P from "@/components/ui/P";

/**
 * Fort Lauderdale editorial / SEO section
 * Placement: between <Testimonials /> (taupe-800) and the final CTA (cream-200).
 * Keyword coverage: "Fort Lauderdale interior designers", "interior designers
 * Fort Lauderdale, FL", "interior design consulting Fort Lauderdale",
 * "interior design Fort Lauderdale".
 */
export function FortLauderdaleEditorial() {
  return (
    <section className="bg-cream-200 py-24 lg:py-32">
      <div className="mx-auto px-6 xl:px-0 max-w-[1800px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left — eyebrow + heading */}
          <div className="lg:col-span-5">
            <P variant="eyebrow">Our Approach</P>
            <H2 className="mt-5">
              Designed for how
              <br />
              Fort Lauderdale lives.
            </H2>
          </div>

          {/* Right — editorial copy */}
          <div className="lg:col-span-7 space-y-8 flex flex-col gap-10">
            <P>
              Fort Lauderdale interior designers work in a particular kind of
              light &mdash; low, warm, and reflected off water most of the year.
              At Sarvian Design Group, we design for it. Our studio serves the
              residences that define the city&rsquo;s waterfront &mdash; Las
              Olas Isles, Harbor Beach, Rio Vista, Coral Ridge &mdash; with
              interiors built to hold their composure against that light:
              natural stone, warm neutrals, and furnishings selected piece by
              piece rather than pulled from a catalog. It&rsquo;s the difference
              between a home that photographs well and one that lives well, and
              it&rsquo;s why the interior designers Fort Lauderdale, FL
              homeowners ultimately choose tend to be found through the homes
              they&rsquo;ve already completed.
            </P>
            <P>
              Our interior design consulting in Fort Lauderdale begins before a
              single finish is selected. We start with how a home is actually
              used &mdash; where mornings happen, where guests gather, which
              rooms the breeze should reach &mdash; then carry the project from
              space planning and material palettes through procurement, custom
              furnishings, and installation. One studio, one point of
              accountability, from the first walkthrough to the day the art is
              hung.
            </P>
            <P>
              Interior design in Fort Lauderdale is too often reduced to a
              formula: white walls, blue accents, something nautical on a shelf.
              The city deserves better. Homes here are defined by their
              relationship to water and weather &mdash; deep terraces,
              Intracoastal views, rooms that open rather than close &mdash; and
              the interiors that succeed answer that architecture with
              restraint: layered texture, honest materials, a palette drawn from
              the landscape rather than a theme. That&rsquo;s the standard we
              hold every project to, whether it&rsquo;s a full renovation on the
              Isles or the furnishing of a new build in Harbor Beach.
            </P>
          </div>
        </div>
      </div>
    </section>
  );
}
