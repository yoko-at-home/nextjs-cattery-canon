/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import Link from "next/link";
import { VFC } from "react";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import { availableProps } from "src/type/types";

const Available:VFC<availableProps> = (props) => {
  return (
    <Layout theme="available" photographer="Yoshiko Yamashita">
      <PageSEO title={`譲渡可能な子達- ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle type="large">譲渡可能な子達</PageTitle>
      <div className="mt-10">
        <ul>
          {props.available.map((available) => {
            return (
              <li key={available.id} className="mb-8">
                <div className="flex flex-row-reverse justify-between  p-6 nm-inset-gray-50-lg">
                  <Link href={`available/${available.id}`}>
                    <a className="ml-1 lg:ml-10 lg:w-3/12">
                      <picture>
                        <Image
                          src={available.imgSrc?.url}
                          alt={available.title}
                          width={available.imgSrc?.width}
                          height={available.imgSrc?.height}
                        />
                      </picture>
                    </a>
                  </Link>
                  <div className="flex flex-col w-full">
                    <Link href={`available/${available.id}`}>
                      <a className="font-bold">{available.title}</a>
                    </Link>
                    <div className="pt-3">{available.description}</div>
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
      available: data.contents,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default Available;
