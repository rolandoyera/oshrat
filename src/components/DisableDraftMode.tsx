"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Shown only while Next draft mode is on and the page is NOT inside the
 * Studio's Presentation iframe, so an editor previewing in a normal tab can
 * get back to the published view.
 */
export default function DisableDraftMode() {
  const pathname = usePathname();
  const [standalone, setStandalone] = useState(false);
  useEffect(() => setStandalone(window.self === window.top), []);
  if (!standalone) return null;

  return (
    <a
      href={`/api/draft-mode/disable?redirect=${encodeURIComponent(pathname ?? "/")}`}
      className="fixed bottom-4 left-4 z-[1000] rounded-md bg-black/80 px-3 py-2 text-xs font-medium text-white shadow-lg hover:bg-black"
    >
      Exit preview
    </a>
  );
}
