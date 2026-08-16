"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";

const heading = "Perspectivas e ideas";
const headingWords = heading.split(" ");

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
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      damping: 24,
      stiffness: 180,
      type: "spring",
    },
  },
};

const riseVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      damping: 26,
      stiffness: 170,
      type: "spring",
    },
  },
};

export function BlogTitleSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="shinta-blog-heading"
      className="flex items-center justify-center bg-shinta-canvas px-5"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-start gap-4 md:flex-row md:items-end md:gap-5 xl:gap-6">
        <div className="flex flex-col gap-2">
          <motion.div
            className="flex"
            initial={reduceMotion ? false : "hidden"}
            variants={riseVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            <SectionEyebrow className="inline-flex rounded-full bg-shinta-pink px-2 py-1 text-shinta-ink">
              Blog
            </SectionEyebrow>
          </motion.div>

          <motion.h1
            className="text-[40px] leading-[42px] font-bold tracking-[-1.6px] text-shinta-ink md:text-[52px] md:leading-[54px] md:tracking-[-2.08px] xl:text-[72px] xl:leading-[72px] xl:tracking-[-2.88px]"
            id="shinta-blog-heading"
            initial={reduceMotion ? false : "hidden"}
            variants={groupVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            <span className="sr-only">{heading}</span>
            <span aria-hidden="true" className="block">
              {headingWords.map((word, index) => (
                <Fragment key={`${word}-${index}`}>
                  <motion.span className="inline-block" variants={wordVariants}>
                    {word}
                  </motion.span>
                  {index < headingWords.length - 1 ? " " : null}
                </Fragment>
              ))}
            </span>
          </motion.h1>
        </div>

        <motion.p
          className="max-w-full text-[16px] leading-6 text-shinta-stone md:max-w-[45%] xl:max-w-[40%] xl:text-[18px] xl:leading-[27px]"
          initial={reduceMotion ? false : "hidden"}
          variants={riseVariants}
          viewport={{ amount: 0.4, once: true }}
          whileInView="visible"
        >
          Ideas sobre contenido social, creadores y estrategia, escritas desde la
          experiencia, no desde la teoría.
        </motion.p>
      </div>
    </section>
  );
}
