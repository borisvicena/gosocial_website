"use client";
import React from "react";
import { useId } from "react";
import { gridItems } from "@/data";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { getRandomValues } from "crypto";

export function FeaturesSection() {
  const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

  return (
    <ParallaxProvider>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 max-w-7xl mx-auto ">
          {gridItems.map(({ id, title, value, description }) => (
            <Parallax speed={-5}>
              <div
                key={id}
                className="relative bg-gradient-to-b from-[#9e65f4] dark:to-[#020617] p-6 rounded-lg overflow-hidden"
              >
                <Grid size={20} />
                <p className="text-4xl font-bold">{value}</p>
                <p className="text-base font-light uppercase tracking-wider dark:text-neutral-200 relative z-20">
                  {title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                  {description}
                </p>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </ParallaxProvider>
  );
}

export const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, index: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
