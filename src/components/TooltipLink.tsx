"use client";

import Tooltip from "./Tooltip";
import type { ReactNode } from "react";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipLinkProps {
  href: string;
  tooltip: string;
  position?: TooltipPosition;
  external?: boolean;
  className?: string;
  children: ReactNode;
}

export default function TooltipLink({
  href,
  tooltip,
  position = "top",
  external = false,
  className = "",
  children,
}: TooltipLinkProps) {
  return (
    <Tooltip content={tooltip} position={position}>
      <a
        href={href}
        className={className}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    </Tooltip>
  );
}
