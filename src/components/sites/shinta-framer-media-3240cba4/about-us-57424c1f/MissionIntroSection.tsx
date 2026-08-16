"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";
import { ScribbleStroke } from "./ScribbleStroke";

const MISSION_IMAGE_SRC =
  "/sites/shinta-framer-media-3240cba4/about-us-57424c1f/images/mission-phone-mockup.png";

const eyebrowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { damping: 22, stiffness: 180, type: "spring" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { damping: 22, stiffness: 150, type: "spring" },
  },
};

const innerImageVariants: Variants = {
  hidden: { scale: 1.2 },
  visible: {
    scale: 1,
    transition: { damping: 22, stiffness: 150, type: "spring" },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { damping: 24, stiffness: 180, type: "spring" },
  },
};

export function MissionIntroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="shinta-mission-intro-heading"
      className="relative flex items-center justify-center bg-shinta-canvas px-5 py-20 md:py-[110px] xl:py-[150px]"
    >
      <div className="relative flex w-full max-w-[1000px] flex-col items-center gap-10 md:flex-row md:gap-12 xl:gap-[130px]">
        <ScribbleStroke
          className="hidden -top-[365px] left-[281px] -z-10 h-[1202px] w-[1560px] xl:block"
          variant="lavender"
        />

        <div className="flex w-full max-w-full flex-col gap-8 md:max-w-none md:flex-1 xl:w-[410px] xl:max-w-[410px] xl:flex-none">
          <motion.div
            initial={reduceMotion ? undefined : "hidden"}
            variants={eyebrowVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            <SectionEyebrow className="inline-flex rounded-full bg-shinta-pink px-2 py-1 text-shinta-ink">
              Estrategia
            </SectionEyebrow>
          </motion.div>

          <motion.h2
            className="text-[34px] leading-[38px] font-bold tracking-[-1.36px] text-shinta-ink md:text-[44px] md:leading-[48px] md:tracking-[-1.76px] xl:text-[64px] xl:leading-[70.4px] xl:tracking-[-2.56px]"
            id="shinta-mission-intro-heading"
            initial={reduceMotion ? undefined : "hidden"}
            variants={textVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            Entender el negocio antes de construir.
          </motion.h2>

          <motion.p
            className="text-[16px] leading-[24px] text-shinta-stone xl:text-[18px] xl:leading-[27px]"
            initial={reduceMotion ? undefined : "hidden"}
            variants={textVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            Entender el negocio, la marca, el público y el objetivo es la base para construir una identidad coherente, contenido útil y soluciones digitales alrededor de objetivos reales.
          </motion.p>
        </div>

        <motion.div
          className="w-full max-w-[320px] shrink-0 self-center aspect-[362/640] md:w-[320px] md:max-w-none md:h-[566px] md:aspect-auto xl:h-[640px] xl:w-[362px]"
          initial={reduceMotion ? undefined : "hidden"}
          variants={imageVariants}
          viewport={{ amount: 0.4, once: true }}
          whileInView="visible"
        >
          <motion.div
            className="relative size-full overflow-hidden rounded-[24px]"
            initial={reduceMotion ? undefined : "hidden"}
            variants={innerImageVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            <Image
            alt="Producción audiovisual de Tótem"
              className="object-contain"
              fill
              sizes="(min-width: 1200px) 362px, (min-width: 768px) 320px, 320px"
              src={MISSION_IMAGE_SRC}
              unoptimized
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
