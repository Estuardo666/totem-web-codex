"use client";

import {
  BadgeCheck,
  ChartNoAxesColumnIncreasing,
  MessageSquareText,
  PlaySquare,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    body: "Investigamos para aumentar las probabilidades de viralidad.",
    color: "border-shinta-pink bg-shinta-pink",
    delay: "delay-[0ms]",
    icon: MessageSquareText,
    number: "01",
    title: "Planificación",
  },
  {
    body: "Creamos contenido nativo que encaja con la plataforma.",
    color: "border-shinta-lavender bg-shinta-lavender",
    delay: "delay-[110ms]",
    icon: PlaySquare,
    number: "02",
    title: "Contenido",
  },
  {
    body: "Medimos el rendimiento y perfeccionamos lo que funciona.",
    color: "border-totem-surface bg-totem-surface",
    delay: "delay-[220ms]",
    icon: BadgeCheck,
    number: "03",
    title: "Optimización",
  },
  {
    body: "Impulsamos lo que rinde y descartamos lo que no.",
    color: "border-shinta-green bg-shinta-green",
    delay: "delay-[330ms]",
    icon: ChartNoAxesColumnIncreasing,
    number: "04",
    title: "Escalamiento",
  },
];

export function ProcessSection() {
  const listRef = useRef<HTMLOListElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
          nuestro proceso
        </SectionEyebrow>

        <h2
          id="process-heading"
          className="mt-[12px] max-w-[335px] text-[28px] leading-[31px] font-bold tracking-[-1.12px] md:max-w-[630px] xl:mt-[10px] xl:max-w-[850px] xl:text-[64px] xl:leading-[70.4px] xl:tracking-[-2.56px]"
        >
          De la estrategia al contenido que detiene el scroll.
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
                  "h-[380px] overflow-hidden rounded-[24px] border-[4px] transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none md:h-[380px] xl:h-[394px] xl:rounded-[26px]",
                  step.color,
                  step.delay,
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0",
                )}
                key={step.number}
              >
                <div className="flex h-[66px] items-center justify-between border-b-[4px] border-inherit bg-shinta-canvas px-[12px] xl:h-[68px] xl:px-[14px]">
                  <span className="text-[24px] leading-none font-bold tracking-[-0.72px] xl:text-[26px]">
                    {step.number}
                  </span>
                  <Icon aria-hidden="true" className="size-[28px]" strokeWidth={2} />
                </div>

                <div className="flex h-[310px] flex-col justify-end px-[14px] py-[18px] xl:h-[318px] xl:px-[14px] xl:py-[18px]">
                  <h3 className="text-[32px] leading-[36px] font-bold tracking-[-1.28px] xl:text-[32px] xl:leading-[38.4px]">
                    {step.title}
                  </h3>
                  <p className="mt-[10px] max-w-[250px] text-[18px] leading-[25.2px] font-normal tracking-[-0.36px] text-shinta-stone xl:text-[16px] xl:leading-[22.4px] xl:tracking-[-0.32px]">
                    {step.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
