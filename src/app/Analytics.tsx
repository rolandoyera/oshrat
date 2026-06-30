"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const EXCLUDED_PATHS = ["/studio"];
const GA_ID = "G-K0ZYTV5JSM";
const GA_DISABLE_KEY = `ga-disable-${GA_ID}`;

export function Analytics({ isInternal }: { isInternal: boolean }) {
  const pathname = usePathname();

  const isExcluded = EXCLUDED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  // Kill-switch for the case where gtag was already loaded on a prior page and
  // the user navigates into an excluded path client-side: GA4 Enhanced
  // Measurement would otherwise fire a history-based page_view. Setting this
  // flag makes gtag suppress all hits for this measurement ID.
  useEffect(() => {
    (window as unknown as Record<string, boolean>)[GA_DISABLE_KEY] = isExcluded;
  }, [isExcluded]);

  if (isExcluded) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}'${
            isInternal ? ", { 'traffic_type': 'internal' }" : ""
          });
        `}
      </Script>
    </>
  );
}
