/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";

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
      <div ref={sliderRef} className="h-screen keen-slider">
        <div
          className="bg-top bg-cover keen-slider__slide number-slide"
          style={{
            backgroundImage: "url('/static/images/02_horizontal/lento.jpg')",
          }}
        ></div>
        <div
          className="bg-center bg-cover keen-slider__slide number-slide"
          style={{
            backgroundImage: "url('/static/images/02_horizontal/mother&daughter.webp')",
          }}
        ></div>
        <div
          className="bg-center bg-cover keen-slider__slide number-slide"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/be7d0ad4b6864a7aa5377d538f04c624/09_red-plate.webp?w=300')",
          }}
        ></div>
        <div
          className="bg-center bg-cover keen-slider__slide number-slide"
          style={{
            backgroundImage: "url('/static/images/02_horizontal/rizumu.webp')",
          }}
        ></div>
        <div
          className="bg-top bg-cover keen-slider__slide number-slide"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/1162f7c933b04f2ead1b1ed0c0693eff/06_mainecoon.webp?w=300')",
          }}
        ></div>
        <div
          className="bg-center bg-cover keen-slider__slide number-slide"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/023047e2b27f48a389395d54e81cc159/07_painting-green.webp?w=300')",
          }}
        ></div>
        <div
          className="bg-center bg-cover keen-slider__slide number-slide"
          style={{
            backgroundImage: "url('/static/images/02_horizontal/yamashita-baby-on-piano.webp')",
          }}
        ></div>
        <div
          className="bg-center bg-cover keen-slider__slide number-slide"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/9ce3d6c192694fbcbfb92efe91306529/01_mainecoon-girls.webp?w=300')",
          }}
        ></div>
        <div
          className="bg-center bg-cover keen-slider__slide number-slide"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/b2f45372b0ac4958a935af3a63e62850/gura.webp?w=300')",
          }}
        ></div>
        <div
          className="bg-center bg-cover keen-slider__slide number-slide"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/1106513d75cf4f7bb1482e5368355158/yamashita-three-brothers.webp?w=300')",
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
