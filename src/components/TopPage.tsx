import { CustomLink } from "./CustomLink";
import Link from "next/link";
import { PageSEO } from "./SEO";
import { siteMetadata } from "../data/siteMetadata";
import { LayoutCarousel } from "../layout";

export const TopPage = () => {
  return (
    <LayoutCarousel>
      <PageSEO
        title={`ようこそ！- ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      {/* <CustomLink href='/home' aria-label='Cattery Canon'>
        <div className='z-50 bg-gray-400 bg-opacity-80 rounded pt-1 px-2 fixed right-5 bottom-28 xl:right-96'>
          <img
            alt="Canons's mainecoon"
            src={"/static/gif/animation_500_cat.gif"}
            className='rounded-full w-16 md:w-24'
          />
        </div>
      </CustomLink> */}

      <div className='py-12 text-center bg-black bg-opacity-30 rounded-full text-white text-xs sm:text-xl leading-7 uppercase'>
        <div className='p-6'>
          <h1
            className='text-3xl'
            style={{ textShadow: "0px 10px 3px rgba(0, 0, 0, 0.9)" }}
          >
            Welcome to
            <br />
            <span className='text-4xl my-5'>Canon&#39;s</span> <br />
            Maine Coon world
          </h1>
        </div>
        <div
          className='p-6'
          style={{ textShadow: "0px 5px 5px rgba(0, 0, 0, 0.9)" }}
        >
          Cattery CANON is a tiny Maine Coon breeder in Zama City, Kanagawa
          Prefecure. I am a member of Cat Fanciers Association (CFA) and The
          International Cat Association (TICA). The headquarters are in USA.
        </div>
        <Link href='/home'>
          <a className='leading-looses rounded p-4 text-2xl md:text-4xl bg-gradient-to-tl from-pink-800 bg-yellow-400 hover:text-yellow-600 hover:bg-green-700 inline-block bg-opacity-80 nm-inset-yellow-700-xs'>
            Enter
          </a>
        </Link>
        <div
          className='p-6'
          style={{ textShadow: "0px 5px 5px rgba(0, 0, 0, 0.9)" }}
        >
          Cattery
          CANONは、神奈川県座間市にある、メインクーン専門の小さなキャテリーです。アメリカに本部を置く愛猫団体
          CFA TICAに所属しています。
        </div>
      </div>
    </LayoutCarousel>
  );
};
