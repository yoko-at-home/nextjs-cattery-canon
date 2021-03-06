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

const Available: FC<CommonProps> = (props) => {
  return (
    <Layout theme="available" photographer="Yoshiko Yamashita">
      <PageSEO
        title={`譲渡可能な子達 - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
        siteUrl={siteMetadata.siteUrl}
      />{" "}
      <PageTitle type="large">譲渡可能な子達</PageTitle>
      <div className="mt-10">
        <ul>
          {props.content.map((item) => {
            return (
              <li key={item.id} className="mb-8">
                <div className="flex flex-col justify-between p-6 sm:flex-row-reverse nm-inset-gray-50-lg">
                  <Link href={`available/${item.id}`}>
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
                  <div className="flex flex-col w-full">
                    <Link href={`available/${item.id}`}>
                      <a className="text-2xl font-bold text-red-900 whitespace-nowrap sm:text-3xl">{item.title}</a>
                    </Link>
                    <div className="pt-3">{item.description}</div>
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
  const data = await client.get({ endpoint: "available" });

  return {
    props: {
      content: data.contents,
    },
  };
};

export default Available;
