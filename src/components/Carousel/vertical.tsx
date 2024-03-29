/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";

export const CarouselVertical = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      vertical: true,
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
      <div ref={sliderRef} className="keen-slider h-screen">
        <div
          className="keen-slider__slide number-slide bg-cover bg-top"
          style={{
            backgroundImage: "url('/static/images/memory/gura.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/memory/hanako.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/memory/hime.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/memory/kenta.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-cover bg-top"
          style={{
            backgroundImage: "url('/static/images/memory/lala.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/memory/miyabi.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/memory/myu.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/memory/naushika.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/b2f45372b0ac4958a935af3a63e62850/gura.webp?w=300')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/memory/rizumu.webp')",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/memory/yume.webp')",
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
