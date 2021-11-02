import Image from "next/image";
import type { VFC } from "react";
import { dataVertical } from "src/data/carouselVerticalData";

type Props = {
  title?: string;
  src?: string;
};

export const Tile: VFC<Props> = (props) => {
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
          />
        );
      })}
    </div>
  );
};
