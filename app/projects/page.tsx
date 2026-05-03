import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "The Shul",
    image: "/slider/the-shul-bal-harbour-01.jpg",
    href: "/projects/the-shul",
  },
  {
    title: "Aventura Townhome",
    image: "/slider/Sarvian-Design-Djamal-Residence_04.jpg",
    href: "/projects/aventura-townhome",
  },
  {
    title: "South Beach Penthouse",
    image: "/slider/South-Beach-Living-Kitchen.jpg",
    href: "/projects/south-beach",
  },
  {
    title: "Brickell Residence",
    image: "/slider/Brickell-main-new.jpg",
    href: "/projects/brickell",
  },
  {
    title: "North Miami Villa",
    image: "/slider/North-Miami-main.jpg",
    href: "/projects/north-miami",
  },
  {
    title: "Old River Estate",
    image: "/slider/old-river-back.jpg",
    href: "/projects/old-river",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col bg-white px-10">
      <main className="w-full">
        {/* Page Header */}
        <div className="py-10 md:py-20 px-6 text-center border-b border-zinc-100">
          <h1 className="text-2xl tracking-[0.3em] uppercase">
            Our Latest Projects
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              href={project.href}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
