type Block =
  | { kind: "h2"; text: string }
  | { kind: "p"; text: string }
  | { kind: "p-lines"; lines: string[] };

const blocks: Block[] = [
  { kind: "h2", text: "Tótem Mass Media" },
  {
    kind: "p",
    text: "Tótem Mass Media es una agencia creativa y digital con sede en Loja, Ecuador.",
  },
  {
    kind: "p",
    text: "Combinamos producción audiovisual, marketing digital, estrategia de contenido y desarrollo web para ayudar a empresas y organizaciones a comunicar mejor, mejorar su presencia digital y convertir esa atención en clientes.",
  },
  { kind: "h2", text: "Cómo trabajamos" },
  {
    kind: "p-lines",
    lines: [
      "Estrategia y contenido",
      "Entender el negocio, el público y el objetivo, y traducirlo en un calendario editorial con conceptos y guiones.",
      "Producción audiovisual",
      "Fotografía, video, reels, motion graphics y contenido mensual pensado para formatos sociales.",
      "Marketing digital",
      "Gestión de redes, campañas, métricas y optimización con reportes de desempeño.",
      "Diseño y desarrollo web",
      "Sitios corporativos, landing pages y plataformas de servicios con UX/UI, SEO técnico e integraciones.",
    ],
  },
  { kind: "h2", text: "De la idea al contenido que la hace crecer" },
  {
    kind: "p",
    text: "No trabajamos con piezas sueltas. Definimos la estrategia, producimos el contenido, gestionamos los canales digitales y desarrollamos el sitio web donde todo converge.",
  },
  {
    kind: "p",
    text: "La web se entiende como una herramienta de negocio y no únicamente como una vitrina digital.",
  },
  { kind: "h2", text: "Proyectos que lo demuestran" },
  {
    kind: "p",
    text: "TransCity muestra el diseño y desarrollo de una web que sostiene la operación: reservas, tarifas, pagos e integraciones. Terra Viva, la construcción de una presencia digital desde cero. PlayHouse, la producción audiovisual: fotografía, videos promocionales y contenido para redes.",
  },
  {
    kind: "p",
    text: "Alan reúne contenido comercial, fotografía, video y desarrollo web. Aprendiendo Juntos es una web orientada a conversión: arquitectura de información, SEO, mapas y contacto por WhatsApp.",
  },
  { kind: "h2", text: "La propuesta" },
  {
    kind: "p",
    text: "Producción audiovisual, marketing y desarrollo web que hacen avanzar negocios.",
  },
];

const h2Classes =
  "text-[28px] font-bold leading-[34px] tracking-[-1.12px] text-shinta-ink md:text-[34px] md:leading-[40px] md:tracking-[-1.36px] xl:text-[40px] xl:leading-[48px] xl:tracking-[-1.6px]";
const h2SpacingClasses = "mt-[28px] md:mt-[32px] xl:mt-[40px] first:mt-0";
const pClasses =
  "text-[16px] font-normal leading-[25px] text-shinta-stone md:text-[18px] md:leading-[27px] xl:text-[18px] xl:leading-[27px]";
const pSpacingClasses = "mt-[16px] md:mt-[18px] xl:mt-[20px]";

export function ArticleBody() {
  return (
    <div className="w-full md:max-w-[640px] xl:max-w-[640px]">
      {blocks.map((block, index) => {
        if (block.kind === "h2") {
          return (
            <h2 key={index} className={`${h2Classes} ${h2SpacingClasses}`}>
              {block.text}
            </h2>
          );
        }

        if (block.kind === "p-lines") {
          return (
            <p key={index} className={`${pClasses} ${pSpacingClasses}`}>
              {block.lines.map((line, lineIndex) => (
                <span className={lineIndex % 2 === 0 ? "font-bold" : ""} key={line}>
                  {lineIndex > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          );
        }

        return (
          <p key={index} className={`${pClasses} ${pSpacingClasses}`}>
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
