/* eslint-disable tailwindcss/no-custom-classname */
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import type { MyCatPageProps } from "src/type/types";

const MyGirls: FC<MyCatPageProps> = (props) => {
  const girls = props.content.filter((props) => {
    return props.sex === true;
  });
  const reversedGirls = [...girls].reverse();

  return (
    <div className="bg-purple-100">
      <Layout theme="girls" photographer="Yamazaki Tstsu">
        <PageSEO
          title={`Girls - ${siteMetadata.title}`}
          description={siteMetadata.description}
          ogType="website"
          ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
          siteUrl={siteMetadata.siteUrl}
        />
        <PageTitle type="large">Girls - {siteMetadata.title} の女の子たち</PageTitle>
        <div className="divide-y divide-gray-200">
          <div className="container py-12">
            <ul className="m-4 flex flex-wrap">
              {reversedGirls.map((item) => {
                return (
                  <li key={item.id} className="p-3">
                    <div className="flex rounded border-2 border-gray-50 nm-concave-gray-300-lg">
                      <div className="rounded p-1 nm-concave-gray-100-lg" style={{ maxWidth: "350px" }}>
                        <div className="flex flex-col rounded border-2 border-gray-50 nm-concave-gray-300-lg">
                          <Link href={`/mycat/${item.id}`}>
                            <Image
                              src={item.imgSrc?.url}
                              alt={item.name || "image of canon's maincoon cat"}
                              className="object-cover object-center md:h-60 lg:h-80"
                              width={item.imgSrc.width * 1.5}
                              height={item.imgSrc.height * 1.5}
                            />
                          </Link>
                          <div className="flex w-full flex-col text-gray-600">
                            <Link href={`/mycat/${item.id}`}>
                              <div className="nm-flat-white-100 bg-white p-4 text-gray-500">
                                <h2 className="z-50 mb-3 text-2xl font-bold leading-8 tracking-tight">{item.name}</h2>
                                <h2 className="z-50 mb-3 text-2xl font-bold leading-8 tracking-tight">{item.name1}</h2>
                                <p className="mb-3">Date of Birth:{dayjs(item.birth).format("YYYY.MM.DD")}</p>
                                <p className="mb-3 h-3">{item.kind}</p>
                              </div>
                            </Link>
                            {/* <div className="pl-3 pt-3">{item.description}</div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "mycat" });

  return {
    props: {
      content: data.contents,
      queries: { limit: 999 },
    },
  };
};

export default MyGirls;
