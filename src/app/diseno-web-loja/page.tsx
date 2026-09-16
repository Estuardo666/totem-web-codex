import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import {
  LandingFaq,
  LandingHero,
  LandingIncludes,
  LandingProjects,
  LandingProse,
  type LandingFaqItem,
  type LandingProject,
} from "@/components/landings/LandingSections";
import { ContactCtaSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/ContactCtaSection";
import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";
import { Reveal } from "@/components/sites/shinta-framer-media-3240cba4/shared/Reveal";
import { buildLandingSchema, buildPageMetadata } from "@/lib/seo";

const PATH = "/diseno-web-loja";

const title = "Diseño y desarrollo web en Loja";
const description =
  "Sitios corporativos, landing pages y plataformas a medida para negocios de Loja. UX/UI, SEO técnico, integraciones con WhatsApp, mapas y pagos en línea.";

export const metadata: Metadata = buildPageMetadata({
  description,
  path: PATH,
  title,
});

const blocks = [
  {
    body: "Un sitio que solo muestra información es un folleto caro. Los que construimos hacen algo: reservan, cobran, califican contactos, derivan a WhatsApp. La pregunta que hacemos primero no es cómo se va a ver, sino qué tarea le vas a delegar.",
    title: "La web es una herramienta, no una vitrina",
  },
  {
    body: "Cada segundo de carga se paga en clientes perdidos, y en Ecuador buena parte del tráfico llega por datos móviles en conexiones irregulares. Construimos pensando en ese escenario: peso controlado, imágenes optimizadas y móvil primero.",
    title: "Rendimiento real, no solo en la demo",
  },
  {
    body: "El SEO técnico va desde el primer commit: estructura semántica, metadatos, datos estructurados y SEO local para que Google entienda dónde operas. No es algo que se agrega después cuando el sitio no aparece.",
    title: "SEO desde la arquitectura, no como parche",
  },
  {
    body: "Una plantilla te deja igual que a todos los que compraron la misma plantilla. Diseñamos UX/UI a medida sobre tu operación real: los servicios que vendes, cómo cotizas y cómo te contacta la gente.",
    title: "A medida, no plantilla reciclada",
  },
] as const;

const includes = [
  "Sitios corporativos y landing pages",
  "Diseño UX/UI a medida",
  "Desarrollo web a medida",
  "SEO técnico y SEO local",
  "Integración con WhatsApp",
  "Mapas y ubicación",
  "Pagos en línea y reservas",
  "Mantenimiento y optimización continua",
] as const;

const projects: readonly LandingProject[] = [
  {
    image: "images/d929f58f46477773.jpg",
    label: "Diseño y desarrollo web",
    name: "TransCity",
    note: "Una web que opera el negocio: diseño UX/UI, reservas, tarifas, pagos en línea e integraciones.",
  },
  {
    image: "images/f8f2222b4c112435.jpg",
    label: "Desarrollo web y contenido",
    name: "Terra Viva",
    note: "Presencia digital construida de cero: estrategia de contenido, dirección visual y desarrollo del sitio.",
  },
  {
    image: "images/f9924a626b8f6cfa.jpg",
    label: "UX/UI, web y SEO",
    name: "Aprendiendo Juntos",
    note: "Web orientada a conversión: arquitectura de información, SEO, mapas y contacto por WhatsApp.",
  },
] as const;

const faq: readonly LandingFaqItem[] = [
  {
    answer:
      "Una landing page enfocada sale en pocas semanas. Un sitio corporativo con varias secciones, o una plataforma con reservas y pagos, toma más porque hay integraciones de por medio. Definimos el alcance antes de dar una fecha.",
    question: "¿Cuánto tarda desarrollar un sitio web?",
  },
  {
    answer:
      "Sí. Integramos pasarelas de pago, reservas, formularios que llegan a donde tu equipo trabaja, WhatsApp y mapas. Si el negocio necesita que la web ejecute algo, esa es justamente la parte que nos interesa.",
    question: "¿Pueden integrar pagos en línea y reservas?",
  },
  {
    answer:
      "El sitio queda con la base técnica lista: estructura semántica, datos estructurados, rendimiento y SEO local configurado. Eso hace que puedas posicionarte, pero posicionar es un trabajo continuo de contenido que también podemos sostener.",
    question: "¿El sitio va a posicionarse en Google?",
  },
  {
    answer:
      "Sí, y suele convenir: rehacer sobre una base sana sale más barato que arrastrar problemas. Revisamos qué tienes, qué contenido se conserva y qué URLs hay que redirigir para no perder el posicionamiento que ya ganaste.",
    question: "¿Pueden rehacer un sitio que ya tengo?",
  },
] as const;

export default function DisenoWebLojaPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <JsonLd
        data={buildLandingSchema({
          breadcrumb: title,
          faq,
          path: PATH,
          serviceArea: "Loja",
          serviceDescription: description,
          serviceName: "Diseño y desarrollo web",
        })}
      />
      <Navbar />
      <main className="flex flex-col pt-[120px]">
        <Reveal>
          <LandingHero
            eyebrow="Diseño y desarrollo web"
            heading="Diseño y desarrollo web en Loja para sitios que trabajan, no que solo se ven."
            lead="Sitios corporativos, landing pages y plataformas de servicios con UX/UI a medida, SEO técnico e integraciones. La web como herramienta de negocio, construida desde Loja."
            whatsappMessage="Hola Tótem, necesito un sitio web para mi negocio en Loja."
          />
        </Reveal>

        <Reveal>
          <LandingProse
            blocks={blocks}
            eyebrow="Cómo lo construimos"
            heading="Un sitio que convierte visitas en clientes"
          />
        </Reveal>

        <Reveal>
          <LandingIncludes heading="Qué incluye" items={includes} />
        </Reveal>

        <Reveal>
          <LandingProjects
            heading="Sitios que ya operan negocios"
            projects={projects}
          />
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
