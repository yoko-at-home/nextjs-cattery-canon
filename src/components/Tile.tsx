import Image from "next/image";
import { tileDataMemory } from "src/data/tileDataMemory";

export const Tile = () => {
  return (
    <div className="grid grid-cols-1 gap-0 justify-items-stretch sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {tileDataMemory.map((data) => {
        return (
          <div className="relative" key={data.id}>
            <Image
              src={data.src}
              alt={data.title}
              width={500}
              height={450}
              className="object-cover hover:opacity-100 transform-gpu hover:scale-110"
            />
            <div className="absolute inset-y-20 inset-x-3 p-1 mr-6 md:inset-x-2">
              <span className="text-lg text-white">{data.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
