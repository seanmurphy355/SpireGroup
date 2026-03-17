"use client";

import dynamic from "next/dynamic";

const SpireScene = dynamic(() => import("./SpireScene"), {
  ssr: false,
});

export default function SpireSceneLoader() {
  return (
    <div className="pointer-events-auto absolute inset-0 z-0">
      <SpireScene />
    </div>
  );
}
