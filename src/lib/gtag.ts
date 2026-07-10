// GA4 event helper. The gtag script is loaded in app/layout.tsx.
declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      eventParams?: Record<string, any>,
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>,
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
}

// Google Ads conversion for a confirmed form submission. Call only after the
// server has acknowledged the submission succeeded.
export function trackAdsConversion() {
  trackEvent("conversion", {
    send_to: "AW-18311450958/a9TgCNWY2M0cEM6iyptE",
    value: 1.0,
    currency: "USD",
  });
}
