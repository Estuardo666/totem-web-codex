"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const faqs = [
  {
    answer:
      "We help brands grow on social media. We plan content, design posts, write captions, and manage accounts. Our goal is to help you get more attention, more engagement, and more leads.",
    question: "What does your social media agency do?",
  },
  {
    answer:
      "We manage Instagram, TikTok, X, LinkedIn, and Facebook. If your audience hangs out there, we can help you show up the right way.",
    question: "Which social media platforms do you manage?",
  },
  {
    answer:
      "We handle everything. Strategy, ideas, visuals, captions, and posting. If you already have content, we can also optimize and improve it.",
    question: "Do you create the content or do we need to provide it?",
  },
  {
    answer:
      "Most clients see early growth in the first one to three months. Real results come from consistency, testing, and learning what your audience loves.",
    question: "How long does it take to see results?",
  },
  {
    answer:
      "This is perfect for founders, startups, and brands that want to grow online but do not have time to manage social media daily.",
    question: "Who is this service best for?",
  },
] as const;

type AccordionControlProps = {
  open: boolean;
};

function AccordionControl({ open }: AccordionControlProps) {
  return (
    <span
      aria-hidden="true"
      className="relative grid size-8 shrink-0 place-items-center rounded-[9px] bg-shinta-lavender text-white"
    >
      <span className="absolute h-0.5 w-4 rounded-full bg-current" />
      <span
        className={`absolute h-4 w-0.5 rounded-full bg-current transition-transform duration-700 ease-out ${open ? "scale-y-0" : "scale-y-100"}`}
      />
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
          FAQ
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
