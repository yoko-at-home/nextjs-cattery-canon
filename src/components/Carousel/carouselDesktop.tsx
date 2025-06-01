import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";

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
    ],
  );

  return (
    <div className="hidden md:block">
      <div ref={sliderRef} className="keen-slider">
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/header/four-kittens.webp')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/header/era.webp')",
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
            backgroundImage: "url('/static/images/header/five-kids.webp')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/header/tetsu_maincoon-on-white-background.webp')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/header/brown-baby-02.webp')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/header/red-kitten.webp')",
          }}
        />
        <div
          className="keen-slider__slide number-slide bg-cover bg-center"
          style={{
            backgroundImage: "url('/static/images/header/brown-baby-02.webp')",
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
              "url('https://images.microcms-assets.io/assets/ee5fc17313364d27a28133048e13257f/1106513d75cf4f7bb1482e5368355158/yamashita-three-brothers.webp?w=300')",
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
