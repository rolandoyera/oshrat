import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import { Manrope, Parisienne } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sarviandg.com"),
  title: {
    default: "Sarvian Design Group",
    template: "%s | Sarvian Design Group",
  },
  description:
    "Fort Lauderdale interior design studio serving Broward, Palm Beach, Miami-Dade & South Florida — residential interiors, renovations & new construction.",
  openGraph: {
    type: "website",
    siteName: "Sarvian Design Group",
    locale: "en_US",
    title: "Sarvian Design Group",
    description:
      "Fort Lauderdale interior design studio serving Broward, Palm Beach, Miami-Dade & South Florida — residential interiors, renovations & new construction.",
    images: [
      {
        url: "/assets/sarvian-design-group-og-image.jpg",
        width: 1200,
        height: 600,
        alt: "Sarvian Design Group — interior design studio in South Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isInternal =
    (await cookies()).get("internal_user")?.value === "true";

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${parisienne.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>
          {process.env.VERCEL_ENV === "production" && (
            <Analytics isInternal={isInternal} />
          )}
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
