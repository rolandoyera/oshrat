"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    image: "/slider/old-river-back.jpg",
    title: "Old River Estate",
    href: "/projects/old-river",
  },
  {
    image: "/slider/Brickell-main-new.jpg",
    title: "Brickell Residence",
    href: "/projects/brickell",
  },
  {
    image: "/slider/North-Miami-main.jpg",
    title: "North Miami Villa",
    href: "/projects/north-miami",
  },
  {
    image: "/slider/Oak-Park-main.jpg",
    title: "Oak Park House",
    href: "/projects/oak-park",
  },
  {
    image: "/slider/Sarvian-Design-Djamal-Residence_04.jpg",
    title: "Aventura Townhome",
    href: "/projects/aventura-townhome",
  },
  {
    image: "/slider/South-Beach-Living-Kitchen.jpg",
    title: "South Beach Penthouse",
    href: "/projects/south-beach",
  },
];

export default function FullPageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-172px)] overflow-hidden bg-zinc-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0">
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl font-light tracking-[0.2em] uppercase mb-8 drop-shadow-lg">
              {slides[currentIndex].title}
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}>
              <Link
                href={slides[currentIndex].href}
                className="inline-block bg-black border border-white px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-200">
                View Project
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-8" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
