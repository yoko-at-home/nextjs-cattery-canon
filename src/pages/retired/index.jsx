/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-handler-names */
/* eslint-disable import/no-default-export */
import Link from "next/link";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import Image from "next/image";

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
                <div className="flex flex-row justify-between  p-6 nm-inset-gray-50-lg">
                  <Link href={`retired/${retired.id}`}>
                    <a className="ml-1 lg:ml-10 lg:w-3/12">
                      <picture>
                        <Image
                          src={retired.imgSrc?.url}
                          alt={retired.title}
                          width={retired.imgSrc?.width}
                          height={retired.imgSrc?.height}
                        />
                      </picture>
                    </a>
                  </Link>
                  <div className="flex flex-col w-full text-gray-600">
                    <Link href={`retired/${retired.id}`}>
                      <a className="font-bold pl-3">{retired.title}</a>
                    </Link>
                    <div className="pt-3 pl-3">{retired.description}</div>
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
      retired: data.contents,
    },
  };
};

export default Retired;
