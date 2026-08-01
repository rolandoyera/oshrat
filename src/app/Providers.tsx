"use client";
import ContactModalProvider from "@/components/ProjectModalProvider";
import { TooltipProvider } from "@/components/ui/ToolTip";
import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  const content = (
    <TooltipProvider>
      <ContactModalProvider>{children}</ContactModalProvider>
    </TooltipProvider>
  );

  if (isStudio) {
    return content;
  }

  return (
    // Touch scrolling stays native (no syncTouch) — Lenis only smooths wheel input.
    <ReactLenis root options={{ lerp: 0.1 }}>
      {content}
    </ReactLenis>
  );
}
