/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { siteMetadata } from "src/data/siteMetadata";

export const CarouselHorizontal = () => {
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
    <>
      <div ref={sliderRef} className="keen-slider  h-screen">
        <div
          className="keen-slider__slide number-slide bg-top bg-cover"
          style={{
            backgroundImage: "url('/static/images/02_horizontal/lento.jpg')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-center bg-cover"
          style={{
            backgroundImage: "url('/static/images/02_horizontal/mother&daughter.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-center bg-cover"
          style={{
            backgroundImage: "url('/static/images/02_horizontal/red-plate.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-center bg-cover"
          style={{
            backgroundImage: "url('/static/images/02_horizontal/rizumu.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-top bg-cover"
          style={{
            backgroundImage: "url('/static/images/0_top/06_mainecoon.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-center bg-cover"
          style={{
            backgroundImage: "url('/static/images/0_top/07_painting-green.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-center bg-cover"
          style={{
            backgroundImage: "url('/static/images/02_horizontal/yamashita-baby-on-piano.png')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-center bg-cover"
          style={{
            backgroundImage: "url('/static/images/02_horizontal/mainecoon-girls.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-center bg-cover"
          style={{
            backgroundImage: "url('/static/images/02_horizontal/hanako.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-center bg-cover"
          style={{
            backgroundImage: "url('/static/images/02_horizontal/yamashita-three-brothers.png')",
          }}
        ></div>
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
