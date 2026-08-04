import InstagramIcon from "@/components/icons/InstagramIcon";
import MailIcon from "@/components/icons/MailIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ArrowButton from "@/components/ui/ArrowButton";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { SITE } from "@/lib/site";

const COLOR_GROUPS = [
  {
    name: "Cream",
    swatches: [
      { label: "Cream 100", bgClass: "bg-cream-100" },
      { label: "Cream 200", bgClass: "bg-cream-200" },
      { label: "Cream 300", bgClass: "bg-cream-300" },
    ],
  },
  {
    name: "Taupe",
    swatches: [
      { label: "Taupe 600", bgClass: "bg-taupe-600" },
      { label: "Taupe 700", bgClass: "bg-taupe-700" },
      { label: "Taupe 800", bgClass: "bg-taupe-800" },
      { label: "Taupe 900", bgClass: "bg-taupe-900" },
    ],
  },
  {
    name: "Gold",
    swatches: [{ label: "Accent 400", bgClass: "bg-accent" }],
  },
];

export default function ThemePage() {
  return (
    <main className="bg-white pb-60">
      <div className="h-24"></div>

      {/* Typography */}
      <Container className="pt-30 flex flex-col gap-6">
        <h3 className="mb-16">Typography</h3>
        <div className="flex gap-8 mb-16">
          <div className="w-40 shrink-0">
            <h4>Typeface</h4>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm mb-1!">
              Font:Montserrat • Color:Taupe 700
            </p>
            <p className="uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>1234567890</p>
          </div>
        </div>

        <div className="flex gap-8 mb-16">
          <div className="w-40 shrink-0">
            <h4>Paragraphs</h4>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm mb-1!">
              Size:22px • Weight:300 (light) • Line Height: 1.55
            </p>
            <p className="w-[60%]">
              Sarvian designs houses, hotels, and the occasional restaurant. Six
              projects a year. Materials first.
            </p>
          </div>
        </div>

        <div className="flex gap-8 mb-10">
          <div className="w-40 shrink-0">
            <h4>Headings</h4>
          </div>

          <div className="flex flex-col gap-4 mt-1">
            <p className="font-mono text-sm mb-1!">
              Heading 1 • Size:72px • Weight:400 (regular)
            </p>
            <h1 className="w-[70%]">
              We design houses for people that live in them.
            </h1>
          </div>
        </div>

        <div className="flex gap-8 mb-10">
          <div className="w-40 shrink-0"></div>

          <div className="flex flex-col gap-4 mt-1">
            <p className="font-mono text-sm mb-1!">
              Heading 2 • Size:48px • Weight:400 (regular)
            </p>
            <h2 className="w-[70%]">
              We design houses for people that live in them.
            </h2>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-40 shrink-0"></div>
          <div className="flex flex-col gap-4 mt-1">
            <p className="font-mono text-sm mb-1!">
              Heading 3 • Size:36px • Weight:400 (regular)
            </p>
            <h3 className="w-[70%]">
              We design houses for people that live in them.
            </h3>
          </div>
        </div>
      </Container>

      <div className="h-px bg-border/60 w-full my-40 max-w-450 mx-auto"></div>

      {/* Colors */}
      <Container className="flex flex-col gap-6 max-w-450">
        <h3 className="mb-16">Colors</h3>
        {COLOR_GROUPS.map((group) => (
          <div key={group.name} className="flex gap-8 mb-16">
            <div className="w-40 shrink-0">
              <h4>{group.name}</h4>
            </div>
            {group.swatches.map((swatch) => (
              <div key={swatch.label} className="w-50 h-50">
                <div
                  className={`${swatch.bgClass} w-full h-full rounded shadow`}
                ></div>
                <p className="text-sm font-mono">{swatch.label}</p>
              </div>
            ))}
          </div>
        ))}
      </Container>

      <div className="h-px bg-border/60 w-full my-40 max-w-450 mx-auto"></div>

      {/* Color Usage  */}
      <Container className="flex flex-col gap-6 max-w-450">
        <h3 className="mb-16">Color Usage</h3>

        {/*Surfaces*/}
        <div className="flex gap-8 mb-26">
          <div className="w-40 shrink-0">
            <h4>Surfaces</h4>
          </div>
          <div className="w-1/2 h-100">
            <div className="bg-cream-100 w-full h-full rounded p-2 shadow">
              <p className="text-center mb-12">Site Background</p>
              <div className="flex flex-col gap-2 px-6">
                <h3 className="mb-4">
                  Architectural & <br />
                  Interior Design Firm
                </h3>

                <p>
                  We shape spaces where life unfolds. Blending architecture,
                  interiors, and landscape, we craft environments that reflect
                  purpose, enhance well-being, and inspire connection.
                </p>
              </div>
            </div>
            <p className="text-sm font-mono">Cream 100</p>
          </div>
          <div className="w-1/2 h-100">
            <div className="bg-cream-200 w-full h-full rounded p-2 shadow">
              <p className="text-center mb-12">Cards</p>
              <div className="flex flex-col gap-2 px-6">
                <h3 className="-mb-2">The Shul- Bal Harbour</h3>

                <p className="mb-12">Bal Harbour, FL</p>
                <div className="flex justify-between pb-2 relative">
                  <div className="absolute left-0 right-0 bottom-0 h-px bg-border/40" />
                  <div className="absolute left-0 right-0 -bottom-px h-px bg-white" />
                  <span className="text-[16px] font-medium font-mono">
                    Firm
                  </span>
                  <span className="text-[16px] font-mono">
                    Sarvian Design Group
                  </span>
                </div>

                <div className="flex justify-between pb-2 relative">
                  <div className="absolute left-0 right-0 bottom-0 h-px bg-border/40" />
                  <div className="absolute left-0 right-0 -bottom-px h-px bg-white" />
                  <span className="text-[16px] font-medium font-mono">
                    Type
                  </span>
                  <span className="text-[16px] font-mono">Residential</span>
                </div>
              </div>
            </div>
            <p className="text-sm font-mono">Cream 200</p>
          </div>
        </div>

        {/*Backgrounds*/}
        <div className="flex gap-8 mb-26">
          <div className="w-40 shrink-0">
            <h4>Backgrounds</h4>
          </div>

          <div className="w-1/2 h-50">
            <div className="bg-linear-to-b from-taupe-900 to-taupe-800 w-full h-full rounded p-2 shadow">
              <p className="text-center mb-12 text-cream-300">Navbar</p>
              <div className="flex flex-col gap-2 px-6">
                <Image
                  src="/assets/logo_sdg-horizontal.svg"
                  alt="Sarvian Design Group"
                  loading="eager"
                  width={0}
                  height={0}
                  sizes="200px"
                  className="brightness-0 invert"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                  priority
                />
              </div>
            </div>
            <p className="text-sm font-mono">Gradient Taupe 900 to 800</p>
          </div>
          <div className="w-1/2 h-100">
            <div className="bg-linear-to-b from-taupe-800/95 to-taupe-900 w-full h-full rounded p-2 shadow">
              <p className="text-center mb-12 text-cream-300">Footer</p>
              <div className="flex flex-col gap-2 px-6">
                <Image
                  className="mx-auto brightness-0 invert"
                  src="/logo.png"
                  alt="Sarvian Design Group"
                  width={0}
                  height={0}
                  sizes="200px"
                  quality={90}
                  style={{ width: "200px", height: "auto" }}
                />
                <p className="mt-3 text-sm text-cream-300 text-center">
                  Architecture and interior design firm.
                </p>

                <div className="flex justify-center items-center gap-10 mt-4">
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram (opens in a new tab)"
                    className="text-cream-300 flex items-center justify-center w-7.5 h-7.5"
                  >
                    <InstagramIcon size={30} color="currentColor" />
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Send email to ${SITE.email} (opens in a new tab)`}
                    className="text-cream-300 flex items-center justify-center w-8 h-8"
                  >
                    <MailIcon size={32} color="currentColor" />
                  </a>
                  <a
                    href={SITE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat on WhatsApp with ${SITE.whatsappDisplay} (opens in a new tab)`}
                    className="text-cream-300 flex items-center justify-center w-7.5 h-7.5"
                  >
                    <WhatsAppIcon size={26} color="currentColor" />
                  </a>
                </div>
              </div>
            </div>
            <p className="text-sm font-mono">Gradient Taupe 800 to 900</p>
          </div>
        </div>

        {/*Buttons*/}
        <div className="flex gap-8 mb-26">
          <div className="w-40 shrink-0">
            <h4>Buttons</h4>
          </div>
          <div className="w-80 h-20 flex flex-col items-center justify-center">
            <ArrowButton direction="right" className="px-12">
              Contact
            </ArrowButton>
            <p className="text-sm font-mono">Primary Button • Accent</p>
          </div>

          <div className="w-80 h-20 flex flex-col items-center justify-center">
            <ArrowButton
              direction="right"
              variant="secondary"
              className="px-12"
            >
              Next
            </ArrowButton>
            <p className="text-sm font-mono">Secondary Button • Taupe 800</p>
          </div>
        </div>

        <div className="h-px bg-border/60 w-full my-40 max-w-450 mx-auto"></div>

        <div className="flex flex-col items-center justify-center gap-4 pb-20">
          <h3 className="text-center">Design System Documentation</h3>
          <p className="text-center text-taupe-600 max-w-2xl">
            View the complete design reference manual, code tokens,
            copy-to-clipboard swatches, and development checklist guidelines.
          </p>
          <ArrowButton
            href="/theme/guidelines"
            variant="primary"
            className="px-12 mt-4"
          >
            View Interactive Guidelines
          </ArrowButton>
        </div>
      </Container>
    </main>
  );
}
