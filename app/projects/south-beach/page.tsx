import MasonryGrid from "@/components/MasonryGrid";
import ProjectPage from "@/components/ProjectPage";

export default function SouthBeachProject() {
  const images = [
    {
      src: "/south-beach/South-Beach-Living-Kitchen.jpg",
      alt: "South Beach Living & Kitchen",
    },
    {
      src: "/south-beach/South-Beach-Bedroom.jpg",
      alt: "South Beach Bedroom",
    },
    {
      src: "/south-beach/South-Beach-Living.jpg",
      alt: "South Beach Living Room",
    },
    {
      src: "/south-beach/South-Beach-Living2.jpg",
      alt: "South Beach Living Room 2",
    },
  ];

  return (
    <ProjectPage title="South Beach Penthouse">
      <MasonryGrid images={images} />
    </ProjectPage>
  );
}
