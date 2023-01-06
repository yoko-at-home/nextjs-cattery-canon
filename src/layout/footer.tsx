/* eslint-disable tailwindcss/no-custom-classname */
import type { FC } from "react";
import { CustomLink } from "src/components/CustomLink";
import { Logo } from "src/components/Logo";

import { siteMetadata } from "../data/siteMetadata";

export const Footer: FC = () => {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center justify-center">
        <div className="mb-16 flex justify-center">
          <Logo />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-700">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
          <a
            href={`mailto:${siteMetadata.email}`}
            title="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-200 nm-inset-green-700-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </a>
          <div>{` • `}</div>
          <a
            target="_blank"
            rel=" noopener noreferrer"
            href="http://catterycanoncat.blog.fc2.com"
            className="text-gray-700 hover:text-green-600"
          >
            {siteMetadata.title} ブログ
          </a>
        </div>
        <div className="my-8 bg-gradient-to-r from-green-600 to-blue-700 bg-clip-text text-sm text-gray-500">
          <CustomLink href="https://yoko-portfolio.vercel.app/about/">Powered by yoko</CustomLink>
        </div>
      </div>
    </footer>
  );
};
