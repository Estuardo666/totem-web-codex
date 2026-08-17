"use client";

import { motion, type Variants } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";

const heading = "Servicios y proyectos";

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
  return (
    <section
      aria-labelledby="blog-heading"
      className="flex items-center justify-center bg-shinta-canvas px-5"
    >
      <div className="flex min-w-0 w-full max-w-[1280px] flex-col items-start gap-4 md:flex-row md:items-end md:gap-5 xl:gap-6">
        <div className="flex min-w-0 w-full flex-col gap-2">
          <motion.div
            className="flex"
            initial={false}
            variants={riseVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            <SectionEyebrow className="inline-flex rounded-full bg-shinta-pink px-2 py-1 text-shinta-ink">
              Tótem Mass Media
            </SectionEyebrow>
          </motion.div>

          <motion.h1
            className="w-full max-w-full break-words text-[40px] leading-[42px] font-bold tracking-[-1.6px] text-shinta-ink md:text-[52px] md:leading-[54px] md:tracking-[-2.08px] xl:text-[72px] xl:leading-[72px] xl:tracking-[-2.88px]"
            id="blog-heading"
            initial={false}
            variants={groupVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
            >
              <span className="sr-only">{heading}</span>
              <span aria-hidden="true" className="block">
                <motion.span className="block md:inline-block" variants={wordVariants}>
                  Servicios y
                </motion.span>{" "}
                <motion.span className="block md:inline-block" variants={wordVariants}>
                  proyectos
                </motion.span>
              </span>
          </motion.h1>
        </div>

        <motion.p
          className="min-w-0 w-full max-w-[350px] break-words text-[16px] leading-6 text-shinta-stone md:max-w-[45%] xl:max-w-[40%] xl:text-[18px] xl:leading-[27px]"
          initial={false}
          variants={riseVariants}
          viewport={{ amount: 0.4, once: true }}
          whileInView="visible"
        >
          Producción audiovisual, marketing digital, estrategia de contenido y
          desarrollo web. Y los proyectos donde lo hemos aplicado.
        </motion.p>
      </div>
    </section>
  );
}
