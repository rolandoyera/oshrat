import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat, Newsreader, Parisienne } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";
import { socialMeta } from "@/lib/seo";
import { Analytics } from "./Analytics";

// Variable font — full weight axis, no per-weight files.
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Below the fold on every page (Cta, Footer, WhereWeWorkSection). Keep the
// preload: `preload: false` was tried and reverted — without it the font is
// discovered by the CSS parser instead of the HTML preload scanner, so it
// starts ~125ms later and drifts run to run, which cost more in LCP/TBT than
// the earlier start cost the LCP text (Montserrat). See layout.tsx history.
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

// Variable font — full weight axis, both styles, no per-weight files.
// Only used below the fold (Testimonials). Italic is a real second file
// (~65KB); kept because the pull-quote is display-size serif, where
// browser-synthesized oblique looks visibly wrong. Preloaded for the same
// reason as Parisienne above.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const ROOT_TITLE =
  "Sarvian Design Group | Interior Designer in Fort Lauderdale | South Florida";
const ROOT_DESCRIPTION =
  "Fort Lauderdale interior design studio serving Broward, Palm Beach, Miami-Dade & South Florida — residential interiors, renovations & new construction.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sarviandg.com"),
  // No title template — pages append "| Sarvian Design Group" themselves only
  // where it fits within ~60 chars; keyword-heavy titles skip it.
  title: ROOT_TITLE,
  description: ROOT_DESCRIPTION,
  ...socialMeta({ title: ROOT_TITLE, description: ROOT_DESCRIPTION }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${parisienne.variable} ${newsreader.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>
          {process.env.VERCEL_ENV === "production" && <Analytics />}
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
