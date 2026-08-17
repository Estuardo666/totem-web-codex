"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const faqs = [
  {
    answer:
      "Tótem Mass Media es una agencia creativa y tecnológica con sede en Loja, Ecuador. Integramos estrategia, branding, producción audiovisual, marketing, diseño, desarrollo web, software, automatización e inteligencia artificial.",
    question: "¿Qué es Tótem Mass Media?",
  },
  {
    answer:
      "Podemos trabajar desde una identidad visual o una campaña hasta una plataforma completa, una automatización o un producto de software.",
    question: "¿Qué tipo de proyectos desarrollan?",
  },
  {
    answer:
      "La producción audiovisual continúa siendo una capacidad central, pero Tótem también puede diseñar la experiencia digital, desarrollar sistemas y automatizar procesos.",
    question: "¿Solo trabajan en producción audiovisual?",
  },
  {
    answer:
      "La web se entiende como una herramienta de negocio y no únicamente como una vitrina digital.",
    question: "¿Cómo entienden el desarrollo web?",
  },
  {
    answer:
      "La inteligencia artificial se integra cuando permite reducir trabajo manual, mejorar decisiones o acelerar procesos.",
    question: "¿Cómo aplican la inteligencia artificial?",
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
      aria-labelledby="faq-heading"
      className="flex min-h-[833px] w-full items-center justify-center overflow-hidden bg-shinta-canvas px-5 py-20 md:min-h-[679px] md:py-[60px] lg:min-h-[830px] lg:py-[120px]"
    >
      <div className="flex h-full w-full max-w-[630px] flex-col items-center gap-9 lg:gap-[50px]">
        <h2
          className="shrink-0 text-center text-[28px] leading-[1.08] font-bold tracking-[-1.12px] text-shinta-ink lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]"
          id="faq-heading"
        >
          Preguntas sobre nuestro trabajo
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
                    className="flex min-h-16 w-full items-center justify-between gap-4 rounded-[14px] px-4 py-4 text-left text-[19px] leading-[26px] font-medium tracking-[-0.4px] text-shinta-ink focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-shinta-lavender sm:px-5 lg:text-[22px] lg:leading-[29px] lg:tracking-[-0.6px]"
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
                  <p className="max-w-[560px] px-4 pb-5 text-[15px] leading-[23px] font-normal text-shinta-stone sm:px-5 lg:text-[16px] lg:leading-[25px]">
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
