"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";
import { ScribbleStroke } from "./ScribbleStroke";

const VISION_IMAGE_SRC =
  "/sites/shinta-framer-media-3240cba4/about-us-57424c1f/images/vision-desk.jpg";

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

export function VisionSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="shinta-vision-heading"
      className="relative flex items-center justify-center bg-shinta-canvas px-5 py-[72px] md:py-24 xl:py-[120px]"
    >
      <div className="relative flex w-full max-w-[1000px] flex-col items-center gap-8 md:flex-row md:gap-12 xl:gap-[130px]">
        <ScribbleStroke
          className="hidden -top-[231px] -left-[572px] -z-10 h-[824px] w-[1070px] xl:block"
          variant="pink"
        />

        <motion.div
          className="aspect-[460/281] w-full shrink-0 overflow-hidden rounded-[24px] md:w-[45%] xl:aspect-[460/280.79] xl:w-[460px]"
          initial={reduceMotion ? undefined : "hidden"}
          variants={imageVariants}
          viewport={{ amount: 0.4, once: true }}
          whileInView="visible"
        >
          <motion.div
            className="relative size-full"
            initial={reduceMotion ? undefined : "hidden"}
            variants={innerImageVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            <Image
          alt="Equipo creativo revisando una solución digital"
              className="object-cover"
              fill
              sizes="(min-width: 1200px) 460px, (min-width: 768px) 45vw, 100vw"
              src={VISION_IMAGE_SRC}
              unoptimized
            />
          </motion.div>
        </motion.div>

        <div className="flex w-full max-w-full flex-col gap-8 md:max-w-none md:flex-1 xl:w-[410px] xl:max-w-[410px] xl:flex-none">
          <motion.div
            initial={reduceMotion ? undefined : "hidden"}
            variants={eyebrowVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            <SectionEyebrow className="inline-flex rounded-full bg-shinta-pink px-2 py-1 text-shinta-ink">
              Tecnología
            </SectionEyebrow>
          </motion.div>

          <motion.h2
            className="text-[34px] leading-[38px] font-bold tracking-[-1.36px] text-shinta-ink md:text-[44px] md:leading-[48px] md:tracking-[-1.76px] xl:text-[64px] xl:leading-[70.4px] xl:tracking-[-2.56px]"
            id="shinta-vision-heading"
            initial={reduceMotion ? undefined : "hidden"}
            variants={textVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            Construir para ejecutar y escalar.
          </motion.h2>

          <motion.p
            className="text-[16px] leading-[24px] text-shinta-stone xl:text-[18px] xl:leading-[27px]"
            initial={reduceMotion ? undefined : "hidden"}
            variants={textVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            Construir los sitios, plataformas, sistemas y automatizaciones que permiten ejecutar y escalar. La web es una herramienta de negocio, no únicamente una vitrina digital.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
