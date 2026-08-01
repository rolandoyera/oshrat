import type { Metadata } from "next";
import { Fragment } from "react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { JsonLd, siteGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";
import { COUNTIES } from "@/lib/locations";
import Cta from "@/components/Cta";

const TITLE = "Interior Design Locations | Fort Lauderdale, Miami & Palm Beach";
const DESCRIPTION =
  "Interior design across seven South Florida communities — Fort Lauderdale, Weston, Parkland, Miami, Coral Gables, Boca Raton, and Palm Beach. Choose a place to see the houses near you.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/locations" },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/locations" }),
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function LocationsPage() {
  // Row numbering runs continuously across county groups (№ 01–07).
  let rowIndex = 0;

  return (
    <>
      <JsonLd data={siteGraph()} />

      <main className="bg-cream-200">
        {/* Intro */}
        <section className="pt-36 pb-16 lg:pt-48 lg:pb-24">
          <Container size="lg">
            <ScrollReveal direction="up" threshold={0.3}>
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
                Where we work — South Florida
              </p>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,1.23rem+5.11vw,4.5rem)] font-normal tracking-tight leading-[1.05]">
                South Florida,
                <span className="block">house by house.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150} threshold={0.3}>
              <hr className="etched-line mt-14 lg:mt-20" />
              <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                <p className="max-w-lg text-foreground/85 leading-relaxed">
                  We build across seven communities from Palm Beach to Miami —
                  waterfront moderns, courtyard houses, and quiet renovations.
                  Choose a place to see the houses near you.
                </p>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Communities by county */}
        <section className="pb-24 lg:pb-32">
          <Container size="lg">
            {COUNTIES.map(({ county, locations }) => (
              <ScrollReveal
                key={county}
                direction="up"
                threshold={0.1}
                className="mt-16 first:mt-0 lg:mt-20">
                <div className="flex items-baseline justify-between px-3 pb-4 md:px-4">
                  <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
                    {county}
                  </h2>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">
                    {pad(locations.length)} counties
                  </p>
                </div>
                <hr className="etched-line" />
                {locations.map((location) => {
                  rowIndex += 1;
                  return (
                    <Fragment key={location.slug}>
                      <div className="grid grid-cols-[2.5rem_1fr_1.25rem] items-center gap-4 px-3 py-6 md:grid-cols-[3.5rem_1fr_auto_auto_1.5rem] md:gap-8 md:px-4 md:py-8">
                        <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
                          № {pad(rowIndex)}
                        </span>
                        <span>
                          <span className="block text-2xl font-normal leading-tight tracking-tight text-foreground lg:text-3xl lg:leading-9">
                            {location.name}
                          </span>
                          <span className="mt-2 block max-w-sm text-sm text-foreground/70">
                            {location.blurb}
                          </span>
                          <span className="mt-3 block text-[11px] uppercase tracking-[0.2em] text-accent md:hidden">
                            {location.materials.join(" · ")}
                          </span>
                        </span>
                        <span className="hidden whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-accent md:block">
                          {location.materials.join(" · ")}
                        </span>
                        <span className="hidden whitespace-nowrap text-sm text-foreground/70 md:block">
                          {location.houses} houses
                        </span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 justify-self-end text-foreground/60"
                          aria-hidden="true">
                          <path d="M5 19L19 5M19 5H8M19 5V16" />
                        </svg>
                      </div>
                      <hr className="etched-line" />
                    </Fragment>
                  );
                })}
              </ScrollReveal>
            ))}
          </Container>
        </section>

        {/* A place not listed */}
        <Cta />
      </main>
    </>
  );
}
