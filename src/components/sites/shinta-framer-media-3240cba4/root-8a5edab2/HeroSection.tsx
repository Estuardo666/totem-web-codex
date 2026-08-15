"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

import { shintaAsset } from "../shared/site";

const ribbonCopy =
  "SOCIAL MEDIA MANAGEMENT · SHORT FORM CONTENT · INFLUENCER MARKETING · ";

const services = [
  "SHORT FORM CONTENT",
  "SOCIAL MEDIA MANAGEMENT",
  "INFLUENCER MARKETING",
];

export function HeroSection() {
  const frontVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlayback() {
    const frontVideo = frontVideoRef.current;

    if (!frontVideo) {
      return;
    }

    if (frontVideo.paused) {
      void frontVideo.play();
      return;
    }

    frontVideo.pause();
  }

  return (
    <section
      className="relative h-[1099px] overflow-hidden bg-shinta-canvas text-shinta-ink md:h-[1013px] xl:h-[900px]"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto h-full max-w-[1320px] px-5 xl:px-5">
        <div className="absolute top-[88px] left-5 z-20 md:top-[89px] xl:top-[176px] xl:left-5">
          <h1
            id="hero-heading"
            className="max-w-[335px] text-[32px] leading-[32px] font-bold tracking-[-1.28px] md:max-w-[680px] xl:max-w-[365px] xl:text-[64px] xl:leading-[64px] xl:tracking-[-2.56px]"
          >
            UGC that grows your brand.
          </h1>

          <ul className="mt-[30px] space-y-[4px] md:mt-[29px] xl:mt-[31px]">
            {services.map((service) => (
              <li
                className="flex items-center gap-[7px] text-[12px] leading-[16.8px] font-semibold tracking-[0.7px]"
                key={service}
              >
                <span
                  aria-hidden="true"
                  className="text-[19px] leading-none text-shinta-pink"
                >
                  ✱
                </span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute top-[328px] left-1/2 z-0 h-[360px] w-[150vw] -translate-x-1/2 overflow-visible md:top-[323px] md:h-[370px] xl:top-[302px] xl:h-[500px] xl:w-[100vw]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 500"
        >
          <path
            d="M-90 374 C 220 505, 520 520, 806 294 S 1228 45, 1530 151"
            fill="none"
            id="shinta-hero-ribbon-path"
            stroke="#ffa8f2"
            strokeLinecap="round"
            strokeWidth="45"
          />
          <text
            fill="#1c1917"
            fontFamily="Open Sauce One, sans-serif"
            fontSize="15"
            fontWeight="600"
            letterSpacing="1.2"
          >
            <textPath href="#shinta-hero-ribbon-path" startOffset="-12%">
              {ribbonCopy.repeat(4)}
              <animate
                attributeName="startOffset"
                className="motion-reduce:hidden"
                dur="22s"
                from="-70%"
                repeatCount="indefinite"
                to="-12%"
              />
            </textPath>
          </text>
        </svg>

        <div className="absolute top-[271px] left-[calc(50%_-_8px)] z-10 h-[410px] w-[230px] -translate-x-1/2 md:top-[278px] md:left-[calc(50%_-_21px)] md:h-[418px] md:w-[234px] xl:top-[175px] xl:left-[500px] xl:h-[640px] xl:w-[360px] xl:translate-x-0">
          <video
            aria-hidden="true"
            className="absolute top-[26px] -left-[32px] h-full w-full rounded-[19px] object-cover md:-left-[35px] xl:top-[48px] xl:-left-[30px] xl:rounded-[23px]"
            loop
            muted
            playsInline
            poster={shintaAsset("images/a46468b6396ae69e.jpeg")}
            preload="auto"
            src={shintaAsset("videos/hero-layer-back.mp4")}
          />
          <video
            aria-hidden="true"
            className="absolute top-[13px] -left-[16px] h-full w-full rounded-[19px] object-cover xl:top-[24px] xl:-left-[15px] xl:rounded-[23px]"
            loop
            muted
            playsInline
            poster={shintaAsset("images/6ea501bbff9ed14a.jpeg")}
            preload="auto"
            src={shintaAsset("videos/hero-layer-middle.mp4")}
          />
          <div className="absolute inset-0 overflow-hidden rounded-[19px] xl:rounded-[23px]">
            <video
              className="h-full w-full object-cover"
              loop
              muted
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              playsInline
              poster={shintaAsset("images/418ef3c59bda7b87.jpeg")}
              preload="auto"
              ref={frontVideoRef}
              src={shintaAsset("videos/hero-layer-front.mp4")}
            />
            <button
              aria-label={isPlaying ? "Pause hero video" : "Play hero video"}
              className="absolute top-1/2 left-1/2 grid size-[60px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-shinta-ink/70 text-white backdrop-blur-[2px] transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-shinta-pink xl:size-[70px]"
              onClick={togglePlayback}
              type="button"
            >
              {isPlaying ? (
                <Pause aria-hidden="true" className="size-6 fill-current" />
              ) : (
                <Play
                  aria-hidden="true"
                  className="ml-1 size-6 fill-current xl:size-7"
                />
              )}
            </button>
          </div>
        </div>

        <div className="absolute top-[716px] right-5 left-5 z-20 md:top-[729px] xl:top-[626px] xl:right-0 xl:left-auto xl:w-[300px]">
          <p className="text-[18px] leading-[25.2px] font-normal tracking-[-0.36px] text-shinta-stone">
            Shinta helps brands create content that truly connects with their
            audience, consistently and strategically across social media.
          </p>

          <Link
            className="group mt-[24px] flex h-[56px] w-full items-center justify-between rounded-full bg-shinta-ink pl-[23px] text-[16px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink md:mt-[24px] md:h-[52px] xl:mt-[25px] xl:w-[260px]"
            href="/#contact"
          >
            <span>Book a call</span>
            <span className="grid size-[56px] shrink-0 place-items-center rounded-full bg-shinta-pink text-shinta-ink md:size-[52px]">
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 transition-transform duration-300 group-hover:rotate-45"
                strokeWidth={2.25}
              />
            </span>
          </Link>
        </div>

        <Link
          aria-label="View the Rama social media project"
          className="group absolute top-[954px] right-5 left-5 z-20 flex h-[136px] items-center gap-[11px] rounded-[22px] bg-white p-[8px] pr-[45px] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink md:top-[858px] xl:top-[175px] xl:right-0 xl:left-auto xl:h-[140px] xl:w-[295px] xl:gap-[12px] xl:rounded-[24px] xl:pr-[38px]"
          href="/projects/rama"
        >
          <span className="relative h-full w-[93px] shrink-0 overflow-hidden rounded-[16px] xl:w-[96px]">
            <Image
              alt="Rama campaign model in a black hoodie"
              className="object-cover"
              fill
              sizes="96px"
              src={shintaAsset("images/d929f58f46477773.jpg")}
              unoptimized
            />
          </span>
          <span className="min-w-0">
            <span className="block text-[12px] leading-[16.8px] font-semibold tracking-[0.5px] text-shinta-lavender uppercase">
              NEW PROJECT!
            </span>
            <span className="mt-[4px] block text-[18px] leading-[25.2px] font-semibold tracking-[-0.36px]">
              Making Rama unmistakable on social
            </span>
          </span>
          <span className="absolute top-[9px] right-[9px] grid size-[32px] place-items-center rounded-full bg-shinta-canvas">
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:rotate-45"
              strokeWidth={2.25}
            />
          </span>
        </Link>
      </div>
    </section>
  );
}
