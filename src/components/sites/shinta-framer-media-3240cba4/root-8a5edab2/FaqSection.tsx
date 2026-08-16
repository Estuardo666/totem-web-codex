"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const faqs = [
  {
    answer:
      "Ayudamos a las marcas a crecer en redes sociales. Planificamos contenido, diseñamos publicaciones, escribimos textos y gestionamos cuentas. Nuestro objetivo es ayudarte a conseguir más atención, interacción y clientes potenciales.",
    question: "¿Qué hace su agencia de redes sociales?",
  },
  {
    answer:
      "Gestionamos Instagram, TikTok, X, LinkedIn y Facebook. Si tu audiencia está allí, te ayudamos a presentarte de la manera adecuada.",
    question: "¿Qué plataformas de redes sociales gestionan?",
  },
  {
    answer:
      "Nos encargamos de todo: estrategia, ideas, piezas visuales, textos y publicaciones. Si ya tienes contenido, también podemos optimizarlo y mejorarlo.",
    question: "¿Crean el contenido o debemos proporcionarlo?",
  },
  {
    answer:
      "La mayoría de los clientes percibe un crecimiento inicial durante los primeros tres meses. Los resultados reales provienen de la constancia, las pruebas y el aprendizaje sobre lo que le gusta a tu audiencia.",
    question: "¿Cuánto tiempo se tarda en ver resultados?",
  },
  {
    answer:
      "Este servicio es ideal para fundadores, startups y marcas que quieren crecer en línea, pero no tienen tiempo para gestionar sus redes sociales a diario.",
    question: "¿Para quién es más adecuado este servicio?",
  },
] as const;

type AccordionControlProps = {
  open: boolean;
};

function AccordionControl({ open }: AccordionControlProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative grid size-8 shrink-0 place-items-center rounded-[9px] bg-shinta-lavender text-white transition-transform duration-700 ease-out ${open ? "rotate-45" : "rotate-0"}`}
    >
      <span className="absolute h-0.5 w-4 rounded-full bg-current" />
      <span className="absolute h-4 w-0.5 rounded-full bg-current" />
    </span>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="shinta-faq-heading"
      className="flex min-h-[833px] w-full items-center justify-center overflow-hidden bg-shinta-canvas px-5 py-20 md:min-h-[679px] md:py-[60px] lg:min-h-[830px] lg:py-[120px]"
    >
      <div className="flex h-full w-full max-w-[630px] flex-col items-center gap-9 lg:gap-[50px]">
        <h2
          className="shrink-0 text-center text-[28px] leading-[1.08] font-bold tracking-[-1.12px] text-shinta-ink lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]"
          id="shinta-faq-heading"
        >
          PREGUNTAS FRECUENTES
        </h2>

        <div className="w-full space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `shinta-faq-button-${index + 1}`;
            const panelId = `shinta-faq-panel-${index + 1}`;

            return (
              <article className="overflow-hidden rounded-[14px] bg-white" key={faq.question}>
                <h3>
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="flex min-h-16 w-full items-center justify-between gap-4 rounded-[14px] px-4 py-3 text-left text-[16px] leading-[22px] font-bold text-shinta-ink focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-shinta-lavender sm:px-5 lg:text-[18px] lg:leading-[25.2px]"
                    id={buttonId}
                    onClick={() => setOpenIndex(index)}
                    type="button"
                  >
                    <span>{faq.question}</span>
                    <AccordionControl open={isOpen} />
                  </button>
                </h3>

                <motion.div
                  animate={
                    isOpen
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  aria-hidden={!isOpen}
                  aria-labelledby={buttonId}
                  className="overflow-hidden"
                  id={panelId}
                  initial={false}
                  role="region"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          height: {
                            duration: 0.85,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.55,
                            ease: "easeOut",
                          },
                        }
                  }
                >
                  <p className="px-4 pb-5 text-[16px] leading-6 text-shinta-stone sm:px-5 lg:text-[18px] lg:leading-[27px]">
                    {faq.answer}
                  </p>
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
