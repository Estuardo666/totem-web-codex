"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

const curves = {
  sweepRight: {
    d: "M180.79 1.30042C163.471 65.6046 110.061 102.919 78.3233 105.455C51.3324 107.612 61.0037 65.4235 78.3233 76.7446C89.9026 84.3135 103.169 118.769 59.3715 133.984C33.4678 142.984 1.79041 130.815 1.79041 130.815",
    length: 341.4310302734375,
    strokeWidth: 1.6831893015380743,
    viewBox: "0.9482954725252242 0.45830547656880327 180.68381715126304 137.68433595009117",
  },
  sweepLeft: {
    d: "M63.9999 5.00122C47.0795 12.4205 11.734 36.6747 5.71552 74.3371C0.138539 109.237 28.6566 98.5154 39.3176 87.1384C43.0379 83.1683 46.2823 77.1531 43.446 74.9339C41.1216 73.1153 36.2184 78.3559 34.7325 85.3414C31.9664 98.3458 35.1567 124.208 61.0698 154.001",
    length: 255.0950927734375,
    strokeWidth: 1.2457498994443204,
    viewBox: "4.376623887266062 4.377966660703562 60.24653001935215 150.24629350812168",
  },
} as const;

const tones = {
  lavender: "text-shinta-lavender",
  pink: "text-shinta-pink",
} as const;

type ScrollDrawCurveProps = {
  className?: string;
  /** Fraction of the scroll range at which the stroke starts drawing. */
  drawFrom?: number;
  /** Fraction of the scroll range over which the stroke finishes drawing. */
  drawUntil?: number;
  shape: keyof typeof curves;
  strokeWidth?: number;
  tone: keyof typeof tones;
};

/**
 * Decorative line that draws itself as it scrolls through the viewport.
 * Uses the source path length so its draw/retract behavior matches Framer.
 */
export function ScrollDrawCurve({
  className,
  drawFrom = 0,
  drawUntil = 0.75,
  shape,
  strokeWidth,
  tone,
}: ScrollDrawCurveProps) {
  const curve = curves[shape];
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: containerRef,
  });
  const dashoffset = useTransform(
    scrollYProgress,
    [drawFrom, drawUntil],
    [curve.length, 0],
    { clamp: true },
  );

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      ref={containerRef}
    >
      <svg
        className={cn("size-full", tones[tone])}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox={curve.viewBox}
      >
        <motion.path
          d={curve.d}
          fill="none"
          stroke="currentColor"
          strokeDasharray={curve.length}
          strokeDashoffset={reduceMotion ? 0 : dashoffset}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth ?? curve.strokeWidth}
        />
      </svg>
    </div>
  );
}
