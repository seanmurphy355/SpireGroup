"use client";

import Tooltip from "./Tooltip";

interface TooltipStarProps {
  stars: string;
}

export default function TooltipStar({ stars }: TooltipStarProps) {
  return (
    <Tooltip content="GitHub stars" position="left">
      <span className="flex items-center gap-1.5 text-xs text-text-muted">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
        </svg>
        {stars}
      </span>
    </Tooltip>
  );
}
