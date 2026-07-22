"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import HoverUnderline from "../ui/HoverUnderline";
import Link from "next/link";
import SdgMonogram from "./SdgMonogram";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { trackEvent } from "@/lib/gtag";
import { useProjectModal } from "../ProjectModalProvider";
import { TextEffect } from "../motion-primitives/text-effect";
import { SITE } from "@/lib/site";
import {
  LINKS,
  useNavScroll,
  usePreloadHero,
  useScrollProgress,
} from "./nav-shared";

// Mobile + tablet (below lg): solid dark backdrop with white ink, light cream
// utility row, and a menu drawer that slides down from underneath the bar.
export default function MobileNav() {
  const pathname = usePathname();
  const lenis = useLenis();
  const { open: openProjectModal } = useProjectModal();
  const { isHidden } = useNavScroll();
  const progressRef = useScrollProgress();
  const preloadHero = usePreloadHero();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    if (!isMenuOpen) {
      lenis?.start();
      return;
    }

    lenis?.stop();
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      lenis?.start();
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [isMenuOpen, lenis]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      aria-label="Primary"
      data-fixed=""
      className="lg:hidden fixed top-0 left-0 w-full z-50 font-medium flex flex-col text-foreground shadow"
      style={
        {
          viewTransitionName: "main-navbar",
          // Total nav height feeds the menu panel's 100dvh calc — the h-15
          // (3.75rem) bar plus the h-9 (2.25rem) utility row. The menu can
          // only open while the bar is visible, so it's constant. Keep in
          // sync with the bar heights below.
          "--mobile-nav-height": "6rem",
        } as React.CSSProperties & Record<"--mobile-nav-height", string>
      }>
      {/* Solid dark backdrop — always on, matches the menu drawer. */}
      <div className="absolute inset-0 -z-10 bg-cream-200" />

      <div
        ref={progressRef}
        style={{ transform: "scaleX(0)" }}
        className="absolute inset-x-0 top-full z-10 h-[5px] origin-left bg-accent"
      />

      {/* 1px bottom rule. Absolute so it doesn't add to the nav height that
          --mobile-nav-height mirrors. */}
      <div className="absolute inset-x-0 bottom-0 z-30 h-px bg-taupe-900" />

      {/* Action bar — collapses while scrolling down, returns on scroll up
          or while the menu is open (keeps the nav at its full 6rem so the
          drawer height calc stays exact). z-20 keeps it above the menu
          scrim (z-10). */}
      <div
        className={cn(
          "relative z-20 w-full overflow-hidden bg-taupe-900 text-cream-200 transition-all duration-300 ease-in-out",
          isHidden && !isMenuOpen ? "h-0" : "h-9",
        )}>
        <div className="mx-auto flex h-9 items-center justify-end px-4 md:px-6 font-light text-[10px]">
          <a
            href={`tel:${SITE.phone}`}
            className="uppercase tracking-wide transition-colors hover:text-accent">
            {SITE.phoneDisplay}
          </a>
          <span aria-hidden className="mx-4 h-4 w-px bg-cream-200/50" />
          <button
            type="button"
            onClick={() => {
              openProjectModal();
              trackEvent("project_button_click", {
                button_location: "topbar",
                button_text: "Consultation",
              });
            }}
            className="group uppercase tracking-wide transition-colors hover:text-accent hover:cursor-pointer">
            Request Consultation
            <HoverUnderline />
          </button>
        </div>
      </div>

      {/* Main bar — always visible. Its own bg at z-20 keeps the scrim's
          tint off it while the menu is open. */}
      <div className="relative z-20 flex h-15 w-full items-center justify-center bg-cream-200">
        <div className="relative z-20 flex-1 flex items-center justify-between pl-4 ">
          <Link href="/" className="flex items-center">
            <div className="w-[40px] shrink-0">
              <SdgMonogram className="h-auto w-full" />
            </div>
            <div className="flex flex-col ml-2 justify-center items-center">
              <span className="text-[11px]">{SITE.name}</span>
              <span className="text-[8px] font-light">{SITE.slogan}</span>
            </div>
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex flex-col w-16 h-15 items-center justify-center text-cream-200 bg-taupe-900">
            <span
              className={cn(
                "h-[1.5px] w-6 bg-current transition-transform duration-300 ease-in-out ",
                isMenuOpen ? "translate-y-0 rotate-45" : "translate-y-[-5px]",
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-6 bg-current transition-transform duration-300 ease-in-out",
                isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[5px]",
              )}
            />
          </button>
        </div>
      </div>

      {/* Scrim over the page while the menu is open. */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setIsMenuOpen(false)}
        className={cn(
          "fixed inset-0 z-10 bg-taupe-900/25 transition-opacity duration-300 [backdrop-filter:blur(18px)] [-webkit-backdrop-filter:blur(18px)]",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      {/* Drawer — slides down from underneath the nav. The clipping wrapper
          stays put; the dark panel translates in from behind the bar. */}
      <div
        className={cn(
          "absolute inset-x-0 top-full z-10 h-[calc(100dvh-var(--mobile-nav-height))] overflow-hidden",
          !isMenuOpen && "pointer-events-none",
        )}>
        <div
          className={cn(
            "h-full overflow-y-auto bg-cream-200 text-foreground transition-transform duration-500 ease-in-out",
            isMenuOpen ? "translate-y-0" : "-translate-y-full",
          )}>
          <div className="flex min-h-full flex-col items-center justify-center gap-12 px-6 py-16 text-center">
            <ul className="flex flex-col items-center gap-6">
              {LINKS.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    onPointerEnter={() => preloadHero(link.href)}
                    onFocus={() => preloadHero(link.href)}
                    className="text-4xl font-light uppercase tracking-wide sm:text-5xl">
                    {/* Re-animates on every open (trigger), staggered per
                        link, delayed so the drawer slide lands first. */}
                    <TextEffect
                      as="span"
                      preset="fade-in-blur"
                      speedReveal={5}
                      speedSegment={0.3}
                      trigger={isMenuOpen}
                      delay={0.25 + index * 0.08}
                      className="inline-block">
                      {link.name}
                    </TextEffect>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
