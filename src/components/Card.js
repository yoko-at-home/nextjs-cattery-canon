import Image from "next/image";
import Link from "next/link";

export const Card = (props) => {
  return (
    <div className="p-4" style={{ maxWidth: "544px" }}>
      <div className="flex overflow-scroll flex-col h-full border-2 border-gray-200 nm-flat-gray-200-sm">
        {props.href ? (
          <Link href={props.href} aria-label={`Link to ${props.title}`} passHref>
            <Image
              alt={props.title}
              src={props.imgSrc}
              className="object-cover object-center md:h-40 lg:h-52 nm-inset-gray-50-xs"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={props.title}
            src={props.imgSrc}
            className="object-cover object-center md:h-40 lg:h-52"
            width={544}
            height={544}
          />
        )}
        <div className="p-6 text-gray-500 bg-white">
          <h2 className="z-50 mb-3 text-2xl font-bold tracking-tight leading-8">
            {props.href ? (
              <Link href={props.href} aria-label={`Link to ${props.title}`}>
                {props.title}
              </Link>
            ) : (
              props.title
            )}
          </h2>
          <p className="max-w-none prose md:overflow-x-auto">{props.description}</p>
          <p className="overflow-hidden mb-3 max-w-none prose">{props.description2}</p>
        </div>
      </div>
    </div>
  );
};
export const CardModal = (props) => {
  return (
    <div className="p-4" style={{ maxWidth: "800px" }}>
      <div className="flex overflow-hidden flex-col p-3 h-full rounded-md border-2 border-gray-200 border-opacity-60 md:flex-row nm-inset-gray-100-sm">
        {props.href ? (
          <a target="_blank" href={props.href} aria-label={`Link to ${props.title}`} passHref rel="noreferrer">
            <Image
              alt={props.title}
              src={props.imgSrc}
              className="object-cover object-center md:h-36 lg:h-48 nm-concave-gray-100-xl"
              width={272}
              height={153}
            />
          </a>
        ) : (
          <Image
            alt={props.title}
            src={props.imgSrc}
            className="object-cover object-center md:h-36 lg:h-48 nm-concave-gray-100-xl"
            width={272}
            height={153}
          />
        )}
        <div className="px-6 md:w-2/3">
          <h2 className="z-50 mb-3 text-2xl font-bold tracking-tight leading-8">
            {props.href ? (
              <Link href={props.href} aria-label={`Link to ${props.title}`}>
                {props.title}
              </Link>
            ) : (
              props.title
            )}
          </h2>
          <p className="overflow-hidden mb-3 text-gray-500 prose">{props.description1}</p>
          <p className="overflow-y-scroll mb-3 max-w-none text-gray-500 prose">{props.description2}</p>
        </div>
      </div>
    </div>
  );
};
