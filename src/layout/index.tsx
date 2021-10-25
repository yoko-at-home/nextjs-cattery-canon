import type { ReactNode, VFC } from "react";
import { Carousel } from "../components/Carousel";
import { CarouselVertical } from "../components/Carousel/vertical";
import { NavBarMobile } from "../components/navbar";
import { Footer } from "./footer";
import { Header } from "./header";
import { NavBarDesktop } from "../components/navbar";

type Props = {
  className?: string;
  theme?: "home" | "boys" | "girls" | "retired" | "available" | "articles";
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return (
    <div className='flex justify-start w-screen'>
      <div className='hidden md:block w-1/6 xl:w-1/6 min-h-full rounded-full m-5 nm-inset-yellow-800-lg'>
        <NavBarDesktop />
      </div>
      <div className='w-full lg:w-5/6 md:mr-5'>
        {!props.theme ? null : <Header theme={props.theme || "home"} />}
        <main className='mx-auto px-5 md:w-full'>{props.children}</main>
        <Footer />
      </div>
      <div className='hidden xl:mr-3 xl:block xl:w-2/6'>
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
      <NavBarMobile type="entrance"/>
    </div>
  );
};
