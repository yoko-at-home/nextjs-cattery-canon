import cc from "classcat";
import Image from "next/image";
import type { VFC } from "react";
import { CustomLink } from "../components/CustomLink";
import { NavBarMobile } from "../components/navbar";
import { siteMetadata } from "../data/siteMetadata";

type Props = {
  className?: string;
  type?: "main" | "baby" | "matured" | "flower" | "newsArticles";
  theme?: "main" | "baby" | "matured" | "flower" | "newsArticles";
};

export const Header: VFC<Props> = (props) => {
  const themeImage = {
    main: "/static/images/header/five-kids.jpg",
    baby: "/static/images/header/brown-baby-02.jpg",
    matured: "/static/images/header/maincoon-on-white-background.jpg",
    flower: "/static/images/header/red-ketten.jpg",
    newsArticles: "/static/images/header/three-kids.jpg",
  };

  return (
    <>
      <header
        className={cc([
          "h-80 relative",
          {
            "bg-gray-500 bg-opacity-70": props.type === "main",
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
        <h1 className="absolute top-10 p-5 sm:left-10 md:top-14 lg:top-10 text-2xl sm:text-4xl text-green-900 sm:whitespace-nowrap">
          <CustomLink href="/home" aria-label="Gen-Scent Research Laboratory">
            <div className="flex items-center justify-between mb-8">
              {typeof siteMetadata.headerTitle === "string" ? (
                <div
                  className="h-6 text-3xl lg:text-5xl md:text-4xl font-semibold my-6 md:mb-20 md:mt-12 text-center md:whitespace-nowrap"
                  style={{ textShadow: "2px 10px 6px rgba(255, 255, 255, 0.9)" }}
                >
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </CustomLink>
        </h1>
        {props.theme !== "newsArticles" && <NavBarMobile />}
      </header>
    </>
  );
};
