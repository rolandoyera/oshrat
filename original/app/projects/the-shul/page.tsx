import MasonryGrid from "@/components/MasonryGrid";
import ProjectPage from "@/components/ProjectPage";

export default function TheShulProject() {
  const images = [
    {
      src: "/the-shul/the-shul-bal-harbour-front.jpg",
      alt: "The Shul Front View",
      width: 2000,
      height: 1250,
    },
    {
      src: "/the-shul/the-shul-bal-harbour-02.jpg",
      alt: "The Shul Side View",
      width: 2000,
      height: 1250,
    },
    {
      src: "/the-shul/the-shul-bal-harbour-03.jpg",
      alt: "The Shul Side Entrance View",
      width: 2000,
      height: 1250,
    },
    {
      src: "/the-shul/the-shul-bal-harbour-04.jpg",
      alt: "The Shul Back View",
      width: 2000,
      height: 1250,
    },
    {
      src: "/the-shul/the-shul-bal-harbour-05.jpg",
      alt: "The Shul Podium View",
      width: 1500,
      height: 2000,
    },
    {
      src: "/the-shul/the-shul-bal-harbour-06.jpg",
      alt: "The Shul Ark View",
      width: 1500,
      height: 2000,
    },
    {
      src: "/the-shul/the-shul-bal-harbour-07.jpg",
      alt: "The Shul Detail View",
      width: 2000,
      height: 1250,
    },
    {
      src: "/the-shul/the-shul-bal-harbour-09.jpg",
      alt: "The Shul Wood Detail View",
      width: 1500,
      height: 2000,
    },
    {
      src: "/the-shul/the-shul-bal-harbour-08.jpg",
      alt: "The Shul Window View",
      width: 2000,
      height: 1250,
    },
  ];

  return (
    <ProjectPage title="The Shul - Bal Harbour">
      <MasonryGrid images={images} />
    </ProjectPage>
  );
}
