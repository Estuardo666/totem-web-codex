"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";
import { shintaAsset } from "../shared/site";
import { ContactFormCard } from "./ContactFormCard";

const heading = "Let’s talk content that actually works.";
const headingWords = heading.split(" ");

const STROKE_LENGTH = 1533.5;
const STROKE_PATH =
  "M 0 92.158 C 124.286 -3.096 331.666 20.54 280.209 56.516 C 205.354 108.848 329.739 94.962 405.624 75.751 C 481.608 56.516 524.244 43.192 543.751 22.57 C 579.343 -15.052 493.19 -1.191 472.852 31.616 C 446.193 74.621 591.28 77.333 718.317 40.674 C 1032.987 -50.129 946.116 66.255 1087.503 88.481 C 1125.422 94.441 1181 75.751 1181 75.751";

const brands = [
  { alt: "Mandala", src: shintaAsset("images/26f35051812b2aae.png") },
  { alt: "Batavia", src: shintaAsset("images/7253d2f6ec5e14e6.png") },
  { alt: "Bhima", src: shintaAsset("images/b13b3ba827797b0f.png") },
  { alt: "Pandawa", src: shintaAsset("images/ebd7dec76b75c1e2.png") },
  { alt: "Sadewa", src: shintaAsset("images/e0e1fd5214a17d82.png") },
] as const;

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

export function ContactHeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="shinta-contact-heading"
      className="relative flex items-center justify-center overflow-clip bg-shinta-canvas px-5 pb-18 md:pb-24 xl:pb-[120px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden place-items-center xl:grid"
      >
        <svg
          className="aspect-square w-full text-[#e7e5e4]"
          fill="none"
          viewBox="0 0 1170 1170"
        >
          <motion.path
            animate={{ strokeDashoffset: 0 }}
            d={STROKE_PATH}
            fill="none"
            initial={reduceMotion ? false : { strokeDashoffset: STROKE_LENGTH }}
            stroke="currentColor"
            strokeDasharray={STROKE_LENGTH}
            strokeLinecap="butt"
            strokeWidth={10}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { delay: 0.2, duration: 1.6, ease: [0.22, 1, 0.36, 1] }
            }
          />
        </svg>
      </div>

      <div className="relative z-10 flex w-full max-w-[1280px] flex-col items-stretch gap-8 xl:h-[544px] xl:flex-row xl:items-center xl:gap-6">
        <div className="flex min-w-0 flex-1 flex-col items-start justify-between gap-10 xl:h-full xl:gap-0">
          <div className="flex flex-col gap-6">
            <motion.h1
              className="text-[40px] leading-[42px] font-bold tracking-[-1.6px] text-shinta-ink md:text-[52px] md:leading-[54px] md:tracking-[-2.08px] xl:text-[72px] xl:leading-[72px] xl:tracking-[-2.88px]"
              id="shinta-contact-heading"
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

            <motion.p
              className="max-w-full text-[16px] leading-6 text-shinta-stone xl:text-[18px] xl:leading-[27px]"
              initial={reduceMotion ? false : "hidden"}
              variants={riseVariants}
              viewport={{ amount: 0.4, once: true }}
              whileInView="visible"
            >
              Share your goals and we’ll help shape content that fits how people
              actually scroll today.
            </motion.p>
          </div>

          <motion.div
            className="flex w-full min-w-0 flex-col justify-center gap-[15px] xl:order-none"
            initial={reduceMotion ? false : "hidden"}
            variants={riseVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            <SectionEyebrow className="text-shinta-muted">
              30+ Brands leveled up their content game
            </SectionEyebrow>

            <div className="h-[30px] w-full overflow-hidden [mask-image:linear-gradient(270deg,transparent_0%,black_15.537%,black_85.816%,transparent_100%)] [-webkit-mask-image:linear-gradient(270deg,transparent_0%,black_15.537%,black_85.816%,transparent_100%)]">
              <ul className="flex list-none items-center gap-6">
                {brands.map((brand) => (
                  <li
                    className="flex h-[30px] w-[127px] shrink-0 items-center"
                    key={brand.alt}
                  >
                    <span className="relative block h-6 w-[102px]">
                      <Image
                        alt={brand.alt}
                        className="object-contain object-left"
                        fill
                        sizes="102px"
                        src={brand.src}
                        unoptimized
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <ContactFormCard />
      </div>
    </section>
  );
}
