"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";
import { TeamMemberCard } from "./TeamMemberCard";

const TEAM_MEMBERS = [
  {
    imageSrc: "79687116559292ab.jpg",
    name: "TransCity",
    role: "Plataformas e integraciones",
  },
  {
    imageSrc: "47f89ced261416df.jpg",
    name: "Terra Viva",
    role: "Branding y desarrollo web",
  },
  {
    imageSrc: "34844c23286ab253.jpg",
    name: "PlayHouse",
    role: "Producción audiovisual",
  },
  {
    imageSrc: "3180f8ad3e321358.jpg",
    name: "FocusGuard",
    role: "Software de escritorio",
  },
  {
    imageSrc: "36db82b98440ca02.jpg",
    name: "Totem OS",
    role: "Plataforma empresarial y analítica",
  },
  {
    imageSrc: "c1c60606144d1f73.jpg",
    name: "Totem Auto Edit",
    role: "Automatización audiovisual",
  },
] as const;

const eyebrowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { damping: 22, stiffness: 180, type: "spring" },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { damping: 24, stiffness: 180, type: "spring" },
  },
};

export function TeamGridSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="shinta-team-grid-heading"
      className="relative flex items-center justify-center overflow-clip bg-shinta-canvas px-5 py-[72px] md:py-24 xl:py-[120px]"
    >
      <div className="flex w-full max-w-[1280px] flex-col gap-10 md:gap-12 xl:gap-16">
        <div className="flex w-full flex-col items-start gap-4 md:flex-row md:items-end md:gap-6 xl:flex-row xl:items-end xl:gap-6">
          <div className="flex w-full flex-col gap-2 md:w-[58%] md:max-w-[721px] xl:w-[58%] xl:max-w-[721px]">
            <motion.div
              initial={reduceMotion ? undefined : "hidden"}
              variants={eyebrowVariants}
              viewport={{ amount: 0.4, once: true }}
              whileInView="visible"
            >
              <SectionEyebrow className="inline-flex rounded-full bg-shinta-pink px-2 py-1 text-shinta-ink">
                Proyectos
              </SectionEyebrow>
            </motion.div>

            <motion.h2
              className="text-[34px] leading-[38px] font-bold tracking-[-1.36px] text-shinta-ink md:text-[44px] md:leading-[48px] md:tracking-[-1.76px] xl:text-[64px] xl:leading-[70.4px] xl:tracking-[-2.56px]"
              id="shinta-team-grid-heading"
              initial={reduceMotion ? undefined : "hidden"}
              variants={textVariants}
              viewport={{ amount: 0.4, once: true }}
              whileInView="visible"
            >
              Proyectos que demuestran capacidades
            </motion.h2>
          </div>

          <motion.p
            className="w-full max-w-full text-[18px] leading-[27px] text-shinta-stone md:max-w-[40%]"
            initial={reduceMotion ? undefined : "hidden"}
            variants={textVariants}
            viewport={{ amount: 0.4, once: true }}
            whileInView="visible"
          >
            Los proyectos aportan la evidencia: estrategia, branding, producción audiovisual, web, software, automatización e inteligencia artificial aplicada.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard
              delay={reduceMotion ? 0 : index * 0.09}
              imageSrc={member.imageSrc}
              key={member.name}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
