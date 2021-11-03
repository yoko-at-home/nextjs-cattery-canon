/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";
import { dataVertical } from "src/data/carouselVerticalData";

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
        {dataVertical.map((item) => {
          return (
              <div className="keen-slider__slide number-slide" style={item.url} key={item.id}>
                <div
                  style={{
                    border: "solid 1px rgba(98,98,98,.6)",
                    textShadow: "3px 3px 5px #ffffff",
                    color: "#71745b",
                  }}
                  className="py-3 px-5 font-semibold backdrop-filter backdrop-blur-lg transform -rotate-45"
                >
                  <div className="transform rotate-45">{item.title}</div>
                </div>
              </div>
          );
        })}
      </div>

      <style jsx>{`
        [class^="number-slide"],
        [class*="number-slide"] {
          display: flex;
          align-items: end;
          justify-content: flex-start;
          font-size: 40px;
          color: #fff;
          font-weight: 500;
          height: 500px;
          // min-height: 105vh;
          border-radius: 5px;
          margin: 5px;
          padding: 50px;
        }
      `}</style>
    </>
  );
};
