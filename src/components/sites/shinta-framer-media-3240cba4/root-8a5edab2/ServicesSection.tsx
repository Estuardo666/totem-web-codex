import Image from "next/image";

import { cn } from "@/lib/utils";
import { shintaAsset } from "@/components/sites/shinta-framer-media-3240cba4/shared/site";

const services = [
  {
    description:
      "Producimos videos breves de alto impacto, diseñados para la forma en que las personas consumen contenido en las plataformas sociales. Creados para captar la atención.",
    image: "images/b16db9e580397fdd.jpg",
    label: "Videos largos recortados",
    number: "01",
    stat: "242+",
    title: "Producción de formato breve",
    surface: "bg-shinta-lavender",
    tab: "left-0",
    layer: "lg:z-10",
  },
  {
    description:
      "Convertimos los datos en dirección. Al analizar el rendimiento, perfeccionamos formatos, ganchos y narrativas para escalar lo que funciona y eliminar lo que no.",
    image: "images/a1faa59a449d1277.jpg",
    label: "Impresiones totales",
    number: "02",
    stat: "50M+",
    title: "Campañas con creadores y UGC",
    surface: "bg-shinta-pink",
    tab: "left-1/4",
    layer: "lg:z-20",
  },
  {
    description:
      "Desde la planificación hasta la publicación y optimización, gestionamos tu presencia social con constancia e intención. Relájate, nosotros nos encargamos del resto.",
    image: "images/8937ba903b130468.jpg",
    label: "Impresiones totales",
    number: "03",
    stat: "50M+",
    title: "Gestión de redes sociales",
    surface: "bg-totem-surface-secondary",
    tab: "left-1/2",
    layer: "lg:z-30",
  },
  {
    description:
      "Investigamos, probamos, iteramos y escalamos la creatividad con datos del mundo real. Somos la primera agencia que no adivina: sin corazonadas, solo lo que funciona.",
    image: "images/32b02d1e1ff6490e.jpg",
    label: "Aumento de clientes potenciales",
    number: "04",
    stat: "150%",
    title: "Estrategia creativa de rendimiento",
    surface: "bg-shinta-green",
    tab: "left-3/4",
    layer: "lg:z-40",
  },
] as const;

type ServicePanelProps = {
  service: (typeof services)[number];
};

function ServicePanel({ service }: ServicePanelProps) {
  return (
    <article
      className={cn(
        "relative h-[560px] pt-8 md:h-[438px] lg:sticky lg:top-0 lg:flex lg:h-[900px] lg:items-center lg:justify-center lg:pt-0",
        service.layer,
      )}
    >
      <div className="relative h-full w-full max-w-[1085px] pt-8 lg:h-[650px]">
        <p
          className={cn(
            "absolute top-0 z-10 flex h-10 w-1/4 items-center rounded-t-[18px] px-4 text-[12px] leading-[16.8px] font-semibold tracking-[0.96px] uppercase lg:h-9",
            service.surface,
            service.tab,
          )}
        >
          Servicio / {service.number}
        </p>

        <div
          className={cn(
            "relative flex h-[calc(100%-32px)] flex-col overflow-hidden rounded-[28px] text-shinta-ink md:grid md:grid-cols-[1.06fr_0.94fr] md:rounded-[26px] lg:grid-cols-2 lg:rounded-[30px]",
            service.surface,
          )}
        >
          <div className="flex min-h-0 flex-1 flex-col px-6 pt-6 pb-4 md:p-8 lg:p-8">
            <h2 className="max-w-[540px] text-[28px] leading-8 font-bold tracking-[-1.12px] lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]">
              {service.title}
            </h2>
            <p className="mt-5 max-w-[520px] text-[18px] leading-[25.2px] font-normal tracking-[-0.36px] md:mt-4 md:text-[16px] md:leading-[22.4px] lg:mt-5 lg:text-[18px] lg:leading-[25.2px]">
              {service.description}
            </p>
            <div className="mt-auto pt-4">
              <p className="text-[28px] leading-8 font-bold tracking-[-1.12px] lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]">
                {service.stat}
              </p>
              <p className="text-[18px] leading-[25.2px] tracking-[-0.36px] md:text-[16px] md:leading-[22.4px] lg:text-[18px] lg:leading-[25.2px]">
                {service.label}
              </p>
            </div>
          </div>

          <div className="relative mx-6 mb-6 h-[215px] shrink-0 overflow-hidden rounded-[24px] md:m-5 md:ml-0 md:h-auto lg:m-6 lg:ml-0 lg:rounded-[26px]">
            <Image
              alt={`${service.title} service`}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 500px, (min-width: 768px) 320px, calc(100vw - 86px)"
              src={shintaAsset(service.image)}
              unoptimized
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section className="flex flex-col gap-1 overflow-clip px-[19px] py-[77px] md:gap-[14px] md:px-5 md:py-[82px] lg:gap-0 lg:py-0">
      {services.map((service) => (
        <ServicePanel key={service.number} service={service} />
      ))}
    </section>
  );
}
