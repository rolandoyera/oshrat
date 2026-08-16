import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";
import { socialMeta } from "@/lib/seo";
import { Analytics } from "./Analytics";

// Variable font — full weight axis, no per-weight files.
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Montserrat is the only webfont. Newsreader and Parisienne were removed
// 2026-08-15: they were 145KB of 180KB of font preloads, and warm-vs-warm PSI
// showed the preloads cost ~6 points / ~1.1s LCP by competing with the hero
// image for bandwidth. Everything serif now uses `--font-serif` (Georgia, a
// system font with a real italic) — see globals.css.

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
        className={`${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
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
