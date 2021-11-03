import { dataVertical } from "src/data/carouselVerticalData";
import Image from "next/image";

export const Test = () => {
  return (
    <div className="overflow-y-hidden flex flex-col items-center">
      {dataVertical.map((item) => {
        return (
          <div className="relative" key={item.id}>
            <Image src={item.src} alt={item.title} width="350px" height="400px" layout="intrinsic" />
            <div
              style={{
                border: "solid 1px rgba(98,98,98,.6)",
                textShadow: "3px 3px 5px #ffffff",
                color: "#71745b",
              }}
              className="absolute bottom-8 left-8 py-3 px-5 font-semibold backdrop-filter backdrop-blur-lg transform -rotate-45"
            >
              <div className="transform rotate-45">{item.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
