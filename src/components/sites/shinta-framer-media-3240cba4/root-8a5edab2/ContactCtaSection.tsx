import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { shintaAsset } from "../shared/site";

export function ContactCtaSection() {
  return (
    <section
      className="h-[909px] overflow-hidden bg-shinta-canvas px-5 py-[12px] text-shinta-ink md:h-[1163px] md:py-[80px] xl:h-[797px] xl:py-[80px]"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid h-full max-w-[1280px] grid-rows-[483px_1fr] gap-[12px] md:grid-rows-[430px_1fr] md:gap-[16px] xl:grid-cols-[420px_1fr] xl:grid-rows-1 xl:gap-[18px]">
        <div className="relative flex overflow-hidden rounded-[32px] bg-shinta-ink px-[30px] py-[34px] text-shinta-canvas md:px-[42px] md:py-[42px] xl:rounded-[34px] xl:px-[34px] xl:py-[36px]">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute top-[-11px] left-[-9px] h-[150px] w-[340px] text-shinta-pink md:w-[430px] xl:top-[-7px] xl:left-[-2px] xl:h-[170px] xl:w-[430px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 430 170"
          >
            <path
              d="M-45 91C46 119 150 111 119 58c-29-49-112 5-58 51 51 43 167 12 249-4 60-12 91-47 140-100"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="7"
            />
          </svg>

          <div className="relative z-10 mt-auto w-full">
            <h2
              id="contact-heading"
              className="max-w-[330px] text-[28px] leading-[31px] font-bold tracking-[-1.12px] xl:text-[64px] xl:leading-[70.4px] xl:tracking-[-2.56px]"
            >
              Let’s grow thorough content!
            </h2>
            <p className="mt-[24px] max-w-[340px] text-[18px] leading-[27px] font-normal tracking-[-0.36px] text-[#d0cac6] xl:mt-[28px]">
              Shinta helps brands create content that earns attention, builds
              engagement, and drives real growth.
            </p>

            <Link
              className="group mt-[30px] flex h-[56px] w-full items-center justify-between rounded-full bg-shinta-canvas pl-[22px] text-[16px] font-semibold text-shinta-ink transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-shinta-pink xl:mt-[38px] xl:h-[52px]"
              href="https://cal.com/"
            >
              <span>Book a call</span>
              <span className="grid size-[56px] shrink-0 place-items-center rounded-full bg-shinta-pink transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:rotate-45 group-hover:scale-110 group-focus-visible:translate-x-1 group-focus-visible:rotate-45 group-focus-visible:scale-110 xl:size-[52px]">
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5"
                  strokeWidth={2.2}
                />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] bg-[#d9d9d6] xl:rounded-[34px]">
          <div className="shinta-float absolute -inset-[12px] motion-reduce:transform-none">
            <Image
              alt="A child running through a field surrounded by seagulls"
              className="object-cover"
              fill
              priority={false}
              sizes="(min-width: 1280px) 842px, calc(100vw - 40px)"
              src={shintaAsset("images/d72f6236d901e924.png")}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
