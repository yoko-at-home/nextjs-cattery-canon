import type { ReactNode, VFC } from "react";
import { CarouselVertical } from "../components/Carousel/vertical";
import { NavBarMobile } from "../components/navbar";
import { Footer } from "./footer";
import { Header } from "./header";
import { NavBarDesktop } from "../components/navbar";

type Props = {
  className?: string;
  theme?: "main" | "baby" | "babyGirl" | "matured" | "flower" | "articles";
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return (
    <div className='flex justify-start w-screen'>
      <div className='hidden sm:block w-1/6 xl:w-1/6 bg-gradient-to-br from-yellow-900 text-yellow-700 min-h-full rounded-full m-5'>
        <NavBarDesktop />
      </div>
      <div className='w-screen lg:w-5/6 sm:mr-5'>
        <Header theme={props.theme || "main"} />
        <main className='mx-auto px-5 md:w-full'>{props.children}</main>
        <Footer />
      </div>
      <div className='hidden xl:mr-3 xl:block xl:w-2/6 min-h-screen'>
        <CarouselVertical />
      </div>
    </div>
  );
};

export const LayoutCarousel: VFC<Props> = (props) => {
  return (
    <div className='relative'>
      <Carousel />
      <main className='absolute top-20 md:top-40'>{props.children}</main>
      <NavBarMobile />
    </div>
  );
};
