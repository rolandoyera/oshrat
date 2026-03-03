"use client";

import MasonryGrid from "@/components/MasonryGrid";

export default function AventuraProject() {
  const images = [
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_02B.jpg",
      alt: "Aventura interior 2B",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_03.jpg",
      alt: "Aventura interior 3",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_04.jpg",
      alt: "Aventura interior 4",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_06.jpg",
      alt: "Aventura interior 6",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_07.jpg",
      alt: "Aventura interior 7",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_09.jpg",
      alt: "Aventura interior 9",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_10.jpg",
      alt: "Aventura interior 10",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_13.jpg",
      alt: "Aventura interior 13",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_15.jpg",
      alt: "Aventura interior 15",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_17.jpg",
      alt: "Aventura interior 17",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_18-1.jpg",
      alt: "Aventura interior 18",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_20-1.jpg",
      alt: "Aventura interior 20",
    },
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <main className="w-full">
        {/* Project Header */}
        <div className="py-10 md:py-20 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em] text-zinc-800 uppercase mb-4">
            Aventura
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
