"use client";
import { usePathname } from "next/navigation";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";

// Breakpoint split: DesktopNav renders at lg+, MobileNav below lg — each is
// fully self-contained (own markup, state, and scroll listeners) so they can
// be styled and reworked independently. Shared constants and hooks live in
// ./navbar/nav-shared.ts.
export default function Navbar() {
  const pathname = usePathname();

  // Return null if on studio route to avoid layout overlap in Sanity CMS
  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
