import type { Metadata } from "next";
import Cta from "@/components/Cta";
import Testimonials from "@/components/Testimonials";
import Hero from "../../locations/interior-designers-fort-lauderdale-fl/_components/Hero";
import LocationTopSection from "../../locations/_components/LocationTopSection";
import LocationProjects from "../../locations/_components/LocationProjects";

/**
 * Ads-only landing page for the "Search | Broward Core" Google Ads campaign.
 * The slug stays geographic (the "professional address"); intent mirroring
 * for the near-me ad group lives in the title, H1, and hero copy, which all
 * say "near you". Finer intent variants (?intent=) come later.
 *
 * Deliberately noindex/nofollow (it overlaps the ranking Fort Lauderdale
 * location page) and deliberately absent from sitemap.ts. Do NOT disallow it
 * in robots.ts: AdsBot must stay able to crawl it or Quality Score tanks.
 */

const TITLE =
  "Interior Designer Near You in Fort Lauderdale | Sarvian Design Group";
const DESCRIPTION =
  "Sarvian Design Group is a full-service luxury interior design firm near you in Fort Lauderdale, FL. Request a design consultation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main>
      <Hero
        image={{
          mobile: "/about/sarvian-design-group-oshrat-rothschild-600.webp",
          tablet: "/about/sarvian-design-group-oshrat-rothschild-960.webp",
          desktop: "/about/sarvian-design-group-oshrat-rothschild-2000.webp",
          alt: "Sarvian Design Group, a luxury interior designer near you in Fort Lauderdale, Florida",
        }}
        eyebrow="Luxury Interior Designer Near You"
        heading={["Exceptional design,", "close to home."]}
        paragraph="Led by Oshrat Rothschild, Sarvian Design Group is a full-service luxury interior design firm minutes from you in Fort Lauderdale, serving Victoria Park, Coral Ridge, Las Olas, and the waterfront neighborhoods in between."
      />
      <LocationTopSection
        eyebrow="Featured Project"
        heading="Our Interior Designs Near You"
        paragraph="A primary bath completed in Fort Lauderdale, likely minutes from where you are searching. Calacatta marble runs unbroken across the walls, the shower, and the vanity so the room reads as carved from a single block, while walnut cabinetry and brushed gold hardware keep all that stone feeling warm. Working with an interior designer near you means this level of detail gets managed in person: weekly site visits, materials reviewed in daylight, and decisions made in the room instead of over email."
        projectSlug="modern-marble-haven-fort-lauderdale-fl"
      />
      <LocationProjects
        eyebrow="Selected work"
        heading="Our Recent Work"
        slugs={[
          "elevated-primary-suite-fort-lauderdale-fl",
          "modern-marble-haven-fort-lauderdale-fl",
          "aventura-modern-living-aventura-fl",
          "the-shul-bal-harbour-surfside-fl",
        ]}>
        <p>
          A selection of the work behind our interior design firm in Fort
          Lauderdale, from full-home renovations and new construction interiors
          to single rooms drawn to the same level of detail. Las Olas is one of
          the neighborhoods we return to most.
        </p>
      </LocationProjects>
      <Testimonials />
      <Cta />
    </main>
  );
}
