import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { JsonLd, siteGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";
import { COUNTIES } from "@/lib/locations";
import Cta from "@/components/Cta";

const TITLE = "Interior Design Locations | Fort Lauderdale, Miami & Palm Beach";
const DESCRIPTION =
  "Interior design across South Florida — Fort Lauderdale, Miami, Golden Beach, Bal Harbour, Surfside, Boca Raton, Palm Beach, and more. Choose a place to see the houses near you.";

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
                  We build across communities from Palm Beach to Miami —
                  waterfront moderns, courtyard houses, and quiet renovations.
                  Choose a place to see our work near you.
                </p>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Communities by county */}
        <section className="pb-24 lg:pb-32">
          <Container size="lg">
            {/* One column per county; stacked below lg. items-start keeps a
                short county column from stretching to the tallest one. */}
            <div className="grid gap-16 lg:grid-cols-3 lg:gap-8 lg:items-start">
              {COUNTIES.map(({ county, locations }) => (
                <ScrollReveal key={county} direction="up" threshold={0.1}>
                  <div className="flex flex-col px-3 pb-4 md:px-4">
                    <h2 className="eyebrow font-bold mb-2">{county}</h2>
                    <p className="text-[12px] uppercase tracking-[0.2em]">
                      {pad(locations.length)} communities
                    </p>
                  </div>
                  <hr className="etched-line" />
                  {locations.map((location) => {
                    rowIndex += 1;
                    const row = (
                      <>
                        <span className="eyebrow font-bold">
                          <span className="block">№</span>
                          {pad(rowIndex)}
                        </span>
                        <span>
                          <h2
                            className={`block mb-0 leading-4 text-2xl transition-colors group-hover:text-accent ${
                              location.href ? "" : "opacity-50"
                            }`}>
                            {location.name}
                          </h2>
                          <span className="mt-2 block max-w-sm text-sm">
                            {location.href
                              ? location.blurb
                              : "Page Coming Soon"}
                          </span>
                        </span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 justify-self-end text-foreground/60 transition-all duration-250 ease-[cubic-bezier(.6,.2,.1,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                          aria-hidden="true">
                          <path d="M5 19L19 5M19 5H8M19 5V16" />
                        </svg>
                      </>
                    );
                    const rowClasses =
                      "grid grid-cols-[2.5rem_1fr_1.25rem] items-center gap-4 px-3 py-6 md:px-4 md:py-4";
                    return (
                      <Fragment key={location.name}>
                        {location.href ? (
                          <Link
                            href={location.href}
                            className={`group transition duration-250 ease-[cubic-bezier(.6,.2,.1,1)] hover:translate-x-3 ${rowClasses}`}>
                            {row}
                          </Link>
                        ) : (
                          <div className={rowClasses}>{row}</div>
                        )}
                        <hr className="etched-line" />
                      </Fragment>
                    );
                  })}
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
        <Cta />
      </main>
    </>
  );
}
