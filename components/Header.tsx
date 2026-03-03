"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const Logo = () => (
  <div className="flex flex-col items-center">
    <div className="relative w-40 h-[128px]">
      <Image
        src="/logo/logo_sdg-black.png"
        alt="Sarvian Design Group Logo"
        fill
        className="object-contain"
        priority
        sizes="300px"
      />
    </div>
  </div>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "PROJECTS", href: "/projects" },
    { label: "PUBLICATIONS", href: "/publications" },
    { label: "ABOUT US", href: "/about-us" },
    { label: "CONTACT", href: "/contact" },
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="w-full bg-white relative z-60">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="flex items-center justify-between text-sm">
            {/* Left Navigation */}
            <div className="hidden md:flex items-center space-x-12 flex-1">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="tracking-[0.15em] text-zinc-600 hover:text-black transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Centered Logo */}
            <div className="shrink-0 px-6">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Logo />
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="hidden md:flex items-center justify-end space-x-12 flex-1">
              {navItems.slice(2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="tracking-[0.15em] text-zinc-600 hover:text-black transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-zinc-600 z-70 p-2 -mr-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-50 md:hidden flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}>
                  <Link
                    href={item.href}
                    className="text-2xl font-light tracking-[0.25em] text-zinc-800 hover:text-black transition-colors"
                    onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="absolute bottom-16 text-center">
              <div className="text-[12px] font-bold tracking-[0.3em] uppercase mb-2">
                SARVIAN DESIGN GROUP
              </div>
              <div className="text-[10px] tracking-[0.15em] text-zinc-400 italic">
                design & architecture
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
