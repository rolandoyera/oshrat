import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import TransitionLink from "./TransitionLink";
import { MoveLeft, MoveRight } from "lucide-react";

interface ArrowButton2Props {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  direction?: "left" | "right";
  variant?: "primary" | "secondary";
  /** Navigate via TransitionLink so the page's hero image morphs into the
   * destination hero (works even when the image isn't inside this button). */
  transition?: boolean;
  /** Destination hero srcset, warmed on hover — see TransitionLink. */
  preloadSrcSet?: string;
}

export default function ArrowButton2({
  children,
  className,
  href,
  onClick,
  type = "button",
  direction = "right",
  variant = "primary",
  transition,
  preloadSrcSet,
  ...props
}: ArrowButton2Props) {
  const classes = cn(
    "group inline-flex h-12 items-center gap-2.5 rounded-xs text-white text",
    variant === "primary"
      ? "bg-accent hover:bg-taupe-800"
      : "bg-taupe-800 hover:bg-accent",
    direction === "right"
      ? "pl-[22px] pr-[18px] hover:pl-[18px]"
      : "pl-[18px] pr-[22px]",
    "text-base md:text-lg font-medium uppercase",
    "focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent hover:cursor-pointer hover:shadow hover:shadow-black/20 transition-all duration-200 ease-[cubic-bezier(.6,.2,.1,1)]",
    className,
  );

  const arrow = (
    <span className="relative block h-4 w-4">
      <Arrow
        direction={direction}
        className={cn(
          "absolute inset-0 transition-all duration-200 ease-[cubic-bezier(.6,.2,.1,1)] -ml-1",
          direction === "right" ? "group-hover:ml-1" : "",
        )}
      />
    </span>
  );

  const inner = (
    <>
      {direction === "left" && arrow}
      {children}
      {direction === "right" && arrow}
    </>
  );

  if (href) {
    if (transition) {
      return (
        <TransitionLink
          href={href}
          className={classes}
          preloadSrcSet={preloadSrcSet}
          {...(props as any)}>
          {inner}
        </TransitionLink>
      );
    }
    return (
      <Link href={href} className={classes} {...(props as any)}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {inner}
    </button>
  );
}

function Arrow({
  className,
  direction = "right",
}: {
  className?: string;
  direction?: "left" | "right";
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4", className)}
      aria-hidden="true">
      {direction === "right" ? <MoveRight /> : <MoveLeft />}
    </svg>
  );
}
