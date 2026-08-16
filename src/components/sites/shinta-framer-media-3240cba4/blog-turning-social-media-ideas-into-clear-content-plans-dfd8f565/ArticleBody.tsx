import { Fragment } from "react";

type Block =
  | { kind: "h2"; text: string }
  | { kind: "p"; text: string }
  | { kind: "p-lines"; lines: string[] };

const blocks: Block[] = [
  { kind: "h2", text: "Toda publicación sólida comienza antes del diseño" },
  { kind: "p", text: "El gran contenido para redes sociales no comienza en las herramientas de diseño." },
  { kind: "p", text: "Comienza pensando." },
  {
    kind: "p",
    text:
      "Las agencias de redes sociales dedican mucho tiempo a planificar antes de publicar. Analizan los objetivos, el comportamiento de la audiencia y la voz de la marca. Esta etapa de reflexión distingue las publicaciones aleatorias del crecimiento intencional.",
  },
  {
    kind: "p",
    text: "Sin estrategia, el contenido se siente caótico. Con estrategia, se siente claro y enfocado.",
  },
  { kind: "h2", text: "La estrategia da una dirección clara al contenido" },
  { kind: "p", text: "Las agencias de redes sociales empiezan por definir el rumbo." },
  {
    kind: "p",
    text:
      "Deciden de qué debe hablar la marca y qué debe evitar. Así mantienen un mensaje claro y evitan señales contradictorias.",
  },
  {
    kind: "p-lines",
    lines: [
      "La estrategia ayuda a responder preguntas sencillas",
      "Qué representa esta marca",
      "Por qué debería importarle a la gente",
      "Qué acción deberían realizar",
    ],
  },
  {
    kind: "p",
    text:
      "Cuando el rumbo está claro, el contenido resulta más fácil de crear y comprender.",
  },
  { kind: "h2", text: "Planificar el contenido reduce el estrés" },
  { kind: "p", text: "Muchas marcas tienen dificultades porque crean contenido a última hora." },
  {
    kind: "p",
    text:
      "Las agencias lo evitan planificando con anticipación. Usan calendarios para organizar las publicaciones con semanas de antelación.",
  },
  {
    kind: "p",
    text:
      "Esto reduce el estrés y deja espacio para pensar con creatividad. Cuando el contenido está planificado, no hay pánico ni prisas.",
  },
  {
    kind: "p",
    text: "La planificación también ayuda a las marcas a mantener la constancia, incluso en épocas de mucho trabajo.",
  },
  { kind: "h2", text: "El enfoque mejora la calidad del contenido" },
  {
    kind: "p",
    text: "Cuando las agencias planifican contenido, se concentran en menos ideas, pero más sólidas.",
  },
  {
    kind: "p",
    text:
      "En lugar de publicarlo todo, eligen lo que más importa. Así, el contenido se percibe intencional en vez de saturado.",
  },
  { kind: "p", text: "El contenido enfocado es más fácil de leer y recordar." },
  { kind: "p", text: "Menos contenido con más significado suele rendir mejor." },
  { kind: "h2", text: "La estrategia y la creatividad trabajan juntas" },
  { kind: "p", text: "La estrategia no limita la creatividad; la impulsa." },
  {
    kind: "p",
    text:
      "Cuando el rumbo está claro, las ideas creativas fluyen más rápido. Diseñadores y redactores conocen los límites y pueden experimentar dentro de ellos.",
  },
  {
    kind: "p",
    text:
      "Las agencias de redes sociales equilibran estructura y creatividad. Así mantienen el contenido fresco y coherente con la marca.",
  },
  { kind: "p", text: "Una buena estrategia ofrece a la creatividad un espacio para crecer." },
  { kind: "h2", text: "Los espacios de trabajo moldean el proceso creativo" },
  { kind: "p", text: "El lugar de trabajo influye en la forma de pensar." },
  {
    kind: "p",
    text:
      "Los espacios tranquilos y enfocados ayudan a los estrategas a redactar, planificar y revisar el contenido a fondo. Este tiempo de concentración mejora la toma de decisiones.",
  },
  {
    kind: "p",
    text:
      "Las agencias de redes sociales protegen este tiempo de reflexión. Así surgen mejores ideas sin distracciones.",
  },
  { kind: "p", text: "Pensar con claridad produce contenido claro." },
  { kind: "h2", text: "Los datos guían las decisiones futuras" },
  { kind: "p", text: "Después de publicar el contenido, las agencias revisan su rendimiento." },
  {
    kind: "p",
    text:
      "Analizan qué guardó, compartió y comentó la gente. Estos datos ayudan a mejorar la estrategia futura.",
  },
  {
    kind: "p",
    text:
      "Con el tiempo, el contenido se vuelve más preciso porque las decisiones se basan en comportamientos reales, no en suposiciones.",
  },
  { kind: "p", text: "Las pequeñas mejoras se acumulan hasta producir grandes resultados." },
  { kind: "h2", text: "Por qué la estrategia es importante para tu marca" },
  {
    kind: "p",
    text: "Si tus redes sociales se sienten dispersas, el problema rara vez es la falta de esfuerzo.",
  },
  { kind: "p", text: "Por lo general, es falta de dirección." },
  {
    kind: "p",
    text:
      "Las agencias de redes sociales convierten ideas en sistemas. Ayudan a las marcas a pasar de publicaciones aleatorias a contenido con propósito.",
  },
  {
    kind: "p",
    text:
      "Con la estrategia adecuada, las redes sociales dejan de ser abrumadoras y comienzan a generar un impacto real.",
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
                <Fragment key={lineIndex}>
                  {lineIndex > 0 && <br />}
                  {line}
                </Fragment>
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
