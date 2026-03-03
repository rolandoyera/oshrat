"use client";

import MasonryGrid from "@/components/MasonryGrid";

export default function OldRiverProject() {
  const images = [
    { src: "/old-river/old-river-back.jpg", alt: "Old River Background" },
    { src: "/old-river/old-river-front.jpg", alt: "Old River Front" },
    { src: "/old-river/old-river-pool.jpg", alt: "Old River Pool" },
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <main className="w-full">
        {/* Project Header */}
        <div className="py-20 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em] text-zinc-800 uppercase mb-4">
            Old River
          </h1>
          <div className="w-20 h-1px bg-zinc-300 mx-auto mt-8" />
        </div>

        {/* Masonry gallery */}
        <div className="max-w-7xl mx-auto mb-20">
          <MasonryGrid images={images} />
        </div>
      </main>
    </div>
  );
}
