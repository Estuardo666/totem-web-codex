"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { shintaAsset } from "../shared/site";

export function FeaturePerformanceSection() {
  const copyRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const copy = copyRef.current;

    if (!copy) {
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
        rootMargin: "0px 0px -12%",
        threshold: 0.18,
      },
    );

    observer.observe(copy);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative h-[1034px] overflow-hidden bg-shinta-canvas px-5 py-[72px] text-shinta-ink md:h-[1109px] md:py-[80px] xl:h-[880px] xl:py-[120px]"
      aria-labelledby="performance-heading"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-[120px] -left-[95px] hidden h-[350px] w-[380px] text-shinta-pink xl:block"
        fill="none"
        viewBox="0 0 380 350"
      >
        <path
          d="M-30 78C70-35 202 17 177 139c-18 88-120 64-132 14-20-83 115-100 155-21 49 98-10 174-225 247"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="8"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-[-104px] bottom-[70px] h-[235px] w-[210px] text-shinta-lavender md:right-[-30px] md:bottom-[70px] md:h-[300px] md:w-[270px] xl:right-[-34px] xl:bottom-[238px] xl:h-[300px] xl:w-[260px]"
        fill="none"
        viewBox="0 0 260 300"
      >
        <path
          d="M278 10C143 85 58 185 6 285"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="8"
        />
      </svg>

      <div className="relative mx-auto h-full max-w-[1000px] xl:flex xl:h-[640px] xl:items-start xl:gap-[90px]">
        <div className="relative mx-auto h-[520px] w-full max-w-[335px] md:h-[570px] md:max-w-[360px] xl:mx-0 xl:h-[640px] xl:w-[360px] xl:shrink-0">
          <video
            autoPlay
            className="h-full w-full rounded-[22px] object-cover xl:rounded-[24px]"
            loop
            muted
            playsInline
            preload="metadata"
            src={shintaAsset("videos/feature-performance.mp4")}
          />

          <div className="absolute -bottom-[38px] left-1/2 z-10 w-[276px] -translate-x-1/2 rounded-[16px] bg-shinta-pink px-[22px] py-[18px] md:-bottom-[45px] md:w-[286px] xl:right-auto xl:bottom-[24px] xl:left-[-60px] xl:w-[285px] xl:translate-x-0 xl:px-[24px] xl:py-[20px]">
            <p className="text-[40px] leading-[44px] font-bold tracking-[-1.6px] xl:text-[48px] xl:leading-[52px] xl:tracking-[-1.92px]">
              Marca
            </p>
            <p className="mt-[3px] text-[16px] leading-[22.4px] font-normal tracking-[-0.32px] text-shinta-stone xl:text-[18px] xl:leading-[25.2px] xl:tracking-[-0.36px]">
              Identidad y comunicación
            </p>
          </div>
        </div>

        <div
          className={cn(
            "mt-[91px] transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none md:mx-auto md:mt-[108px] md:max-w-[640px] xl:mx-0 xl:mt-[40px] xl:max-w-[550px]",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
          ref={copyRef}
        >
          <h2
            id="performance-heading"
            className="text-[28px] leading-[31px] font-bold tracking-[-1.12px] md:text-[28px] md:leading-[31px] xl:text-[64px] xl:leading-[70.4px] xl:tracking-[-2.56px]"
          >
            Creatividad y tecnología trabajando sobre el mismo negocio.
          </h2>
          <p className="mt-[30px] max-w-[530px] text-[18px] leading-[27px] font-normal tracking-[-0.36px] text-shinta-stone md:mt-[28px] xl:mt-[30px]">
            No trabajamos con soluciones aisladas. Podemos construir la identidad de una marca, producir su contenido, desarrollar su experiencia digital y automatizar los procesos que sostienen su operación.
          </p>
        </div>
      </div>
    </section>
  );
}
