import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";

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
    ],
  );

  return (
    <div className="md:hidden">
      <div ref={sliderRef} className="keen-slider">
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/9ce3d6c192694fbcbfb92efe91306529/01_mainecoon-girls.webp?w=300')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/5067cd0658be4592aae75611f4ccdbfd/baby-mainecoon.webp?w=300')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/f1b410dc3bdd4711861d9151eb912953/03_in-a-field.webp?w=300')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/02890de42d5c446f83ed2b247afb71da/04_kenta.webp?w=300')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/e0a931b1cd134a228037b5f376495b33/05_mainecoon-baby.webp?w=300')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/1162f7c933b04f2ead1b1ed0c0693eff/06_mainecoon.webp?w=300')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/023047e2b27f48a389395d54e81cc159/07_painting-green.webp?w=300')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/88a3bcea40d345419e94b5241ea0c746/08_painting.webp?fit=fill&fill-color=331cbf&w=500&h=300')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/be7d0ad4b6864a7aa5377d538f04c624/09_red-plate.webp?w=300')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/853c11b039b44f5f91384dcb86c0c108/10_sleeping-baby.webp?w=300')",
          }}
        />
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
