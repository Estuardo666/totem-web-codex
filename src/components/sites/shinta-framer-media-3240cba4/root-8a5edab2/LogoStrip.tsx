"use client";

import { motion, useReducedMotion } from "framer-motion";

const projects = ["TransCity", "Terra Viva", "PlayHouse", "FocusGuard", "Totem OS"] as const;

type BrandSequenceProps = {
  duplicate?: boolean;
};

function BrandSequence({ duplicate = false }: BrandSequenceProps) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 items-center gap-5 pr-5"
    >
      {projects.map((project) => (
        <span
          aria-hidden={duplicate || undefined}
          className="shrink-0 text-[18px] leading-6 font-semibold tracking-[-0.02em] text-shinta-muted"
          key={`${project}-${duplicate ? "duplicate" : "original"}`}
        >
          {project}
        </span>
      ))}
    </div>
  );
}

export function LogoStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Proyectos de Tótem Mass Media"
      className="flex h-[94px] w-full items-start justify-center overflow-hidden px-5 pt-8"
    >
      <div className="flex h-[62px] w-full max-w-[620px] flex-col items-center gap-[10px] overflow-hidden">
        <p className="shrink-0 text-center text-[12px] leading-[16.8px] font-semibold tracking-[0.96px] text-shinta-muted uppercase">
        Proyectos reales que demuestran nuestras capacidades
        </p>

        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
          <motion.div
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            className="flex w-max items-center"
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 22,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                  }
            }
          >
            <BrandSequence />
            <BrandSequence duplicate />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
