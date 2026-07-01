"use client";

import { trackEvent } from "@/lib/gtag";
import { useProjectModal } from "../ProjectModalProvider";
import ArrowButton from "./ArrowButton";

export default function ProjectButton({
  children = "Contact",
  className = "",
  location = "general",
  formSource,
}: {
  children?: React.ReactNode;
  className?: string;
  location?: string;
  /** Labels the resulting lead in GA4 + the CRM. Defaults to "project". */
  formSource?: string;
}) {
  const { open } = useProjectModal();

  const handleClick = () => {
    open(formSource);

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
