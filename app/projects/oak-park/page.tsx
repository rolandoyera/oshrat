import MasonryGrid from "@/components/MasonryGrid";
import ProjectPage from "@/components/ProjectPage";

export default function OakParkProject() {
  const images = [
    {
      src: "/oak-park/oak-park-cabana-close-up.jpg",
      alt: "Oak Park Cabana Close Up",
    },
    { src: "/oak-park/oak-park-cabana.jpg", alt: "Oak Park Cabana" },
    { src: "/oak-park/oak-park-night.jpg", alt: "Oak Park Night" },
    { src: "/oak-park/oak-park-pool.jpg", alt: "Oak Park Pool" },
  ];

  return (
    <ProjectPage title="Oak Park">
      <MasonryGrid images={images} />
    </ProjectPage>
  );
}
