/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";
import { CustomLink } from "src/components/CustomLink";

const items = [
  { href: "/", label: "Entrance" },
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/mycat/boys", label: "My Boys" },
  { href: "/mycat/girls", label: "My Girls" },
  { href: "/baby", label: "Babies" },
  { href: "/available", label: "Available" },
  { href: "/retired", label: "Retired" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/gallery", label: "Gallery" },
  { href: "/links", label: "Links" },
];

type Props = {
  className?: string;
  type?: "entrance" | "main";
};

export const NavBarDesktop: FC = () => {
  return (
    <nav className="hidden flex-col justify-around min-h-screen text-center sm:flex">
      <div className="flex flex-col mt-6 sm:mt-12">
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a className="mb-2 text-2xl font-medium text-gray-200 hover:text-green-600 whitespace-nowrap lg:text-3xl">
                {label}
              </a>
            </Link>
          );
        })}
      </div>
      <div className="mb-12">
        <a
          href="http://catterycanoncat.blog.fc2.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="pt-5 text-2xl font-medium text-purple-50 hover:text-green-500 whitespace-nowrap animate-pulse lg:text-3xl"
        >
          Blog
        </a>
      </div>
    </nav>
  );
};

export const NavBarMobile: FC<Props> = (props) => {
  const buttonImage = {
    entrance: "/static/favicons/icon-512x512.svg",
    main: "/static/favicons/icon-512x512.svg",
  };
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
      <div className="fixed right-5 bottom-28 z-50 px-2 pt-1 rounded xl:right-96 nm-inset-gray-500">
        <button type="button" className="mx-1 w-16 h-16 rounded" aria-label="Toggle Menu" onClick={handleOnToggleNav}>
          <img
            alt="navigation icon"
            src={buttonImage[props.type || "main"]}
            className="z-50 w-16 rounded-full md:w-24"
            width="20px"
            height="20px"
            loading="lazy"
          />
        </button>
        <div
          className={`overflow-auto fixed w-full h-full top-0 right-0 bg-purple-50 z-10 transform ease-in-out duration-300 ${
            isNavShow ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="toggle modal"
            className="fixed -top-7 w-full h-4/5 focus:outline-none cursor-auto"
            onClick={handleOnToggleNav}
          ></button>
          <nav className="py-8 text-center md:mt-40">
            {items.map(({ href, label }) => {
              return (
                <CustomLink
                  key={href}
                  href={href}
                  onClick={handleOnToggleNav}
                  className="flex flex-col p-2 mx-auto text-2xl font-medium tracking-widest text-right text-gray-300 hover:text-gray-100 bg-gradient-to-r from-gray-400 to-gray-500 opacity-90 sm:p-3 sm:tracking-widest"
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
