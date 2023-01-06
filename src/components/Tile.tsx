import Image from "next/image";
import { tileDataMemory } from "src/data/tileDataMemory";

export const Tile = () => {
  return (
    <div className="grid grid-cols-1 justify-items-stretch gap-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {tileDataMemory.map((data) => {
        return (
          <div className="relative" key={data.id}>
            <Image
              src={data.src}
              alt={data.title}
              width={500}
              height={450}
              className="transform-gpu object-cover hover:scale-110 hover:opacity-100"
            />
            <div className="absolute inset-y-20 inset-x-3 mr-6 p-1 md:inset-x-2">
              <span className="text-lg text-white">{data.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
