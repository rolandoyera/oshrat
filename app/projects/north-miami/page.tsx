"use client";

import MasonryGrid from "@/components/MasonryGrid";

export default function NorthMiamiProject() {
  const images = [
    {
      src: "/north-miami/north-miami-living.jpg",
      alt: "North Miami Living Room",
    },
    {
      src: "/north-miami/north-miami-dining.jpg",
      alt: "North Miami Dining Area",
    },
    {
      src: "/north-miami/north-miami-top-dining.jpg",
      alt: "North Miami Top View Dining",
    },
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <main className="w-full">
        {/* Project Header */}
        <div className="py-20 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em] text-zinc-800 uppercase mb-4">
            North Miami
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
