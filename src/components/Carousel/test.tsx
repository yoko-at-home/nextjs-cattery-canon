import type { NextPage } from "next";
import Image from "next/image";
import { dataVertical } from "src/data/carouselVerticalData";

export const Test: NextPage = () => {
  return (
    <div className="flex overflow-y-hidden flex-col items-center">
      {dataVertical.map((item) => {
        return (
          <div
            className="relative mb-1 nm-inset-yellow-800 rounded-full"
            key={item.id}
            style={{
              background: `top / cover no-repeat url(${item.src})`,
            }}
          >
            {/* <Image
              src={item.src}
              alt={item.title}
              width="400px"
              height="400px"
              layout="intrinsic"
              className="opacity-0"
            /> */}
            <div style={{ width: "400px", height: "450px" }} />
            <div
              style={{
                border: "solid 1px rgba(98,98,98,.6)",
                textShadow: "1px 1px 4px #ffffff",
                color: "#71745b",
              }}
              className="absolute bottom-[13%] left-[20%] py-3 px-5 font-black backdrop-filter backdrop-blur-lg transform -rotate-45"
            >
              <div className="transform rotate-45 text-2xl">{item.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
