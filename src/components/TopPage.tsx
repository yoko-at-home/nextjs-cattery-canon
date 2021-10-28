/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import { siteMetadata } from "src/data/siteMetadata";
import { LayoutCarousel } from "src/layout/FixedLayout";

import { PageSEO } from "./SEO";

export const TopPage = () => {
  return (
    <LayoutCarousel>
      <PageSEO title={`ようこそ！- ${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="py-12 text-xs leading-7 text-center text-white uppercase bg-black bg-opacity-30 rounded-full sm:text-xl">
        <div className="p-6">
          <h1 className="text-3xl" style={{ textShadow: "0px 10px 3px rgba(0, 0, 0, 0.9)" }}>
            Welcome to
            <br />
            <span className="my-5 text-4xl">Canon&#39;s</span> <br />
            Maine Coon world
          </h1>
        </div>
        <div className="p-6" style={{ textShadow: "0px 5px 5px rgba(0, 0, 0, 0.9)" }}>
          {siteMetadata.title} is a tiny Maine Coon breeder in Zama City, Kanagawa Prefecure. I am a member of Cat
          Fanciers Association (CFA) and The International Cat Association (TICA). The headquarters are in USA.
        </div>
        <Link href="/home">
          <a className="inline-block p-4 text-2xl hover:text-yellow-600 bg-yellow-400 hover:bg-green-700 bg-opacity-80 bg-gradient-to-tl from-pink-800 rounded md:text-4xl leading-looses nm-inset-yellow-700-xs">
            Enter
          </a>
        </Link>
        <div className="p-6" style={{ textShadow: "0px 5px 5px rgba(0, 0, 0, 0.9)" }}>
          {siteMetadata.title}{" "}
          は、神奈川県座間市にある、メインクーン専門の小さなキャテリーです。アメリカに本部を置く愛猫団体 CFA
          TICAに所属しています。
        </div>
      </div>
    </LayoutCarousel>
  );
};
