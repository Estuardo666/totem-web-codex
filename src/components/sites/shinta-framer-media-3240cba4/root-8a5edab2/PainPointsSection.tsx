"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const painPoints = [
  "Colaboraciones con influencers que generan vistas, pero no resultados",
  "Publicar con constancia, pero lograr poca interacción",
  "Contenido que se ve «bonito», pero no funciona",
  "Campañas que se sienten forzadas y demasiado comerciales",
  "Sin una dirección ni estrategia de contenido claras",
] as const;

const cardPositions = [
  "left-[6%] w-[380px] max-md:left-[5%] max-md:w-[270px]",
  "right-[6%] w-[318px] max-md:right-auto max-md:left-[5%] max-md:w-[270px]",
  "left-1/2 w-[282px] -translate-x-1/2 max-md:left-auto max-md:right-[12%] max-md:w-[270px] max-md:translate-x-0",
  "left-[14%] w-[245px] max-md:left-[28%] max-md:w-[270px]",
  "right-[14%] w-[290px] max-md:right-auto max-md:left-[7%] max-md:w-[270px]",
] as const;

const cardStartProgress = [0, 0.13, 0.26, 0.47, 0.6] as const;

type PainPointCardProps = {
  index: number;
  painPoint: (typeof painPoints)[number];
  progress: MotionValue<number>;
};

function PainPointCard({ index, painPoint, progress }: PainPointCardProps) {
  const start = cardStartProgress[index];
  const y = useTransform(
    progress,
    [start, start + 0.07, start + 0.2, start + 0.34, start + 0.43],
    [430, 245, 30, -250, -430],
  );
  const opacity = useTransform(
    progress,
    [start, start + 0.045, start + 0.35, start + 0.43],
    [0, 1, 1, 0],
  );

  return (
    <li
      className={`absolute top-1/2 ${cardPositions[index]}`}
      key={painPoint}
    >
      <motion.div
        className="transform-gpu rounded-[14px] bg-shinta-stone px-6 py-6 text-shinta-canvas will-change-transform"
        style={{ opacity, y }}
      >
        <span
          aria-hidden="true"
          className="mb-3 grid size-8 place-items-center rounded-full bg-shinta-orange text-[25px] leading-none font-normal text-shinta-stone"
        >
          ×
        </span>
        <p className="text-[24px] leading-[33.6px] font-bold tracking-[-0.96px]">
          {painPoint}
        </p>
      </motion.div>
    </li>
  );
}

export function PainPointsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: sectionRef,
  });
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    mass: 0.22,
    stiffness: 210,
  });
  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.56, 0.72, 1],
    ["#f7f8f6", "#f7f8f6", "#032143", "#032143"],
  );
  const headingColor = useTransform(
    smoothProgress,
    [0, 0.56, 0.72, 1],
    ["#032143", "#032143", "#f7f8f6", "#f7f8f6"],
  );

  if (reduceMotion) {
    return (
      <section className="bg-shinta-canvas px-5 py-24 text-shinta-ink" ref={sectionRef}>
        <h2 className="mx-auto max-w-[690px] text-center text-[28px] leading-8 font-bold tracking-[-1.12px] md:text-[64px] md:leading-[70.4px] md:tracking-[-2.56px]">
          Las redes sociales parecen más difíciles de lo que deberían
        </h2>
        <ul className="mx-auto mt-16 grid max-w-[1100px] gap-5 md:grid-cols-2">
          {painPoints.map((painPoint) => (
            <li
              className="rounded-[14px] bg-shinta-stone px-6 py-6 text-shinta-canvas"
              key={painPoint}
            >
              <span
                aria-hidden="true"
                className="mb-3 grid size-8 place-items-center rounded-full bg-shinta-orange text-[25px] leading-none font-normal text-shinta-stone"
              >
                ×
              </span>
              <p className="text-[24px] leading-[33.6px] font-bold tracking-[-0.96px]">
                {painPoint}
              </p>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section
      className="relative h-[3600px] overflow-clip px-5 max-[480px]:h-[3376px] max-[480px]:px-0"
      ref={sectionRef}
    >
      <motion.div
        className="sticky top-0 h-screen min-h-[900px] overflow-hidden max-md:min-h-[650px]"
        style={{ backgroundColor }}
      >
        <motion.h2
          className="absolute top-1/2 left-1/2 z-10 w-[690px] -translate-x-1/2 -translate-y-1/2 text-center text-[64px] leading-[70.4px] font-bold tracking-[-2.56px] max-md:w-[340px] max-md:text-[28px] max-md:leading-8 max-md:tracking-[-1.12px]"
          style={{ color: headingColor }}
        >
          Las redes sociales parecen más difíciles de lo que deberían
        </motion.h2>

        <ul className="absolute inset-0 z-20 list-none" aria-label="Problemas frecuentes en redes sociales">
          {painPoints.map((painPoint, index) => (
            <PainPointCard
              index={index}
              key={painPoint}
              painPoint={painPoint}
              progress={smoothProgress}
            />
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
