"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Inlined from /assets/osh.svg so each stroke can be animated. The two paths
// are the two pen lifts of the signature; they draw in sequence.
const STROKES = [
  {
    d: "M188.42,37.08s-57.6,8.98-97.62,40.64C53.79,106.99,4.06,199,48.03,224.62c33.85,19.72,101.53-24.19,130.17-59.01S245.87,60.05,223,31.78s-83.83-36.88-141.47,0S-.19,115.59,4.67,143.09s49.47,73.99,123.41,25.17",
    width: 5,
    duration: 1400,
    delay: 0,
  },
  {
    d: "M181.94,192.71c10.82-3.53,20.52-6.19,31.35-25.18s20.55-34.23,24.3-42.85-7.73.44-6.4,20.98,7.18,29.08,2.87,37.79-15.22,15.2-32.02,10.14c-15.56-4.69-20.15-24.34-10.02-22.22s37.85,7.68,56.62,3.23,36.99-15.2,59.31-36.69,42.95-41.05,53.4-53.86,19.91-27.2,13.55-34.16c-5.87-6.41-42.14,14.88-64.93,47.23-31.95,45.35-34.82,79.39-36.37,93.09s-3.39,19.59.88,11.93,15.12-26.95,18.55-32.43c9.4-15.01,24.84-31.16,42.31-38.61s34.4-8.77,25.13,9.19-33.35,45.17-34.09,54.44,19.53,5.15,41.39-16.88",
    width: 3.75,
    duration: 2200,
    delay: 1500,
  },
];

// Draws the signature stroke-by-stroke (like a pen signing) once it scrolls
// into view, via the stroke-dashoffset technique. `speed` is a multiplier on
// pen speed: 2 signs twice as fast, 0.5 at half speed.
export default function SignatureDraw({
  className = "",
  speed = 1,
}: {
  className?: string;
  speed?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawing(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 379.97 233.52"
      role="img"
      aria-label="Oshrat Rothschild signature"
      className={cn("text-[#231f20]", className)}>
      {STROKES.map(({ d, width, duration, delay }) => (
        <path
          key={delay}
          d={d}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={width}
          strokeMiterlimit={10}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: drawing ? 0 : 1,
            transition: `stroke-dashoffset ${duration / speed}ms ease-in-out ${delay / speed}ms`,
          }}
        />
      ))}
    </svg>
  );
}
