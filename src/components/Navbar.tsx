"use client";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { trackEvent } from "@/lib/gtag";
import ProjectButton from "./ui/ProjectButton";
import ContactDrawerContent from "./ContactDrawerContent";
import { heroPreloadSrcSet } from "@/lib/image-preload";

const LINKS = [
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Press", href: "/press" },
  { name: "Contact", href: "/contact" },
];

// Full-bleed hero image each route paints first paint — warmed on hover so the
// destination's `sizes="100vw"` next/image request is already cached on arrival.
// `quality` MUST match the destination hero's `quality` prop or the preloaded
// URL won't match what's requested (wasted preload + browser warning). Routes
// without a single full-screen hero (Projects list, Contact drawer) are absent.
const ROUTE_HERO: Record<string, { src: string; quality?: number }> = {
  "/services": { src: "/assets/aventura-interior-design-5.jpg", quality: 50 },
  "/about": { src: "/about/Sarvian-Design-Group.jpg" },
  "/press": { src: "/projects/sdg-bedroom-remodel-armoire-7.jpg" },
};

// Routes whose first paint is the light page background (no dark hero image
// behind the fixed navbar). The navbar renders dark ink there until scroll
// fades in its dark gradient backdrop.
const LIGHT_ROUTES = new Set([
  "/projects",
  "/contact",
  "/privacy",
  "/terms",
  "/internal",
  "/external",
  "/theme",
  "/theme/guidelines",
]);

export default function Navbar() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [isScrolled, setIsScrolled] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const preloadedRoutes = useRef(new Set<string>());

  // Warm the destination hero the moment the user hovers/focuses the link —
  // once per route. Uses a detached <img> rather than <link rel="preload">:
  // same HTTP cache key, but exempt from Chrome's unused-preload warning when
  // the hover doesn't convert. sizes must be set before srcset.
  const preloadHero = (href: string) => {
    const hero = ROUTE_HERO[href];
    if (!hero || preloadedRoutes.current.has(href)) return;
    preloadedRoutes.current.add(href);

    const img = document.createElement("img");
    img.sizes = "100vw";
    img.srcset = heroPreloadSrcSet(hero.src, hero.quality);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    if (!isMobileMenuOpen) {
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
  }, [isMobileMenuOpen, lenis]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Return null if on studio route to avoid layout overlap in Sanity CMS
  if (pathname?.startsWith("/studio")) {
    return null;
  }

  // Dark-ink variant over light pages; back to white once the dark gradient
  // backdrop fades in (scroll) or the dark mobile menu opens.
  const onLight =
    LIGHT_ROUTES.has(pathname ?? "") && !isScrolled && !isMobileMenuOpen;

  return (
    <Drawer
      direction="right"
      duration={1000}
      autoFocus
      open={isDrawerOpen}
      onOpenChange={(open) => {
        setIsDrawerOpen(open);
        if (open) trackEvent("contact_drawer_open");
      }}>
      <nav
        aria-label="Primary"
        data-fixed=""
        className={cn(
          "fixed top-0 left-0 w-full z-50 font-medium flex justify-center items-center transition-all duration-300 ease-in-out",
          onLight ? "text-foreground" : "text-white",
          isScrolled
            ? "h-20 shadow backdrop-blur-md bg-taupe-900/5"
            : "h-26 shadow-none backdrop-blur-none bg-transparent",
        )}
        style={
          {
            viewTransitionName: "main-navbar",
            "--mobile-nav-height": isScrolled ? "5rem" : "6.5rem",
          } as React.CSSProperties & Record<"--mobile-nav-height", string>
        }>
        {/* Absolute background layer to smoothly fade the linear gradient without snapping.
            Solid while the mobile menu is open so the nav strip matches the panel below
            (the translucent gradient reads lighter and leaves a seam). */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-300 ease-in-out -z-10",
            isMobileMenuOpen
              ? "bg-taupe-900"
              : "bg-linear-to-b from-taupe-900/90 to-taupe-800/80",
            isScrolled || isMobileMenuOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none",
          )}
        />

        <div className="relative z-20 flex-1 flex items-center justify-between px-4 md:px-6 max-w-[1800px] mx-auto">
          {/* Left: Logo (fixed width to balance layout) */}
          <div className="w-[180px] lg:w-[200px] shrink-0">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/assets/logo_sdg-horizontal.svg"
                alt="Sarvian Design Group"
                loading="eager"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 180px, 200px"
                className={cn(
                  "brightness-0 transition-[filter] duration-300",
                  !onLight && "invert",
                )}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                priority
              />
            </Link>
          </div>

          {/* Center: Centered Navigation Links */}
          <ul className="hidden lg:flex items-center gap-10">
            {LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname?.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onPointerEnter={() => preloadHero(link.href)}
                    onFocus={() => preloadHero(link.href)}
                    className="relative text-lg uppercase group py-1 tracking-wide">
                    {link.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 h-[1.5px] bg-current transition-all duration-300 -translate-x-1/2",
                        isActive ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: CTA Button (matching width of logo container for perfect centering) */}
          <div className="hidden lg:flex w-[200px] justify-end shrink-0">
            <ProjectButton
              location="navbar"
              className={cn(
                isScrolled
                  ? "bg-accent text-white hover:bg-accent/90"
                  : onLight
                    ? "bg-taupe-900 text-cream-100 hover:bg-accent hover:text-white"
                    : "bg-white text-foreground hover:bg-accent hover:text-white",
              )}>
              Let's Talk
            </ProjectButton>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="lg:hidden inline-flex size-11 items-center justify-center rounded text-current">
            {isMobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>

        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className={cn(
            "lg:hidden fixed inset-0 z-10 bg-taupe-900/25 transition-opacity duration-300 [backdrop-filter:blur(18px)] [-webkit-backdrop-filter:blur(18px)]",
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        />

        <div
          className={cn(
            "lg:hidden absolute inset-x-0 top-full z-20 h-[calc(100dvh-var(--mobile-nav-height))] overflow-y-auto bg-radial from-taupe-800 to-taupe-900 transition-all duration-300 ease-in-out [backdrop-filter:blur(18px)] [-webkit-backdrop-filter:blur(18px)]",
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-4",
          )}>
          <div className="flex min-h-full flex-col px-6 py-8">
            <ul className="flex flex-col gap-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onPointerEnter={() => preloadHero(link.href)}
                    onFocus={() => preloadHero(link.href)}
                    className="flex items-center justify-between border-b border-white/15 py-5 text-2xl uppercase tracking-wide text-white transition-colors hover:text-white/80">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="mt-50 pt-8"
              onClick={() => setIsMobileMenuOpen(false)}>
              <ProjectButton
                location="mobile_navbar"
                className="w-full justify-between bg-accent text-white hover:bg-accent/90">
                Let's Talk
              </ProjectButton>
            </div>
          </div>
        </div>
      </nav>
      <DrawerContent className="bg-cream-200">
        <ContactDrawerContent />
      </DrawerContent>
    </Drawer>
  );
}
