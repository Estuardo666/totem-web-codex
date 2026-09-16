import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import {
  LandingCredential,
  LandingFaq,
  LandingHero,
  LandingIncludes,
  LandingProse,
  type LandingFaqItem,
} from "@/components/landings/LandingSections";
import { ContactCtaSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/ContactCtaSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";
import { Reveal } from "@/components/sites/shinta-framer-media-3240cba4/shared/Reveal";
import { buildLandingSchema, buildPageMetadata } from "@/lib/seo";

const PATH = "/marketing-digital-zamora";

const title = "Marketing digital en Zamora";
const description =
  "Gestión de redes, contenido y web para negocios de Zamora y Zamora Chinchipe. Trabajamos la marca de Licor 7 Pingas, de Cumbaratza, y operamos desde Loja a una hora de distancia.";

export const metadata: Metadata = buildPageMetadata({
  description,
  path: PATH,
  title,
});

const blocks = [
  {
    body: "Zamora es un mercado chico y eso cambia la estrategia. Acá no ganás por volumen de alcance sino por reconocimiento: que la gente sepa quién sos, qué vendés y por qué elegirte. El contenido tiene que construir marca, no perseguir métricas de vanidad.",
    title: "Un mercado donde todos se conocen",
  },
  {
    body: "Buena parte de los negocios de la provincia todavía compite con fotos de celular y publicaciones sin plan. El piso está bajo, así que producción cuidada y constancia te separan rápido del resto. Es la plaza donde el esfuerzo rinde más por dólar invertido.",
    title: "El nivel de la competencia es tu oportunidad",
  },
  {
    body: "Estamos en Loja, a aproximadamente una hora de Zamora. Podemos ir a grabar, volver a grabar y sostener producción continua sin los costos de traer un equipo desde Quito o Guayaquil. La cercanía no es un detalle: define si el contenido se actualiza o se estanca.",
    title: "Cerca de verdad, no en el papel",
  },
  {
    body: "El turismo de naturaleza, la gastronomía, los licores artesanales y el comercio de Zamora, Yantzaza y Cumbaratza tienen algo que mostrar de sobra. El problema casi nunca es la falta de material: es que nadie lo está produciendo ni ordenando.",
    title: "Sectores con producto visual evidente",
  },
] as const;

const includes = [
  "Gestión de redes sociales",
  "Producción de contenido mensual",
  "Fotografía y video en Zamora",
  "Estrategia y calendario editorial",
  "Campañas en Meta y Google Ads",
  "Diseño de marca y piezas gráficas",
  "Sitios web y landing pages",
  "Métricas y reportes de desempeño",
] as const;

const faq: readonly LandingFaqItem[] = [
  {
    answer:
      "Sí. Trabajamos la presencia en redes de Licor 7 Pingas, que se produce en Cumbaratza. Conocemos la provincia y nos movemos a Zamora, Yantzaza y Cumbaratza para producir.",
    question: "¿Han trabajado con negocios de Zamora Chinchipe?",
  },
  {
    answer:
      "No. Operamos desde Loja, a alrededor de una hora de Zamora, y viajamos para las grabaciones y reuniones. La gestión diaria de redes, campañas y reportes se hace en remoto sin ninguna pérdida.",
    question: "¿Tienen oficina en Zamora?",
  },
  {
    answer:
      "Un negocio local puede empezar con producción mensual de contenido y gestión de redes, que es lo que sostiene la presencia. La web y las campañas pagadas se suman cuando hay algo constante que mostrar. Armamos el alcance según tu presupuesto, no al revés.",
    question: "¿Qué necesita un negocio pequeño de Zamora para empezar?",
  },
  {
    answer:
      "Los viajes de producción se contemplan en la planificación desde el inicio y se agrupan para que rindan: una salida produce el contenido de varias semanas. No se cobra cada traslado por separado.",
    question: "¿El viaje desde Loja encarece el servicio?",
  },
] as const;

export default function MarketingDigitalZamoraPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <JsonLd
        data={buildLandingSchema({
          breadcrumb: title,
          faq,
          path: PATH,
          serviceArea: "Zamora",
          serviceDescription: description,
          serviceName: "Marketing digital y gestión de redes",
        })}
      />
      <Navbar />
      <main className="flex flex-col pt-[120px]">
        <Reveal>
          <LandingHero
            eyebrow="Marketing digital"
            heading="Marketing digital en Zamora para negocios que quieren que la provincia los reconozca."
            lead="Gestión de redes, producción de contenido y campañas para comercios de Zamora, Yantzaza y Cumbaratza. Producimos en la provincia desde Loja, a una hora de distancia."
          />
        </Reveal>

        <Reveal>
          <LandingCredential
            body="Trabajamos la presencia en redes de Licor 7 Pingas, el licor artesanal de Cumbaratza y una de las marcas más reconocidas de Zamora Chinchipe. Conocemos cómo se comunica un producto de la provincia y qué lo hace funcionar fuera de ella."
            eyebrow="Cliente en Zamora Chinchipe"
            name="Licor 7 Pingas, Cumbaratza"
          />
        </Reveal>

        <Reveal>
          <LandingProse
            blocks={blocks}
            eyebrow="Cómo leemos esta plaza"
            heading="Zamora no se trabaja igual que una ciudad grande"
          />
        </Reveal>

        <Reveal>
          <LandingIncludes heading="Qué hacemos" items={includes} />
        </Reveal>

        <Reveal>
          <LandingFaq heading="Preguntas frecuentes" items={faq} />
        </Reveal>

        <Reveal>
          <ContactCtaSection />
        </Reveal>
      </main>
      <FooterSection />
    </div>
  );
}
