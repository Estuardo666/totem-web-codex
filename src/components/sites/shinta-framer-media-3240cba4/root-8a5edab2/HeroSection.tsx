"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { Fragment, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  type PanInfo,
  type Variants,
} from "framer-motion";

import { ShiftButtonContent } from "../shared/ShintaPrimitives";
import { shintaAsset } from "../shared/site";

const ribbonCopy =
  "ESTRATEGIA · CREATIVIDAD · TECNOLOGÍA · MARCA · CONTENIDO · ";

const services = [
  "ESTRATEGIA Y BRANDING",
  "PRODUCCIÓN AUDIOVISUAL",
  "SOFTWARE Y AUTOMATIZACIÓN",
];

const heroVideos = [
  {
    poster: "images/418ef3c59bda7b87.jpeg",
    src: "videos/hero-layer-front.mp4",
  },
  {
    poster: "images/6ea501bbff9ed14a.jpeg",
    src: "videos/hero-layer-middle.mp4",
  },
  {
    poster: "images/a46468b6396ae69e.jpeg",
    src: "videos/hero-layer-back.mp4",
  },
] as const;

const cardSlots = [
  "translate-x-0 translate-y-0 rotate-0",
  "-translate-x-[16px] translate-y-[13px] -rotate-[2deg] xl:-translate-x-[15px] xl:translate-y-[24px]",
  "-translate-x-[32px] translate-y-[26px] -rotate-[4deg] xl:-translate-x-[30px] xl:translate-y-[48px]",
] as const;

const heading = "Creamos marcas, contenido y tecnología que hacen avanzar negocios.";
const headingWords = heading.split(" ");

const headingVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.055,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    transition: { damping: 24, stiffness: 180, type: "spring" },
    y: 0,
  },
};

const servicesVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.34,
      staggerChildren: 0.06,
    },
  },
};

const serviceVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    y: 0,
  },
};

const mediaVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.18, duration: 0.72, ease: [0.16, 1, 0.3, 1] },
  },
};

const supportingVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    transition: { delay: 0.48, duration: 0.58, ease: [0.16, 1, 0.3, 1] },
    y: 0,
  },
};

const projectVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.62, duration: 0.58, ease: [0.16, 1, 0.3, 1] },
  },
};

const MotionLink = motion.create(Link);

