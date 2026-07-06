"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Maximize,
  Minimize,
  Plus,
  X,
} from "lucide-react";

import PanoramaViewer from "@/components/ui/PanoramaViewer";

export type GalleryImage = {
  /** Full-size stack / lightbox image URL. */
  src: string;
  /** Cropped strip thumbnail URL. */
  thumbSrc: string;
  alt: string;
  width: number;
  height: number;
};

export type PanoramaSlide = {
  /** Full equirectangular source for the WebGL viewer. */
  imageUrl: string;
  /** Cropped strip thumbnail URL. */
  thumbSrc: string;
  alt: string;
};

/**
 * The project detail image stack. Every image opens a full-screen lightbox
 * (arrows + thumbnail strip); a permanent "+" badge marks them as clickable.
 * When a 360° panorama exists it rides along as the lightbox's final slide,
 * rendered as the interactive viewer.
 */
export default function ProjectGallery({
  images,
  panorama,
}: {
  images: GalleryImage[];
  panorama?: PanoramaSlide;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="flex flex-col gap-6">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`View ${img.alt} full screen`}
            className="relative block w-full cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              quality={90}
              loading="lazy"
              decoding="async"
              sizes="(min-width:1280px) 66vw, 100vw"
              className="w-full h-auto rounded shadow"
            />
            <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white pointer-events-none">
              <Plus size={20} />
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          panorama={panorama}
          initialIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}

function Lightbox({
  images,
  panorama,
  initialIndex,
  onClose,
}: {
  images: GalleryImage[];
  panorama?: PanoramaSlide;
  initialIndex: number;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(initialIndex);
  const [showThumbs, setShowThumbs] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // The panorama, when present, is the final slide after every flat image.
  const total = images.length + (panorama ? 1 : 0);
  const isPano = panorama !== undefined && index === images.length;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  // Launch straight into fullscreen (best effort — iOS Safari rejects) and
  // leave it on close. Lock page scroll behind the overlay while open.
  useEffect(() => {
    containerRef.current?.requestFullscreen?.().catch(() => {});
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      // In fullscreen the first Escape only exits fullscreen (browser
      // behavior); the next one closes the lightbox.
      if (e.key === "Escape" && !document.fullscreenElement) onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [prev, next, onClose]);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const activeAlt = isPano ? panorama.alt : images[index].alt;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={activeAlt}
      className="fixed inset-0 z-100 bg-black"
    >
      {isPano ? (
        <div className="absolute inset-0">
          <PanoramaViewer
            imageUrl={panorama.imageUrl}
            alt={panorama.alt}
            embedded
          />
        </div>
      ) : (
        <Image
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-contain"
        />
      )}

      {/* Top-right controls */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setShowThumbs((s) => !s)}
          className="p-2 text-white/85 hover:text-white transition cursor-pointer"
          title={showThumbs ? "Hide thumbnails" : "Show thumbnails"}
        >
          <LayoutGrid size={20} />
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          className="p-2 text-white/85 hover:text-white transition cursor-pointer"
          title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="p-2 text-white/85 hover:text-white transition cursor-pointer"
          title="Close"
        >
          <X size={20} />
        </button>
      </div>

      {/* Prev / next */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 text-white/85 hover:text-white transition cursor-pointer"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 text-white/85 hover:text-white transition cursor-pointer"
          >
            <ChevronRight size={36} />
          </button>
        </>
      )}

      {/* Thumbnail strip — stays mounted so the show/hide toggle can animate */}
      {total > 1 && (
        <div
          inert={!showThumbs}
          aria-hidden={!showThumbs}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex max-w-[92vw] gap-2 overflow-x-auto p-1 transition-all duration-300 ease-out ${
            showThumbs
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === index}
              className={`relative h-20 w-14 shrink-0 overflow-hidden rounded cursor-pointer ${
                i === index
                  ? "ring-2 ring-white"
                  : "opacity-70 hover:opacity-100 transition-opacity"
              }`}
            >
              <Image
                src={img.thumbSrc}
                alt=""
                fill
                sizes="56px"
                className="object-cover"
              />
            </button>
          ))}
          {panorama && (
            <button
              type="button"
              onClick={() => setIndex(images.length)}
              aria-label="View 360° panorama"
              aria-current={isPano}
              className={`relative h-20 w-14 shrink-0 overflow-hidden rounded cursor-pointer ${
                isPano
                  ? "ring-2 ring-white"
                  : "opacity-70 hover:opacity-100 transition-opacity"
              }`}
            >
              <Image
                src={panorama.thumbSrc}
                alt=""
                fill
                sizes="56px"
                className="object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/35 font-mono text-[10px] tracking-wider text-white">
                360°
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
