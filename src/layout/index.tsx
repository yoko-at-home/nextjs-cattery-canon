import type { ReactNode, VFC } from "react";
import { Carousel } from "../components/Carousel";
import { NavBarMobile } from "../components/navbar";
import { Footer } from "./footer";
import { Header } from "./header";
import { NavBarDesktop } from "../components/navbar";

type Props = {
  className?: string;
  theme?: "main" | "baby" | "matured" | "flower" | "newsArticles";
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return (
    <div className='flex justify-between'>
      <div className='hidden sm:block w-2/6 lg:w-1/6 bg-gradient-to-br from-yellow-900 text-yellow-700 min-h-full rounded-full m-5'>
        <NavBarDesktop />
      </div>
      <div className='w-screen md:w-5/6 lg:w-4/6'>
        <Header theme={props.theme || "main"} />
        <main className='mx-3 sm:mx-10 md:mx-auto md:w-11/12 lg:w-9/12'>
          {props.children}
        </main>
        <Footer />
      </div>
      <div className='hidden lg:block lg:w-1/6'></div>
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
