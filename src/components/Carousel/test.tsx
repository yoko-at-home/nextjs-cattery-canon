import type { NextPage } from "next";
import { dataVertical } from "src/data/carouselVerticalData";

export const Test: NextPage = () => {
  return (
    <div className="flex flex-col items-center overflow-y-hidden">
      {dataVertical.map((item) => {
        return (
          <div
            className="relative mb-1 rounded-full nm-inset-yellow-800"
            key={item.id}
            style={{
              background: `top / cover no-repeat url(${item.src})`,
            }}
          >
            <div style={{ width: "400px", height: "450px" }} />
            <div
              style={{
                border: "border-double 1px #626262",
                textShadow: "1px 1px 4px #584c4c",
                // color: "",
              }}
              className="absolute bottom-[10%] left-[25%] -rotate-45 rounded-full border border-dotted border-[#626262] font-black backdrop-blur-sm"
            >
              <div className="text-xl text-[#c4d548]">{item.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
