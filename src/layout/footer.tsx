import type { VFC } from "react";
import { NavBarMobile } from "../components/navbar";
import { siteMetadata } from "../data/siteMetadata";

import { CustomLink } from "../components/CustomLink";

export const Footer: VFC = () => {
  return (
    <footer>
      <div className='flex flex-col items-center mt-16 justify-center whitespace-nowrap'>
        <div className='flex mb-2 space-x-2 text-sm text-gray-500 '>
          <div>All rights reserved by {siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <a
            target='_blank'
            rel=' noopener'
            href='http://catterycanoncat.blog.fc2.com'
            className='animate-pulse text-gray-700 hover:text-green-600'
          >
            {siteMetadata.title} ブログ
          </a>
        </div>
        <div className='my-8 text-sm text-gray-500 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-700'>
          <CustomLink href='https://yoko-2021.vercel.app/'>
            Powered by yoko
          </CustomLink>
        </div>
        <NavBarMobile />
      </div>
    </footer>
  );
};
