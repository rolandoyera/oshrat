import MasonryGrid from "@/components/MasonryGrid";
import ProjectPage from "@/components/ProjectPage";

export default function NorthMiamiProject() {
  const images = [
    {
      src: "/north-miami/north-miami-living.jpg",
      alt: "North Miami Living Room",
    },
    {
      src: "/north-miami/north-miami-dining.jpg",
      alt: "North Miami Dining Area",
    },
    {
      src: "/north-miami/north-miami-top-dining.jpg",
      alt: "North Miami Top View Dining",
    },
  ];

  return (
    <ProjectPage title="North Miami Villa">
      <MasonryGrid images={images} />
    </ProjectPage>
  );
}
