import Link from "next/link";
import type { VFC } from "react";
import { useState } from "react";
import { CustomLink } from "../components/CustomLink";

const items = [
  { href: "/", label: "Entrance" },
  { href: "/home", label: "Home" },
  { href: "/mycat/boys", label: "Boys" },
  { href: "/mycat/girls", label: "Girls" },
  { href: "/available", label: "Available" },
  { href: "/retired", label: "Retired" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "よくある質問" },
  { href: "/gallery", label: "Gallery" },
  { href: "/links", label: "Links" },
];

export const NavBarDesktop: VFC = () => {
  return (
    <nav className='sm:flex flex-col justify-start mt-20 text-center px-2 hidden'>
      {items.map(({ href, label }) => {
        return (
          <Link key={href} href={href}>
            <a className='mb-3 font-medium text-gray-300 sm:px-4 lg:text-xl py-2 hover:text-green-900 whitespace-nowrap'>
              {label}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export const NavBarMobile: VFC = () => {
  const [isNavShow, setIsNavShow] = useState(false);

  const handleOnToggleNav = () => {
    setIsNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  return (
    <>
      <div className='z-50 bg-gray-400 bg-opacity-80 rounded pt-1 px-2 fixed right-5 bottom-28 xl:right-96'>
        <button
          type='button'
          className='w-16 h-16 ml-1 mr-1 rounded'
          aria-label='Toggle Menu'
          onClick={handleOnToggleNav}
        >
          <img
            alt='mainecoon'
            src={"/static/gif/animation_500_cat.gif"}
            className='rounded-full w-16 md:w-24 z-50'
            width="20px"
            height="20px"
          />
          {/* <video
            loop
            muted
            autoPlay
            playsinline
            className='rounded-full w-16 md:w-24 z-50'
          >
            <source src='/static/video/my-animation.webm' type='video/webm' />
            <source src='static/video/my-animation.mp4' type='video/mp4' />
          </video> */}
        </button>
        <div
          className={`overflow-auto fixed w-full h-full top-0 right-0 bg-purple-50 z-10 transform ease-in-out duration-300 ${
            isNavShow ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type='button'
            aria-label='toggle modal'
            className='fixed w-full h-4/5 -top-7 cursor-auto focus:outline-none'
            onClick={handleOnToggleNav}
          ></button>
          <nav className='text-center mt-10 md:mt-40'>
            {items.map(({ href, label }) => {
              return (
                <CustomLink
                  key={href}
                  href={href}
                  onClick={handleOnToggleNav}
                  className='flex flex-col text-2xl sm:tracking-widest p-1 font-medium mx-auto text-gray-300 sm:px-4 bg-gradient-to-r from-gray-400 to-gray-500 opacity-90 hover:text-gray-100 text-right pr-3 sm:py-3'
                >
                  {label}
                </CustomLink>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};
