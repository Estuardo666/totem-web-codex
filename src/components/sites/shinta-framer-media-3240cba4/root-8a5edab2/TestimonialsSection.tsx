"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { SectionEyebrow } from "../shared/ShintaPrimitives";
import { ImageReveal } from "@/components/sites/shinta-framer-media-3240cba4/shared/ImageReveal";
import { socialClients, type SocialClient } from "@/lib/portfolio";

const featuredClient = socialClients.draClaudiaMunoz;

const clients: readonly SocialClient[] = [
  socialClients.draGabrielaSanchez,
  socialClients.draKatherineMontalvan,
  socialClients.audisens,
  socialClients.europeek,
];

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

function CategoryPill({ children }: { children: string }) {
  return (
    <span className="inline-flex w-max rounded-full bg-shinta-orange px-3 py-1 text-[12px] leading-[16px] font-semibold tracking-[0.6px] text-white uppercase">
      {children}
    </span>
  );
}

function ClientHandle({ client }: { client: SocialClient }) {
  return (
    <footer className="flex items-center gap-3">
      <Image
        alt={`Foto de perfil de ${client.name}`}
        className="size-12 shrink-0 rounded-full object-cover"
        height={160}
        src={client.avatar}
        unoptimized
        width={160}
      />
      <div className="min-w-0">
        <p className="block text-[16px] leading-[22px] font-bold text-shinta-ink lg:text-[18px] lg:leading-[25px]">
          {client.name}
        </p>
        <a
          className="block truncate text-[14px] leading-5 text-shinta-muted underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink lg:text-[16px] lg:leading-[22px]"
          href={client.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          @{client.handle}
        </a>
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
      aria-labelledby="proof-heading"
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
            gestión de redes
          </SectionEyebrow>
          <h2
            className="text-[28px] leading-[1.08] font-bold tracking-[-1.12px] text-shinta-ink lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]"
            id="proof-heading"
          >
            Marcas que confían sus redes en Tótem
          </h2>
        </motion.header>

        <motion.div
          className="grid min-h-0 w-full flex-1 grid-cols-1 gap-3 [grid-template-rows:620px_repeat(4,minmax(0,1fr))] md:[grid-template-rows:500px_repeat(4,minmax(0,1fr))] lg:h-[930px] lg:flex-none lg:grid-cols-3 lg:grid-rows-2"
          initial={reduceMotion ? false : "hidden"}
          variants={collageVariants}
          viewport={{ amount: 0.08, once: true }}
          whileInView="visible"
        >
          <motion.article
            className="flex min-h-0 flex-col gap-5 rounded-[24px] bg-white p-4 md:flex-row md:p-6 lg:col-span-2"
            variants={cardVariants}
          >
            <ImageReveal className="group relative h-[210px] w-full shrink-0 overflow-hidden rounded-[14px] bg-shinta-stone md:h-full md:w-[42%]">
              <video
                aria-label={`Reel para ${featuredClient.name}`}
                className="size-full object-cover"
                muted
                onEnded={() => setIsPlaying(false)}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                playsInline
                poster="/images/hero/reel-dra-claudia-munoz.jpg"
                preload="metadata"
                ref={videoRef}
                src="/videos/reel-dra-claudia-munoz.mp4"
              />
              <button
                aria-label={isPlaying ? "Pausar el reel" : "Reproducir el reel"}
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
            </ImageReveal>

            <div className="flex min-h-0 flex-1 flex-col">
              <CategoryPill>{featuredClient.category}</CategoryPill>
              <h3 className="mt-5 text-[24px] leading-[33.6px] font-bold tracking-[-0.96px] text-shinta-ink">
                Reels educativos para una comunidad de más de 12 mil personas
              </h3>
              <p className="mt-3 text-[16px] leading-6 text-shinta-stone lg:text-[18px] lg:leading-[27px]">
                {featuredClient.summary} Contenido pensado para explicar
                temas médicos con claridad y llevar la conversación a
                consulta.
              </p>
              <div className="mt-auto pt-5">
                <ClientHandle client={featuredClient} />
              </div>
            </div>
          </motion.article>

          {clients.map((client) => (
            <motion.article
              className="flex min-h-0 flex-col rounded-[24px] bg-white p-5 md:p-6"
              key={client.slug}
              variants={cardVariants}
            >
              <CategoryPill>{client.category}</CategoryPill>
              <div className="relative mt-6 aspect-[4/5] max-h-[220px] w-full overflow-hidden rounded-[14px] bg-shinta-stone lg:max-h-[210px]">
                <Image
                  alt={`Publicación para ${client.name}`}
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 280px, calc(100vw - 80px)"
                  src={client.image}
                  unoptimized
                />
              </div>
              <p className="mt-4 text-[16px] leading-6 text-shinta-stone lg:text-[18px] lg:leading-[27px]">
                {client.summary}
              </p>
              <div className="mt-auto pt-6">
                <ClientHandle client={client} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
