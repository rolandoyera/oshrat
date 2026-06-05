import MasonryGrid from "@/components/MasonryGrid";
import ProjectPage from "@/components/ProjectPage";

export default function OldRiverProject() {
  const images = [
    {
      src: "/old-river/old-river-back.jpg",
      alt: "Old River Back View",
      width: 2000,
      height: 1261,
    },
    {
      src: "/old-river/old-river-front.jpg",
      alt: "Old River Front",
      width: 2000,
      height: 1230,
    },
    {
      src: "/old-river/old-river-front2.jpg",
      alt: "Old River Front 2",
      width: 1600,
      height: 1200,
    },
    {
      src: "/old-river/old-river-pool.jpg",
      alt: "Old River Pool",
      width: 1600,
      height: 1154,
    },
  ];

  return (
    <ProjectPage title="Old River">
      <MasonryGrid images={images} />
    </ProjectPage>
  );
}
