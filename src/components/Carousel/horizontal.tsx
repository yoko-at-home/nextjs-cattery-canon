/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export const CarouselHorizontal = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
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
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Image layout="fill" src="/static/images/02_horizontal/fushigi.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/02_horizontal/lento.jpg" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/02_horizontal/mother&daughter.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/02_horizontal/red-plate.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/02_horizontal/rizumu.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/06_mainecoon.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/0_top/07_painting-green.webp" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/02_horizontal/yamashita-baby-on-piano.png" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image layout="fill" src="/static/images/02_horizontal/yamashita-four-brothers.png" />
        </div>
        <div className="keen-slider__slide number-slide">
          <Image
            layout="responsive"
            width="300px"
            height="250px"
            src="/static/images/02_horizontal/yamashita-three-brothers.png"
          />
        </div>
      </div>
      <style jsx>{`
        [class^="number-slide"],
        [class*=" number-slide"] {
          display: flex;
          align-items: end;
          justify-content: flex-start;
          font-size: 30px;
          color: #fff;
          font-weight: 500;
          height: 50vh;
          // min-height: 105vh;
          border-radius: 5px;
          padding: 50px;
        }
      `}</style>
    </>
  );
};
