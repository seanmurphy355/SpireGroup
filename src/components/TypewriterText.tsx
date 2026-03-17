"use client";

import { useState, useEffect, useCallback } from "react";

type Phase = "typing" | "paused-full" | "deleting" | "paused-empty";

interface TypewriterTextProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBeforeDelete?: number;
  pauseBeforeType?: number;
  className?: string;
}

export default function TypewriterText({
  text,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseBeforeDelete = 2000,
  pauseBeforeType = 500,
  className = "",
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  const tick = useCallback(() => {
    switch (phase) {
      case "typing": {
        if (displayed.length < text.length) {
          setDisplayed(text.slice(0, displayed.length + 1));
        } else {
          setPhase("paused-full");
        }
        break;
      }
      case "deleting": {
        if (displayed.length > 0) {
          setDisplayed(text.slice(0, displayed.length - 1));
        } else {
          setPhase("paused-empty");
        }
        break;
      }
      default:
        break;
    }
  }, [phase, displayed, text]);

  useEffect(() => {
    let delay: number;

    switch (phase) {
      case "typing":
        delay = typingSpeed;
        break;
      case "paused-full":
        delay = pauseBeforeDelete;
        break;
      case "deleting":
        delay = deletingSpeed;
        break;
      case "paused-empty":
        delay = pauseBeforeType;
        break;
    }

    const timer = window.setTimeout(() => {
      if (phase === "paused-full") {
        setPhase("deleting");
      } else if (phase === "paused-empty") {
        setPhase("typing");
      } else {
        tick();
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [phase, displayed, tick, typingSpeed, deletingSpeed, pauseBeforeDelete, pauseBeforeType]);

  return (
    <span
      className={`inline-block font-mono text-xs uppercase tracking-[0.2em] text-text-secondary ${className}`}
    >
      [{displayed}
      <span className="typewriter-cursor" aria-hidden="true" />
      ]
    </span>
  );
}
