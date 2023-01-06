/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { LayoutBlog } from "src/layout";
import { client } from "src/lib/client";
import { Date } from "src/lib/date";
import type { CommonPageProps } from "src/type/types";

const retiredId: FC<CommonPageProps> = (props) => {
  const publishedAt = props.content.publishedAt;
  const revisedAt = props.content.revisedAt;
  const imgUrl = props.content.imgSrc.url;
  const imgUrlwidth = props.content.imgSrc.width * 0.8;
  const imgUrlheight = props.content.imgSrc.height * 0.8;

  return (
    <LayoutBlog>
      <PageSEO
        title={`引退した子達 - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
        siteUrl={siteMetadata.siteUrl}
      />
      <div className="flex justify-center mx-auto rounded-lg nm-inset-gray-200-sm">
        <Image
          alt={"Canon's mainecoons"}
          src={imgUrl}
          width={imgUrlwidth}
          height={imgUrlheight}
          className="mx-5 rounded-full nm-flat-gray-50-xs"
        />
      </div>
      <main>
        <PageTitle
          type="large"
          className="py-12 mt-6 text-lg font-bold sm:text-xl md:text-3xl lg:text-4xl lg:text-center"
        >
          {props.content.title}
        </PageTitle>
        <div className="flex flex-col mt-3 mb-10 text-right">
          {publishedAt === revisedAt ? (
            <div>
              Published: <Date dateString={props.content.publishedAt} />
            </div>
          ) : (
            <>
              <div>
                Published at: <Date dateString={props.content.publishedAt} />
              </div>
            </>
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${props.content.body}`,
          }}
        />
        <div className="inline-block right-10 p-3 mt-5 text-gray-300 bg-gradient-to-r from-gray-400 to-gray-500 rounded opacity-80 sm:px-4 md:right-20 lg:right-40">
          <Link href={`/retired`}>
            <a className="">Retired Top</a>
          </Link>
        </div>
      </main>
    </LayoutBlog>
  );
};
export default retiredId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "retired" });

  const paths = data.contents.map((content: any) => {
    return `/retired/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "retired", contentId: id });

  return {
    props: {
      content: data,
    },
  };
};
