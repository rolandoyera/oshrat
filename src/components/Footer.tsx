"use client";

import Link from "next/link";
import Container from "./ui/Container";
import DoubleBorder from "./ui/DoubleBorder";
import HoverUnderline from "./ui/HoverUnderline";
import InstagramIcon from "./icons/InstagramIcon";
import MailIcon from "./icons/MailIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { trackEvent } from "@/lib/gtag";
import { SITE } from "@/lib/site";
import SdgMonogram from "./navbar/SdgMonogram";
import { IoHeart } from "react-icons/io5";

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
      "Surfside",
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
  "Las Olas": "/locations/interior-designers-fort-lauderdale-fl",
  "Golden Beach": "/locations/interior-designers-golden-beach-fl",
  "Bal Harbour": "/locations/interior-designers-bal-harbour-fl",
  Surfside: "/locations/interior-designers-surfside-fl",
  "Palm Beach": "/locations/interior-designers-palm-beach-fl",
};

export default function Footer() {
  return (
    <footer className="bg-radial from-taupe-800 to-taupe-900 pt-24 text-cream-100 lg:pt-24">
      <Container size="lg">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-12">
          <div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <SdgMonogram className="h-auto w-32 fill-cream-300" />
              <p className="-mb-1 mt-2 tracking-wider font-medium text-cream-300">
                {SITE.name}
              </p>
              <p className="text-sm text-cream-300 text-center font-light tracking-wider">
                {SITE.slogan}
              </p>
              <div className="flex justify-center items-center gap-10 lg:mt-4">
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (opens in a new tab)"
                  className="text-cream-300 icon">
                  <InstagramIcon size={30} color="currentColor" />
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Send email to ${SITE.email} (opens in a new tab)`}
                  onClick={() =>
                    trackEvent("email_click", { link_location: "footer" })
                  }
                  className="text-cream-300 icon">
                  <MailIcon size={32} color="currentColor" />
                </a>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat on WhatsApp with ${SITE.whatsappDisplay} (opens in a new tab)`}
                  onClick={() =>
                    trackEvent("whatsapp_click", { link_location: "footer" })
                  }
                  className="text-cream-300 icon">
                  <WhatsAppIcon size={26} color="currentColor" />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-xl xl:max-w-3xl mt-12 lg:mt-0">
            <p className="eyebrow">Interior & Architecture design firm</p>
            <h3 className=" text-cream-100">
              Serving Fort Lauderdale <br />
              <span className="inline-block font-serif text-[1.4em] leading-none align-baseline text-accent">
                &amp;
              </span>{" "}
              South Florida.
            </h3>
            <p>
              Based in Fort Lauderdale, the studio works across the three
              counties of South Florida — and on select projects beyond. If your
              home is nearby, we&apos;d like to see it.
            </p>
          </div>
        </div>

        <div className="relative mt-12 grid grid-cols-2 gap-x-8 gap-y-12 pt-12 md:grid-cols-4">
          <DoubleBorder
            position="top"
            borderColor="bg-black/40"
            highlightColor="bg-white/15"
          />
          {REGIONS.map(({ region, places }) => (
            <div key={region}>
              <p className="eyebrow">{region}</p>
              <ul className="space-y-2">
                {places.map((place) => {
                  const href = PLACE_LINKS[place];
                  const effect = (
                    <p className="p text-cream-100 transition-colors group-hover:text-accent">
                      {place}
                    </p>
                  );
                  return (
                    <li key={place}>
                      {href ? (
                        <Link
                          href={href}
                          className="group relative inline-block hover:text-accent">
                          {/* Before the text so the p stays :last-child (not-last:mb-4) */}
                          <HoverUnderline className="text-accent" />
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
        <div className="relative mt-12">
          <DoubleBorder
            position="top"
            borderColor="bg-black/40"
            highlightColor="bg-white/15"
          />
        </div>

        <div className="py-6 text-[0.9rem] mx-auto w-full flex flex-col items-center gap-2 md:grid md:grid-cols-3 mt-6">
          <p className="text-cream-300 text-sm md:justify-self-start mb-0">
            © {new Date().getFullYear()} Sarvian Design Group.
          </p>
          <p className="text-cream-300 text-sm md:justify-self-center mb-0">
            <Link
              href="/privacy"
              className="group relative inline-block hover:text-accent">
              Privacy Policy
              <HoverUnderline className="text-accent" />
            </Link>{" "}
            <span aria-hidden="true" className="mx-1">
              ·
            </span>
            <Link
              href="/terms"
              className="group relative inline-block hover:text-accent">
              Terms of Use
              <HoverUnderline className="text-accent" />
            </Link>
          </p>
          <p className="text-cream-300 text-sm flex items-center gap-1 md:justify-self-end mb-0">
            Made with <IoHeart />
            <a
              className="group relative text-cream-300 hover:text-accent"
              href="https://www.lenisvisuals.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LENIS VISUALS website (opens in a new tab)">
              LENIS VISUALS
              <HoverUnderline />
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
