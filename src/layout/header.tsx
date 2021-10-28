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
    home: "/static/images/header/brown-baby-02.jpg",
    boys: "/static/images/header/five-kids.jpg",
    girls: "/static/images/header/four-kittens.jpg",
    retired: "/static/images/header/maincoon-on-white-background.jpg",
    available: "/static/images/header/red-kitten.jpg",
    articles: "/static/images/header/three-kids.jpg",
  };

  return (
    <>
      <header>
        <div className='relative rounded nm-flat-gray-100-xl h-full'>
          <img
            width='100%'
            height='90%'
            className='relative rounded object-cover object-center pointer-events-none'
            src={themeImage[props.theme || "home"]}
            alt={"Canon's mainecoons"}
          />
          <h1 className='absolute top-10 p-5 sm:left-10 md:top-14 lg:top-10'>
            <CustomLink href='/home' aria-label='Gen-Scent Research Laboratory'>
              <div className='flex items-center justify-between mb-8'>
                {typeof siteMetadata.headerTitle === "string" ? (
                  <div
                    className='min-h-full min-w-full py-5 pr-20 text-green-900 text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold my-6 md:mb-20 md:mt-12 whitespace-nowrap'
                    style={{
                      textShadow: "5px 5px 6px rgb(99, 51, 7, .6)",
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
        </div>
        {props.theme !== "articles" && <NavBarMobile type='main' />}
      </header>
    </>
  );
};
