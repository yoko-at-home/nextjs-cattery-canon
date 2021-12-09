import type { ReactNode, VFC } from "react";
import { CarouselTop } from "src/components/Carousel";
import { NavBarMobile } from "src/components/navbar";

type Props = {
  children: ReactNode;
};

export const LayoutCarousel: VFC<Props> = (props) => {
  return (
    <div className="relative w-screen">
      <CarouselTop />
      <main className="absolute top-20 md:top-40">{props.children}</main>
      <NavBarMobile type="entrance" />
    </div>
  );
};
