import MasonryGrid from "@/components/MasonryGrid";
import ProjectPage from "@/components/ProjectPage";

export default function AventuraProject() {
  const images = [
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_02B.jpg",
      alt: "Aventura interior 2B",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_03.jpg",
      alt: "Aventura interior 3",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_04.jpg",
      alt: "Aventura interior 4",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_06.jpg",
      alt: "Aventura interior 6",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_07.jpg",
      alt: "Aventura interior 7",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_09.jpg",
      alt: "Aventura interior 9",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_10.jpg",
      alt: "Aventura interior 10",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_13.jpg",
      alt: "Aventura interior 13",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_15.jpg",
      alt: "Aventura interior 15",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_17.jpg",
      alt: "Aventura interior 17",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_18-1.jpg",
      alt: "Aventura interior 18",
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_20-1.jpg",
      alt: "Aventura interior 20",
    },
  ];

  return (
    <ProjectPage title="Aventura Townhome">
      <MasonryGrid images={images} />
    </ProjectPage>
  );
}
