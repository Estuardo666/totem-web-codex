"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { shintaAsset } from "../shared/site";

const brands = [
  {
    alt: "Mandala",
    height: 128,
    src: shintaAsset("images/26f35051812b2aae.png"),
    width: 568,
  },
  {
    alt: "Batavia",
    height: 128,
    src: shintaAsset("images/7253d2f6ec5e14e6.png"),
    width: 584,
  },
  {
    alt: "Bhima",
    height: 128,
    src: shintaAsset("images/b13b3ba827797b0f.png"),
    width: 393,
  },
  {
    alt: "Pandawa",
    height: 128,
    src: shintaAsset("images/ebd7dec76b75c1e2.png"),
    width: 568,
  },
  {
    alt: "Sadewa",
    height: 128,
    src: shintaAsset("images/e0e1fd5214a17d82.png"),
    width: 548,
  },
] as const;

type BrandSequenceProps = {
  duplicate?: boolean;
};

function BrandSequence({ duplicate = false }: BrandSequenceProps) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 items-center gap-5 pr-5"
    >
      {brands.map((brand) => (
        <Image
          alt={duplicate ? "" : brand.alt}
          className="h-6 w-auto shrink-0 object-contain opacity-75"
          height={brand.height}
          key={`${brand.alt}-${duplicate ? "duplicate" : "original"}`}
          priority
          src={brand.src}
          unoptimized
          width={brand.width}
        />
      ))}
    </div>
  );
}

export function LogoStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Marcas cuyo contenido Shinta ha llevado al siguiente nivel"
      className="flex h-[94px] w-full items-start justify-center overflow-hidden px-5 pt-8"
    >
      <div className="flex h-[62px] w-full max-w-[620px] flex-col items-center gap-[10px] overflow-hidden">
        <p className="shrink-0 text-center text-[12px] leading-[16.8px] font-semibold tracking-[0.96px] text-shinta-muted uppercase">
          Más de 30 marcas elevaron el nivel de su contenido
        </p>

        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
          <motion.div
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            className="flex w-max items-center"
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 22,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                  }
            }
          >
            <BrandSequence />
            <BrandSequence duplicate />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
