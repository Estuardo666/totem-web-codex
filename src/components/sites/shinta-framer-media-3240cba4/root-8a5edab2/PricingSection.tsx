"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  SectionEyebrow,
  ShiftButtonContent,
} from "@/components/sites/shinta-framer-media-3240cba4/shared/ShintaPrimitives";
import { shintaAsset } from "@/components/sites/shinta-framer-media-3240cba4/shared/site";

type BillingCycle = "monthly" | "yearly";

const plans = [
  {
    cta: "Cuéntanos tu proyecto",
    description: "Construir la identidad y comunicación de una marca.",
    features: [
      "Estrategia de marca",
      "Identidad visual",
      "Dirección creativa",
      "Conceptualización de campañas",
      "Diseño gráfico",
    ],
    name: "Marca y contenido",
    previousPrice: "",
    price: "",
    theme: "light",
  },
  {
    cta: "Cuéntanos tu proyecto",
    description: "Construir las plataformas y sistemas que sostienen la operación.",
    features: [
      "Aplicaciones web",
      "Plataformas empresariales",
      "Sistemas administrativos",
      "Integraciones entre plataformas",
      "Automatización e inteligencia artificial",
    ],
    name: "Web, software y automatización",
    previousPrice: "",
    price: "",
    theme: "dark",
  },
] as const;

type BillingToggleProps = {
  billingCycle: BillingCycle;
  setBillingCycle: (cycle: BillingCycle) => void;
};

function BillingToggle({ billingCycle, setBillingCycle }: BillingToggleProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Inicio", "Fin"].includes(event.key)) return;
    event.preventDefault();
    setBillingCycle(
      event.key === "ArrowLeft" || event.key === "Inicio" ? "monthly" : "yearly",
    );
  };

  return (
    <div
      aria-label="Áreas de trabajo"
      className="relative grid h-12 grid-cols-2 rounded-full bg-totem-surface-secondary p-1"
      role="radiogroup"
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-white transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          billingCycle === "monthly" ? "translate-x-0" : "translate-x-full",
        )}
      />
      <button
        aria-checked={billingCycle === "monthly"}
        className={cn(
          "relative z-10 rounded-full text-[16px] leading-4 tracking-[-0.64px] text-shinta-stone focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-shinta-ink",
          billingCycle === "monthly" ? "font-bold text-shinta-ink" : "font-normal",
        )}
        onClick={() => setBillingCycle("monthly")}
        onKeyDown={handleKeyDown}
        role="radio"
        type="button"
      >
        Marca y contenido
      </button>
      <button
        aria-checked={billingCycle === "yearly"}
        className={cn(
          "relative z-10 flex items-center justify-center gap-1.5 rounded-full text-[16px] leading-4 tracking-[-0.64px] text-shinta-stone focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-shinta-ink",
          billingCycle === "yearly" ? "font-bold text-shinta-ink" : "font-normal",
        )}
        onClick={() => setBillingCycle("yearly")}
        onKeyDown={handleKeyDown}
        role="radio"
        type="button"
      >
        <span>Web y tecnología</span>
        <span className="text-[11px] leading-none font-semibold tracking-[0.55px] uppercase">
          estrategia y sistemas
        </span>
      </button>
    </div>
  );
}

function CustomPlanCard() {
  return (
    <Link
      className="group relative flex h-24 items-center rounded-[20px] bg-white p-2 pr-4 text-shinta-ink transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-pink"
      href="/contact"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[14px] bg-shinta-lavender">
        <Image
          alt="Planificación de una solución digital"
          className="object-cover"
          fill
          sizes="80px"
          src={shintaAsset("images/9bf3ccb668f9c139.png")}
          unoptimized
        />
        <span
          aria-hidden="true"
          className="absolute top-0 right-0 size-4 rounded-full border-2 border-white bg-shinta-green"
        />
      </span>
      <span className="ml-4 min-w-0">
        <span className="block text-[18px] leading-[25.2px] font-bold tracking-[-0.36px]">
          ¿Qué solución necesita tu negocio?
        </span>
        <span className="mt-0.5 block text-[18px] leading-[25.2px] text-shinta-muted">
          Cuéntanos tu proyecto
        </span>
      </span>
      <span className="ml-auto grid size-8 shrink-0 place-items-center rounded-full bg-shinta-canvas transition-colors duration-300 group-hover:bg-totem-action">
        <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={2} />
      </span>
    </Link>
  );
}

