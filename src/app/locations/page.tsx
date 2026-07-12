import type { Metadata } from "next";
import { Fragment } from "react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectButton from "@/components/ui/ProjectButton";
import { JsonLd, siteGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";
import { ALL_LOCATIONS, COUNTIES, TOTAL_HOUSES } from "@/lib/locations";

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

const STATS = [
  { value: pad(TOTAL_HOUSES), label: "Houses" },
  { value: pad(ALL_LOCATIONS.length), label: "Communities" },
  { value: pad(COUNTIES.length), label: "Counties" },
];

export default function LocationsPage() {
  // Row numbering runs continuously across county groups (№ 01–07).
  let rowIndex = 0;

  return (
    <>
      <JsonLd data={siteGraph()} />

      {/* Intro */}
      <section className="bg-background pt-36 pb-16 lg:pt-48 lg:pb-24">
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
              <p className="max-w-md text-foreground/85 leading-relaxed">
                We build across seven communities from Palm Beach to Miami —
                waterfront moderns, courtyard houses, and quiet renovations.
                Choose a place to see the houses near you.
              </p>
              <dl className="flex gap-12 lg:gap-16">
                {STATS.map(({ value, label }) => (
                  <div key={label}>
                    <dd className="text-4xl font-normal tracking-tight lg:text-5xl">
                      {value}
                    </dd>
                    <dt className="mt-2 text-[11px] uppercase tracking-[0.2em] text-foreground/60">
                      {label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Communities by county */}
      <section className="bg-background pb-24 lg:pb-32">
        <Container size="lg">
          {COUNTIES.map(({ county, locations }) => (
            <ScrollReveal
              key={county}
              direction="up"
              threshold={0.1}
              className="mt-16 first:mt-0 lg:mt-20"
            >
              <div className="flex items-baseline justify-between px-3 pb-4 md:px-4">
                <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
                  {county}
                </h2>
                <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">
                  {pad(locations.length)} communities
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
                        aria-hidden="true"
                      >
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
      <section className="bg-radial from-taupe-800 to-taupe-900 py-24 text-cream-100 lg:py-36">
        <Container size="lg">
          <ScrollReveal direction="up" threshold={0.3}>
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
                  A place not listed
                </p>
                <h2 className="mt-6 max-w-2xl text-3xl font-normal tracking-tight text-balance text-cream-100 lg:text-5xl">
                  We work across South Florida. Tell us about the house.
                </h2>
              </div>
              <ProjectButton
                location="locations_cta"
                formSource="locations"
                className="shrink-0"
              >
                Begin a project
              </ProjectButton>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
