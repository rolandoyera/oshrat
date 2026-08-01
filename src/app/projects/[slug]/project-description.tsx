"use client";

import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { useState } from "react";

type ProjectDescriptionProps = {
  value: PortableTextBlock[];
};

export default function ProjectDescription({ value }: ProjectDescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="my-10">
      <div
        className={[
          "prose prose-invert prose-sm max-w-none richtext overflow-hidden text-justify transition-[max-height] duration-700 ease-in-out md:max-h-none",
          expanded ? "max-h-300" : "max-h-25",
        ].join(" ")}>
        <PortableText value={value} />
      </div>
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="mt-3 p underline font-medium text-accent underline-offset-4 md:hidden">
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
