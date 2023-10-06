import Image from "next/image";
import Link from "next/link";
import type { MyCatProps } from "src/type/types";

export const Card: React.FC<MyCatProps> = (props) => {
  return (
    <div className="p-3">
      <div className="rounded p-1 nm-concave-gray-100-lg" style={{ maxWidth: "544px" }}>
        <div className="flex flex-col rounded border-2 border-gray-50 nm-concave-gray-300-lg">
          <Image
            alt={props.name}
            src={props.imgSrc}
            className="object-cover object-center md:h-40 lg:h-52"
            width={544}
            height={530}
          />
          <div className="nm-flat-white-100 bg-white p-4 text-gray-500">
            <h2 className="z-50 mb-3 text-2xl font-bold leading-8 tracking-tight">{props.name}</h2>
            <h2 className="z-50 mb-3 text-2xl font-bold leading-8 tracking-tight">{props.name1}</h2>
            <p className="mb-3">Date of Birth: {props.birth}</p>
            <p className="mb-3 h-3">{props.kind}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const CardModal: React.FC<MyCatProps> = (props) => {
  return (
    <div className="h-4/5 p-4" style={{ maxWidth: "800px" }}>
      <div className="flex flex-col rounded-md border-2 border-gray-200 border-opacity-60 p-3 nm-inset-gray-100-sm md:flex-row">
        <Image
          alt={props.name}
          src={props.imgSrc}
          className="object-cover object-top nm-concave-gray-100-xl md:h-36 lg:h-48"
          width={272}
          height={300}
        />
        <div className="px-2 sm:px-6 md:w-2/3">
          <h2 className="z-50 text-lg font-bold leading-8 tracking-tight text-yellow-900 sm:mt-3 sm:text-2xl">
            {props.name}
          </h2>
          <h2 className="z-50 text-lg font-bold leading-8 tracking-tight text-yellow-900 sm:mt-3 sm:text-2xl">
            {props.name1}
          </h2>
          <p className="prose text-sm font-bold leading-loose text-green-900 sm:mb-3 sm:mt-10 sm:text-lg">
            {props.kind}
          </p>
          <p className="prose text-sm text-gray-500 sm:mb-3">Date of Birth: {props.birth}</p>
          <p className="text-xs leading-loose text-gray-500 sm:mt-10 sm:text-sm md:text-lg">
            💙 SIRE: {props.sire}
            <br />
            💖 DAM: {props.dam}
          </p>
          {!props.photographer ? null : <p className="mt-2 text-sm text-gray-400">{props.photographer}</p>}
          {!props.blogurl ? null : (
            <Link href={props.imgSrc} target="_blank" rel="noopener noreferrer">
              <div className="text-center sm:mt-3">
                <span className="animate-pulse rounded bg-gray-300 text-lg text-yellow-800 hover:text-green-900">
                  ✨この子の写真をもっと見る✨
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
