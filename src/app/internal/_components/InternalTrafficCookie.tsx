"use client";

import { useEffect } from "react";

// Toggles the `internal_user` cookie used to mark sessions as internal traffic
// in GA4. Read client-side by the gtag snippet in app/Analytics.tsx (never on
// the server — that would force every route dynamic). ~2 year persistence.
export default function InternalTrafficCookie({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    document.cookie = enabled
      ? "internal_user=true; path=/; max-age=63072000; SameSite=Lax"
      : "internal_user=; path=/; max-age=0; SameSite=Lax";
  }, [enabled]);

  return null;
}
