"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";

const mission =
  "Estrategia, creatividad y tecnología para transformar negocios.";
const missionWords = mission.split(" ");

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.045,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    transition: {
      damping: 24,
      stiffness: 180,
      type: "spring",
    },
    y: 0,
  },
};

export function MissionSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="shinta-mission-heading"
      className="flex h-[292px] w-full items-center justify-center bg-shinta-canvas px-5 md:h-[230px] lg:h-[720px]"
    >
      <motion.div
        className="flex w-full max-w-[850px] flex-col items-center gap-4 text-center lg:gap-5"
        initial={reduceMotion ? false : "hidden"}
        variants={groupVariants}
        viewport={{ amount: 0.45, once: true }}
        whileInView="visible"
      >
        <motion.div variants={wordVariants}>
          <SectionEyebrow className="inline-flex rounded-full bg-shinta-pink px-2.5 py-1 text-shinta-ink">
            Nuestro posicionamiento
          </SectionEyebrow>
        </motion.div>

        <h2
          className="text-[28px] leading-[1.08] font-bold tracking-[-1.12px] text-shinta-ink lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]"
          id="shinta-mission-heading"
        >
          <span className="sr-only">{mission}</span>
          <span aria-hidden="true" className="block">
            {missionWords.map((word, index) => (
              <Fragment key={`${word}-${index}`}>
                <motion.span className="inline-block" variants={wordVariants}>
                  {word}
                </motion.span>
                {index < missionWords.length - 1 ? " " : null}
              </Fragment>
            ))}
          </span>
        </h2>
      </motion.div>
    </section>
  );
}
