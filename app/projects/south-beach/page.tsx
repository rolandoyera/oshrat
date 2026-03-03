"use client";

import MasonryGrid from "@/components/MasonryGrid";

export default function SouthBeachProject() {
  const images = [
    {
      src: "/south-beach/South-Beach-Living-Kitchen.jpg",
      alt: "South Beach Living & Kitchen",
    },
    {
      src: "/south-beach/South-Beach-Bedroom.jpg",
      alt: "South Beach Bedroom",
    },
    {
      src: "/south-beach/South-Beach-Living.jpg",
      alt: "South Beach Living Room",
    },
    {
      src: "/south-beach/South-Beach-Living2.jpg",
      alt: "South Beach Living Room 2",
    },
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <main className="w-screen">
        {/* Project Header */}
        <div className="py-20 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em] text-zinc-800 uppercase mb-4">
            South Beach
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
