"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";
import { shintaAsset } from "../shared/site";

const heading = "Cómo convertir ideas para redes sociales en planes de contenido";
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

export function ArticleHeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className="flex w-full flex-col items-center gap-4 md:gap-5 xl:gap-6">
        <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
          <motion.div
            className="flex"
            initial={reduceMotion ? false : "hidden"}
            variants={riseVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            <SectionEyebrow className="text-shinta-muted">
              27 de enero de 2026
            </SectionEyebrow>
          </motion.div>

          <motion.h1
            className="text-center text-[32px] leading-9 font-bold tracking-[-1.28px] text-shinta-ink md:text-[44px] md:leading-[48px] md:tracking-[-1.76px] xl:text-[64px] xl:leading-[64px] xl:tracking-[-2.56px]"
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

        <motion.div
          className="flex h-10 items-center justify-center gap-2"
          initial={reduceMotion ? false : "hidden"}
          variants={riseVariants}
          viewport={{ amount: 0.4, once: true }}
          whileInView="visible"
        >
          <span className="relative block size-10 shrink-0 overflow-hidden rounded-full">
            <Image
              alt="Retrato de Budi Pandu"
              className="object-cover"
              fill
              sizes="40px"
              src={shintaAsset("images/062febe8ad7682a7.png")}
              unoptimized
            />
          </span>
          <p className="text-[16px] leading-[22.4px] text-shinta-muted">Por</p>
          <h6 className="text-[16px] leading-6 font-bold text-shinta-ink xl:text-[18px] xl:leading-[25.2px]">
            Budi Pandu
          </h6>
        </motion.div>
      </div>

      <motion.div
        className="relative w-full overflow-hidden rounded-[16px] aspect-[4/3] md:rounded-[20px] xl:aspect-[1.59623] xl:rounded-[24px]"
        initial={reduceMotion ? false : "hidden"}
        variants={riseVariants}
        viewport={{ amount: 0.3, once: true }}
        whileInView="visible"
      >
        <Image
          alt={heading}
          className="object-cover"
          fill
          priority
          sizes="(min-width: 1280px) 840px, 100vw"
          src={shintaAsset("images/d8288cb19a756a51.jpg")}
          unoptimized
        />
      </motion.div>
    </>
  );
}
