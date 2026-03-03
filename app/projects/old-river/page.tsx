import MasonryGrid from "@/components/MasonryGrid";
import ProjectPage from "@/components/ProjectPage";

export default function OldRiverProject() {
  const images = [
    { src: "/old-river/old-river-back.jpg", alt: "Old River Background" },
    { src: "/old-river/old-river-front.jpg", alt: "Old River Front" },
    { src: "/old-river/old-river-front2.jpg", alt: "Old River Front 2" },
    { src: "/old-river/old-river-pool.jpg", alt: "Old River Pool" },
  ];

  return (
    <ProjectPage title="Old River">
      <MasonryGrid images={images} />
    </ProjectPage>
  );
}
