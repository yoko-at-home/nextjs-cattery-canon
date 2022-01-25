/* eslint-disable tailwindcss/no-custom-classname */
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";
import type { BabyProps } from "src/type/types";

const description = "クリスマスイブにかわいい赤ちゃんが誕生しました";
const description2 = "✨✨✨";

const Star = () => {
  return (
    <div className="pt-5 text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-green-200 leading-loosee tracking-loose">
      {description2}
    </div>
  );
};

// const Baby: NextPage<BabyProps> = () => {
const Baby: NextPage<BabyProps> = (props) => {
  const girls = props.content.filter((props) => {
    return props.girl === true;
  });

  const boys = props.content.filter((props) => {
    return props.girl === false;
  });

  return (
    <div className="relative text-gray-600 bg-[#50c4cc]">
      <Layout theme="baby" photographer="Canon">
        <PageSEO title={`赤ちゃん - ${siteMetadata.author}`} description={description} />

        <PageTitle type="medium">
          <span className="text-white">{description}</span>
        </PageTitle>

        <div className="mt-10">
          <PageTitle type="medium">♀ 女の子</PageTitle>
          <ul>
            {girls.map((girl) => {
              return (
                <li key={girl.id} className="mb-8 orb-girl">
                  <div className="flex flex-col justify-between p-6 sm:flex-row-reverse nm-inset-gray-50-lg">
                    <Link href={`/baby/${girl.id}`}>
                      <a className="ml-1 lg:ml-10">
                        <picture>
                          <Image
                            src={girl.imgSrc?.url}
                            alt={girl.title}
                            width={girl.imgSrc?.width}
                            height={girl.imgSrc?.height}
                          />
                        </picture>
                      </a>
                    </Link>
                    <div className="flex flex-col justify-between w-full">
                      <Link href={`/baby/${girl.id}`}>
                        <a className="text-2xl font-bold text-[#8ac405] sm:text-3xl sm:whitespace-normal">
                          {girl.name}
                        </a>
                      </Link>
                      <div className="pt-3">{girl.description}</div>
                      <div className="text-xl font-bold text-[#8ac405] sm:text-xl sm:whitespace-normal">
                        {girl.status ? "素敵な家族が見つかりました✨" : null}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <Star />

        <div className="mt-10">
          <PageTitle type="medium">♂ 男の子</PageTitle>
          <ul>
            {boys.map((boy) => {
              return (
                <li key={boy.id} className="mb-8">
                  <div className="flex flex-col justify-between p-6 sm:flex-row-reverse nm-inset-gray-50-lg">
                    <Link href={`/baby/${boy.id}`}>
                      <a className="ml-1 lg:ml-10">
                        <picture>
                          <Image
                            src={boy.imgSrc?.url}
                            alt={boy.title}
                            width={boy.imgSrc?.width}
                            height={boy.imgSrc?.height}
                          />
                        </picture>
                      </a>
                    </Link>
                    <div className="flex flex-col justify-between w-full">
                      <Link href={`/baby/${boy.id}`}>
                        <a className="text-2xl font-bold text-[#8ac405] sm:text-3xl">{boy.name}</a>
                      </Link>
                      <div className="pt-3">{boy.description}</div>
                      <div className="text-xl font-bold text-[#8ac405] sm:text-xl">
                        {boy.status ? "素敵な家族が見つかりました✨" : null}
                      </div>
                    </div>
                  </div>
                  <Star/>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col items-center mt-20">
          <div className="hidden sm:block orb" />
          <div className="flex flex-col justify-evenly items-center sm:flex-row">
            <div className="orb" />
            <div className="flex overflow-hidden justify-items-end m-6 w-80 h-96 rounded-full orb2">
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
          <div className="hidden sm:block orb" />
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
            .orb-girl {
              box-shadow: inset 0 0 150px #fff, inset 20px 0 80px pink, inset -10px 0 80px #0ff,
                inset 20px 0 250px pink, inset -20px 0 250px #0ff, 0 0 50px #fff, -10px 0 80px pink,
                10px 0 60px #0ff;
            }
            }
          `}
        </style>
      </Layout>
    </div>
  );
};

export default Baby;

export const getStaticProps: GetStaticProps<BabyProps, never, { id: string; draftKey: string }> = async ({
  preview,
  previewData,
}): Promise<{
  props: BabyProps;
}> => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY || "" },
  };

  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "baby/?limit=9999", key);
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
