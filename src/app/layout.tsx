import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import { Manrope } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import { JsonLd, businessJsonLd } from "@/lib/structured-data";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sarviandg.com"),
  title: {
    default: "Sarvian Design Group",
    template: "%s | Sarvian Design Group",
  },
  description:
    "Sarvian Design Group is a premier interior design and architecture firm based in Palm Beach, serving South Florida's tri-state area since 2014. We specialize in transforming spaces into timeless, elegant, and sophisticated interiors.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Sarvian Design Group",
    locale: "en_US",
    title: "Sarvian Design Group",
    description:
      "Sarvian Design Group is a premier interior design and architecture firm based in Palm Beach, serving South Florida's tri-state area since 2014. We specialize in transforming spaces into timeless, elegant, and sophisticated interiors.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} font-sans antialiased bg-background text-foreground`}>
        <JsonLd data={businessJsonLd} />
        <Providers>
          {process.env.VERCEL_ENV === "production" && (
            <>
              <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-K0ZYTV5JSM"
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-K0ZYTV5JSM');
            `}
              </Script>
            </>
          )}
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
