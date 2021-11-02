import { VFC } from "react";
import { dataVertical } from "src/data/carouselVerticalData";
import Image from "next/image";

type Props = {
  title?: string;
  src?: string;
};

export const Tile: VFC<Props> = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-stretch gap-0">
      {dataVertical.map((data) => {
        return (
            <Image src={data.src} alt={data.title} width={400} height={350} className="object-cover opacity-80 hover:opacity-100" />
        );
      })}
    </div>
  );
};
