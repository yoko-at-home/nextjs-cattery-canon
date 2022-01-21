/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-handler-names */
/* eslint-disable import/no-default-export */
import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import type { commonProps } from "src/type/types";

const Retired: VFC<commonProps> = (props) => {
  return (
    <Layout theme="retired" photographer="Yoshiko Yamashita">
      <PageSEO title={`引退した子達 - ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle type="large">引退した子達</PageTitle>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <p className="text-lg leading-7 text-gray-500 ">引退した子達です。</p>
      </div>
      <div className="mt-10">
        <ul>
          {props.content.map((item) => {
            return (
              <li key={item.id} className="mb-8">
                <div className="flex flex-col justify-between p-6 sm:flex-row nm-inset-gray-50-lg">
                  <Link href={`retired/${item.id}`}>
                    <a className="ml-1 lg:ml-10 lg:w-3/12">
                      <picture>
                        <Image
                          src={item.imgSrc?.url}
                          alt={item.title}
                          width={item.imgSrc?.width}
                          height={item.imgSrc?.height}
                        />
                      </picture>
                    </a>
                  </Link>
                  <div className="flex flex-col w-full text-gray-600">
                    <Link href={`retired/${item.id}`}>
                      <a className="pl-3 text-2xl font-bold text-red-900 whitespace-nowrap sm:text-3xl">{item.title}</a>
                    </Link>
                    <div className="pt-3 pl-3">{item.description}</div>
                  </div>
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
      content: data.contents,
    },
  };
};

export default Retired;
