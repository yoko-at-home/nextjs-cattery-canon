import type { VFC } from "react";
import { CustomLink } from "../components/CustomLink";
import { NavBarMobile } from "../components/navbar";
import { siteMetadata } from "../data/siteMetadata";

type Props = {
  className?: string;
  type?: "home" | "boys" | "girls" | "retired" | "available" | "articles";
  theme?: "home" | "boys" | "girls" | "retired" | "available" | "articles";
};

export const Header: VFC<Props> = (props) => {
  const themeImage = {
    home: "/static/images/header/four-kittens.jpg",
    boys: "/static/images/header/five-kids.jpg",
    girls: "/static/images/header/maincoon-on-white-background.jpg",
    retired: "/static/images/header/brown-baby-02.jpg",
    available: "/static/images/header/red-kitten.jpg",
    articles: "/static/images/header/three-kids.jpg",
  };

  return (
    <>
      <header>
        <div className="relative rounded nm-flat-gray-100-xl h-full">
          <img
            width="100%"
            height="90%"
            className="relative rounded object-cover object-center pointer-events-none"
            src={themeImage[props.theme || "home"]}
            alt={"Canon's mainecoons"}
          />
          <h1 className="absolute -bottom-5 p-5 sm:left-10 md:-bottom-10">
            <CustomLink href="/home" aria-label="Gen-Scent Research Laboratory">
              <div className="flex items-center justify-between mb-8">
                {typeof siteMetadata.headerTitle === "string" ? (
                  <div
                    style={{
                      border: "double 5px #636363",
                      textShadow: "3px 3px 5px#ffffff",
                      color: "#71745b",
                      // background: "linearGradient(75deg;rgba(2, 9, 66, 1) 4 % rgba(6, 85, 92, 1) 76%)",
                    }}
                    className="bg-opacity-40 backdrop-filter backdrop-blur-lg py-1 pr-3 sm:py-3 sm:pr-4 bg-clip-text text-2xl sm:text-5xl xl:text-6xl font-semibold my-6 md:mb-20 md:mt-12 whitespace-nowrap"
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
