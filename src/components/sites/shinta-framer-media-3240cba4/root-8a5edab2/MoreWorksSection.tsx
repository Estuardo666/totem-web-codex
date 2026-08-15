import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { shintaAsset } from "../shared/site";

type WorkImageProps = {
  alt: string;
  className: string;
  imageClassName?: string;
  src: string;
};

function WorkImage({
  alt,
  className,
  imageClassName = "object-cover",
  src,
}: WorkImageProps) {
  return (
    <div
      className={`absolute overflow-hidden rounded-[18px] xl:rounded-[24px] ${className}`}
    >
      <Image
        alt={alt}
        className={imageClassName}
        fill
        sizes="(min-width: 1280px) 320px, 150px"
        src={shintaAsset(`images/${src}`)}
        unoptimized
      />
    </div>
  );
}

export function MoreWorksSection() {
  return (
    <section
      className="relative z-[4] h-[550px] overflow-hidden bg-shinta-canvas text-shinta-ink xl:h-[900px] xl:overflow-visible"
      aria-label="More selected work"
    >
      <div className="relative mx-auto h-full max-w-[1440px] overflow-hidden xl:overflow-visible">
        <WorkImage
          alt="Creative team collaborating around laptops"
          className="top-[43px] left-1/2 h-[103px] w-[145px] -translate-x-1/2 rotate-[1deg] xl:top-[70px] xl:left-[59%] xl:h-[205px] xl:w-[310px] xl:-translate-x-1/2 xl:rotate-[13deg]"
          src="ebc892660383771d.png"
        />
        <WorkImage
          alt="Fashion portrait framed by reaching hands"
          className="top-[70px] left-[-54px] h-[112px] w-[130px] rotate-[-22deg] xl:top-[54px] xl:left-[20.5%] xl:h-[200px] xl:w-[300px] xl:rotate-[-8deg]"
          src="b9c3405cd7a817a4.jpg"
        />
        <WorkImage
          alt="Futuristic fashion portrait in teal and coral"
          className="top-[70px] right-[-55px] h-[130px] w-[130px] rotate-[22deg] xl:top-[224px] xl:right-[-66px] xl:h-[280px] xl:w-[265px] xl:rotate-[39deg]"
          imageClassName="object-cover object-center"
          src="adb16f0f9eb591c3.png"
        />

        <WorkImage
          alt="Sunlit desk with a notebook and coffee"
          className="hidden xl:block xl:top-[165px] xl:left-[-35px] xl:h-[235px] xl:w-[270px] xl:rotate-[-42deg]"
          src="47896f1809e8e2f2.png"
        />
        <WorkImage
          alt="Creative professional working with a laptop"
          className="hidden xl:block xl:bottom-[-62px] xl:left-[-75px] xl:h-[235px] xl:w-[300px] xl:rotate-[11deg]"
          src="eaea59734a53e7ca.png"
        />
        <WorkImage
          alt="Purple-toned technology campaign collage"
          className="hidden xl:block xl:right-[22%] xl:bottom-[-106px] xl:h-[225px] xl:w-[320px] xl:rotate-[-9deg]"
          src="73abef02a86176b5.png"
        />

        <Link
          className="group absolute top-[263px] left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-[12px] rounded-full focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-shinta-ink xl:top-[393px] xl:gap-[20px]"
          href="/#projects"
        >
          <span className="whitespace-nowrap text-[28px] leading-[31px] font-bold tracking-[-1.12px] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-x-1 group-focus-visible:-translate-x-1 xl:text-[64px] xl:leading-[70.4px] xl:tracking-[-2.56px]">
            See More Works
          </span>
          <span className="grid size-[56px] shrink-0 place-items-center rounded-full bg-shinta-pink transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-2 group-hover:rotate-45 group-hover:scale-110 group-focus-visible:translate-x-2 group-focus-visible:rotate-45 group-focus-visible:scale-110 xl:size-[58px]">
            <ArrowUpRight
              aria-hidden="true"
              className="size-[20px] xl:size-[22px]"
              strokeWidth={2.2}
            />
          </span>
        </Link>
      </div>
    </section>
  );
}
