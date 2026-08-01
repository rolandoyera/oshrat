import ArrowButton from "./ui/ArrowButton";

interface NextProjectProps {
  prevProject?: {
    title: string;
    slug: string;
    location?: string;
  } | null;
  nextProject?: {
    title: string;
    slug: string;
    location?: string;
  } | null;
}

export default function NextProject({
  prevProject,
  nextProject,
}: NextProjectProps) {
  return (
    <div className="bg-card my-20">
      <div className="flex flex-row items-stretch justify-center gap-6 py-22 text-center">
        {prevProject && (
          <div className="flex-1 md:flex flex-col items-center justify-between hidden">
            <h2 className="text-center flex-1 flex flex-col items-center justify-center h3">
              {prevProject.title}
              {prevProject.location && (
                <span className="block text-sm lg:text-base font-light tracking-wider">
                  {prevProject.location}
                </span>
              )}
            </h2>
            <ArrowButton
              href={`/projects/${prevProject.slug}`}
              direction="left"
              variant="secondary">
              Previous
            </ArrowButton>
          </div>
        )}
        <div className="w-0.75 relative shrink-0 self-center h-32 lg:h-40 hidden md:block">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-border/40" />
          <div className="absolute top-0 bottom-0 left-px w-[1.5px] bg-white/80" />
        </div>
        {nextProject && (
          <div className="flex-1 flex flex-col items-center justify-between">
            <h2 className="text-center flex-1 flex flex-col items-center justify-center h3">
              {nextProject.title}
              {nextProject.location && (
                <span className="block text-sm lg:text-base font-light mt-1 tracking-wider">
                  {nextProject.location}
                </span>
              )}
            </h2>

            <ArrowButton
              href={`/projects/${nextProject.slug}`}
              variant="secondary">
              Next
            </ArrowButton>
          </div>
        )}
      </div>
    </div>
  );
}
