"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

const strokes = {
  lavender: {
    d: "M63.9999 5.00122C47.0795 12.4205 11.734 36.6747 5.71552 74.3371C0.138539 109.237 28.6566 98.5154 39.3176 87.1384C43.0379 83.1683 46.2823 77.1531 43.446 74.9339C41.1216 73.1153 36.2184 78.3559 34.7325 85.3414C31.9664 98.3458 35.1567 124.208 61.0698 154.001",
    length: 255.1,
    strokeWidth: 1.2465071311685596,
    viewBox: "4.376623887266062 4.377966660703562 60.24653001935215 150.24629350812168",
  },
  pink: {
    d: "M180.79 1.30042C163.471 65.6046 110.061 102.919 78.3233 105.455C51.3324 107.612 61.0037 65.4235 78.3233 76.7446C89.9026 84.3135 103.169 118.769 59.3715 133.984C33.4678 142.984 1.79041 130.815 1.79041 130.815",
    length: 341.4,
    strokeWidth: 1.6842291385677157,
    viewBox: "0.9482954725252242 0.45830547656880327 180.68381715126304 137.68433595009117",
  },
} as const;

type ScribbleStrokeProps = {
  className?: string;
  variant: keyof typeof strokes;
};

/**
 * Decorative squiggle that draws itself as the surrounding section moves through
 * the viewport: stroke-dashoffset animates from the full path length down to 0.
 */
export function ScribbleStroke({ className, variant }: ScribbleStrokeProps) {
  const stroke = strokes[variant];
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: containerRef,
  });
  const dashoffset = useTransform(scrollYProgress, [0, 0.75], [stroke.length, 0]);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      ref={containerRef}
    >
      <svg
        className={cn(
          "size-full",
          variant === "pink" ? "text-shinta-pink" : "text-shinta-lavender",
        )}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox={stroke.viewBox}
      >
        <motion.path
          d={stroke.d}
          fill="none"
          stroke="currentColor"
          strokeDasharray={stroke.length}
          strokeDashoffset={reduceMotion ? 0 : dashoffset}
          strokeLinecap="round"
          strokeWidth={stroke.strokeWidth}
        />
      </svg>
    </div>
  );
}
