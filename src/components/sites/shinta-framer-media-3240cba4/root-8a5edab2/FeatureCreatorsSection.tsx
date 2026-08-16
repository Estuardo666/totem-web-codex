"use client";

import { motion, useReducedMotion } from "framer-motion";

import { shintaAsset } from "../shared/site";

const revealTransition = {
  damping: 24,
  stiffness: 150,
  type: "spring" as const,
};

export function FeatureCreatorsSection() {
  const reduceMotion = useReducedMotion();
  const revealFrom = reduceMotion ? false : { opacity: 0, y: 28 };

  return (
    <section
      aria-labelledby="shinta-creators-heading"
      className="relative flex h-[740px] w-full items-center justify-center overflow-hidden bg-shinta-canvas px-5 md:h-[859px] lg:h-[591px] lg:py-[120px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[40px] -right-[195px] size-[420px] rounded-full border-[5px] border-shinta-lavender md:-top-[125px] md:-right-[160px] md:size-[590px] lg:-top-[260px] lg:-right-[150px] lg:size-[680px] lg:border-[7px]"
      />

      <div className="relative z-10 flex w-full max-w-[1000px] flex-col items-center justify-between gap-12 md:gap-16 lg:h-[351px] lg:flex-row lg:gap-10">
        <motion.div
          className="w-full max-w-[480px] text-left"
          initial={revealFrom}
          transition={revealTransition}
          viewport={{ amount: 0.45, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2
            className="text-[28px] leading-[1.08] font-bold tracking-[-1.12px] text-shinta-ink lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]"
            id="shinta-creators-heading"
          >
            Contenido liderado por creadores, crecimiento a largo plazo.
          </h2>
          <p className="mt-5 max-w-[470px] text-[16px] leading-[24px] text-shinta-stone lg:mt-6 lg:text-[18px] lg:leading-[27px]">
            Buscamos y evaluamos creadores de distintos nichos y comunidades,
            centrándonos en quienes encajan de forma natural con tu marca. El
            resultado es UGC auténtico, que se siente nativo y rinde de manera constante.
          </p>
        </motion.div>

        <motion.div
          className="relative w-full max-w-[480px] pb-5"
          initial={revealFrom}
          transition={{ ...revealTransition, delay: reduceMotion ? 0 : 0.12 }}
          viewport={{ amount: 0.4, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="aspect-[480/294] w-full overflow-hidden rounded-[24px] bg-shinta-stone">
            <video
              aria-label="Una creadora produciendo contenido en una tableta"
              autoPlay
              className="size-full object-cover"
              loop
              muted
              playsInline
              src={shintaAsset("videos/feature-creators.mp4")}
            />
          </div>

          <div className="absolute right-3 bottom-0 rounded-[12px] bg-shinta-lavender px-4 py-3 text-shinta-ink md:right-5 lg:px-[18px] lg:py-[14px]">
            <p className="text-[32px] leading-none font-bold tracking-[-1.28px] lg:text-[40px] lg:leading-[48px] lg:tracking-[-1.6px]">
              4.2M
            </p>
            <p className="mt-1 text-[14px] leading-5 lg:text-[16px] lg:leading-[22px]">
              Impresiones
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
