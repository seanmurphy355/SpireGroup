"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: string;
  position?: TooltipPosition;
  delay?: number;
  children: React.ReactNode;
}

const positionStyles: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowStyles: Record<TooltipPosition, string> = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-bg-elevated border-x-transparent border-b-transparent",
  bottom:
    "bottom-full left-1/2 -translate-x-1/2 border-b-bg-elevated border-x-transparent border-t-transparent",
  left: "left-full top-1/2 -translate-y-1/2 border-l-bg-elevated border-y-transparent border-r-transparent",
  right:
    "right-full top-1/2 -translate-y-1/2 border-r-bg-elevated border-y-transparent border-l-transparent",
};

const motionVariants = {
  top: {
    initial: { opacity: 0, y: 4 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 4 },
  },
  bottom: {
    initial: { opacity: 0, y: -4 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -4 },
  },
  left: {
    initial: { opacity: 0, x: 4 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 4 },
  },
  right: {
    initial: { opacity: 0, x: -4 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -4 },
  },
} as const;

export default function Tooltip({
  content,
  position = "top",
  delay = 200,
  children,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const show = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setVisible(false);
  };

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {children}
      <AnimatePresence>
        {visible && (
          <motion.span
            className={`absolute z-50 whitespace-nowrap rounded-sm bg-bg-elevated px-3 py-1.5 text-xs text-text-primary pointer-events-none ${positionStyles[position]}`}
            {...motionVariants[position]}
            transition={{ duration: 0.15 }}
          >
            {content}
            <span
              className={`absolute border-4 ${arrowStyles[position]}`}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
