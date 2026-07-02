"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
  style?: React.CSSProperties;
  /** next/image srcset of the destination hero, warmed on hover/focus. */
  preloadSrcSet?: string;
  /** sizes attribute matching the destination hero (default: 100vw). */
  preloadSizes?: string;
}

export default function TransitionLink({
  href,
  children,
  className,
  "aria-label": ariaLabel,
  style,
  preloadSrcSet,
  preloadSizes = "100vw",
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const preloaded = React.useRef(false);

  // Warm the destination hero (the large image that otherwise loads late) and
  // its RSC payload the moment the user signals intent — before they click.
  const preload = () => {
    if (preloaded.current || !preloadSrcSet) return;
    preloaded.current = true;

    // Warm the HTTP cache with a detached <img> rather than <link rel="preload">:
    // same bytes, same cache key, but exempt from Chrome's "preload unused
    // within a few seconds" console warning when the hover doesn't convert.
    // sizes must be set before srcset so the first fetch picks the right candidate.
    const img = new Image();
    img.sizes = preloadSizes;
    img.srcset = preloadSrcSet;

    const hrefStr = typeof href === "string" ? href : href.pathname || "";
    router.prefetch(hrefStr);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const hrefStr = typeof href === "string" ? href : href.pathname || "";

    // Fallback if browser doesn't support View Transitions API
    if (!document.startViewTransition) {
      router.push(hrefStr);
      return;
    }

    // The shared element we morph into is the destination hero, tagged with
    // view-transition-name: hero-<slug>. Hold the transition until that image
    // has actually decoded so the morph lands on a painted image, not a blank.
    const slug = hrefStr.match(/\/projects\/([^/?#]+)/)?.[1];
    const heroName = slug ? `hero-${slug}` : null;
    // The origin card shares the same view-transition-name; wait for it to
    // leave the DOM so we don't match it instead of the destination hero.
    const originImg = e.currentTarget.querySelector("img");

    document.startViewTransition(() => {
      return new Promise<void>((resolve) => {
        let settled = false;
        const done = () => {
          if (settled) return;
          settled = true;
          observer.disconnect();
          resolve();
        };

        router.push(hrefStr);

        const tryResolve = async () => {
          // No hero to wait for: resolve as soon as the DOM updates.
          if (!heroName) return done();

          // Old page still mounted — its card would be a false match.
          if (originImg?.isConnected) return;

          const img = document.querySelector<HTMLImageElement>(
            `img[style*="${heroName}"]`,
          );
          if (!img) return; // hero not in the DOM yet — keep observing

          observer.disconnect();
          try {
            if (!img.complete) {
              await new Promise<void>((res) => {
                img.addEventListener("load", () => res(), { once: true });
                img.addEventListener("error", () => res(), { once: true });
              });
            }
            await img.decode().catch(() => {});
          } finally {
            done();
          }
        };

        // Wait for Next.js to render the new page, then for the hero image.
        const observer = new MutationObserver(tryResolve);
        observer.observe(document.body, { childList: true, subtree: true });

        // Safety cap so the old page never stays frozen indefinitely.
        setTimeout(done, 2500);
      });
    });
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      onPointerEnter={preload}
      onFocus={preload}
      aria-label={ariaLabel}
      style={style}
      {...props}
    >
      {children}
    </Link>
  );
}
