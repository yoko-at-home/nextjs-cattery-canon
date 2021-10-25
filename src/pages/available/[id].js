/* eslint-disable import/no-default-export */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// pages/news/[id].js
import Link from "next/link";
import Image from "next/image";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import { Date } from "src/lib/date";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

export default function BlogId(props) {
  const publishedAt = props.available.publishedAt;
  const revisedAt = props.available.revisedAt;
  const imgUrl = props.available.imgSrc.url;
  const imgUrlwidth = props.available.imgSrc.width * 2;
  const imgUrlheight = props.available.imgSrc.height * 2;

  return (
    <Layout>
      <PageSEO
        title={`譲渡可能な子達- ${siteMetadata.author} | ${props.available.title}`}
        description={siteMetadata.description}
      />
      <div className='mx-auto flex justify-center rounded-lg nm-flat-gray-300-xl'>
        <Image
          alt={"Canon's mainecoons"}
          src={imgUrl}
          width={imgUrlwidth}
          height={imgUrlheight}
          className='rounded nm-flat-gray-50-xs'
        />
      </div>
      <main>
        <h1 className='font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl mt-6 lg:text-center py-12'>
          {props.available.title}
        </h1>
        <div className='flex flex-col text-right mt-3 mb-10'>
          {publishedAt === revisedAt ? (
            <div>
              Published:{" "}
              <Date
                className='text-sm text-blueGray-500 mb-3'
                dateString={props.available.publishedAt}
              />
            </div>
          ) : (
            <>
              <div>
                Published at:{" "}
                <Date
                  className='text-sm text-blueGray-500 mb-3'
                  dateString={props.available.publishedAt}
                />
              </div>
            </>
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${props.available.body}`,
          }}
        />
        <div className='mt-5 text-gray-300 sm:px-4 bg-gradient-to-r from-gray-400 to-gray-500 opacity-80 p-3 rounded inline-block right-10 md:right-20 lg:right-40'>
          <Link href={`/available`}>
            <a className=''>Available Top</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "available" });

  const paths = data.contents.map((content) => {
    return `/available/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "available", contentId: id });

  return {
    props: {
      available: data,
    },
  };
};
