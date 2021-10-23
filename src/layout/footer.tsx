import type { VFC } from "react";
import { NavBarMobile } from "../components/navbar";
import { siteMetadata } from "../data/siteMetadata";

import { CustomLink } from "../components/CustomLink";

export const Footer: VFC = () => {
  return (
    <footer>
      <div className='flex flex-col items-center mt-16 justify-center'>
        <div className='flex mb-2 space-x-2 text-sm text-gray-500 '>
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className='flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13'>
          <a
            href='mailto:`${siteMetadata.email}`'
            title='Email'
            className='flex items-center justify-center w-8 h-8 rounded-full bg-green-700 text-gray-200'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
            </svg>
          </a>
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
