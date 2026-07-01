// next/image default deviceSizes — the candidate widths in a full-width srcset.
export const NEXT_DEVICE_SIZES = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

/**
 * Builds the next/image srcset for a full-bleed hero so a `<link rel="preload">`
 * warms the exact width the destination will request (heroes are `sizes="100vw"`).
 * `src` is whatever gets passed to next/image `src` — a local path (`/foo.jpg`)
 * or a remote URL. Keep `quality` in sync with the destination's `quality` prop.
 */
export const heroPreloadSrcSet = (src: string, quality = 90) =>
  NEXT_DEVICE_SIZES.map(
    (w) =>
      `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=${quality} ${w}w`,
  ).join(", ");
