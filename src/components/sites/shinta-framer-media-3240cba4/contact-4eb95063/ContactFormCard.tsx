"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";

const inputClassName =
  "w-full bg-transparent text-[18px] leading-[21.6px] text-shinta-ink placeholder:text-shinta-muted focus:outline-none";

export function ContactFormCard() {
  const shouldReduceMotion = useReducedMotion();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <motion.div
      className="flex w-full max-w-[680px] flex-col items-end gap-2 rounded-[28px] bg-shinta-pink p-3 md:rounded-[36px] md:p-4 xl:w-[644px] xl:rounded-[40px]"
      initial={
        shouldReduceMotion
          ? { opacity: 1, scale: 1 }
          : { opacity: 0.001, scale: 0.8 }
      }
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="flex w-full items-center justify-center gap-[10px] px-4 py-2">
        <h4 className="w-full text-left text-[24px] leading-[29px] font-bold tracking-[-0.96px] text-shinta-ink md:text-[32px] md:leading-[38.4px] md:tracking-[-1.28px]">
          Let us know about you.
        </h4>
      </div>

      <form
        className="flex w-full flex-col gap-[14px] rounded-[24px] bg-white p-4 md:gap-4 md:rounded-[32px] md:p-6"
        onSubmit={handleSubmit}
      >
        <label className="flex w-full flex-col items-start gap-[10px]">
          <SectionEyebrow className="text-shinta-ink">
            FULL NAME
          </SectionEyebrow>
          <div className="flex h-[58px] w-full items-center rounded-[16px] bg-shinta-canvas p-4">
            <input
              className={`${inputClassName} focus-visible:ring-2 focus-visible:ring-shinta-ink/40`}
              name="name"
              placeholder="Enter full name"
              required
              type="text"
            />
          </div>
        </label>

        <label className="flex w-full flex-col items-start gap-[10px]">
          <SectionEyebrow className="text-shinta-ink">EMAIL</SectionEyebrow>
          <div className="flex h-[58px] w-full items-center rounded-[16px] bg-shinta-canvas p-4">
            <input
              className={`${inputClassName} focus-visible:ring-2 focus-visible:ring-shinta-ink/40`}
              name="email"
              placeholder="Enter email address"
              required
              type="email"
            />
          </div>
        </label>

        <label className="flex w-full flex-col items-start gap-[10px]">
          <SectionEyebrow className="text-shinta-ink">MESSAGE</SectionEyebrow>
          <div className="w-full rounded-[16px] bg-shinta-canvas">
            <textarea
              className={`${inputClassName} h-[100px] resize-y rounded-[16px] p-4 focus-visible:ring-2 focus-visible:ring-shinta-ink/40`}
              name="message"
              placeholder="Let us know about your ideas or challenges"
            />
          </div>
        </label>

        <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
          <p className="text-[14px] leading-[20px] text-shinta-muted md:text-[16px] md:leading-[22.4px]">
            By submitting, you agree to our{" "}
            <Link className="font-semibold text-shinta-ink no-underline" href="/legal/terms-of-service">
              Terms
            </Link>{" "}
            and{" "}
            <Link
              className="font-semibold text-shinta-ink no-underline"
              href="/legal/privacy-policy"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <button
            className="group flex h-[57.2px] w-full items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink md:w-[274px]"
            type="submit"
          >
            <span className="flex h-[57.2px] flex-1 items-center justify-center rounded-[44px] bg-shinta-ink px-6 py-4 text-[16px] font-bold text-white md:w-[217px] md:flex-none">
              Submit
            </span>
            <span className="grid size-[57px] shrink-0 place-items-center rounded-[50px] bg-shinta-lavender text-shinta-ink transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-45 group-hover:scale-110">
              <ArrowUpRight aria-hidden="true" className="size-5" strokeWidth={2.2} />
            </span>
          </button>
        </div>
      </form>
    </motion.div>
  );
}
