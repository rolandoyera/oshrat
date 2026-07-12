import { cn } from "@/lib/utils";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  /** Semantic tag to render. Styling stays the same regardless. */
  as?: "h1" | "h2";
}

export default function H1({
  children,
  className,
  as: Tag = "h1",
  ...props
}: H1Props) {
  return (
    <Tag
      {...props}
      className={cn(
        "text-[clamp(2.25rem,1.23rem+5.11vw,4.5rem)] font-normal tracking-tight leading-h1 md:leading-[1.08] lg:leading-[1.06]",
        className,
      )}>
      {children}
    </Tag>
  );
}
