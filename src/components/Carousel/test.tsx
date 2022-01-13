import type { NextPage } from "next";
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
            <div style={{ width: "400px", height: "450px" }} />
            <div
              style={{
                border: "solid 1px rgba(98,98,98,.6)",
                textShadow: "1px 1px 4px #ffffff",
                color: "#71745b",
              }}
              className="absolute rounded-full bottom-[20%] left-[25%] font-black backdrop-filter backdrop-blur-sm"
            >
              <div className="transform -rotate-45">{item.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
