/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import type { CommonProps } from "src/type/types";

const Retired: FC<CommonProps> = (props) => {
  return (
    <Layout theme="retired" photographer="Yoshiko Yamashita">
      <PageSEO
        title={`引退した子達 - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
        siteUrl={siteMetadata.siteUrl}
      />
      <PageTitle type="large">引退した子達</PageTitle>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <p className="text-lg leading-7 text-gray-500 ">引退した子達です。</p>
      </div>
      <div className="mt-10">
        <ul>
          {props.content.map((item) => {
            return (
              <li key={item.id} className="mb-8">
                <div className="flex flex-col justify-between p-6 nm-inset-gray-50-lg sm:flex-row">
                  <Link href={`retired/${item.id}`} className="ml-1 lg:ml-10 lg:w-3/12">
                    <picture>
                      <Image
                        src={item.imgSrc?.url}
                        alt={item.title === undefined ? "canon cat" : item.title}
                        width={item.imgSrc?.width}
                        height={item.imgSrc?.height}
                      />
                    </picture>
                  </Link>
                  <div className="flex w-full flex-col text-gray-600">
                    <Link
                      href={`retired/${item.id}`}
                      className="whitespace-nowrap pl-3 text-2xl font-bold text-red-900 sm:text-3xl"
                    >
                      {item.title}
                    </Link>
                    <div className="pl-3 pt-3">{item.description}</div>
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
      queries: { limit: 999 },
    },
  };
};

export default Retired;
