import { cn } from "@/lib/utils";

/**
 * Center-out animated underline — the navbar link effect. Render inside an
 * element with `relative group`; the line grows from the center on hover, or
 * stays full-width while `active`. Color follows the parent's text color.
 */
export default function HoverUnderline({
  active = false,
  className,
}: {
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute bottom-0 left-1/2 h-[1.5px] bg-current transition-all duration-300 -translate-x-1/2",
        active ? "w-full" : "w-0 group-hover:w-full",
        className,
      )}
    />
  );
}
