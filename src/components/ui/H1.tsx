import { cn } from "@/lib/utils";

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function H1({ children, className, ...props }: H2Props) {
  return (
    <h1
      {...props}
      className={cn(
        "text-[clamp(2.25rem,1.23rem+5.11vw,4.5rem)] font-normal text-balance tracking-tight",
        className,
      )}>
      {children}
    </h1>
  );
}
