"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const EXCLUDED_PATHS = ["/studio"];
const GA_ID = "G-K0ZYTV5JSM";
const ADS_ID = "AW-18311450958";
const DISABLE_KEYS = [`ga-disable-${GA_ID}`, `ga-disable-${ADS_ID}`];

// TEMP: gtag disabled for Lighthouse A/B runs (measuring TBT with and
// without analytics). Delete the next line to re-enable — nothing else
// changed. While this is live, GA4 pageviews and Ads conversions DO NOT
// record.
const ANALYTICS_DISABLED = true;

export function Analytics() {
  const pathname = usePathname();

  if (ANALYTICS_DISABLED) return null;

  const isExcluded = EXCLUDED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  // Kill-switch for the case where gtag was already loaded on a prior page and
  // the user navigates into an excluded path client-side: GA4 Enhanced
  // Measurement would otherwise fire a history-based page_view. Setting these
  // flags makes gtag suppress all hits for these measurement IDs.
  useEffect(() => {
    for (const key of DISABLE_KEYS) {
      (window as unknown as Record<string, boolean>)[key] = isExcluded;
    }
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
          // internal_user is read client-side so the server can render this
          // page statically — a server-side cookie read would force the whole
          // route dynamic (Cache-Control: no-store, no ISR, no bfcache).
          gtag('config', '${GA_ID}', document.cookie.split('; ').includes('internal_user=true')
            ? { 'traffic_type': 'internal' } : {});
          gtag('config', '${ADS_ID}');
        `}
      </Script>
    </>
  );
}
