import { cn } from "@/lib/utils";

interface DoubleBorderProps {
  className?: string;
  position?: "top" | "bottom";
  left?: string;
  right?: string;
  borderColor?: string;
  highlightColor?: string;
}

export default function DoubleBorder({
  className,
  position = "bottom",
  left = "left-0",
  right = "right-0",
  borderColor = "bg-border/80",
  highlightColor = "bg-white",
}: DoubleBorderProps) {
  const isBottom = position === "bottom";

  return (
    <>
      <div
        className={cn(
          "absolute h-px",
          left,
          right,
          isBottom ? "bottom-px" : "top-0",
          borderColor,
          className,
        )}
      />
      {/* Highlight sits BELOW the dark line in both positions so every edge
          reads as the same light-from-above groove. Both lines are drawn
          inside the container — a highlight hanging 1px outside gets clipped
          by any overflow-hidden ancestor (e.g. ScrollReveal). */}
      <div
        className={cn(
          "absolute h-px",
          left,
          right,
          isBottom ? "bottom-0" : "top-px",
          highlightColor,
          className,
        )}
      />
    </>
  );
}
