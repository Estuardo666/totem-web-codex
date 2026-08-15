"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Pause, Play, Star } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";
import { shintaAsset } from "../shared/site";

const testimonials = [
  {
    body: "Shinta helped us understand what content actually works. Our engagement grew and posting finally feels intentional.",
    image: "images/fd4b5099d911c76f.jpg",
    name: "Sarah",
    role: "VP of Nakula",
    title: "Our engagement went up fast",
  },
  {
    body: "Before Shinta we were posting randomly. Now we have clear ideas clear messaging and a plan that makes sense.",
    image: "images/d90a19ecbfeae44f.jpg",
    name: "Jonathan",
    role: "CTO of Sadewa",
    title: "We finally have a clear content direction",
  },
  {
    body: "Shinta breaks things down in a simple way. We know what to post why we post it and how it helps our brand grow.",
    image: "images/b82418baae466bc6.jpg",
    name: "Ratih",
    role: "CMO of Bima",
    title: "Social media feels less stressful now",
  },
  {
    body: "Our audience grew and so did the quality of conversations. Shinta helped us focus on connection not just numbers.",
    image: "images/35b70b916d6ee028.jpg",
    name: "Bhagas",
    role: "Marketing of Rama",
    title: "We saw real growth not just likes",
  },
] as const;

const collageVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    transition: { damping: 24, stiffness: 160, type: "spring" },
    y: 0,
  },
};

function FiveStars() {
  return (
    <div aria-label="5 out of 5 stars" className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          aria-hidden="true"
          className="grid size-5 place-items-center rounded-[3px] bg-shinta-orange text-white"
          key={index}
        >
          <Star className="size-[13px]" fill="currentColor" strokeWidth={1.5} />
        </span>
      ))}
    </div>
  );
}

type AuthorProps = {
  image: string;
  name: string;
  role: string;
};

function Author({ image, name, role }: AuthorProps) {
  return (
    <footer className="flex items-center gap-3">
      <Image
        alt={`${name}, ${role}`}
        className="size-12 shrink-0 rounded-full object-cover"
        height={900}
        src={shintaAsset(image)}
        unoptimized
        width={672}
      />
      <div>
        <cite className="block text-[16px] leading-[22px] font-bold not-italic text-shinta-ink lg:text-[18px] lg:leading-[25px]">
          {name}
        </cite>
        <p className="text-[14px] leading-5 text-shinta-muted lg:text-[16px] lg:leading-[22px]">
          {role}
        </p>
      </div>
    </footer>
  );
}

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      await video.play();
      return;
    }

    video.pause();
  };

  return (
    <section
      aria-labelledby="shinta-testimonials-heading"
      className="h-[3020px] w-full overflow-hidden bg-shinta-canvas px-5 py-[100px] md:h-[2875px] md:py-[120px] lg:h-[1390px]"
    >
      <div className="mx-auto flex h-full w-full max-w-[960px] flex-col items-center gap-10">
        <motion.header
          className="flex shrink-0 flex-col items-center gap-4 text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          transition={{ damping: 24, stiffness: 170, type: "spring" }}
          viewport={{ amount: 0.7, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionEyebrow className="inline-flex rounded-full bg-shinta-pink px-2.5 py-1 text-shinta-ink">
            Testimonials
          </SectionEyebrow>
          <h2
            className="text-[28px] leading-[1.08] font-bold tracking-[-1.12px] text-shinta-ink lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]"
            id="shinta-testimonials-heading"
          >
            Trusted by 40+
            <br />
            Companies
          </h2>
        </motion.header>

        <motion.div
          className="grid min-h-0 w-full flex-1 grid-cols-1 gap-3 [grid-template-rows:620px_repeat(4,minmax(0,1fr))] md:[grid-template-rows:500px_repeat(4,minmax(0,1fr))] lg:h-[930px] lg:flex-none lg:grid-cols-3 lg:grid-rows-2"
          initial={reduceMotion ? false : "hidden"}
          variants={collageVariants}
          viewport={{ amount: 0.08, once: true }}
          whileInView="visible"
        >
          <motion.blockquote
            className="flex min-h-0 flex-col gap-5 rounded-[24px] bg-white p-4 md:flex-row md:p-6 lg:col-span-2"
            variants={cardVariants}
          >
            <div className="group relative h-[210px] w-full shrink-0 overflow-hidden rounded-[14px] bg-shinta-stone md:h-full md:w-[42%]">
              <video
                aria-label="Gatot discussing Shinta's results"
                className="size-full object-cover"
                muted
                onEnded={() => setIsPlaying(false)}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                playsInline
                preload="metadata"
                ref={videoRef}
                src={shintaAsset("videos/cta-phone.mp4")}
              />
              <button
                aria-label={isPlaying ? "Pause Gatot testimonial" : "Play Gatot testimonial"}
                className="absolute inset-0 m-auto grid size-14 place-items-center rounded-full bg-shinta-ink/80 text-white transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                onClick={toggleVideo}
                type="button"
              >
                {isPlaying ? (
                  <Pause aria-hidden="true" className="size-5" fill="currentColor" />
                ) : (
                  <Play
                    aria-hidden="true"
                    className="ml-1 size-5"
                    fill="currentColor"
                  />
                )}
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              <FiveStars />
              <h3 className="mt-5 text-[24px] leading-[33.6px] font-bold tracking-[-0.96px] text-shinta-ink">
                We increased our audience by 25%!
              </h3>
              <p className="mt-3 text-[16px] leading-6 text-shinta-stone lg:text-[18px] lg:leading-[27px]">
                We can bring in real-life problems and have the coaches give
                specific examples and solutions to help guide us and remove any
                roadblocks.&quot;
              </p>
              <footer className="mt-auto pt-5">
                <cite className="block text-[16px] leading-[22px] font-bold not-italic text-shinta-ink lg:text-[18px] lg:leading-[25px]">
                  Gatot
                </cite>
                <p className="text-[14px] leading-5 text-shinta-muted lg:text-[16px] lg:leading-[22px]">
                  CEO of Kresna
                </p>
              </footer>
            </div>
          </motion.blockquote>

          {testimonials.map((testimonial) => (
            <motion.blockquote
              className="flex min-h-0 flex-col rounded-[24px] bg-white p-5 md:p-6"
              key={testimonial.name}
              variants={cardVariants}
            >
              <FiveStars />
              <h3 className="mt-9 text-[24px] leading-[33.6px] font-bold tracking-[-0.96px] text-shinta-ink">
                {testimonial.title}
              </h3>
              <p className="mt-4 text-[16px] leading-6 text-shinta-stone lg:text-[18px] lg:leading-[27px]">
                {testimonial.body}
              </p>
              <div className="mt-auto pt-6">
                <Author
                  image={testimonial.image}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              </div>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
