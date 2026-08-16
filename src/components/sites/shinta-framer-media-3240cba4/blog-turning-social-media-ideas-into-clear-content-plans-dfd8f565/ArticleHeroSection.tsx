"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";
import { shintaAsset } from "../shared/site";

const heading = "De la idea al sistema que la hace crecer";

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
  return (
    <>
      <div className="flex w-full flex-col items-center gap-4 md:gap-5 xl:gap-6">
        <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
          <motion.div
            className="flex"
            initial={false}
            variants={riseVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            <SectionEyebrow className="text-shinta-muted">
              Tótem Mass Media · Loja, Ecuador
            </SectionEyebrow>
          </motion.div>

          <motion.h1
            className="w-full max-w-full break-words text-center text-[32px] leading-9 font-bold tracking-[-1.28px] text-shinta-ink md:text-[44px] md:leading-[48px] md:tracking-[-1.76px] xl:text-[64px] xl:leading-[64px] xl:tracking-[-2.56px]"
            initial={false}
            variants={groupVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
            >
              <span className="sr-only">{heading}</span>
              <span aria-hidden="true" className="block">
                <motion.span className="block md:inline-block" variants={wordVariants}>
                  De la idea al
                </motion.span>{" "}
                <motion.span className="block md:inline-block" variants={wordVariants}>
                  sistema que la
                </motion.span>{" "}
                <motion.span className="block md:inline-block" variants={wordVariants}>
                  hace crecer
                </motion.span>
              </span>
          </motion.h1>
        </div>

        <motion.div
          className="flex h-auto max-w-full flex-wrap items-center justify-center gap-2 text-center"
          initial={false}
          variants={riseVariants}
          viewport={{ amount: 0.4, once: true }}
          whileInView="visible"
        >
          <span className="relative block size-10 shrink-0 overflow-hidden rounded-full">
            <Image
              alt="Tótem Mass Media"
              className="object-cover"
              fill
              sizes="40px"
              src="/brand/favicon.png"
              unoptimized
            />
          </span>
          <p className="text-[16px] leading-[22.4px] text-shinta-muted">Agencia creativa y tecnológica</p>
          <h6 className="hidden text-[16px] leading-6 font-bold text-shinta-ink md:block xl:text-[18px] xl:leading-[25.2px]">
            Tótem Mass Media
          </h6>
        </motion.div>
      </div>

      <motion.div
        className="relative w-full overflow-hidden rounded-[16px] aspect-[4/3] md:rounded-[20px] xl:aspect-[1.59623] xl:rounded-[24px]"
        initial={false}
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
