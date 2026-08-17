"use client";

import type { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";

type SmoothScrollProps = {
  children: ReactNode;
};

/** Global, intentionally subtle wheel/trackpad smoothing. Touch stays native. */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return children;
  }

  return (
    <ReactLenis
      options={{
        anchors: true,
        autoRaf: true,
        lerp: 0.13,
        smoothWheel: true,
        syncTouch: false,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}
