import type { VFC } from "react";
import { NavBarMobile } from "../components/navbar";
import { siteMetadata } from "../data/siteMetadata";

import { CustomLink } from "../components/CustomLink";

export const Footer: VFC = () => {
  return (
    <footer>
      <div className='flex flex-col items-center mt-16'>
        <div className='flex mb-2 space-x-2 text-sm text-gray-500 '>
          <div>All rights reserved by: {siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <a
            target='_blank'
            rel=' noopener'
            href='http://catterycanoncat.blog.fc2.com'
            className='hover:text-green-600 hover:transform skew-y-12'
          >
            {siteMetadata.title} ブログ
          </a>
        </div>
        <div className='my-8 text-sm text-gray-500'>
          <CustomLink href='https://yoko-2021.vercel.app/'>
            Powered by yoko
          </CustomLink>
        </div>
        <NavBarMobile />
      </div>
    </footer>
  );
};
