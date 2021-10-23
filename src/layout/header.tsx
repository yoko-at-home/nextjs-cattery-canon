import cc from "classcat";
import Image from "next/image";
import type { VFC } from "react";
import { CustomLink } from "../components/CustomLink";
import { NavBarMobile } from "../components/navbar";
import { siteMetadata } from "../data/siteMetadata";

type Props = {
  className?: string;
  type?: "main" | "baby" | "babyGirl" | "matured" | "flower" | "articles";
  theme?: "main" | "baby" | "babyGirl" | "matured" | "flower" | "articles";
};

export const Header: VFC<Props> = (props) => {
  const themeImage = {
    main: "/static/images/header/five-kids.jpg",
    baby: "/static/images/header/brown-baby-02.jpg",
    babyGirl: "/static/images/header/four-kittens.jpg",
    matured: "/static/images/header/maincoon-on-white-background.jpg",
    flower: "/static/images/header/red-ketten.jpg",
    articles: "/static/images/header/three-kids.jpg",
  };

  return (
    <>
      <header
        className={cc([
          "relative",
          {
            "h-80 bg-gray-500": props.type === "main",
            "h-screen": props.type === "matured",
            "h-96 opacity-100": props.type !== "main",
          },
        ])}
      >
        <Image
          layout='fill'
          className='object-center object-cover pointer-events-none'
          src={themeImage[props.theme || "main"]}
          alt={"text"}
        />
        <h1 className='absolute top-10 p-5 sm:left-10 md:top-14 lg:top-10'>
          <CustomLink href='/home' aria-label='Gen-Scent Research Laboratory'>
            <div className='flex items-center justify-between mb-8'>
              {typeof siteMetadata.headerTitle === "string" ? (
                <div
                  className='min-h-full min-w-full py-5 pr-20 bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-yellow-900 text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold my-6 md:mb-20 md:mt-12 whitespace-nowrap'
                  style={{
                    textShadow: "2px 10px 6px rgb(99, 51, 7)",
                  }}
                >
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </CustomLink>
        </h1>
        {props.theme !== "articles" && <NavBarMobile />}
      </header>
    </>
  );
};
