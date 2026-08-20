import type { Metadata } from "next";
import Cta from "@/components/Cta";
import Testimonials from "@/components/Testimonials";
import Hero from "../../locations/interior-designers-fort-lauderdale-fl/_components/Hero";
import LocationTopSection from "../../locations/_components/LocationTopSection";
import LocationProjects from "../../locations/_components/LocationProjects";
import LocationWhy from "./_components/LocationWhy";

/**
 * Ads-only landing page for the "Search | Broward Core" Google Ads campaign.
 * The slug stays geographic (the "professional address"); intent mirroring
 * for the near-me ad group lives in the title, H1, and hero copy, which all
 * say "near you". `?intent=` (set per keyword via keyword-level final URLs)
 * swaps the H1 to mirror the matched keyword; unknown or missing values fall
 * back to the default H1, so a bad param can never break the page.
 *
 * Deliberately noindex/nofollow (it overlaps the ranking Fort Lauderdale
 * location page) and deliberately absent from sitemap.ts. Do NOT disallow it
 * in robots.ts: AdsBot must stay able to crawl it or Quality Score tanks.
 */

const INTENT_H1: Record<string, string> = {
  designer: "Interior Designer Near You",
  designers: "Interior Designers Near You",
  firm: "Interior Design Firm Near You",
};

const DEFAULT_H1 = "Luxury Interior Designer Near You";

const TITLE =
  "Interior Designer Near You in Fort Lauderdale | Sarvian Design Group";
const DESCRIPTION =
  "Sarvian Design Group is a full-service luxury interior design firm near you in Fort Lauderdale, FL. Request a design consultation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const { intent } = await searchParams;
  const eyebrow = (intent && INTENT_H1[intent]) || DEFAULT_H1;

  return (
    <main>
      <Hero
        image={{
          mobile: "/about/sarvian-design-group-oshrat-rothschild-600.webp",
          tablet: "/about/sarvian-design-group-oshrat-rothschild-960.webp",
          desktop: "/about/sarvian-design-group-oshrat-rothschild-2000.webp",
          alt: "Sarvian Design Group, a luxury interior designer near you in Fort Lauderdale, Florida",
        }}
        eyebrow={eyebrow}
        heading={["Exceptional design,", "close to home."]}
        paragraph="Led by Oshrat Rothschild, Sarvian Design Group is a full-service luxury interior design firm in Fort Lauderdale, serving Victoria Park, Coral Ridge, Las Olas, and the waterfront neighborhoods in between."
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
      <LocationWhy
        title="Amongst the Best Interior Designers in Fort Lauderdale"
        description="We don’t try to be the right fit for every interior design project. But when our approach matches what a client is looking for we’re known for delivering something that feels deeply intentional. We keep the big picture of the interior design project in view while managing the details that make the difference.">
        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">Tropical Modern, Built Bespoke.</h2>
          <p>
            Our point of view is Tropical Modern: warm wood against natural
            stone, rooms that open to water and light, interiors that stay calm
            in the strong South Florida sun. What keeps that vision clear is
            that we build it ourselves. Bespoke millwork and furnishings and
            bespoke lighting are drawn and detailed by our in-house engineers,
            so every piece in your Fort Lauderdale interior design project
            exists for your home and nowhere else.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">Designed for the Coast.</h2>
          <p>
            An interior design firm has to specify for salt air, humidity, and
            the low reflected light that comes off the water most of the year.
            We choose natural stone, hardwoods, textiles, and hardware that hold
            up to it, and we plan around impact glass, deep terraces, and
            hurricane-season delivery windows. It is the difference between
            luxury interior design that photographs well in March and a
            waterfront home in Las Olas Isles, Rio Vista, or Harbor Beach that
            still reads right in its fifth year.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">
            One Fort Lauderdale Interior Design Firm.
          </h2>
          <p>
            Most high-end interior design in Fort Lauderdale comes apart in the
            handoffs. We hold it together: furniture selection and procurement,
            custom millwork and built-ins, art and home decor, styling and
            staging through final installation, with living room, primary suite,
            kitchen, bath, and home office resolved as one home rather than six
            separate rooms. We coordinate directly with your architect and
            contractor across Broward County, and you keep a single point of
            accountability the whole way through.
          </p>
        </div>
      </LocationWhy>
    </main>
  );
}
