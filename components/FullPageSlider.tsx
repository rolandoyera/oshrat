"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MoveLeft, MoveRight } from "lucide-react";

const slides = [
  {
    image: "/slider/the-shul-bal-harbour-front.jpg",
    title: "The Shul - Bal Harbour",
    href: "/projects/the-shul",
  },
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

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev + slides.length - 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-172px)] overflow-hidden bg-zinc-100 mb-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 cursor-grab active:cursor-grabbing">
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 pointer-events-none">
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
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pointer-events-auto">
              <Link
                href={slides[currentIndex].href}
                className="inline-block bg-black border border-white px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-200">
                View Project
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators - Hidden on mobile */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 space-x-3 z-10">
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

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 md:left-8 flex items-center z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="group w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center text-white transition-all duration-300 pointer-events-auto hover:bg-white hover:text-black"
          aria-label="Previous slide"
        >
          <MoveLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-translate-x-1" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 md:right-8 flex items-center z-20 pointer-events-none">
        <button
          onClick={nextSlide}
          className="group w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center text-white transition-all duration-300 pointer-events-auto hover:bg-white hover:text-black"
          aria-label="Next slide"
        >
          <MoveRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
