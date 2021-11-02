/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    id: "1",
    title: "",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/mainecoon-girls.jpg")',
    },
  },
  {
    id: "2",
    title: "",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/painting-green.jpg")',
    },
  },
  {
    id: "3",
    title: "",
    url: {
      background: 'top/cover no-repeat url("/static/images/0_top/baby-mainecoon.jpg")',
    },
  },
  {
    id: "4",
    title: "",
    url: {
      background: 'top/cover no-repeat url("/static/images/0_top/mainecoon.jpg")',
    },
  },
  {
    id: "5",
    title: "",
    url: {
      background: 'top/cover no-repeat url("/static/images/0_top/mainecoon-baby.jpg")',
    },
  },
  {
    id: "10",
    title: "",
    url: {
      background: 'top/cover no-repeat url("/static/images/0_top/kenta.jpg")',
    },
  },
  {
    id: "11",
    title: "",
    url: {
      background: 'top/cover no-repeat url("/static/images/0_top/sleeping-baby.jpg")',
    },
  },
  {
    id: "12",
    title: "",
    url: {
      background: 'center/cover no-repeat url("/static/images/tallpaint/in-a-field.jpg")',
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
    }, 1500);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {data.map((item) => {
          return (
            <div className="keen-slider__slide number-slide" style={item.url} key={item.id}>
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
          height: 105vh;
          min-height: 105vh;
        }
      `}</style>
    </>
  );
};
