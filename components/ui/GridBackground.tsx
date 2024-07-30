import React from "react";

export function GridBackground() {
  return (
    <div className="h-screen w-full dark:bg-black-100 bg-gray-100 dark:bg-grid-white/[0.08] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}
