import MasonryGrid from "@/components/MasonryGrid";
import ProjectPage from "@/components/ProjectPage";

export default function BrickellProject() {
  const images = [
    {
      src: "/brickell/brickell-bedroom.jpg",
      alt: "Brickell Bedroom",
      width: 2000,
      height: 2000,
    },
    {
      src: "/brickell/brickell-living-square.jpg",
      alt: "Brickell Living Room",
      width: 2000,
      height: 2000,
    },
    {
      src: "/brickell/brickell-hallway.jpg",
      alt: "Brickell Hallway",
      width: 2000,
      height: 2000,
    },
    {
      src: "/brickell/brickell-screen.jpg",
      alt: "Brickell Bedroom 2",
      width: 2000,
      height: 2000,
    },
  ];

  return (
    <ProjectPage title="Brickell">
      <MasonryGrid images={images} />
    </ProjectPage>
  );
}
