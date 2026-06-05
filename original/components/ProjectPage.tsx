export default function ProjectPage({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <main className="w-full">
        {/* Project Header */}
        <div className="py-10 md:py-15 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em] text-zinc-800 uppercase mb-4">
            {title}
          </h1>
          <div className="w-20 h-1px bg-zinc-300 mx-auto mt-8" />
        </div>
        {children}
      </main>
    </div>
  );
}
