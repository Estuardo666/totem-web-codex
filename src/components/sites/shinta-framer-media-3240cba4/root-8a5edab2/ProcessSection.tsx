"use client";

import {
  BadgeCheck,
  ChartNoAxesColumnIncreasing,
  MessageSquareText,
  PlaySquare,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

import { SectionEyebrow } from "../shared/ShintaPrimitives";

type ProcessStep = {
  body: string;
  color: string;
  delay: string;
  icon: LucideIcon;
  number: string;
  title: string;
};

const processSteps: ProcessStep[] = [
  {
    body: "Entender el negocio, la marca, el público y el objetivo.",
    color: "border-shinta-pink bg-shinta-pink",
    delay: "delay-[0ms]",
    icon: MessageSquareText,
    number: "01",
    title: "Estrategia",
  },
  {
    body: "Convertir la estrategia en identidad, diseño, fotografía, video y contenido.",
    color: "border-shinta-lavender bg-shinta-lavender",
    delay: "delay-[110ms]",
    icon: PlaySquare,
    number: "02",
    title: "Creatividad",
  },
  {
    body: "Construir sitios, plataformas, sistemas y automatizaciones.",
    color: "border-totem-surface bg-totem-surface",
    delay: "delay-[220ms]",
    icon: BadgeCheck,
    number: "03",
    title: "Tecnología",
  },
  {
    body: "Construimos el ecosistema que una marca necesita para crecer.",
    color: "border-shinta-green bg-shinta-green",
    delay: "delay-[330ms]",
    icon: ChartNoAxesColumnIncreasing,
    number: "04",
    title: "Crecimiento",
  },
];

const cardVariants: Variants = {
  hover: { transform: "translateY(-10px)" },
  rest: { transform: "translateY(0px)" },
};

// Wipe the inverted copy of the content up from the bottom edge. Duplicating
// the text and clipping it gives a crisp colour swap that no colour transition
// can match.
const washVariants: Variants = {
  hover: { clipPath: "inset(0% 0% 0% 0%)" },
  rest: { clipPath: "inset(100% 0% 0% 0%)" },
};

const iconVariants: Variants = {
  hover: { transform: "translateX(2px) translateY(-2px) scale(1.12)" },
  rest: { transform: "translateX(0px) translateY(0px) scale(1)" },
};

const titleVariants: Variants = {
  hover: { transform: "translateY(-6px)" },
  rest: { transform: "translateY(0px)" },
};

const bodyVariants: Variants = {
  hover: { opacity: 1, transform: "translateY(-6px)" },
  rest: { opacity: 0.72, transform: "translateY(0px)" },
};

type ProcessCardBodyProps = {
  inverted?: boolean;
  reduceMotion: boolean;
  step: ProcessStep;
};

function ProcessCardBody({ inverted, reduceMotion, step }: ProcessCardBodyProps) {
  return (
    <div
      className={cn(
        "flex h-[310px] flex-col justify-end px-[14px] py-[18px] xl:h-[318px] xl:px-[14px] xl:py-[18px]",
        inverted && "text-shinta-canvas",
      )}
    >
      <motion.h3
        className="text-[32px] leading-[36px] font-bold tracking-[-1.28px] xl:text-[32px] xl:leading-[38.4px]"
        transition={
          reduceMotion
            ? { duration: 0 }
            : { bounce: 0.2, duration: 0.5, type: "spring" }
        }
        variants={reduceMotion ? undefined : titleVariants}
      >
        {step.title}
      </motion.h3>
      <motion.p
        className={cn(
          "mt-[10px] max-w-[250px] text-[18px] leading-[25.2px] font-normal tracking-[-0.36px] xl:text-[16px] xl:leading-[22.4px] xl:tracking-[-0.32px]",
          inverted ? "text-totem-off-white" : "text-shinta-ink",
        )}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.28, ease: [0.23, 1, 0.32, 1] }
        }
        variants={reduceMotion ? undefined : bodyVariants}
      >
        {step.body}
      </motion.p>
    </div>
  );
}

export function ProcessSection() {
  const listRef = useRef<HTMLOListElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const list = listRef.current;

    if (!list) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -10%",
        threshold: 0.08,
      },
    );

    observer.observe(list);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="min-h-[2062px] overflow-hidden bg-shinta-canvas px-5 py-[80px] text-shinta-ink md:min-h-[2032px] md:py-[96px] xl:h-[886px] xl:min-h-0 xl:py-[120px]"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionEyebrow className="inline-flex rounded-full bg-shinta-pink px-[10px] py-[3px] text-[10px] leading-[13px] tracking-[0.65px]">
          cómo trabajamos
        </SectionEyebrow>

        <h2
          id="process-heading"
          className="mt-[12px] max-w-[335px] text-[28px] leading-[31px] font-bold tracking-[-1.12px] md:max-w-[630px] xl:mt-[10px] xl:max-w-[850px] xl:text-[64px] xl:leading-[70.4px] xl:tracking-[-2.56px]"
        >
          Estrategia, creatividad y tecnología para transformar negocios.
        </h2>

        <ol
          className="mt-[64px] grid grid-cols-1 gap-[16px] md:mt-[72px] md:gap-[18px] xl:mt-[46px] xl:grid-cols-4 xl:gap-[8px]"
          ref={listRef}
        >
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <li
                className={cn(
                  "transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
                  step.delay,
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0",
                )}
                key={step.number}
              >
                <motion.div
                  className={cn(
                    "relative h-[380px] overflow-hidden rounded-[24px] border-[4px] md:h-[380px] xl:h-[394px] xl:rounded-[26px]",
                    step.color,
                  )}
                  initial="rest"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { bounce: 0.18, duration: 0.5, type: "spring" }
                  }
                  variants={reduceMotion ? undefined : cardVariants}
                  whileFocus="hover"
                  whileHover="hover"
                >
                  <div className="flex h-[66px] items-center justify-between border-b-[4px] border-inherit bg-shinta-canvas px-[12px] xl:h-[68px] xl:px-[14px]">
                    <span className="text-[24px] leading-none font-bold tracking-[-0.72px] xl:text-[26px]">
                      {step.number}
                    </span>
                    <motion.span
                      className="inline-flex"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { bounce: 0.3, duration: 0.45, type: "spring" }
                      }
                      variants={reduceMotion ? undefined : iconVariants}
                    >
                      <Icon aria-hidden="true" className="size-[28px]" strokeWidth={2} />
                    </motion.span>
                  </div>

                  <div className="relative">
                    <ProcessCardBody reduceMotion={reduceMotion} step={step} />

                    {reduceMotion ? null : (
                      <motion.div
                        aria-hidden="true"
                        className="absolute inset-0 bg-shinta-ink"
                        style={{ clipPath: "inset(100% 0% 0% 0%)" }}
                        transition={{ duration: 0.44, ease: [0.23, 1, 0.32, 1] }}
                        variants={washVariants}
                      >
                        <ProcessCardBody
                          inverted
                          reduceMotion={reduceMotion}
                          step={step}
                        />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
