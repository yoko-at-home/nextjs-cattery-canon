import dayjs from "dayjs";
import Image from "next/image";
import type { MyCatProps } from "src/type/types";

export const Card: React.FC<MyCatProps> = (props) => {
  return (
    <li className="list-none p-3" key={props.id}>
      <div className="rounded p-1 nm-concave-gray-100-lg" style={{ maxWidth: "544px" }}>
        <div className="flex flex-col rounded border-2 border-gray-50 nm-concave-gray-300-lg">
          <Image
            alt={props.name || "image of maincoon cat"}
            src={props.imgSrc?.url || `/${props.imgSrc?.url}`}
            className="object-cover object-center md:h-40 lg:h-52"
            width={544}
            height={530}
          />
          <div className="nm-flat-white-100 bg-white p-4 text-gray-500">
            <h2 className="z-50 mb-3 text-2xl font-bold leading-8 tracking-tight">{props.name}</h2>
            <h2 className="z-50 mb-3 text-2xl font-bold leading-8 tracking-tight">{props.name1}</h2>
            <p className="mb-3">Date of Birth:{dayjs(props.birth).format("YYYY.MM.DD")}</p>
            <p className="mb-3 h-3">{props.kind}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
