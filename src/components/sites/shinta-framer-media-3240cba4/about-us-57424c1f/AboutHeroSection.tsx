"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";

const heroImageSrc =
  "/sites/shinta-framer-media-3240cba4/about-us-57424c1f/images/hero-team-portrait.jpg";

const heading = "Una agencia creativa y digital";
const headingWords = heading.split(" ");

const paragraph =
  "Tótem Mass Media es una agencia creativa y digital con sede en Loja, Ecuador. Combinamos producción audiovisual, marketing digital, estrategia de contenido y desarrollo web para ayudar a empresas y organizaciones a comunicar mejor y vender más.";

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

export function AboutHeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative flex items-center justify-center overflow-clip bg-transparent px-5 pb-[120px]"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-start gap-10 md:gap-14 xl:gap-20">
        <div className="flex w-full flex-col items-start gap-6 md:flex-row md:items-end md:gap-6">
          <motion.div
            className="flex w-full flex-col gap-2 md:w-[58%] md:max-w-[721px]"
            initial={false}
            variants={groupVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            <motion.div variants={wordVariants}>
              <SectionEyebrow className="inline-flex rounded-full bg-shinta-pink px-2 py-1 text-shinta-ink">
          Tótem Mass Media
              </SectionEyebrow>
            </motion.div>

            <h1
              className="text-[40px] leading-[42px] font-bold tracking-[-1.6px] text-shinta-ink md:text-[52px] md:leading-[54px] md:tracking-[-2.08px] xl:text-[72px] xl:leading-[72px] xl:tracking-[-2.88px]"
              id="about-hero-heading"
            >
              <span className="sr-only">{heading}</span>
              <span aria-hidden="true" className="block">
                {headingWords.map((word, index) => (
                  <Fragment key={`${word}-${index}`}>
                    <motion.span
                      className="inline-block"
                      variants={wordVariants}
                    >
                      {word}
                    </motion.span>
                    {index < headingWords.length - 1 ? " " : null}
                  </Fragment>
                ))}
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="min-w-0 w-full max-w-[350px] md:max-w-[40%]"
            initial={false}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ amount: 0.4, once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="max-w-full break-words text-[16px] leading-[24px] font-normal text-shinta-stone md:text-[18px] md:leading-[27px]">
              {paragraph}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] md:aspect-[1242/863] xl:rounded-[40px]"
          initial={reduceMotion ? false : "hidden"}
          variants={maskVariants}
          viewport={{ amount: 0.3, once: true }}
          whileInView="visible"
        >
          <motion.div
            className="absolute inset-0"
            initial={reduceMotion ? false : "hidden"}
            variants={imageVariants}
            viewport={{ amount: 0.3, once: true }}
            whileInView="visible"
          >
            <Image
              alt="Equipo creativo de Tótem Mass Media"
              className="object-cover"
              fill
              sizes="(min-width: 1200px) 1242px, 100vw"
              src={heroImageSrc}
              unoptimized
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
