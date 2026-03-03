"use client";

import MasonryGrid from "@/components/MasonryGrid";

export default function BrickellProject() {
  const images = [
    { src: "/brickell/Brickell-bedroom.jpg", alt: "Brickell Bedroom" },
    {
      src: "/brickell/brickell-living-square.jpg",
      alt: "Brickell Living Room",
    },
    { src: "/brickell/brickell-hallway.jpg", alt: "Brickell Hallway" },
    { src: "/brickell/brickell-screen.jpg", alt: "Brickell Bedroom 2" },
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <main className="w-full">
        {/* Project Header */}
        <div className="py-10 md:py-20 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em] text-zinc-800 uppercase mb-4">
            Brickell
          </h1>
          <div className="w-20 h-1px bg-zinc-300 mx-auto mt-8" />
        </div>

        {/* Masonry gallery */}
        <div className="mb-20">
          <MasonryGrid images={images} />
        </div>
      </main>
    </div>
  );
}
