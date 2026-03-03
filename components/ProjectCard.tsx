"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  image: string;
  href: string;
}

export default function ProjectCard({ title, image, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative block w-full aspect-16/10 overflow-hidden bg-zinc-200">
      {/* Background Image */}
      <motion.div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
        <Image src={image} alt={title} fill className="object-cover" />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
        <h2 className="text-2xl md:text-4xl font-light tracking-[0.2em] uppercase mb-4 drop-shadow-md">
          {title}
        </h2>

        <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-medium tracking-[0.3em] uppercase">
            View more
          </span>
          <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
            <MoveRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
