type Block =
  | { kind: "h2"; text: string }
  | { kind: "p"; text: string }
  | { kind: "p-lines"; lines: string[] };

const blocks: Block[] = [
  { kind: "h2", text: "Tótem Mass Media" },
  {
    kind: "p",
    text: "Tótem Mass Media es una agencia creativa y tecnológica con sede en Loja, Ecuador.",
  },
  {
    kind: "p",
    text: "Combinamos estrategia, diseño, producción audiovisual y desarrollo de tecnología para ayudar a empresas y organizaciones a comunicar mejor, mejorar su presencia digital y construir herramientas que hagan más eficiente su operación.",
  },
  { kind: "h2", text: "Estrategia, creatividad y tecnología" },
  {
    kind: "p-lines",
    lines: [
      "Estrategia",
      "Entender el negocio, la marca, el público y el objetivo.",
      "Creatividad",
      "Convertir esa estrategia en identidad, diseño, fotografía, video y contenido.",
      "Tecnología",
      "Construir los sitios, plataformas, sistemas y automatizaciones que permiten ejecutar y escalar.",
    ],
  },
  { kind: "h2", text: "De la idea al sistema que la hace crecer" },
  {
    kind: "p",
    text: "No trabajamos con soluciones aisladas. Podemos construir la identidad de una marca, producir su contenido, desarrollar su experiencia digital y automatizar los procesos que sostienen su operación.",
  },
  {
    kind: "p",
    text: "La web se entiende como una herramienta de negocio y no únicamente como una vitrina digital.",
  },
  { kind: "h2", text: "Proyectos que lo demuestran" },
  {
    kind: "p",
    text: "TransCity demuestra capacidad para construir y optimizar plataformas operativas complejas. Terra Viva demuestra estrategia, branding, diseño y web. PlayHouse demuestra fotografía, video, producción y contenido.",
  },
  {
    kind: "p",
    text: "FocusGuard, Bot Tótem, Totem OS, TotemHub y Totem Auto Edit muestran la capacidad de Tótem para desarrollar software, automatización audiovisual, herramientas internas y sistemas inteligentes.",
  },
  { kind: "h2", text: "La propuesta" },
  {
    kind: "p",
    text: "Creamos marcas, contenido y tecnología que hacen avanzar negocios.",
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
