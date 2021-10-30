/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react";

import { CustomLink } from "src/components/CustomLink";
import { NavBarMobile } from "src/components/navbar";
import { siteMetadata } from "../data/siteMetadata";

type Props = {
  className?: string;
  type?: "home" | "boys" | "girls" | "retired" | "available" | "articles" | "about";
  theme?: "home" | "boys" | "girls" | "retired" | "available" | "articles" | "about";
};

export const Header: VFC<Props> = (props) => {
  const themeImage = {
    home: "/static/images/header/four-kittens.jpg",
    about: "/static/images/header/era.jpg",
    boys: "/static/images/header/five-kids.jpg",
    girls: "/static/images/header/tetsu_maincoon-on-white-background.jpg",
    retired: "/static/images/header/brown-baby-02.jpg",
    available: "/static/images/header/red-kitten.jpg",
    articles: "/static/images/header/three-kids.jpg",
  };

  return (
    <>
      <header>
        <div className="relative h-full nm-flat-gray-100-xl">
          <img
            width="100%"
            height="90%"
            className="object-cover object-center relative pointer-events-none"
            src={themeImage[props.theme || "home"]}
            alt={"Canon's mainecoons"}
          />
          <h1 className="absolute -bottom-5 p-5 sm:left-10 md:-bottom-10">
            <CustomLink href="/home" aria-label="Gen-Scent Research Laboratory">
              <div className="flex justify-between items-center mb-8">
                {typeof siteMetadata.headerTitle === "string" ? (
                  <div
                    style={{
                      border: "double 5px #636363",
                      textShadow: "3px 3px 5px#ffffff",
                      color: "#71745b",
                      // background: "linearGradient(75deg;rgba(2, 9, 66, 1) 4 % rgba(6, 85, 92, 1) 76%)",
                    }}
                    className="py-1 pr-3 my-6 text-2xl font-semibold whitespace-nowrap bg-clip-text bg-opacity-40 backdrop-filter backdrop-blur-lg sm:py-3 sm:pr-4 sm:text-5xl md:mt-12 md:mb-20 xl:text-6xl"
                  >
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </CustomLink>
          </h1>
        </div>
        {props.theme !== "articles" && <NavBarMobile type="main" />}
      </header>
    </>
  );
};
