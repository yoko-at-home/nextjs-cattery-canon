/* eslint-disable @typescript-eslint/naming-convention */
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import { title } from "process";
import { useEffect, useRef, useState } from "react";

const data = [
  {
  title: "AA",
  url:`background: center/cover no-repeat url("/static/images/0_top/mainecoon-girls.jpg")`,
  },
]

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
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <>
      <div ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide nm-inset-black-sm' style={data.url}>
          {data.title}
        </div>
        <div className='keen-slider__slide number-slide2 nm-inset-black-sm'>
          BB
        </div>
        <div className='keen-slider__slide number-slide3 nm-inset-black-sm'>
          CC
        </div>
        <div className='keen-slider__slide number-slide4 nm-inset-black-sm'>
          DD
        </div>
        <div className='keen-slider__slide number-slide5 nm-inset-black-sm'>
          EE
        </div>
        <div className='keen-slider__slide number-slide6 nm-inset-black-sm'>
          FF
        </div>
        <div className='keen-slider__slide number-slide7 nm-inset-black-sm'>
          GG
        </div>
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
          margin: 5px;
          padding: 3px;
        }
        .number-slide1 {
          background: center/cover no-repeat
            url("/static/images/0_top/mainecoon-girls.jpg");
        }
        .number-slide2 {
          background: center/cover no-repeat
            url("/static/images/0_top/painting-green.jpg");
        }
        .number-slide3 {
          background: center/cover no-repeat
            url("/static/images/0_top/mainecoon-sleeping-baby.jpg");
        }
        .number-slide4 {
          background: center/cover no-repeat
            url("/static/images/0_top/baby-mainecoon.jpg");
        }
        .number-slide5 {
          background: top/cover no-repeat
            url("/static/images/0_top/IMG_1795.jpg");
        }
        .number-slide6 {
          background: center/cover no-repeat
            url("/static/images/0_top/mainecoon.jpg");
        }
        .number-slide7 {
          background: center/cover no-repeat
            url("/static/images/0_top/mainecoon-baby.jpg");
        }
      `}</style>
    </>
  );
};
