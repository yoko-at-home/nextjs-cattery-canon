import Image from "next/image";
import { dataVertical } from "src/data/carouselVerticalData";

export const Tile = () => {
  return (
    <div className="grid grid-cols-1 gap-0 justify-items-stretch sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {dataVertical.map((data) => {
        return (
          <Image
            src={data.src}
            alt={data.title}
            width={400}
            height={350}
            className="object-cover opacity-80 hover:opacity-100"
            key={data.id}
          />
        );
      })}
    </div>
  );
};
