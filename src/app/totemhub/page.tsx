import type { Metadata } from "next";
import { Cloud, FolderSync, HardDrive, ShieldCheck } from "lucide-react";

import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";
import { PillLink, SectionEyebrow } from "@/components/sites/shinta-framer-media-3240cba4/shared/ShintaPrimitives";
import { buildPageMetadata } from "@/lib/seo";

const title = "TotemHub — Tus archivos, en un solo lugar";
const description =
  "TotemHub es una aplicación de escritorio para organizar archivos locales y trabajar con Google Drive desde una misma experiencia.";

export const metadata: Metadata = buildPageMetadata({
  description,
  path: "/totemhub",
  title,
});

const features = [
  {
    description:
      "Recorre Mi unidad, Compartido conmigo y tus archivos sin conexión como si fueran carpetas del equipo.",
    icon: Cloud,
    title: "Drive, sin cambiar de contexto",
  },
  {
    description:
      "Elige qué archivos conservar en el equipo y dónde guardar las copias. TotemHub no decide la ubicación por ti.",
    icon: HardDrive,
    title: "Sin conexión, bajo tu control",
  },
  {
    description:
      "Los cambios se sincronizan en ambos sentidos y, si dos versiones chocan, se conservan las dos.",
    icon: FolderSync,
    title: "Sincronización que no pisa tu trabajo",
  },
] as const;

export default function TotemHubPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-totem-background text-totem-text">
      <Navbar />
      <main className="pt-[112px] md:pt-[124px]">
        <section className="px-5 pb-16 pt-10 md:pb-24 md:pt-16">
          <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
            <div>
              <SectionEyebrow className="mb-5 text-totem-creative-ink">
                Aplicación de escritorio para Windows
              </SectionEyebrow>
              <h1 className="max-w-[900px] font-heading text-[clamp(3.6rem,9vw,8.8rem)] leading-[.82] tracking-[-.055em]">
                Tus archivos.
                <span className="block text-totem-tech-ink">Un solo lugar.</span>
              </h1>
              <p className="mt-8 max-w-[680px] text-lg leading-8 text-totem-text-secondary md:text-[22px] md:leading-9">
                TotemHub reúne tus carpetas locales y Google Drive en una
                experiencia visual, rápida y pensada para trabajo creativo.
              </p>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[2.5rem] bg-totem-brand p-7 text-totem-text-on-dark md:min-h-[460px] md:p-10">
              <div className="absolute -right-24 -top-20 size-72 rounded-full border-[42px] border-totem-tech/80" />
              <div className="absolute -bottom-16 -left-12 size-60 rounded-full bg-totem-action" />
              <div className="relative flex h-full min-h-[306px] flex-col justify-between md:min-h-[380px]">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-totem-surface text-totem-brand">
                  <ShieldCheck aria-hidden="true" className="size-7" strokeWidth={2} />
                </div>
                <div className="max-w-[410px] self-end rounded-[1.8rem] border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-[13px] font-semibold tracking-[.08em] text-totem-tech uppercase">
                    Privacidad por diseño
                  </p>
                  <p className="mt-3 text-xl leading-8 font-semibold md:text-2xl">
                    Tus archivos de Drive se procesan en tu equipo. Tú eliges
                    qué conservar sin conexión y puedes revocar el acceso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-totem-background-alt px-5 py-16 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-10 grid gap-4 md:grid-cols-2 md:items-end">
              <div>
                <SectionEyebrow className="mb-4 text-totem-tech-ink">
                  Lo esencial
                </SectionEyebrow>
                <h2 className="font-heading text-4xl tracking-[-.04em] md:text-6xl">
                  Trabaja sin perder el hilo.
                </h2>
              </div>
              <p className="max-w-[540px] text-base leading-7 text-totem-text-secondary md:justify-self-end md:text-lg">
                Navega, abre, organiza y sincroniza desde una interfaz creada
                para manejar proyectos grandes sin ocultar lo que ocurre con
                cada archivo.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {features.map(({ description: itemDescription, icon: Icon, title: itemTitle }) => (
                <article
                  className="rounded-[2rem] border border-totem-border bg-totem-surface p-7 md:min-h-[310px] md:p-8"
                  key={itemTitle}
                >
                  <div className="mb-12 flex size-12 items-center justify-center rounded-full bg-totem-action text-totem-action-text">
                    <Icon aria-hidden="true" className="size-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-heading text-2xl tracking-[-.03em] md:text-[30px]">
                    {itemTitle}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-totem-text-secondary">
                    {itemDescription}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:py-28">
          <div className="mx-auto flex max-w-[920px] flex-col items-center rounded-[2.5rem] bg-totem-brand px-6 py-14 text-center text-totem-text-on-dark md:px-16 md:py-20">
            <SectionEyebrow className="mb-4 text-totem-tech">
              Transparencia
            </SectionEyebrow>
            <h2 className="max-w-[720px] font-heading text-4xl tracking-[-.04em] md:text-6xl">
              Lee cómo TotemHub trata tus datos.
            </h2>
            <p className="mt-5 max-w-[650px] text-base leading-7 text-totem-text-on-dark-secondary md:text-lg">
              Explicamos qué permisos solicita Google Drive, para qué se usan,
              qué permanece en tu equipo y cómo puedes retirar el acceso.
            </p>
            <PillLink
              className="mt-8"
              href="/totemhub/privacidad"
            >
              Política de privacidad
            </PillLink>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
