"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { shintaAsset } from "../shared/site";

const comparisons = [
  ["Soluciones aisladas", "Creatividad y tecnología integradas"],
  ["Solo comunicación", "Comunicación, diseño y operación"],
  ["Herramientas genéricas", "Sistemas específicos para cada proceso"],
  ["Una sola capacidad", "Marca, contenido y tecnología"],
  ["Promesas sin evidencia", "Proyectos que demuestran capacidades"],
] as const;

const tableVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.075,
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    transition: { damping: 24, stiffness: 180, type: "spring" },
    y: 0,
  },
};

type ComparisonMarkProps = {
  positive?: boolean;
};

function ComparisonMark({ positive = false }: ComparisonMarkProps) {
  const Icon = positive ? Check : X;

  return (
    <span
      aria-hidden="true"
      className={`mt-[3px] grid size-[18px] shrink-0 place-items-center rounded-full text-white ${positive ? "bg-shinta-ink" : "bg-stone-300"}`}
    >
      <Icon className="size-[11px]" strokeWidth={3} />
    </span>
  );
}

export function ComparisonSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="shinta-comparison-heading"
      className="flex h-[842px] w-full items-center justify-center overflow-hidden bg-shinta-canvas px-5 md:h-[815px] lg:h-[752px] lg:py-[150px]"
    >
      <div className="flex w-full max-w-[850px] flex-col items-center gap-12 lg:h-[452px] lg:gap-[54px]">
        <motion.h2
          className="text-center text-[28px] leading-[1.08] font-bold tracking-[-1.12px] text-shinta-ink lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]"
          id="shinta-comparison-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          transition={{ damping: 24, stiffness: 170, type: "spring" }}
          viewport={{ amount: 0.7, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Una solución completa para tu negocio
        </motion.h2>

        <motion.div
          aria-label="Comparación entre soluciones aisladas y Tótem Mass Media"
          className="relative w-full max-w-[700px] py-4"
          initial={reduceMotion ? false : "hidden"}
          role="table"
          variants={tableVariants}
          viewport={{ amount: 0.35, once: true }}
          whileInView="visible"
        >
          <div
            aria-hidden="true"
            className="absolute top-4 bottom-0 left-0 w-[56%] rounded-[20px] bg-white"
          />
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 bottom-4 w-[56%] rounded-[20px] bg-shinta-pink"
          />

          <motion.div
            className="relative z-10 grid grid-cols-2"
            role="row"
            variants={rowVariants}
          >
            <div
              className="px-3 pt-6 pb-4 text-[18px] leading-[25.2px] font-bold text-shinta-ink sm:px-6 lg:text-[24px] lg:leading-[33.6px]"
              id="other-agencies-heading"
              role="columnheader"
            >
              Soluciones aisladas
            </div>
            <div
              className="-translate-y-4 px-3 pt-6 pb-4 sm:px-6"
              id="shinta-column-heading"
              role="columnheader"
            >
              <Link
                aria-label="Inicio de Tótem Mass Media"
                className="inline-flex focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-shinta-ink"
                href="/"
              >
                <Image
                  alt="Tótem Mass Media"
                  className="h-auto w-[80px] object-contain lg:w-[94px]"
                  height={267}
                  priority
                  src={shintaAsset("images/e7fb2951cde42e9a.png")}
                  unoptimized
                  width={1000}
                />
              </Link>
            </div>
          </motion.div>

          {comparisons.map(([otherAgency, shinta], index) => (
            <motion.div
              className="relative z-10 grid grid-cols-2"
              key={otherAgency}
              role="row"
              variants={rowVariants}
            >
              <div
                aria-labelledby="other-agencies-heading"
                className={`flex gap-2 px-3 py-3 text-[14px] leading-5 text-stone-400 sm:px-6 lg:text-[18px] lg:leading-[27px] ${index > 0 ? "border-t border-stone-200/80" : ""}`}
                role="cell"
              >
                <ComparisonMark />
                <span>{otherAgency}</span>
              </div>
              <div
                aria-labelledby="shinta-column-heading"
                className={`flex -translate-y-4 gap-2 px-3 py-3 text-[14px] leading-5 text-shinta-ink sm:px-6 lg:text-[18px] lg:leading-[27px] ${index > 0 ? "border-t border-shinta-ink/10" : ""}`}
                role="cell"
              >
                <ComparisonMark positive />
                <span>{shinta}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
