import Image from "next/image";
import { tileDataMemory } from "src/data/tileDataMemory";

export const Tile = () => {
  return (
    <div className="grid grid-cols-1 justify-items-stretch sm:grid-cols-2 md:grid-cols-3 md:gap-0 xl:grid-cols-4">
      {tileDataMemory.map((data) => {
        return (
          <div className="relative">
            <Image
              src={data.src}
              alt={data.title}
              width={500}
              height={450}
              className="object-cover hover:opacity-100 transform-gpu hover:scale-110"
              key={data.id}
            />
            <div className="absolute inset-y-20  inset-x-3 md:inset-x-2  mr-6 p-1">
              <span className="text-white text-lg">{data.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
