import MasonryGrid from "@/components/MasonryGrid";
import ProjectPage from "@/components/ProjectPage";

export default function SouthBeachProject() {
  const images = [
    {
      src: "/south-beach/South-Beach-Living-Kitchen.jpg",
      alt: "South Beach Living & Kitchen",
      width: 1600,
      height: 888,
    },
    {
      src: "/south-beach/South-Beach-Bedroom.jpg",
      alt: "South Beach Bedroom",
      width: 1600,
      height: 888,
    },
    {
      src: "/south-beach/South-Beach-Living.jpg",
      alt: "South Beach Living Room",
      width: 1600,
      height: 888,
    },
    {
      src: "/south-beach/South-Beach-Living2.jpg",
      alt: "South Beach Living Room 2",
      width: 1600,
      height: 888,
    },
  ];

  return (
    <ProjectPage title="South Beach Penthouse">
      <MasonryGrid images={images} />
    </ProjectPage>
  );
}
