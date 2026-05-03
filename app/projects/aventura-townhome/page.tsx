import MasonryGrid from "@/components/MasonryGrid";
import ProjectPage from "@/components/ProjectPage";

export default function AventuraProject() {
  const images = [
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_02B.jpg",
      alt: "Aventura interior 2B",
      width: 1491,
      height: 2000,
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_03.jpg",
      alt: "Aventura interior 3",
      width: 2000,
      height: 1334,
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_04.jpg",
      alt: "Aventura interior 4",
      width: 2000,
      height: 1334,
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_06.jpg",
      alt: "Aventura interior 6",
      width: 1334,
      height: 2000,
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_07.jpg",
      alt: "Aventura interior 7",
      width: 1327,
      height: 2000,
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_09.jpg",
      alt: "Aventura interior 9",
      width: 2000,
      height: 1334,
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_10.jpg",
      alt: "Aventura interior 10",
      width: 2000,
      height: 1334,
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_13.jpg",
      alt: "Aventura interior 13",
      width: 1334,
      height: 2000,
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_15.jpg",
      alt: "Aventura interior 15",
      width: 2000,
      height: 1334,
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_17.jpg",
      alt: "Aventura interior 17",
      width: 2000,
      height: 1449,
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_18-1.jpg",
      alt: "Aventura interior 18",
      width: 2000,
      height: 1382,
    },
    {
      src: "/aventura/Sarvian-Design-Djamal-Residence_20-1.jpg",
      alt: "Aventura interior 20",
      width: 1334,
      height: 2000,
    },
  ];

  return (
    <ProjectPage title="Aventura Townhome">
      <MasonryGrid images={images} />
    </ProjectPage>
  );
}
