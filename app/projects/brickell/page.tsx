import MasonryGrid from "@/components/MasonryGrid";
import ProjectPage from "@/components/ProjectPage";

export default function BrickellProject() {
  const images = [
    { src: "/brickell/Brickell-bedroom.jpg", alt: "Brickell Bedroom" },
    {
      src: "/brickell/brickell-living-square.jpg",
      alt: "Brickell Living Room",
    },
    { src: "/brickell/brickell-hallway.jpg", alt: "Brickell Hallway" },
    { src: "/brickell/brickell-screen.jpg", alt: "Brickell Bedroom 2" },
  ];

  return (
    <ProjectPage title="Brickell">
      <MasonryGrid images={images} />
    </ProjectPage>
  );
}
