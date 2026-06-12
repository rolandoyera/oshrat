"use client";

import { trackEvent } from "@/lib/gtag";
import { useProjectModal } from "../ProjectModalProvider";
import ArrowButton from "./ArrowButton";

export default function ProjectButton({
  children = "Contact",
  className = "",
  location = "general",
}: {
  children?: React.ReactNode;
  className?: string;
  location?: string;
}) {
  const { open } = useProjectModal();

  const handleClick = () => {
    open();

    trackEvent("project_button_click", {
      button_location: location,
      button_text: typeof children === "string" ? children : "Contact",
    });
  };

  return (
    <ArrowButton onClick={handleClick} className={`${className}`}>
      {children}
    </ArrowButton>
  );
}
