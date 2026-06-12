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
