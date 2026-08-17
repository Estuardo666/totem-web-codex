"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const isolatedPoints = [
  "Piezas sueltas sin estrategia",
  "Publicar por publicar",
  "Plantillas genéricas",
  "Contenido o web, nunca ambos",
  "Promesas sin evidencia",
] as const;

const totemPoints = [
  "Estrategia antes de producir",
  "Contenido con objetivo y medición",
  "Sitios web hechos a medida",
  "Producción, marketing y web integrados",
  "Proyectos reales que lo demuestran",
] as const;

// shinta.framer.media sits the two cards side by side with a gap and lifts
// whichever one is hovered.
const cardVariants: Variants = {
  hover: { transform: "translateY(-8px)" },
  rest: { transform: "translateY(0px)" },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.08, staggerChildren: 0.07 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, transform: "translateY(14px)" },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: { damping: 24, stiffness: 190, type: "spring" },
  },
};

type ComparisonMarkProps = {
  positive?: boolean;
};

function ComparisonMark({ positive = false }: ComparisonMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "mt-[3px] grid size-[20px] shrink-0 place-items-center rounded-full",
        positive ? "bg-shinta-ink" : "bg-totem-text-secondary/45",
      )}
      style={{ color: "var(--totem-off-white)" }}
    >
      <Check className="size-[12px]" strokeWidth={3.25} />
    </span>
  );
}

export function ComparisonSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="shinta-comparison-heading"
      className="flex w-full items-center justify-center bg-shinta-canvas px-5 py-20 lg:py-[150px]"
    >
      <div className="flex w-full max-w-[850px] flex-col items-center gap-12 lg:gap-[54px]">
        <motion.h2
          className="text-center text-[28px] leading-[1.08] font-bold tracking-[-1.12px] text-shinta-ink lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]"
          id="shinta-comparison-heading"
          initial={reduceMotion ? false : { opacity: 0, transform: "translateY(20px)" }}
          transition={{ damping: 24, stiffness: 170, type: "spring" }}
          viewport={{ amount: 0.7, once: true }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        >
          Una solución completa para tu negocio
        </motion.h2>

        <div className="grid w-full max-w-[760px] gap-5 sm:grid-cols-2">
          <motion.article
            aria-labelledby="comparison-isolated-heading"
            className="rounded-[20px] bg-totem-surface px-7 py-8"
            initial="rest"
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.32, ease: [0.23, 1, 0.32, 1] }
            }
            variants={reduceMotion ? undefined : cardVariants}
            whileHover="hover"
          >
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              variants={listVariants}
              viewport={{ amount: 0.35, once: true }}
              whileInView="visible"
            >
              <motion.h3
                className="text-[18px] leading-[25.2px] font-bold text-shinta-ink lg:text-[24px] lg:leading-[33.6px]"
                id="comparison-isolated-heading"
                variants={rowVariants}
              >
                Trabajo suelto
              </motion.h3>
              <ul className="mt-5 space-y-3.5">
                {isolatedPoints.map((point) => (
                  <motion.li
                    className="flex gap-2 text-[14px] leading-5 text-totem-text-secondary lg:text-[18px] lg:leading-[27px]"
                    key={point}
                    variants={rowVariants}
                  >
                    <ComparisonMark />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.article>

          <motion.article
            aria-labelledby="comparison-totem-heading"
            className="rounded-[20px] bg-shinta-pink px-7 py-8"
            initial="rest"
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.32, ease: [0.23, 1, 0.32, 1] }
            }
            variants={reduceMotion ? undefined : cardVariants}
            whileHover="hover"
          >
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              variants={listVariants}
              viewport={{ amount: 0.35, once: true }}
              whileInView="visible"
            >
              <motion.h3 id="comparison-totem-heading" variants={rowVariants}>
                <span className="sr-only">Tótem Mass Media</span>
                <Image
                  alt=""
                  className="h-auto w-[92px] object-contain lg:w-[110px]"
                  height={419}
                  src="/brand/logo-light.png"
                  unoptimized
                  width={621}
                />
              </motion.h3>
              <ul className="mt-5 space-y-3.5">
                {totemPoints.map((point) => (
                  <motion.li
                    className="flex gap-2 text-[14px] leading-5 text-shinta-ink lg:text-[18px] lg:leading-[27px]"
                    key={point}
                    variants={rowVariants}
                  >
                    <ComparisonMark positive />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
