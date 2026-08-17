"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

// Lifted verbatim from the about-us hero: the frame fades in and settles from
// scale(0.9) while the media inside it un-zooms from scale(1.2), so the image
// appears to slide into its own crop.
const maskVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    scale: 1.2,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
};

export function ImageReveal({ children, className }: ImageRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative", className)}
      initial={reduceMotion ? false : "hidden"}
      variants={maskVariants}
      viewport={{ amount: 0.3, once: true }}
      whileInView="visible"
    >
      <motion.div
        className="h-full w-full"
        initial={reduceMotion ? false : "hidden"}
        variants={imageVariants}
        viewport={{ amount: 0.3, once: true }}
        whileInView="visible"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
