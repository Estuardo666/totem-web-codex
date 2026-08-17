"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Extra delay in seconds, for staggering stacked elements by z-order. */
  delay?: number;
  /**
   * Fade the section in without the rise. Used for sections containing
   * `position: sticky` children (a transformed ancestor becomes their
   * containing block and breaks the sticking) and for media-led sections,
   * where a section-wide slide would bury the image reveal inside it.
   */
  fadeOnly?: boolean;
};

/**
 * Section-level entrance. Each section rises into place as it reaches the
 * viewport, so the page resolves top to bottom as you scroll. Wrapping a
 * section whose layout depends on `position: sticky` would break it — those
 * sections animate themselves instead.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  fadeOnly = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={
        fadeOnly ? { opacity: 0 } : { opacity: 0, transform: "translateY(32px)" }
      }
      transition={{ delay, duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ amount: 0.12, margin: "0px 0px -8% 0px", once: true }}
      whileInView={
        fadeOnly ? { opacity: 1 } : { opacity: 1, transform: "translateY(0px)" }
      }
    >
      {children}
    </motion.div>
  );
}
