"use client";

import { Fragment, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";

const IMAGE_BASE = "/sites/shinta-framer-media-3240cba4/about-us-57424c1f/images";

const heading = "Building contents that matters";
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

type Tile = {
  key: string;
  src: string;
  alt: string;
  top: number;
  left: number;
  width: number;
  height: number;
  radius: number;
  translateXClass: string;
  parallaxEnd: number;
  mobileAspect: string;
};

const tiles: Tile[] = [
  {
    key: "big",
    src: `${IMAGE_BASE}/collage-large.jpg`,
    alt: "A portrait of a woman with white hair surrounded by daisies",
    top: 156,
    left: 295,
    width: 410,
    height: 729,
    radius: 32,
    translateXClass: "",
    parallaxEnd: 100,
    mobileAspect: "aspect-[3/4]",
  },
  {
    key: "one",
    src: `${IMAGE_BASE}/collage-tall-right.jpg`,
    alt: "A neon-lit portrait in blue and orange light",
    top: 183,
    left: 210,
    width: 194,
    height: 320,
    radius: 24,
    translateXClass: "-translate-x-[97px]",
    parallaxEnd: -300,
    mobileAspect: "aspect-[3/4]",
  },
  {
    key: "two",
    src: `${IMAGE_BASE}/collage-wide-bottom.jpg`,
    alt: "A silhouette framed by swirling purple light trails",
    top: 0,
    left: 890,
    width: 302,
    height: 226.988,
    radius: 24,
    translateXClass: "-translate-x-[151px]",
    parallaxEnd: -50,
    mobileAspect: "aspect-[4/3]",
  },
  {
    key: "three",
    src: `${IMAGE_BASE}/collage-wide-top.jpg`,
    alt: "A close-up of hands typing against an orange backdrop",
    top: 963,
    left: 56,
    width: 252,
    height: 189,
    radius: 24,
    translateXClass: "",
    parallaxEnd: -800,
    mobileAspect: "aspect-[4/3]",
  },
  {
    key: "four",
    src: `${IMAGE_BASE}/collage-tall-left.jpg`,
    alt: "A model in a bomber jacket posing on a yellow backdrop",
    top: 1016,
    left: 760,
    width: 194,
    height: 345,
    radius: 24,
    translateXClass: "",
    parallaxEnd: -400,
    mobileAspect: "aspect-[3/4]",
  },
];

export function CollageSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: sectionRef,
  });

  const bigY = useTransform(scrollYProgress, [0, 1], [0, tiles[0].parallaxEnd]);
  const oneY = useTransform(scrollYProgress, [0, 1], [0, tiles[1].parallaxEnd]);
  const twoY = useTransform(scrollYProgress, [0, 1], [0, tiles[2].parallaxEnd]);
  const threeY = useTransform(scrollYProgress, [0, 1], [0, tiles[3].parallaxEnd]);
  const fourY = useTransform(scrollYProgress, [0, 1], [0, tiles[4].parallaxEnd]);

  const motionYByKey: Record<string, MotionValue<number>> = {
    big: bigY,
    one: oneY,
    two: twoY,
    three: threeY,
    four: fourY,
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="shinta-collage-heading"
      className="relative flex items-center justify-center bg-shinta-canvas px-5 py-[72px] md:py-[120px] xl:py-[120px]"
    >
      <div className="flex w-full max-w-[1000px] flex-col items-center gap-12 md:gap-[72px] xl:gap-[100px]">
        <h2
          className="text-center text-[34px] leading-[38px] font-bold tracking-[-1.36px] text-shinta-ink md:text-[44px] md:leading-[48px] md:tracking-[-1.76px] xl:text-[64px] xl:leading-[70.4px] xl:tracking-[-2.56px]"
          id="shinta-collage-heading"
        >
          <span className="sr-only">{heading}</span>
          <motion.span
            aria-hidden="true"
            className="block"
            initial={reduceMotion ? false : "hidden"}
            variants={groupVariants}
            viewport={{ amount: 0.45, once: true }}
            whileInView="visible"
          >
            {headingWords.map((word, index) => (
              <Fragment key={`${word}-${index}`}>
                <motion.span className="inline-block" variants={wordVariants}>
                  {word}
                </motion.span>
                {index < headingWords.length - 1 ? " " : null}
              </Fragment>
            ))}
          </motion.span>
        </h2>

        {/* Mobile: 2-column grid, no parallax */}
        <div className="grid w-full grid-cols-2 gap-3 md:hidden">
          {tiles.map((tile) => (
            <div
              key={tile.key}
              className={`relative overflow-hidden rounded-[16px] ${tile.mobileAspect}`}
            >
              <Image alt={tile.alt} className="object-cover" fill src={tile.src} unoptimized />
            </div>
          ))}
        </div>

        {/* Tablet+: absolute scattered collage with scroll parallax */}
        <div className="hidden h-[665px] w-full items-start justify-center md:flex xl:h-[924px]">
          <div className="relative h-[924px] w-[1000px] origin-top scale-[0.72] xl:scale-100">
            {tiles.map((tile) => (
              <motion.div
                key={tile.key}
                className={`absolute overflow-hidden ${tile.translateXClass}`}
                style={{
                  top: tile.top,
                  left: tile.left,
                  width: tile.width,
                  height: tile.height,
                  borderRadius: tile.radius,
                  y: reduceMotion ? 0 : motionYByKey[tile.key],
                }}
              >
                <Image alt={tile.alt} className="object-cover" fill src={tile.src} unoptimized />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
