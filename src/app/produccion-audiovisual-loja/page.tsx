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

const PATH = "/produccion-audiovisual-loja";

const title = "Producción audiovisual en Loja";
const description =
  "Fotografía, video y motion para negocios de Loja. Producimos contenido con estrategia detrás y lo conectamos con tus canales digitales y tu sitio web.";

export const metadata: Metadata = buildPageMetadata({
  description,
  path: PATH,
  title,
});

const blocks = [
  {
    body: "Grabar bonito no alcanza. Antes de encender una cámara definimos qué tiene que lograr la pieza: vender un servicio, explicar un producto, sostener la presencia mensual de tus redes. El formato sale de ahí, no al revés.",
    title: "El video empieza en la estrategia, no en la cámara",
  },
  {
    body: "Una campaña no se sostiene con un video suelto al año. Trabajamos volumen de contenido planificado: sesiones que rinden varias piezas, calendarios editoriales y formatos pensados para reels, TikTok y publicaciones, no un comercial cortado en pedazos.",
    title: "Producimos para el ritmo de las redes",
  },
  {
    body: "Somos de Loja y grabamos en Loja. Eso significa conocer las locaciones, resolver logística en el día y volver a grabar sin que un viaje desde Quito o Guayaquil se coma el presupuesto.",
    title: "Equipo local, logística resuelta",
  },
  {
    body: "El contenido que producimos no muere en la entrega. Lo publicamos, lo medimos y ajustamos lo que no está funcionando, porque también gestionamos los canales donde ese material vive.",
    title: "Después de grabar, alguien lo mueve y lo mide",
  },
] as const;

const includes = [
  "Fotografía de producto, servicio y equipo",
  "Video publicitario y promocional",
  "Contenido vertical para reels y TikTok",
  "Motion graphics y animación",
  "Video corporativo e institucional",
  "Guion y dirección de contenido",
  "Producción mensual para redes",
  "Edición, color y entrega multiformato",
] as const;

const projects: readonly LandingProject[] = [
  {
    image: "images/f6ccd8159b64601e.jpg",
    label: "Producción audiovisual",
    name: "PlayHouse",
    note: "Producción audiovisual completa: fotografía, videos promocionales y contenido mensual para redes.",
  },
  {
    image: "images/25d6efcc673140d3.jpg",
    label: "Contenido y marketing digital",
    name: "Alan",
    note: "Fotografía, video y contenido comercial sosteniendo toda la comunicación del negocio.",
  },
] as const;

const faq: readonly LandingFaqItem[] = [
  {
    answer:
      "Depende del alcance. Una sesión de fotografía o un video corto se resuelve en días; una campaña con guion, varias locaciones y entregas para redes toma semanas. Después de entender el objetivo te damos un cronograma concreto, no un rango vago.",
    question: "¿Cuánto tarda una producción?",
  },
  {
    answer:
      "Sí. Trabajamos en Loja y en la provincia, y también cubrimos Zamora y Zamora Chinchipe. Si la grabación es fuera de la ciudad lo contemplamos en la planificación desde el inicio.",
    question: "¿Graban fuera de la ciudad de Loja?",
  },
  {
    answer:
      "No es obligatorio, pero rinde mucho más. Un video suelto compite solo; un plan mensual construye presencia. Si no tienes estrategia todavía, la definimos nosotros antes de producir.",
    question: "¿Necesito tener una estrategia antes de contratar video?",
  },
  {
    answer:
      "Sí, y es lo que más nos diferencia. Producimos el contenido, gestionamos los canales donde se publica y desarrollamos el sitio web donde todo converge. No tienes que coordinar tres proveedores distintos.",
    question: "¿Solo producen o también manejan las redes y la web?",
  },
] as const;

export default function ProduccionAudiovisualLojaPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-shinta-canvas text-shinta-ink">
      <JsonLd
        data={buildLandingSchema({
          breadcrumb: title,
          faq,
          path: PATH,
          serviceArea: "Loja",
          serviceDescription: description,
          serviceName: "Producción audiovisual",
        })}
      />
      <Navbar />
      <main className="flex flex-col pt-[120px]">
        <Reveal>
          <LandingHero
            eyebrow="Producción audiovisual"
            heading="Producción audiovisual en Loja para negocios que necesitan vender, no solo verse bien."
            lead="Fotografía, video y motion pensados para entornos digitales. Definimos qué tiene que comunicar cada pieza, la producimos en Loja y la conectamos con los canales donde tu negocio realmente compite."
            whatsappMessage="Hola Tótem, necesito producción audiovisual en Loja."
          />
        </Reveal>

        <Reveal>
          <LandingProse
            blocks={blocks}
            eyebrow="Cómo trabajamos"
            heading="Contenido audiovisual con un objetivo de negocio detrás"
          />
        </Reveal>

        <Reveal>
          <LandingIncludes
            heading="Qué producimos"
            items={includes}
          />
        </Reveal>

        <Reveal>
          <LandingProjects
            heading="Proyectos audiovisuales que lo demuestran"
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
