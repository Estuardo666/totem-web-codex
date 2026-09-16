import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import {
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

/**
 * Institutional page for Zamora Chinchipe. It deliberately claims no mining or
 * public-sector track record, because there is none yet, and buyers in that
 * sector check. The cooperation work done for GIZ is covered by a reserve
 * clause in that contract and cannot be referenced until GIZ authorises it in
 * writing — add a LandingCredential block here once that authorisation exists.
 */
const PATH = "/video-institucional-zamora";

const title = "Video institucional y comunicación corporativa en Zamora";
const description =
  "Video institucional, documentación de procesos y comunicación corporativa para empresas e instituciones de Zamora Chinchipe. Equipo de producción propio a una hora de distancia.";

export const metadata: Metadata = buildPageMetadata({
  description,
  path: PATH,
  title,
});

const blocks = [
  {
    body: "La comunicación institucional se juzga distinto que la publicitaria. Tiene que ser precisa antes que llamativa: datos correctos, vocabulario técnico bien usado, y una narrativa que resista la lectura de un área técnica y de una comunidad al mismo tiempo. Producimos con esa exigencia.",
    title: "Rigor antes que espectáculo",
  },
  {
    body: "Documentar una operación, un proceso productivo o un programa de relacionamiento exige entrar al terreno con criterio: saber qué se puede grabar, qué requiere consentimiento y cómo trabajar sin interrumpir la operación. La producción se planifica alrededor de esas reglas, no en contra de ellas.",
    title: "Trabajo de campo con protocolo",
  },
  {
    body: "Estamos en Loja, a aproximadamente una hora de la ciudad de Zamora. Eso permite jornadas de campo, regrabaciones y seguimiento continuo sin los costos de movilizar un equipo desde Quito. Para proyectos que se documentan por etapas, la cercanía cambia la economía del proyecto.",
    title: "Cercanía que se traduce en costo",
  },
  {
    body: "Un video institucional aislado sirve poco. Lo que sostiene la comunicación de una organización es un sistema: piezas para distintos públicos, material para reportes, contenido para canales propios y un sitio donde todo queda ordenado y accesible. Producimos las piezas y construimos ese lugar.",
    title: "Piezas que forman un sistema",
  },
] as const;

const includes = [
  "Video institucional y corporativo",
  "Documentación audiovisual de procesos y operaciones",
  "Contenido para programas de responsabilidad social",
  "Registro de actividades con comunidades",
  "Fotografía documental e industrial",
  "Infografías y material informativo",
  "Material educomunicacional y de difusión",
  "Sitios web y micrositios de proyecto",
] as const;

const faq: readonly LandingFaqItem[] = [
  {
    answer:
      "Todavía no hemos ejecutado proyectos para empresas mineras ni para gobiernos seccionales de Zamora Chinchipe, y preferimos decirlo antes que insinuar lo contrario. Sí tenemos experiencia produciendo estrategia de comunicación y material informativo para programas técnicos, y podemos presentar esos antecedentes en una reunión.",
    question: "¿Han trabajado con empresas mineras o instituciones públicas de la zona?",
  },
  {
    answer:
      "Sí. Producción audiovisual, diseño de material informativo, infografías, estrategia de comunicación y desarrollo web son capacidades propias del equipo. No subcontratamos la producción, que es donde suelen aparecer los problemas de calidad y de plazos.",
    question: "¿Cubren todo el proceso con equipo propio?",
  },
  {
    answer:
      "Sí. Entendemos que buena parte del material institucional es sensible y que su difusión la decide la organización, no el proveedor. Firmamos acuerdos de confidencialidad y no publicamos ninguna pieza sin autorización escrita.",
    question: "¿Trabajan con acuerdos de confidencialidad?",
  },
  {
    answer:
      "Podemos preparar la propuesta técnica y económica con el detalle que exige un proceso formal, incluyendo cronograma, productos entregables y perfil del equipo. Si el proceso pide requisitos habilitantes específicos, los revisamos antes de presentarnos.",
    question: "¿Pueden participar en procesos de contratación formal?",
  },
] as const;

export default function VideoInstitucionalZamoraPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <JsonLd
        data={buildLandingSchema({
          breadcrumb: "Video institucional en Zamora",
          faq,
          path: PATH,
          serviceArea: "Zamora",
          serviceDescription: description,
          serviceName: "Video institucional y comunicación corporativa",
        })}
      />
      <Navbar />
      <main className="flex flex-col pt-[120px]">
        <Reveal>
          <LandingHero
            eyebrow="Comunicación institucional"
            heading="Video institucional y comunicación corporativa en Zamora Chinchipe."
            lead="Documentación audiovisual de operaciones, contenido para programas de responsabilidad social y material informativo para empresas e instituciones de la provincia. Equipo de producción propio, a una hora de la ciudad de Zamora."
            whatsappMessage="Hola Tótem, necesito comunicación institucional en Zamora Chinchipe."
          />
        </Reveal>

        <Reveal>
          <LandingProse
            blocks={blocks}
            eyebrow="Cómo trabajamos"
            heading="Comunicación que resiste la revisión técnica"
          />
        </Reveal>

        <Reveal>
          <LandingIncludes heading="Qué producimos" items={includes} />
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
