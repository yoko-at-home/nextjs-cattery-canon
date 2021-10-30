/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    id: "1",
    title: "Cattery",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/mainecoon-girls.jpg")',
    },
  },
  {
    id: "2",
    title: "Canon",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/painting-green.jpg")',
    },
  },
  {
    id: "3",
    title: "❤️",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/baby-mainecoon.jpg")',
    },
  },
  {
    id: "4",
    title: "♠︎",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/mainecoon.jpg")',
    },
  },
  {
    id: "5",
    title: "🍀",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/IMG_1795.jpg")',
    },
  },
  {
    id: "6",
    title: "💚",
    url: {
      background: 'center/cover no-repeat url("/static/images/0_top/mainecoon-baby.jpg")',
    },
  },
  {
    id: "7",
    title: "Cattery",
    url: {
      background: 'center/cover no-repeat url("/static/images/memory/fushigi.jpg")',
    },
  },
  {
    id: "8",
    title: "💙",
    url: {
      background: 'center/cover no-repeat url("/static/images/memory/gura.jpg")',
    },
  },
  {
    id: "9",
    title: "Canon",
    url: {
      background: 'center/cover no-repeat url("/static/images/memory/hanako.jpg")',
    },
  },
  {
    id: "10",
    title: "✨",
    url: {
      background: 'center/cover no-repeat url("/static/images/memory/hime.jpg")',
    },
  },
  {
    id: "11",
    title: "💚",
    url: {
      background: 'center/cover no-repeat url("/static/images/memory/kenta.jpg")',
    },
  },
  {
    id: "12",
    title: "Cattery",
    url: {
      background: 'center/cover no-repeat url("/static/images/memory/lala.jpg")',
    },
  },
  {
    id: "13",
    title: "Canon",
    url: {
      background: 'center/cover no-repeat url("/static/images/memory/miyabi.jpg")',
    },
  },
  {
    id: "14",
    title: "💚",
    url: {
      background: 'center/cover no-repeat url("/static/images/memory/myu.jpg")',
    },
  },
  {
    id: "15",
    title: "❤️",
    url: {
      background: 'center/cover no-repeat url("/static/images/memory/naushika.jpg")',
    },
  },
  {
    id: "16",
    title: "Canon",
    url: {
      background: 'center/cover no-repeat url("/static/images/memory/rizumu.jpg")',
    },
  },
  {
    id: "17",
    title: "",
    url: {
      background: 'center/cover no-repeat url("/static/images/memory/yume.jpg")',
    },
  },
];

export const CarouselVertical = () => {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    vertical: true,
    duration: 3000,
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
    }, 3000);
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
              <div
                style={{
                  border: "solid 1px #636363",
                  textShadow: "3px 3px 5px #ffffff",
                  color: "#71745b",
                }}
                className="py-3 px-5 mt-32 font-semibold backdrop-filter backdrop-blur-lg transform -rotate-45"
              >
                <div className="transform rotate-45">{item.title}</div>
              </div>
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
          font-size: 40px;
          color: #fff;
          font-weight: 500;
          height: 105vh;
          min-height: 105vh;
          border-radius: 5px;
          margin: 5px;
          padding: 3px;
        }
      `}</style>
    </>
  );
};
