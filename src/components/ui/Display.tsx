import { cn } from "@/lib/utils";

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface DisplayProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingElement;
  children: React.ReactNode;
}

export default function Display({
  as: Tag = "h1",
  children,
  className,
  ...props
}: DisplayProps) {
  return (
    <Tag
      {...props}
      className={cn(
        "text-[clamp(2.25rem,1.23rem+5.11vw,5.5rem)] leading-[1.05] tracking-wide font-normal",
        className,
      )}>
      {children}
    </Tag>
  );
}
