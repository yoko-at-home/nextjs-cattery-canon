import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { VFC } from "react";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { LayoutBlog } from "src/layout";
import { client } from "src/lib/client";
import { Date } from "src/lib/date";
import { babyPageProps } from "src/type/types";
import ErrorPage from "next/error";

type Props = babyPageProps & {
  preview: boolean;
};

const BabyId: VFC<Props> = (props) => {
  const router = useRouter();

  if (router.isFallback && !props.content?.id) {
    return <ErrorPage statusCode={404} />;
  }
  const imgUrl = props.content.imgSrc.url;
  const imgUrlwidth = props.content.imgSrc.width * 2;
  const imgUrlheight = props.content.imgSrc.height * 2;

  return (
    <LayoutBlog>
      <PageSEO
        title={`Babies - ${siteMetadata.author} | ${props.content.title}`}
        description={siteMetadata.description}
      />
      <div className="flex justify-center mx-auto rounded-lg nm-flat-gray-300-xl">
        <Image
          alt={"Canon's mainecoons"}
          src={imgUrl}
          width={imgUrlwidth}
          height={imgUrlheight}
          className="nm-flat-gray-50-xs"
        />
      </div>
      <main>
        {props.preview && (
          <div className="text-center mt-20 text-yellow-600 shadow-lg bg-yellow-50">
            <Link href="/api/clear-preview">---プレビューモードです。タップして解除---</Link>
          </div>
        )}
        <PageTitle
          type="large"
          className="py-12 mt-6 text-lg font-bold sm:text-xl md:text-3xl lg:text-4xl lg:text-center"
        >
          <span className="mr-10 text-5xl">{props.content.sire ? "♀" : "♀"}</span>
          {props.content.name}
          <span className="ml-10 text-5xl">{props.content.sire ? "♀" : "♀"}</span>
        </PageTitle>
        <div className="flex flex-col mt-3 mb-10 text-gray-600">
          <div>
            誕生日: <Date dateString={props.content.birthday} />
          </div>
          <div>Sire: {props.content.sire}</div>
          <div>Dam: {props.content.dam}</div>
        </div>
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${props.content.body}`,
          }}
        />
        <div className="mt-16 sm:mt24 font-bold text-xl sm:text-xl text-[#8ac405] whitespace-nowrap sm:whitespace-normal">
          {props.content.status
            ? `ページをご覧いただきありがとうございます。${props.content.name} に素敵な家族が見つかりました✨`
            : null}
        </div>
        <div className="inline-block right-10 p-3 mt-5 text-gray-300 bg-gradient-to-r from-gray-400 to-gray-500 rounded opacity-80 sm:px-4 md:right-20 lg:right-40">
          <Link href={`/baby`}>
            <a className="">baby Top</a>
          </Link>
        </div>
      </main>
    </LayoutBlog>
  );
};

export default BabyId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "baby" });

  const paths = data.contents.map((content: any) => {
    return `/baby/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "baby", contentId: id });

  return {
    props: {
      content: data,
    },
  };
};
