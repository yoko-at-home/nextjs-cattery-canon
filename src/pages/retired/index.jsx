/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-handler-names */
/* eslint-disable import/no-default-export */
// import type { NextPage } from "next";
// import type { VFC } from "react";
import Link from "next/link";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";
import { client } from "src/lib/client";

// const AppCard: VFC<ItemType> = (props) => {
const AppCard = (props) => {
  return (
    <div key={props.id}>
      <div
        className='relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center'
        // style={{ backgroundImage: "url(https://source.unsplash.com/1600x500/?plant,flower)" }}
        style={{
          backgroundImage:
            "url(static/images/header/maincoon-on-white-background.jpg)",
        }}
      >
        <div className='absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900'></div>
        <div className='absolute top-3 right-5 left-0 mx-5 mt-2 flex justify-between items-center'>
          <div
            // href="#"
            className='cursor-pointer text-md rounded bg-gray-600 text-gray-100 px-5 py-2 hover:bg-white bg-opacity-80 hover:text-indigo-600 transition ease-in-out duration-500'
          >
            {props.title}
          </div>
        </div>
        <main className='p-5 z-10'>
          <div className='cursor-pointer p-1 h-28 text-md tracking-tight text-white hover:bg-gray-50 hover:bg-opacity-20 rounded word-break overflow-y-scroll transition ease-in-out duration-500'>
            {props.description}
          </div>
        </main>
      </div>
    </div>
  );
};

const Retired = (props) => {
  return (
    <Layout theme='newsArticles'>
      <PageSEO
        title={`Retired - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />

      <PageTitle>引退した子達</PageTitle>
      <div className='divide-y divide-gray-200 '>
        <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
          <p className='text-lg leading-7 text-gray-500 '>引退した子達です。</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10'>
          {props.retired.map((retired) => {
            return (
              <Link href={`retired/${retired.id}`} passHref>
                <a>
                  <AppCard
                    key={retired.title}
                    title={retired.title}
                    description={retired.description}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

// export const getStaticProps = async () => {
//   const key = {
//     // eslint-disable-next-line @typescript-eslint/naming-convention
//     headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
//   };
//   const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/retired?offset=0&limit=6`, key)
//     .then((res) => {
//       return res.json();
//     })
//     .catch(() => {
//       return null;
//     });

//   return {
//     props: {
//       retired: data.contents,
//     },
//   };
// };

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "retired" });

  return {
    props: {
      retired: data.contents,
    },
  };
};

export default Retired;
