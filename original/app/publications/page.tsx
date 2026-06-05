"use client";

import { useState } from "react";
import Lightbox from "@/components/Lightbox";

const publications = [
  {
    title: "Publication 1",
    image: "/publications/publi1.jpg",
  },
  {
    title: "Publication 2",
    image: "/publications/publi2.jpg",
  },
  {
    title: "Publication 3",
    image: "/publications/publi3.jpg",
  },
  {
    title: "Publication 4",
    image: "/publications/publi4.jpg",
  },
  {
    title: "Publication 5",
    image: "/publications/publi5.jpg",
  },
  {
    title: "Publication 6",
    image: "/publications/publi6.jpg",
  },
];

export default function Publications() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Normalize publications for Lightbox (which expects {src, alt})
  const lightboxImages = publications.map((p) => ({
    src: p.image,
    alt: p.title,
  }));

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col items-center max-w-6xl mx-auto">
      <main className="flex w-full flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-light tracking-widest uppercase py-20">
          Publications
        </h1>
        <div className="flex flex-col space-y-12 pb-20">
          {publications.map((publication, index) => (
            <div
              key={publication.title}
              className="cursor-pointer group relative overflow-hidden bg-zinc-100"
              onClick={() => openLightbox(index)}>
              <img
                src={publication.image}
                alt={publication.title}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </main>

      <Lightbox
        images={lightboxImages}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNavigate={(index) => setCurrentIndex(index)}
      />
    </div>
  );
}
