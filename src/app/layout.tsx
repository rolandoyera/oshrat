import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import { Manrope, Newsreader, Parisienne } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import { socialMeta } from "@/lib/seo";
import { Analytics } from "./Analytics";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

// Variable font — full weight axis, both styles, no per-weight files.
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
        className={`${manrope.variable} ${parisienne.variable} ${newsreader.variable} font-sans antialiased bg-background text-foreground`}
      >
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
