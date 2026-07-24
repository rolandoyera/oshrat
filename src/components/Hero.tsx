"use client";
import React, { useState, useEffect } from "react";
import TransitionLink from "@/components/ui/TransitionLink";
import Image from "next/image";
import ArrowButton from "./ui/ArrowButton";
import { TextEffect } from "./motion-primitives/text-effect";

interface HeroProps {
  image: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  image,
  title,
  description,
  buttonText,
  buttonLink,
  className = "",
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isProjectLink = buttonLink && buttonLink.startsWith("/projects/");
  const slug =
    isProjectLink && buttonLink ? buttonLink.replace("/projects/", "") : "";
  const transitionName = slug ? `hero-${slug}` : undefined;

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="relative h-[60vh] xl:h-svh overflow-hidden">
        {/* Parallax container for background image */}
        <div
          className="absolute w-full h-[130%] top-[-15%] left-0"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: "transform",
          }}>
          <Image
            src={image}
            alt={title || "Interior Design Hero"}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
            style={
              {
                willChange: "transform",
                ...(transitionName
                  ? { viewTransitionName: transitionName }
                  : {}),
              } as React.CSSProperties
            }
          />
        </div>

        {(title || description) && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-6">
            {/* Floating parallax text element */}
            <div
              className="text-center"
              style={{
                transform: `translateY(${scrollY * 0.15}px)`,
                willChange: "transform",
              }}>
              {title && (
                <TextEffect
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  as="h1"
                  inView
                  className="text-white text-[clamp(2.25rem,1.23rem+5.11vw,4.5rem)] font-normal text-balance tracking-tight mb-2">
                  {title}
                </TextEffect>
              )}
              {description && (
                <p className="text-white/90 text-base lg:text-xl mb-8">
                  {description}
                </p>
              )}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                {buttonText && buttonLink && (
                  <TransitionLink
                    href={buttonLink}
                    className="w-full sm:w-auto">
                    <ArrowButton className="w-full justify-center">
                      {buttonText}
                    </ArrowButton>
                  </TransitionLink>
                )}
                <ArrowButton
                  href="/projects"
                  variant="secondary"
                  className="w-full sm:w-auto justify-center">
                  View Projects
                </ArrowButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
