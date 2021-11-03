import Image from "next/image";

export const Card = (props) => {
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
          <p className="max-w-none prose md:overflow-x-auto">Date of Birth: {props.description}</p>
          <p className="overflow-hidden mb-3 max-w-none prose">{props.description2}</p>
        </div>
      </div>
    </div>
  );
};
export const CardModal = (props) => {
  return (
    <div className="p-4" style={{ maxWidth: "800px" }}>
      <div className="flex overflow-scroll flex-col p-3 rounded-md border-2 border-gray-200 border-opacity-60 md:flex-row nm-inset-gray-100-sm">
        <Image
          alt={props.title}
          src={props.imgSrc}
          className="object-cover object-center md:h-36 lg:h-48 nm-concave-gray-100-xl"
          width={272}
          height={450}
        />
        <div className="px-2 sm:px-6 md:w-2/3">
          <h2 className="z-50 text-yellow-900 text-lg sm:text-2xl font-bold tracking-tight leading-8 sm:mt-3 text-center">
            {props.title}
          </h2>
          <p className="font-bold leading-loose text-green-900 prose sm:mb-3 text-sm sm:text-lg sm:mt-10">
            {props.description2}
          </p>
          <p className="text-gray-500 prose sm:mb-3 text-sm">Date of Birth: {props.description1}</p>
          <p className="leading-loose text-gray-500 sm:mt-10">
            💙 SIRE: {props.father}
            <br />
            ❤️ DAM: {props.mother}
          </p>
        </div>
      </div>
    </div>
  );
};
