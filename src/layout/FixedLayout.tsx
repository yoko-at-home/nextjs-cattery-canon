/* eslint-disable tailwindcss/no-custom-classname */
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { Test } from "src/components/Carousel/test";
import { CarouselVertical } from "src/components/Carousel/vertical";
import { NavBarDesktop } from "src/components/navbar";
import { Footer } from "src/layout/footer";
import { Header } from "src/layout/header";

type Props = {
  className?: string;
  theme?: "home" | "boys" | "girls" | "retired" | "available" | "articles" | "about" | "gallery" | "baby";
  children: ReactNode;
  photographer?: "Yoshiko Yamashita" | string;
};

export const Layout: FC<Props> = (props) => {
  const router = useRouter();

  return (
    <div className="flex w-screen justify-start">
      <div
        className={
          router.pathname === "/baby"
            ? "sticky top-2 m-5 hidden max-h-screen w-1/6 overflow-y-auto rounded-full nm-inset-pink-500 md:block xl:w-1/6"
            : "sticky top-2 m-5 hidden max-h-screen w-1/6 overflow-y-auto rounded-full nm-inset-yellow-800 md:block xl:w-1/6"
        }
      >
        <NavBarDesktop />
      </div>
      <div className="w-full md:mr-5 lg:w-5/6 xl:w-4/6">
        <div>{!props.theme ? null : <Header theme={props.theme || "home"} />}</div>
        <p className="pr-5 text-right text-stone-700">
          Photo: {props.theme === "home" ? "Yoshiko Yamashita" : props.photographer}
        </p>
        <main className="mx-auto px-2 sm:px-3 md:w-full md:px-5">{props.children}</main>
        <Footer />
      </div>
      <div className="hidden max-h-[210vh] overflow-y-scroll rounded-full xl:block xl:w-1/6">
        <Test />
      </div>
    </div>
  );
};
export const LayoutBlog: FC<Props> = (props) => {
  return (
    <div className="flex w-screen justify-start">
      <div className="m-5 hidden min-h-full w-1/6 rounded-full nm-inset-yellow-800 md:block xl:w-1/6">
        <NavBarDesktop />
      </div>
      <div className="w-full md:mr-5 lg:w-5/6">
        <div>{!props.theme ? null : <Header theme={props.theme || "home"} />}</div>
        {/* <p className="pr-5 text-right text-gray-600">
          {props.photographer !== "tetsu" ? "Photo: Yoshiko Yamashita" : "Photo: Tstsu"}
        </p> */}
        <main className="mx-auto px-5 md:w-full">{props.children}</main>
        <Footer />
      </div>
      <div className="hidden xl:mr-3 xl:block xl:w-2/6">
        <CarouselVertical />
      </div>
    </div>
  );
};
