"use client";

import Link from "next/link";
import Container from "./ui/Container";
import DoubleBorder from "./ui/DoubleBorder";
import { TextEffect } from "./motion-primitives/text-effect";

const REGIONS: { region: string; places: string[] }[] = [
  {
    region: "Broward",
    places: [
      "Fort Lauderdale",
      "Las Olas",
      "Weston",
      "Parkland",
      "Coral Ridge",
    ],
  },
  {
    region: "Palm Beach",
    places: [
      "Palm Beach",
      "Boca Raton",
      "Delray Beach",
      "Jupiter",
      "Highland Beach",
    ],
  },
  {
    region: "Miami-Dade",
    places: [
      "Miami",
      "Miami Beach",
      "Coral Gables",
      "Golden Beach",
      "Bal Harbour",
    ],
  },
  {
    region: "Beyond",
    places: ["Naples", "The Keys", "By referral", "Select projects"],
  },
];

// Places with a dedicated location page link to it from the list.
const PLACE_LINKS: Record<string, string> = {
  "Fort Lauderdale": "/locations/interior-designers-fort-lauderdale-fl",
};

export default function WhereWeWorkSection() {
  return (
    <section className="bg-radial from-taupe-800 to-taupe-900 py-24 text-cream-100 lg:py-44">
      <Container size="lg">
        <div className="max-w-2xl">
          <TextEffect
            as="p"
            per="char"
            preset="fade-in-blur"
            speedReveal={5}
            speedSegment={0.3}
            inView
            className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
            Where we work
          </TextEffect>
          <h2 className="mt-6 text-3xl font-normal tracking-tight text-balance text-cream-100 lg:text-5xl">
            <TextEffect
              as="span"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              inView
              className="inline">
              Serving Fort Lauderdale
            </TextEffect>{" "}
            <TextEffect
              as="span"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              inView
              delay={0.2}
              className="inline-block font-serif text-[1.4em] leading-none align-baseline text-accent">
              &amp;
            </TextEffect>{" "}
            <TextEffect
              as="span"
              preset="fade-in-blur"
              speedReveal={5}
              speedSegment={0.3}
              inView
              delay={0.3}
              className="inline">
              South Florida.
            </TextEffect>
          </h2>
          <TextEffect
            as="p"
            preset="fade-in-blur"
            speedReveal={5}
            speedSegment={0.3}
            delay={0.2}
            inView
            className="mt-6 text-cream-300">
            Based in Fort Lauderdale, the studio works across the three counties
            of South Florida — and on select projects beyond. If your home is
            nearby, we&apos;d like to see it.
          </TextEffect>
        </div>

        <div className="relative mt-16 grid grid-cols-2 gap-x-8 gap-y-12 pt-12 md:grid-cols-4 lg:mt-20">
          <DoubleBorder
            position="top"
            borderColor="bg-black/40"
            highlightColor="bg-white/15"
          />
          {REGIONS.map(({ region, places }, col) => (
            <div key={region}>
              <TextEffect
                as="p"
                per="char"
                preset="fade-in-blur"
                speedReveal={5}
                speedSegment={0.3}
                delay={col * 0.1}
                inView
                className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
                {region}
              </TextEffect>
              <ul className="mt-6 space-y-4">
                {places.map((place, row) => {
                  const href = PLACE_LINKS[place];
                  const effect = (
                    <TextEffect
                      as="span"
                      preset="fade-in-blur"
                      speedReveal={5}
                      speedSegment={0.3}
                      delay={col * 0.1 + (row + 1) * 0.08}
                      inView
                      className="text-lg text-cream-100">
                      {place}
                    </TextEffect>
                  );
                  return (
                    <li key={place}>
                      {href ? (
                        <Link
                          href={href}
                          className="hover:[&_span]:text-accent underline-offset-4 hover:underline decoration-accent">
                          {effect}
                        </Link>
                      ) : (
                        effect
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