type PlanCardProps = {
  plan: (typeof plans)[number];
};

function PlanCard({ plan }: PlanCardProps) {
  const isDark = plan.theme === "dark";

  return (
    <article
      className={cn(
        "flex min-h-[474px] flex-col rounded-[30px] p-3",
        isDark ? "bg-shinta-ink text-shinta-canvas" : "bg-white text-shinta-ink",
      )}
    >
      <div
        className={cn(
          "relative rounded-[22px] p-4",
          isDark ? "bg-shinta-stone" : "bg-shinta-canvas",
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[24px] leading-[33.6px] font-bold tracking-[-0.96px]">
            {plan.name}
          </h3>
          {isDark ? (
            <span className="rounded-full bg-shinta-pink px-3 py-1 text-[12px] leading-[16.8px] font-semibold tracking-[0.96px] text-shinta-ink uppercase">
              recomendado
            </span>
          ) : null}
        </div>
        <p className={cn("text-[14px] leading-[19.6px]", isDark ? "text-white" : "text-shinta-muted")}>
          {plan.description}
        </p>
        {plan.price ? (
          <div className="mt-4 flex items-end gap-2">
            <span className="mb-1 text-[16px] leading-none text-shinta-muted line-through">
              {plan.previousPrice}
            </span>
            <span className="text-[40px] leading-10 font-bold tracking-[-1.6px]">
              {plan.price}
            </span>
            <span className="mb-1 text-[14px] leading-none font-semibold uppercase">/mes</span>
          </div>
        ) : null}
      </div>

      <ul className="mt-5 space-y-3 px-4 text-[16px] leading-[22.4px] tracking-[-0.32px]">
        {plan.features.map((feature) => (
          <li className="flex items-start gap-3" key={feature}>
            <span
              className={cn(
                "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                isDark
                  ? "bg-shinta-lavender text-shinta-ink"
                  : "bg-totem-tech text-totem-action-text",
              )}
            >
              <Check aria-hidden="true" className="size-3.5" strokeWidth={2.7} />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        className={cn(
          "shift-button group mt-auto flex h-14 items-center rounded-full text-[16px] font-bold tracking-[-0.64px] focus-visible:outline-3 focus-visible:outline-offset-2",
          isDark
            ? "text-shinta-ink focus-visible:outline-shinta-pink"
            : "text-shinta-canvas focus-visible:outline-shinta-ink",
        )}
        href="/#contact"
      >
        <ShiftButtonContent
          className="[--shift-button-icon-size:56px]"
          iconClassName="border-4 border-transparent bg-clip-padding"
          restIconClassName="bg-totem-brand text-totem-action"
          hoverIconClassName="bg-totem-tech text-totem-brand"
          iconStrokeWidth={2}
          labelClassName={cn(
            "flex h-14 items-center rounded-full px-6",
            isDark ? "bg-white" : "bg-shinta-ink",
          )}
        >
          {plan.cta}
        </ShiftButtonContent>
      </Link>
    </article>
  );
}

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <section className="px-5 py-[60px] max-sm:px-[19px] max-sm:py-[70.5px] lg:py-[120px]" id="pricing">
      <div className="mx-auto grid max-w-[1280px] gap-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex min-w-0 flex-col">
          <div>
            <SectionEyebrow className="mb-4 inline-flex rounded-full bg-shinta-pink px-3 py-1 text-shinta-ink">
              soluciones
            </SectionEyebrow>
            <h2 className="max-w-[470px] text-[64px] leading-[70.4px] font-bold tracking-[-2.56px] text-shinta-ink max-lg:text-[28px] max-lg:leading-8 max-lg:tracking-[-1.12px]">
              No trabajamos con soluciones aisladas.
            </h2>
            <div className="mt-6 max-w-[445px]">
              <BillingToggle
                billingCycle={billingCycle}
                setBillingCycle={setBillingCycle}
              />
            </div>
          </div>
          <div className="mt-10 max-w-[445px] lg:mt-auto">
            <CustomPlanCard />
          </div>
        </div>

        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}
