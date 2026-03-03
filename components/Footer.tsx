"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MoveRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#121212] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left Column: Contact Info & Branding */}
        <div className="flex flex-col justify-between">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              We&apos;d love to hear from you.
            </h2>

            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                15407 West Dixie Highway
                <br />
                North Miami Beach, FL 33161
              </p>

              <p>
                <a
                  href="mailto:osh@sarviandg.com"
                  className="hover:text-white transition-colors">
                  osh@sarviandg.com
                </a>
              </p>

              <p>Mobile: 646.639.4147</p>

              <p>
                <a
                  href="https://www.instagram.com/sarviandesigngroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors">
                  Instagram
                </a>
              </p>
            </div>
          </div>

          <div className="mt-16 md:mt-4">
            <div className="relative w-40 h-40 invert brightness-0 grayscale opacity-90">
              <Image
                src="/logo/logo_sdg-black.png"
                alt="Sarvian Design Group Logo"
                fill
                className="object-contain"
                sizes="300px"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Full Name *"
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-300"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-300"
                />
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                required
                placeholder="Email *"
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-300"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border border-zinc-700 p-4 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-300 resize-none"></textarea>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="group flex items-center space-x-2 text-sm font-medium hover:text-zinc-400 transition-colors cursor-pointer">
                <span>Submit</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
