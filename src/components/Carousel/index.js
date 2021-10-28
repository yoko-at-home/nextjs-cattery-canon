/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    title: "",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/mainecoon-girls.jpg")',
    },
  },
  {
    title: "",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/painting-green.jpg")',
    },
  },
  {
    title: "",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/baby-mainecoon.jpg")',
    },
  },
  {
    title: "",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/IMG_1795.jpg")',
    },
  },
  {
    title: "",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/mainecoon.jpg")',
    },
  },
  {
    title: "",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/mainecoon-baby.jpg")',
    },
  },
];

export const Carousel = () => {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {data.map((item) => {
          return (
            <div className="keen-slider__slide number-slide nm-inset-gray-100-sm" style={item.url} key={item.title}>
              {item.title}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        [class^="number-slide"],
        [class*=" number-slide"] {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 50px;
          color: #fff;
          font-weight: 500;
          height: 120vh;
          min-height: 120vh;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
};
