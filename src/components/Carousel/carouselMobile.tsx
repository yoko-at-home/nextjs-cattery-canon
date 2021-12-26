/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { siteMetadata } from "src/data/siteMetadata";

export const CarouselMobile = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        const clearNextTimeout = () => {
          clearTimeout(timeout);
        };
        const nextTimeout = () => {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        };
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="md:hidden">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Image layout="fill" src="/static/images/0_top/01_mainecoon-girls.webp" alt={siteMetadata.title} />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/02_baby-mainecoon.webp" alt={siteMetadata.title} />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/03_in-a-field.webp" alt={siteMetadata.title} />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/04_kenta.webp" alt={siteMetadata.title} />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/05_mainecoon-baby.webp" alt={siteMetadata.title} />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/06_mainecoon.webp" alt={siteMetadata.title} />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/07_painting-green.webp" alt={siteMetadata.title} />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/08_painting.webp" alt={siteMetadata.title} />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/09_red-plate.webp" alt={siteMetadata.title} />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/10_sleeping-baby.webp" alt={siteMetadata.title} />
        </div>
      </div>
      <style jsx>{`
        [class^="number-slide"],
        [class*=" number-slide"] {
          // background: grey;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 50px;
          color: #fff;
          font-weight: 500;
          height: 100vh;
          max-height: 100vh;
          width: 100vw;
        }
      `}</style>
    </div>
  );
};
