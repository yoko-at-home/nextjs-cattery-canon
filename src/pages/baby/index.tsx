import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import { babyProps } from "src/type/types";

const description = "クリスマスイブのイブにかわいい赤ちゃんが誕生しました";

const Baby: NextPage<babyProps> = (props) => {
  return (
    <div className="relative bg-[#50c4cc] text-gray-600">
      <Layout theme="baby" photographer="Canon">
        <PageSEO title={`赤ちゃん - ${siteMetadata.author}`} description={description} />

        <PageTitle type="medium">
          <span className="text-white">{description}</span>
        </PageTitle>
        <div className="flex flex-col items-center">
          <div className="orb hidden sm:block" />
          <div className="flex flex-col justify-evenly sm:flex-row items-center">
            <div className="orb" />
            <div className="orb2 flex m-6 justify-items-end h-96 w-80 rounded-full overflow-hidden">
              <div className="orb2">
                <video
                  autoPlay
                  muted
                  loop
                  src="https://user-images.githubusercontent.com/61738591/149651398-7686c95c-45c7-4acd-b7c3-e319950dd95d.MOV"
                />
              </div>
            </div>
            <div className="orb" />
          </div>
          <div className="orb orb hidden sm:block" />
        </div>

        <div className="mt-10">
          <PageTitle type="medium">♀ 女の子</PageTitle>
          <ul>
            {props.content.map((item) => {
              return (
                <li key={item.id} className="mb-8">
                  {item.sex === true ? (
                    <div className="flex flex-col sm:flex-row-reverse justify-between p-6 nm-inset-gray-50-lg">
                      <Link href={`baby/${item.id}`}>
                        <a className="ml-1 lg:ml-10">
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
                      <div className="flex flex-col w-full justify-between">
                        <Link href={`baby/${item.id}`}>
                          <a className="font-bold text-2xl sm:text-3xl text-[#8ac405] whitespace-nowrap sm:whitespace-normal">
                            {item.name}
                          </a>
                        </Link>
                        <div className="pt-3">{item.description}</div>
                        <div className="font-bold text-xl sm:text-xl text-[#8ac405] whitespace-nowrap sm:whitespace-normal">
                          {item.status ? "素敵な家族が見つかりました✨" : null}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-10">
          <PageTitle type="medium">♂ 男の子</PageTitle>

          <ul>
            {props.content.map((item) => {
              return (
                <li key={item.id} className="mb-8">
                  {item.sex === false ? (
                    <div className="flex flex-col sm:flex-row-reverse justify-between p-6 nm-inset-gray-50-lg">
                      <Link href={`baby/${item.id}`}>
                        <a className="ml-1 lg:ml-10">
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
                      <div className="flex flex-col w-full justify-between">
                        <Link href={`baby/${item.id}`}>
                          <a className="font-bold text-2xl sm:text-3xl text-[#8ac405] whitespace-nowrap sm:whitespace-normal">
                            {item.name}
                          </a>
                        </Link>
                        <div className="pt-3">{item.description}</div>
                        <div className="font-bold text-xl sm:text-xl text-[#8ac405] whitespace-nowrap sm:whitespace-normal">
                          {item.status ? "素敵な家族が見つかりました✨" : null}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
        <style jsx>
          {`
            .orb {
              animation: spin 4s linear infinite;
              width: 100px;
              height: 100px;
              border-radius: 50%;
              box-shadow: inset 0 0 50px #fff, inset 20px 0 60px violet, inset -20px 0 60px #0ff,
                inset 20px 0 250px violet, inset -20px 0 250px #0ff, 0 0 50px #fff, -10px 0 60px violet,
                10px 0 60px #0ff;
            }
            @keyframes spin {
              100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
              }
            }
            .orb2 {
              box-shadow: inset 0 0 150px #fff, inset 20px 0 160px violet, inset -20px 0 160px #0ff,
                inset 20px 0 250px violet, inset -20px 0 250px #0ff, 0 0 50px #fff, -10px 0 160px violet,
                10px 0 60px #0ff;
            }
            }
          `}
        </style>
      </Layout>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Baby;

export const getStaticProps: GetStaticProps<babyProps, never, { id: string; draftKey: string }> = async ({
  preview,
  previewData,
}): Promise<{
  props: babyProps;
}> => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY || "" },
  };

  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "baby/", key);
  const data = await res.data;

  // プレビュー時は draft のコンテンツを追加
  if (preview) {
    const draftUrl = process.env.NEXT_PUBLIC_API_URL + "baby/" + previewData?.id + `?draftKey=${previewData?.draftKey}`;
    const draftRes = await axios.get(draftUrl, key);
    data.unshift(await draftRes.data);
  }

  return {
    props: {
      content: data.contents,
    },
  };
};
