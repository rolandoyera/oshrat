import { cn } from "@/lib/utils";

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  /** Semantic tag to render. Styling stays the same regardless. */
  as?: "h1" | "h2";
}

export default function H2({
  children,
  className,
  as: Tag = "h2",
  ...props
}: H2Props) {
  return (
    <Tag
      {...props}
      className={cn(
        "h2",
        className,
      )}>
      {children}
    </Tag>
  );
}
