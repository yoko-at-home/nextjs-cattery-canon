import Image from "next/image";
import { tileDataMemory } from "src/data/tileDataMemory";

export const Tile = () => {
  return (
    <div className="grid grid-cols-1 justify-items-stretch sm:grid-cols-2 md:grid-cols-3 md:gap-0 xl:grid-cols-4">
      {tileDataMemory.map((data) => {
        return (
          <Image
            src={data.src}
            alt={data.title}
            width={500}
            height={450}
            className="object-cover opacity-80 hover:opacity-100 transform-gpu hover:scale-110"
            key={data.id}
          />
        );
      })}
    </div>
  );
};
