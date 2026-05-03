export default function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-lg lg:text-4xl tracking-[0.3em] uppercase font-light">
      {children}
    </h1>
  );
}
