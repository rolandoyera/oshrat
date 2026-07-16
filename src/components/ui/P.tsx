import { cn } from "@/lib/utils";

interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: "default" | "eyebrow";
}

export default function P({
  children,
  className,
  variant = "default",
  ...props
}: PProps) {
  return (
    <p
      {...props}
      className={cn(
        variant === "eyebrow"
          ? "text-xs uppercase tracking-[0.2em] text-accent font-bold"
          : "text-base lg:text-[22px] font-light text-balance -mb-4 last:mb-0 leading-[1.55]",
        className,
      )}>
      {children}
    </p>
  );
}
