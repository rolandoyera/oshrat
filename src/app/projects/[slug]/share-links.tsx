"use client";

import type React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/ToolTip";

export interface ShareLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

// Share intents open in a small centered popup (like the classic share
// buttons) instead of a full tab. The href stays real so middle-click,
// copy-link, and no-JS all still work; mailto is left to the mail client.
export default function ShareLinks({ links }: { links: ShareLink[] }) {
  const openPopup = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("mailto:")) return;
    e.preventDefault();
    const width = 600;
    const height = 640;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    window.open(
      href,
      "share-dialog",
      `popup,width=${width},height=${height},left=${left},top=${top}`,
    );
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      {links.map(({ label, href, icon }) => (
        <Tooltip key={label}>
          {/* render: the trigger IS the anchor — its default <button> can't
              wrap an <a> (invalid nesting). */}
          <TooltipTrigger
            render={
              <a
                href={href}
                aria-label={label}
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openPopup(e, href)}
              />
            }>
            {icon}
          </TooltipTrigger>
          <TooltipContent>
            <span>{label}</span>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
