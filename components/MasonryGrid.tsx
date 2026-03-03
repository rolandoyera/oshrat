"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface MasonryGridProps {
  images: {
    src: string;
    alt: string;
    aspectRatio?: string; // e.g., "4/5", "16/9"
  }[];
}

export default function MasonryGrid({ images }: MasonryGridProps) {
  return (
    <div className="columns-1 sm:columns-2 gap-8 space-y-8 p-6 md:p-12">
      {images.map((image, index) => (
        <motion.div
          key={image.src + index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="break-inside-avoid relative group overflow-hidden bg-zinc-100">
          <div className="relative w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
