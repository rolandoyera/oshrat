import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyAventura() {
  return (
    <section className="bg-cream-200 py-24 lg:py-32">
      <Container className="w-full">
        <ScrollReveal delay={250} direction="down">
          <p className="eyebrow mb-4 text-center">Why Sarvian Design Group</p>
          <h2 className="max-w-2xl text-center mx-auto mb-0">
            One Interior Design Firm in Aventura for Every Scope
          </h2>
          <p className="max-w-4xl mx-auto mt-10 mb-0 text-center">
            Not every Aventura interior design project needs a firm like ours,
            and we would rather say so than try to be everything to everyone.
            Where we earn our keep is work that has to be exact: a tower
            residence over the Intracoastal, two units becoming one, a
            renovation that has to clear a building board, or a commercial
            space finished with residential care. One team of interior
            designers carries it from first layout through procurement and
            installation, so the promise made in the drawings is the one you
            move into.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={250} direction="up">
          <div className="grid md:grid-cols-3 gap-10 mt-20 lg:mt-40">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold h3">Fluent in Buildings.</h2>
              <p>
                Interior design in Aventura means working inside towers that
                have their own rules. Renovation packets, board sign-off,
                certificates of insurance, elevator reservations, and quiet
                hours all shape what a schedule can honestly promise. We fold
                the building’s requirements into the plan from day one and keep
                the association informed at every step, so approvals become a
                stage of the project rather than the thing that stalls it.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-semibold h3">Beyond Developer Finishes.</h2>
              <p>
                New towers here hand over residences in developer condition:
                bare ceilings, stub-outs, and an options list that makes every
                unit look like its neighbors. That is our favorite starting
                point. Our interior designers plan floors, ceiling details,
                lighting, millwork, and the kitchen as one composition before
                the first trade arrives, and the difference between a home
                designed that way and one upgraded option by option is visible
                from the front door.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-semibold h3">Accountable to the End.</h2>
              <p>
                Luxury interior design usually unravels where responsibility
                changes hands. Ours doesn’t change hands. Space planning,
                finish palettes, lighting, custom furnishings, art, and styling
                stay inside one studio, and the interior designers who drew
                your Aventura residence are the ones checking the finished
                rooms against those drawings when the last piece is set. Your
                architect, contractor, and association deal with one voice for
                the entire project, and so do you.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
