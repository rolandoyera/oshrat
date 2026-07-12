"use client";

import {
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import WatermarkLogo from "./WatermarkLogo";
import DoubleBorder from "./ui/DoubleBorder";
import ContactSection from "../app/contact/_components/ContactSection";

export default function ContactDrawerContent() {
  return (
    <>
      <DrawerHeader className="relative pb-6">
        <DrawerTitle className="text-4xl tracking-tight font-semibold text-taupe-800 pl-2">
          Contact Us
        </DrawerTitle>
        <DrawerDescription className="text-taupe-600 text-lg pl-2">
          Let's make something amazing together.
        </DrawerDescription>
        <DoubleBorder left="left-2" />
      </DrawerHeader>

      <ContactSection formType="navbar_drawer" linkLocation="contact_drawer" />

      <WatermarkLogo
        className="bottom-5 left-1/2 -translate-x-1/2 hidden lg:block opacity-5"
        rotation={-20}
        size={500}
        gradientFrom="var(--color-accent)"
        gradientTo="var(--color-cream-300)"
      />
    </>
  );
}
