import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description1: string;
  description2: string;
  father: string;
  mother: string;
  imgSrc: string;
  photographer: string;
  blogUrl: string;
};

export const Card: NextPage<Props> = (props) => {
  return (
    <div className="p-4" style={{ maxWidth: "544px" }}>
      <div className="flex overflow-scroll flex-col h-full border-2 border-gray-200 nm-flat-gray-200-sm">
        <Image
          alt={props.title}
          src={props.imgSrc}
          className="object-cover object-center md:h-40 lg:h-52"
          width={544}
          height={430}
        />
        <div className="p-6 text-gray-500 bg-white">
          <h2 className="z-50 mb-3 text-2xl font-bold tracking-tight leading-8">{props.title}</h2>
          <p className="max-w-none prose md:overflow-x-auto">Date of Birth: {props.description1}</p>
          <p className="overflow-hidden mb-3 max-w-none prose">{props.description2}</p>
        </div>
      </div>
    </div>
  );
};
export const CardModal: NextPage<Props> = (props) => {
  return (
    <div className="overflow-x-scroll p-4 h-4/5" style={{ maxWidth: "800px" }}>
      <div className="flex overflow-scroll flex-col p-3 rounded-md border-2 border-gray-200 border-opacity-60 md:flex-row nm-inset-gray-100-sm">
        <Image
          alt={props.title}
          src={props.imgSrc}
          className="object-cover object-center md:h-36 lg:h-48 nm-concave-gray-100-xl"
          width={272}
          height={300}
        />
        <div className="px-2 sm:px-6 md:w-2/3">
          <h2 className="z-50 text-lg font-bold tracking-tight leading-8 text-center text-yellow-900 sm:mt-3 sm:text-2xl">
            {props.title}
          </h2>
          <p className="text-sm font-bold leading-loose text-green-900 prose sm:mt-10 sm:mb-3 sm:text-lg">
            {props.description2}
          </p>
          <p className="text-sm text-gray-500 prose sm:mb-3">Date of Birth: {props.description1}</p>
          <p className="text-xs leading-loose text-gray-500 sm:mt-10 sm:text-sm md:text-lg">
            💙 SIRE: {props.father}
            <br />
            ❤️ DAM: {props.mother}
          </p>
          {!props.photographer ? null : <p className="mt-2 text-sm text-gray-400">{props.photographer}</p>}
          {!props.blogUrl ? null : (
            <Link href={props.blogUrl}>
              <a target="_blank" rel="noopener noreferrer">
                <div className="text-center sm:mt-3">
                  <span className="text-lg text-yellow-800 hover:text-green-900 bg-gray-300 rounded animate-pulse">
                    ✨この子の写真をもっと見る✨
                  </span>
                </div>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
