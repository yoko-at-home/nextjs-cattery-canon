/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import type { VFC } from "react";
import { HeaderTitle } from "src/components/HeaderTitle";
import { NavBarMobile } from "src/components/navbar";

type Props = {
  className?: string;
  type?: "home" | "boys" | "girls" | "retired" | "available" | "articles" | "about" | "fushigi";
  theme?: "home" | "boys" | "girls" | "retired" | "available" | "articles" | "about" | "gallery";
};

export const Header: VFC<Props> = (props) => {
  const themeImage = {
    home: "/static/images/header/four-kittens.webp",
    about: "/static/images/header/era.webp",
    boys: "/static/images/header/five-kids.webp",
    girls: "/static/images/header/tetsu_maincoon-on-white-background.webp",
    retired: "/static/images/header/brown-baby-02.webp",
    available: "/static/images/header/red-kitten.webp",
    articles: "/static/images/header/three-kids.webp",
    gallery: "/static/images/memory/fushigi.webp",
  };
  const themeImageMobile = {
    home: "/static/images/header/mobile/yamashita-brown.webp",
    about: "/static/images/header/mobile/yamashita-era.webp",
    boys: "/static/images/header/mobile/yamashita-two-black.webp",
    girls: "/static/images/header/mobile/tetsu-TICA_QGC_POPOKILANI_ISHTAR_OF_CANON.webp",
    retired: "/static/images/header/mobile/brown-baby-02.webp",
    available: "/static/images/header/mobile/yamashita-red.webp",
    articles: "/static/images/header/mobile/three-kids.webp",
    gallery: "/static/images/header/mobile/fushigi.webp",
  };

  return (
    <>
      <header>
        {/* PC */}
        <div className="hidden relative h-full sm:block nm-flat-gray-100-xl">
          <img
            width="100%"
            height="100%"
            className="object-cover object-center relative pointer-events-none"
            src={themeImage[props.theme || "home"]}
            alt={"Canon's mainecoons"}
            loading="eager"
          />
          <HeaderTitle />
        </div>
        {/* mobile */}
        <div className="relative h-screen sm:hidden nm-flat-gray-100-xl">
          <Image
            layout="fill"
            className="object-cover object-center relative pointer-events-none"
            src={themeImageMobile[props.theme || "home"]}
            alt={"Canon's mainecoons"}
            loading="eager"
          />
          <HeaderTitle />
        </div>
        {/* mobile */}
        {props.theme !== "articles" && <NavBarMobile type="main" />}
      </header>
    </>
  );
};
