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
    // <div key={props.id}>
    <div class="relative px-4 -mt-16" key={props.id}>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex items-baseline">
          <h4 class="text-green-900 mt-1 text-xl font-semibold uppercase leading-tight truncate">{props.title}</h4>
        </div>
        <main className="p-5 z-10">
          <div className="cursor-pointer p-1 h-28 text-md tracking-tight text-white hover:bg-gray-50 hover:bg-opacity-20 rounded word-break overflow-y-scroll transition ease-in-out duration-500">
            {props.description}
          </div>
        </main>
      </div>
    </div>
  );
};

const Retired = (props) => {
  return (
    <Layout theme="articles">
      <PageSEO title={`引退した子達 - ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle type="large">引退した子達</PageTitle>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <p className="text-lg leading-7 text-gray-500 ">引退した子達です。</p>
      </div>
      <div className="mt-10">
        <ul>
          {props.retired.map((retired) => {
            return (
              <li key={retired.id} className="mb-8">
                <div className="flex-none justify-between  p-6">
                  <Link href={`retired/${retired.id}`} passHref>
                    <a className="ml-1 lg:ml-10 lg:w-3/12">
                      <picture>
                        <img
                          src={retired.imgSrc?.url}
                          alt={retired.title}
                          className="w-full object-cover object-center rounded-lg shadow-md"
                          width={retired.imgSrc?.width}
                          height={retired.imgSrc?.height}
                        />
                      </picture>
                      {/* <AppCard key={retired.title} title={retired.title} description={retired.description} /> */}
                    </a>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};


export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "retired" });

  return {
    props: {
      retired: data.contents,
    },
  };
};

export default Retired;
