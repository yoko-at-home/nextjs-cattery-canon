import cc from "classcat";
import Image from "next/image";
import type { VFC } from "react";
import { CustomLink } from "../components/CustomLink";
import { NavBarDesktop, NavBarMobile } from "../components/navbar";
import { siteMetadata } from "../data/siteMetadata";

type Props = {
  className?: string;
  type?: "main" | "baby" | "matured" | "flower" | "newsArticles";
  theme?: "main" | "baby" | "matured" | "flower" | "newsArticles";
};

export const Header: VFC<Props> = (props) => {
  const themeImage = {
    main: "/images/mainecoon.jpg",
    baby: "/images/brown-baby-02.jpg",
    matured: "/images/maincoon-on-white-background.jpg",
    flower: "/images/red-ketten.jpg",
    newsArticles: "/images/three-kids.jpg",
  };

  return (
    <>
      <header
        className={cc([
          "h-60 relative",
          {
            "bg-gray-500 bg-opacity-70": props.type === "main",
            "opacity-100": props.type !== "main",
          },
        ])}
      >
        <Image
          layout='fill'
          className='object-center object-cover pointer-events-none'
          src={themeImage[props.theme || "main"]}
          alt={"text"}
        />
        <h1 className='absolute top-10 p-5 sm:left-10 md:top-14 lg:top-10 text-2xl sm:text-3xl text-white sm:whitespace-nowrap'>
          <CustomLink href='/' aria-label='Gen-Scent Research Laboratory'>
            <div className='flex items-center justify-between mb-8'>
              {typeof siteMetadata.headerTitle === "string" ? (
                <div className='h-6 text-2xl lg:text-4xl md:text-3xl font-semibold my-6 md:mb-20 md:mt-12 text-center md:whitespace-nowrap'>
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </CustomLink>
        </h1>
        <div className='flex flex-row-reverse m-8'>
          <CustomLink href='/' aria-label='Gen-Scent Research Laboratory'>
            <Image
              src={"/static/images/logo.png"}
              alt='logo'
              width='50px'
              height='50px'
            />
          </CustomLink>
        </div>
        {props.theme !== "newsArticles" && <NavBarDesktop />}
        {props.theme !== "newsArticles" && <NavBarMobile />}
      </header>
    </>
  );
};