export function HeroSection() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [cardOrder, setCardOrder] = useState([0, 1, 2]);
  const [isPlaying, setIsPlaying] = useState(false);
  const reduceMotion = useReducedMotion();

  const activeVideoIndex = cardOrder[0];

  function moveCard(direction: "left" | "right") {
    videoRefs.current.forEach((video) => video?.pause());
    setIsPlaying(false);
    setCardOrder((currentOrder) =>
      direction === "left"
        ? [currentOrder[1], currentOrder[2], currentOrder[0]]
        : [currentOrder[2], currentOrder[0], currentOrder[1]],
    );
  }

  function handleDragEnd(_: PointerEvent, info: PanInfo) {
    const isSwipe = Math.abs(info.offset.x) > 72 || Math.abs(info.velocity.x) > 500;

    if (isSwipe) {
      moveCard(info.offset.x < 0 ? "left" : "right");
    }
  }

  function togglePlayback() {
    const frontVideo = videoRefs.current[activeVideoIndex];

    if (!frontVideo) {
      return;
    }

    if (frontVideo.paused) {
      void frontVideo.play();
      return;
    }

    frontVideo.pause();
  }

  return (
    <section
      className="relative h-[1099px] overflow-hidden bg-shinta-canvas text-shinta-ink md:h-[1013px] xl:h-[900px]"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto h-full max-w-[1320px] px-5 xl:px-5">
        <motion.div
          animate="visible"
          className="absolute top-[88px] left-5 z-20 md:top-[89px] xl:top-[176px] xl:left-5"
          initial={reduceMotion ? false : "hidden"}
        >
          <motion.h1
            id="hero-heading"
            className="max-w-[335px] text-[32px] leading-[32px] font-bold tracking-[-1.28px] md:max-w-[680px] xl:max-w-[365px] xl:text-[64px] xl:leading-[64px] xl:tracking-[-2.56px]"
            variants={headingVariants}
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

          <motion.ul
            className="mt-[30px] space-y-[4px] md:mt-[29px] xl:mt-[31px]"
            variants={servicesVariants}
          >
            {services.map((service) => (
              <motion.li
                className="flex items-center gap-[7px] text-[12px] leading-[16.8px] font-semibold tracking-[0.7px]"
                key={service}
                variants={serviceVariants}
              >
                <span
                  aria-hidden="true"
                  className="text-[19px] leading-none text-shinta-pink"
                >
                  ✱
                </span>
                {service}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute top-[328px] left-1/2 z-0 h-[360px] w-[150vw] -translate-x-1/2 overflow-visible md:top-[323px] md:h-[370px] xl:top-[302px] xl:h-[500px] xl:w-[100vw]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 500"
        >
          <path
            d="M-90 374 C 220 505, 520 520, 806 294 S 1228 45, 1530 151"
            fill="none"
            id="shinta-hero-ribbon-path"
            stroke="var(--totem-tech)"
            strokeLinecap="round"
            strokeWidth="45"
          />
          <text
            fill="var(--totem-navy)"
            fontFamily="Open Sauce One, sans-serif"
            fontSize="15"
            fontWeight="600"
            letterSpacing="1.2"
          >
            <textPath href="#shinta-hero-ribbon-path" startOffset="-12%">
              {ribbonCopy.repeat(4)}
              <animate
                attributeName="startOffset"
                className="motion-reduce:hidden"
                dur="22s"
                from="-70%"
                repeatCount="indefinite"
                to="-12%"
              />
            </textPath>
          </text>
        </svg>

        <div className="absolute top-[271px] left-[calc(50%_-_8px)] z-10 h-[410px] w-[230px] -translate-x-1/2 md:top-[278px] md:left-[calc(50%_-_21px)] md:h-[418px] md:w-[234px] xl:top-[175px] xl:left-[500px] xl:h-[640px] xl:w-[360px] xl:translate-x-0">
          <motion.div
            animate="visible"
            className="relative h-full w-full"
            initial={reduceMotion ? false : "hidden"}
            variants={mediaVariants}
          >
            {heroVideos.map((video, videoIndex) => {
              const slot = cardOrder.indexOf(videoIndex);
              const isActive = slot === 0;

              return (
                <motion.div
                  animate={{ opacity: 1 }}
                  className={`absolute inset-0 transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${cardSlots[slot]}`}
                  initial={false}
                  key={video.src}
                  style={{ zIndex: heroVideos.length - slot }}
                >
                  <motion.div
                    className={`relative h-full w-full overflow-hidden rounded-[19px] bg-shinta-stone xl:rounded-[23px] ${
                      isActive ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
                    }`}
                    drag={isActive && !reduceMotion ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.72}
                    dragMomentum={false}
                    dragSnapToOrigin
                    onDragEnd={handleDragEnd}
                    style={{ touchAction: "pan-y" }}
                    whileDrag={{ scale: 0.985 }}
                  >
                    <video
                      aria-hidden={!isActive}
                      className="h-full w-full object-cover"
                      loop
                      muted
                      onPause={isActive ? () => setIsPlaying(false) : undefined}
                      onPlay={isActive ? () => setIsPlaying(true) : undefined}
                      playsInline
                      poster={shintaAsset(video.poster)}
                      preload="auto"
                      ref={(element) => {
                        videoRefs.current[videoIndex] = element;
                      }}
                      src={shintaAsset(video.src)}
                    />

                    {isActive ? (
                      <>
                        <div className="absolute top-[27%] left-1/2 flex -translate-x-1/2 items-center rounded-full bg-shinta-ink/95 px-2 py-1.5 text-white shadow-sm backdrop-blur-[2px] xl:top-[29%] xl:px-2.5 xl:py-2">
                          <button
                            aria-label="Mostrar el video anterior"
                            className="grid size-7 place-items-center rounded-full transition-transform duration-150 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white"
                            onClick={() => moveCard("right")}
                            type="button"
                          >
                            <ArrowLeft aria-hidden="true" className="size-4" />
                          </button>
                          <span className="px-1 text-[14px] leading-none font-semibold xl:px-2 xl:text-[16px]">
                            Swipe
                          </span>
                          <button
                            aria-label="Mostrar el siguiente video"
                            className="grid size-7 place-items-center rounded-full transition-transform duration-150 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white"
                            onClick={() => moveCard("left")}
                            type="button"
                          >
                            <ArrowRight aria-hidden="true" className="size-4" />
                          </button>
                        </div>

                        <button
                          aria-label={isPlaying ? "Pausar video principal" : "Reproducir video principal"}
                          className="absolute top-1/2 left-1/2 grid size-[60px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-shinta-ink/70 text-white backdrop-blur-[2px] transition-transform duration-150 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-shinta-pink xl:size-[70px]"
                          onClick={togglePlayback}
                          type="button"
                        >
                          {isPlaying ? (
                            <Pause aria-hidden="true" className="size-6 fill-current" />
                          ) : (
                            <Play
                              aria-hidden="true"
                              className="ml-1 size-6 fill-current xl:size-7"
                            />
                          )}
                        </button>
                      </>
                    ) : null}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          animate="visible"
          className="absolute top-[716px] right-5 left-5 z-20 md:top-[729px] xl:top-[626px] xl:right-0 xl:left-auto xl:w-[300px]"
          initial={reduceMotion ? false : "hidden"}
          variants={supportingVariants}
        >
          <p className="min-w-0 max-w-[350px] break-words text-[18px] leading-[25.2px] font-normal tracking-[-0.36px] text-shinta-stone">
            Desde estrategia y producción audiovisual hasta sitios web, plataformas, software y automatización. Diseñamos soluciones alrededor de problemas y objetivos reales.
          </p>

          <Link
            className="shift-button group mt-[24px] flex h-[56px] w-full items-center rounded-full text-[16px] font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink md:mt-[24px] md:h-[52px] xl:mt-[25px] xl:w-[260px]"
            href="/#contact"
          >
            <ShiftButtonContent
              className="[--shift-button-icon-size:56px] md:[--shift-button-icon-size:52px]"
              iconClassName="bg-totem-action text-totem-action-text"
              iconStrokeWidth={2.25}
              labelClassName="flex h-[56px] items-center rounded-full bg-totem-action px-[23px] text-totem-action-text md:h-[52px]"
            >
              Cuéntanos tu proyecto
            </ShiftButtonContent>
          </Link>
        </motion.div>

        <MotionLink
          animate="visible"
          aria-label="Ver el proyecto TransCity"
          className="group absolute top-[954px] right-5 left-5 z-20 flex h-[136px] items-center gap-[11px] rounded-[22px] bg-white p-[8px] pr-[45px] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink md:top-[858px] xl:top-[175px] xl:right-0 xl:left-auto xl:h-[140px] xl:w-[295px] xl:gap-[12px] xl:rounded-[24px] xl:pr-[38px]"
          href="/#projects"
          initial={reduceMotion ? false : "hidden"}
          variants={projectVariants}
          whileHover={reduceMotion ? undefined : { y: -4 }}
        >
          <span className="relative h-full w-[93px] shrink-0 overflow-hidden rounded-[16px] xl:w-[96px]">
            <Image
              alt="Proyecto TransCity"
              className="object-cover"
              fill
              sizes="96px"
              src={shintaAsset("images/d929f58f46477773.jpg")}
              unoptimized
            />
          </span>
          <span className="min-w-0">
            <span className="block text-[12px] leading-[16.8px] font-semibold tracking-[0.5px] text-shinta-lavender uppercase">
              PROYECTO DESTACADO
            </span>
            <span className="mt-[4px] block text-[18px] leading-[25.2px] font-semibold tracking-[-0.36px]">
              TransCity: plataformas, integraciones y automatización
            </span>
          </span>
          <span className="absolute top-[9px] right-[9px] grid size-[32px] place-items-center rounded-full bg-shinta-canvas">
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:rotate-45"
              strokeWidth={2.25}
            />
          </span>
        </MotionLink>
      </div>
    </section>
  );
}
