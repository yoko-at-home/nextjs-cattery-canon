/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import type { FC } from "react";
import { HeaderTitle, HeaderTitleMobile } from "src/components/HeaderTitle";
import { NavBarMobile } from "src/components/navbar";

type Props = {
  className?: string;
  type?: "home" | "boys" | "girls" | "retired" | "available" | "articles" | "about" | "fushigi" | "baby";
  theme?: "home" | "boys" | "girls" | "retired" | "available" | "articles" | "about" | "gallery" | "baby";
};

export const Header: FC<Props> = (props) => {
  const themeImage = {
    home: "/static/images/header/four-kittens.webp",
    about: "/static/images/header/era.webp",
    boys: "/static/images/header/five-kids.webp",
    girls: "/static/images/header/tetsu-TICA_QGC_POPOKILANI_ISHTAR_OF_CANON.webp",
    retired: "/static/images/header/brown-baby-02.webp",
    available: "/static/images/header/red-kitten.webp",
    articles: "/static/images/header/three-kids.webp",
    gallery: "/static/images/memory/fushigi.webp",
    baby: "/static/images/header/2022-baby.webp",
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
    baby: "/static/images/header/mobile/2022-baby.webp",
  };

  return (
    <header>
      <div>
        {/* PC */}
        <div className="relative hidden h-full nm-flat-zinc-50-xl sm:block">
          <img
            width="100%"
            height="100%"
            className="pointer-events-none relative object-cover object-center"
            src={themeImage[props.theme || "home"]}
            alt={"Canon's mainecoons"}
            loading="eager"
          />
          <HeaderTitle />
        </div>
        {/* mobile */}
        <div className="relative h-screen nm-flat-gray-100-xl sm:hidden">
          <Image
            layout="fill"
            className="pointer-events-none relative object-cover object-center"
            src={themeImageMobile[props.theme || "home"]}
            alt={"Canon's mainecoons"}
            loading="eager"
          />
          <HeaderTitleMobile />
        </div>
        {/* mobile */}
        <NavBarMobile />
      </div>
    </header>
  );
};
