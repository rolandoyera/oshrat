"use client";
import { cn } from "@/lib/utils";
import HoverUnderline from "../ui/HoverUnderline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SdgMonogram from "./SdgMonogram";
import { trackEvent } from "@/lib/gtag";
import { useProjectModal } from "../ProjectModalProvider";
import { SITE } from "@/lib/site";
import {
  LINKS,
  useNavScroll,
  usePreloadHero,
  useScrollProgress,
} from "./nav-shared";
import Container from "../ui/Container";

export default function DesktopNav2() {
  const pathname = usePathname();
  const { open: openProjectModal } = useProjectModal();
  const { isScrolled, isHidden } = useNavScroll();
  const progressRef = useScrollProgress();
  const preloadHero = usePreloadHero();

  return (
    <nav
      aria-label="Primary"
      data-fixed=""
      className={cn(
        "hidden xl:flex fixed top-0 left-0 w-full z-50 font-medium flex-col",
        isScrolled && "shadow",
      )}
    >
      <div
        ref={progressRef}
        style={{ transform: "scaleX(0)" }}
        className="absolute inset-x-0 top-full z-10 h-1.25 origin-left bg-accent"
      />
      {/* Contact bar — collapses while scrolling down, returns on scroll up. */}
      <div
        className={cn(
          "relative z-20 w-full overflow-hidden bg-taupe-900 text-cream-100 transition-all duration-300 ease-in-out",
          isHidden ? "h-0" : "h-9",
        )}
      >
        <Container className="flex h-9 items-center justify-end">
          <a
            href={`tel:${SITE.phone}`}
            className="text-sm font-light uppercase tracking-wide text-cream-200 transition-colors hover:text-accent"
          >
            {SITE.phoneDisplay}
          </a>
          <span aria-hidden className="mx-4 h-4 w-px bg-cream-100/30" />
          <button
            type="button"
            onClick={() => {
              openProjectModal();
              trackEvent("project_button_click", {
                button_location: "topbar",
                button_text: "Consultation",
              });
            }}
            className="group relative text-sm font-light uppercase tracking-wide text-cream-200 transition-colors hover:text-accent hover:cursor-pointer"
          >
            Request Consultation
            <HoverUnderline />
          </button>
        </Container>
      </div>

      {/* Main bar — always visible. Transparent with white text/logo at the
          top of the page; solid cream once scrolled. */}
      <div
        className={cn(
          "flex h-18 w-full items-center justify-center border-b transition-all duration-300 backdrop-blur-xs",
          isScrolled
            ? "border-transparent bg-cream-200 text-foreground"
            : "border-white/50 bg-black/10 text-white h-22",
        )}
      >
        <Container className="relative z-20 flex-1 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-12.5 shrink-0">
              <SdgMonogram className="h-auto w-full" />
            </div>
            <div className="flex flex-col ml-2 justify-center items-center">
              <span className="text-[14px]">{SITE.name}</span>
              <span className="text-xs -mt-1 font-light tracking-wider">
                {SITE.slogan}
              </span>
            </div>
          </Link>

          <ul className="flex items-center gap-10">
            {LINKS.map((link) => {
              const isActive =
                pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onPointerEnter={() => preloadHero(link.href)}
                    onFocus={() => preloadHero(link.href)}
                    className="relative uppercase group py-1 tracking-wide"
                  >
                    {link.name}
                    {/* Width-only transition: the underline is bg-current, and
                        transitioning background-color would chase the bar's
                        animating color and lag behind the text. */}
                    <HoverUnderline
                      active={isActive}
                      className="transition-[width]"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </nav>
  );
}
