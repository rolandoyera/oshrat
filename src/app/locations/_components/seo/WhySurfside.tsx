import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhySurfside() {
  return (
    <section className="bg-cream-200 py-24 lg:py-32">
      <Container className="w-full">
        <ScrollReveal delay={250} direction="down">
          <p className="eyebrow mb-4 text-center">Why Sarvian Design Group</p>
          <h2 className="max-w-2xl text-center mx-auto mb-0">
            One Interior Design Firm in Surfside for Every Scope
          </h2>
          <p className="max-w-4xl mx-auto mt-10 mb-0 text-center">
            We&rsquo;re not the right interior designers for every project, and
            we don&rsquo;t pretend to be. But when a client&rsquo;s ambitions
            line up with the way we work, the result is a space that feels
            considered down to its smallest decision. An oceanfront apartment, a
            family home renovation, new construction shaped with your architect,
            or a community landmark like The Shul on Collins Avenue — one team
            of interior designers carries each of them from layout and finishes
            through procurement, installation, and the final styling pass.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={250} direction="up">
          <div className="grid md:grid-cols-3 gap-10 mt-20 lg:mt-40">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold h3">Every Scope, Same Process.</h2>
              <p>
                No two projects arrive the same size, and Surfside proves it: a
                condominium overlooking the Atlantic, a house on a quiet street
                between the beach and the bay, a single room on a deadline, or a
                sanctuary serving hundreds of families. Each one runs through
                the same process, scaled to fit its scope. A kitchen project
                doesn&rsquo;t drag a whole-home engagement behind it, and a
                smaller room count never buys a thinner version of the
                studio&rsquo;s attention. Every engagement begins the same way —
                with how the space is actually used — and the design works
                outward from there.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-semibold h3">What Nobody Photographs.</h2>
              <p>
                Great interiors are decided in the parts that never make the
                photo: cabinetry aligned to the sightline it was drawn for,
                stone selected slab by slab, task lighting located before the
                ceiling closes, custom pieces detailed to the millimeter and
                built by fabricators we&rsquo;ve trusted for years. Our kitchen,
                bath, and millwork drawings are specified at that depth because
                a design that only resolves in a rendering isn&rsquo;t finished
                work. It&rsquo;s also why our rooms hold up on an ordinary
                Tuesday morning, not just on photography day.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-semibold h3">One Interior Design Firm.</h2>
              <p>
                Where high-end projects usually fail is in the handoffs between
                specialists. We keep the whole chain in one studio: space
                planning, finish palettes, lighting plans, and 3D renderings,
                then procurement, custom built-ins, art, styling, and
                installation — so the living room, primary suite, kitchen, and
                bath resolve as one residence instead of four disconnected
                rooms. As your interior design firm in Surfside, we coordinate
                with your architect, contractor, building association, and
                trades to protect the design intent on site. One team, one point
                of accountability, from first walkthrough to the day the art
                goes up.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
