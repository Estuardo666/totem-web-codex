import type { Metadata } from "next";
import Link from "next/link";

import { FooterSection } from "@/components/sites/shinta-framer-media-3240cba4/shared/FooterSection";
import { Navbar } from "@/components/sites/shinta-framer-media-3240cba4/shared/Navbar";
import { SectionEyebrow } from "@/components/sites/shinta-framer-media-3240cba4/shared/ShintaPrimitives";
import { CONTACT_EMAIL } from "@/lib/contact";
import { buildPageMetadata } from "@/lib/seo";

const title = "Política de privacidad de TotemHub";
const description =
  "Cómo TotemHub accede, utiliza y protege los datos de Google Drive y la información guardada en el equipo.";

export const metadata: Metadata = buildPageMetadata({
  description,
  path: "/totemhub/privacidad",
  title,
});

const sections = [
  {
    body: (
      <>
        Esta política explica el tratamiento de datos realizado por TotemHub,
        una aplicación de escritorio de Tótem Mass Media. Para consultas o para
        ejercer derechos relacionados con tus datos, escribe a{" "}
        <Link className="font-semibold underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </Link>
        .
      </>
    ),
    title: "1. Responsable y contacto",
  },
  {
    body: (
      <>
        Al conectar una cuenta de Google, TotemHub solicita tu identificación
        básica —nombre, correo, foto e identificador de cuenta— y acceso a los
        archivos y carpetas de Google Drive. Esto permite mostrar tu cuenta,
        navegar por Drive, descargar, subir, mover, renombrar, sincronizar y
        enviar elementos a la papelera cuando tú realizas esas acciones.
      </>
    ),
    title: "2. Datos de Google que utiliza TotemHub",
  },
  {
    body: (
      <>
        La información se usa exclusivamente para prestar las funciones que
        eliges dentro de la aplicación. TotemHub no vende tus datos, no los usa
        para publicidad y no transfiere tus archivos de Drive a servidores de
        Tótem Mass Media. La aplicación se comunica directamente con los
        servicios de Google mediante la API oficial de Google Drive.
      </>
    ),
    title: "3. Finalidad y uso limitado",
  },
  {
    body: (
      <>
        El token que mantiene conectada tu cuenta se guarda en el Administrador
        de credenciales de Windows. Los metadatos necesarios para navegar, las
        miniaturas, la caché de archivos abiertos y las copias que marcas para
        uso sin conexión se almacenan localmente en tu computadora. Tú eliges
        la ubicación de las copias sin conexión.
      </>
    ),
    title: "4. Almacenamiento y seguridad",
  },
  {
    body: (
      <>
        Google procesa la autenticación y las operaciones de Drive conforme a
        sus propios términos y políticas. TotemHub no comparte datos de Google
        con anunciantes, corredores de datos ni otros terceros. Solo podrían
        comunicarse datos cuando exista una obligación legal válida.
      </>
    ),
    title: "5. Servicios de terceros y transferencias",
  },
  {
    body: (
      <>
        Los datos locales permanecen mientras mantengas la cuenta conectada o
        conserves la caché y las copias sin conexión. Puedes desconectar la
        cuenta desde TotemHub y revocar el acceso desde la sección de seguridad
        de tu Cuenta de Google. Las copias locales que decidas conservar pueden
        eliminarse desde tu equipo.
      </>
    ),
    title: "6. Conservación y revocación",
  },
  {
    body: (
      <>
        De acuerdo con la normativa aplicable, puedes solicitar acceso,
        rectificación, actualización, eliminación, oposición o suspensión del
        tratamiento de tus datos personales. Envía tu solicitud a{" "}
        <Link className="font-semibold underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </Link>
        . Podemos pedir información razonable para verificar tu identidad antes
        de responder.
      </>
    ),
    title: "7. Tus derechos",
  },
  {
    body: (
      <>
        Podemos actualizar esta política cuando cambien las funciones de
        TotemHub, los permisos solicitados o las obligaciones legales. La
        versión vigente siempre estará publicada en esta dirección. Última
        actualización: 18 de septiembre de 2026.
      </>
    ),
    title: "8. Cambios a esta política",
  },
] as const;

export default function TotemHubPrivacyPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-totem-background text-totem-text">
      <Navbar />
      <main className="px-5 pb-24 pt-[148px] md:pt-[180px]">
        <article className="mx-auto max-w-[980px]">
          <header className="border-b border-totem-border pb-12 md:pb-16">
            <SectionEyebrow className="mb-5 text-totem-creative-ink">
              TotemHub · Información legal
            </SectionEyebrow>
            <h1 className="max-w-[900px] font-heading text-[clamp(3rem,8vw,7rem)] leading-[.88] tracking-[-.05em]">
              Política de privacidad
            </h1>
            <p className="mt-7 max-w-[720px] text-lg leading-8 text-totem-text-secondary md:text-xl">
              Esta política describe de forma clara cómo TotemHub accede, usa,
              almacena y protege la información necesaria para integrar Google
              Drive en la aplicación de escritorio.
            </p>
          </header>

          <div className="divide-y divide-totem-border">
            {sections.map(({ body, title: sectionTitle }) => (
              <section className="grid gap-4 py-9 md:grid-cols-[.8fr_1.2fr] md:gap-14 md:py-12" key={sectionTitle}>
                <h2 className="font-heading text-2xl tracking-[-.03em] md:text-3xl">
                  {sectionTitle}
                </h2>
                <p className="text-base leading-8 text-totem-text-secondary md:text-lg">
                  {body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] bg-totem-background-alt p-7 md:p-10">
            <p className="font-heading text-2xl tracking-[-.03em] md:text-3xl">
              ¿Quieres volver a conocer TotemHub?
            </p>
            <Link
              className="mt-5 inline-flex min-h-12 items-center rounded-full bg-totem-action px-6 font-semibold text-totem-action-text transition-transform hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-totem-focus"
              href="/totemhub"
            >
              Ir a TotemHub
            </Link>
          </div>
        </article>
      </main>
      <FooterSection />
    </div>
  );
}
