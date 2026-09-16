"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { SectionEyebrow } from "../shared/ShintaPrimitives";
import { CONTACT_EMAIL, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { BUSINESS } from "@/lib/seo";

const channels = [
  {
    detail: "099 881 3559",
    external: true,
    href: whatsappUrl(),
    label: "WhatsApp",
    note: "La vía más rápida. Respondemos en horario de oficina.",
  },
  {
    detail: CONTACT_EMAIL,
    external: false,
    href: mailtoUrl(),
    label: "Correo",
    note: "Para propuestas, documentación o procesos formales.",
  },
] as const;

export function ContactChannelsCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex min-w-0 w-full max-w-[680px] flex-col gap-2 rounded-[28px] bg-shinta-pink p-3 md:rounded-[36px] md:p-4 xl:h-[544px] xl:w-[644px] xl:shrink-0 xl:rounded-[40px]"
      initial={
        shouldReduceMotion
          ? { opacity: 1, scale: 1 }
          : { opacity: 0.001, scale: 0.8 }
      }
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      viewport={{ amount: 0.3, once: true }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <div className="flex w-full items-center justify-center gap-[10px] px-4 py-2">
        <h2 className="w-full text-left text-[24px] leading-[29px] font-bold tracking-[-0.96px] text-shinta-ink md:text-[32px] md:leading-[38.4px] md:tracking-[-1.28px]">
          Hablemos de tu proyecto
        </h2>
      </div>

      <div className="flex w-full flex-1 flex-col gap-3 rounded-[24px] bg-white p-4 md:gap-4 md:rounded-[32px] md:p-6">
        {channels.map((channel) => (
          <Link
            className="group flex items-center gap-4 rounded-[16px] bg-shinta-canvas p-4 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink"
            href={channel.href}
            key={channel.label}
            rel={channel.external ? "noopener noreferrer" : undefined}
            target={channel.external ? "_blank" : undefined}
          >
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <SectionEyebrow className="text-shinta-muted">
                {channel.label}
              </SectionEyebrow>
              <span className="truncate text-[18px] leading-[24px] font-bold tracking-[-0.4px] text-shinta-ink">
                {channel.detail}
              </span>
              <span className="text-[14px] leading-[20px] text-shinta-muted">
                {channel.note}
              </span>
            </span>
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-shinta-ink text-shinta-canvas transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight aria-hidden="true" className="size-5" />
            </span>
          </Link>
        ))}

        <dl className="mt-auto grid gap-3 border-t border-shinta-ink/10 pt-4 sm:grid-cols-2">
          <div>
            <dt className="text-[12px] leading-[16.8px] font-semibold tracking-[0.96px] text-shinta-muted uppercase">
              Horario
            </dt>
            <dd className="mt-1 text-[16px] leading-[22px] text-shinta-ink">
              Lunes a viernes, {BUSINESS.opens} a {BUSINESS.closes}
            </dd>
          </div>
          <div>
            <dt className="text-[12px] leading-[16.8px] font-semibold tracking-[0.96px] text-shinta-muted uppercase">
              Dónde estamos
            </dt>
            <dd className="mt-1 text-[16px] leading-[22px] text-shinta-ink">
              Loja, Ecuador. Trabajamos en Loja y Zamora Chinchipe.
            </dd>
          </div>
        </dl>
      </div>
    </motion.div>
  );
}
