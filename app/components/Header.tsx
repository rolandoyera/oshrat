"use client";

import Link from "next/link";
import Image from "next/image";

const Logo = () => (
  <div className="flex flex-col items-center">
    <div className="relative w-40 h-[128px]">
      <Image
        src="/logo/logo_sdg-black.png"
        alt="Sarvian Design Group Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>
);

export default function Header() {
  const navItems = [
    { label: "PROJECTS", href: "#projects" },
    { label: "PUBLICATIONS", href: "#publications" },
    { label: "ABOUT US", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white">
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

          {/* Mobile Menu Placeholder */}
          <button className="md:hidden text-zinc-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
