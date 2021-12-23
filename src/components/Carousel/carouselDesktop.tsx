/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export const CarouselDesktop = () => {
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
    <div className="hidden md:block">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Image layout="fill" src="/static/images/header/four-kittens.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/header/era.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/03_in-a-field.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/header/five-kids.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/header/tetsu_maincoon-on-white-background.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/header/brown-baby-02.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/header/red-kitten.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/header/brown-baby-02.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/09_red-plate.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/memory/fushigi.webp" />
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
