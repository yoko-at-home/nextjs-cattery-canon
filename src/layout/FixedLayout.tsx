/* eslint-disable tailwindcss/no-custom-classname */
import type { ReactNode, VFC } from "react";
import { CarouselVertical } from "src/components/Carousel";
import { NavBarDesktop } from "src/components/navbar";
import { Footer } from "src/layout/footer";
import { Header } from "src/layout/header";

type Props = {
  className?: string;
  theme?: "home" | "boys" | "girls" | "retired" | "available" | "articles";
  children: ReactNode;
  photographer?: "tetsu" | "yamashita";
};

export const Layout: VFC<Props> = (props) => {
  return (
    <div className="flex justify-start w-screen">
      <div className="hidden m-5 w-1/6 min-h-full rounded-full md:block xl:w-1/6 nm-inset-yellow-800">
        <NavBarDesktop />
      </div>
      <div className="w-full md:mr-5 lg:w-5/6">
        <div>{!props.theme ? null : <Header theme={props.theme || "home"} />}</div>
        <p className="pr-5 text-right text-gray-600">
          {props.photographer !== "tetsu" ? "Photo: Yoshihiko Yamashita" : "Photo: Tstsu"}
        </p>
        <main className="px-5 mx-auto md:w-full">{props.children}</main>
        <Footer />
      </div>
      <div className="hidden xl:block xl:mr-3 xl:w-2/6">
        <CarouselVertical />
      </div>
    </div>
  );
};
export const LayoutBlog: VFC<Props> = (props) => {
  return (
    <div className="flex justify-start w-screen">
      <div className="hidden m-5 w-1/6 min-h-full rounded-full md:block xl:w-1/6 nm-inset-yellow-800">
        <NavBarDesktop />
      </div>
      <div className="w-full md:mr-5 lg:w-5/6">
        <div>{!props.theme ? null : <Header theme={props.theme || "home"} />}</div>
        {/* <p className="pr-5 text-right text-gray-600">
          {props.photographer !== "tetsu" ? "Photo: Yoshihiko Yamashita" : "Photo: Tstsu"}
        </p> */}
        <main className="px-5 mx-auto md:w-full">{props.children}</main>
        <Footer />
      </div>
      <div className="hidden xl:block xl:mr-3 xl:w-2/6">
        <CarouselVertical />
      </div>
    </div>
  );
};
