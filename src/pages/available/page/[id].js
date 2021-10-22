/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-default-export */
import Image from "next/image";
import Link from "next/link";
// import { Pagination } from "src/components/Pagination";
import { Layout } from "src/layout";

const PER_PAGE = 3;

// pages/news/[id].js
export default function NewsPageId(props) {
  return (
    <Layout theme='newsArticles'>
      <ul className='mt-10'>
        {props.available.map((available) => {
          return (
            <li key={available.id} className='mb-8'>
              <div className='flex flex-row-reverse justify-between'>
                <Link href={`/available/${available.id}`}>
                  <a className='ml-1 lg:ml-10 lg:w-3/12'>
                    {!available.imgSrc ? null : (
                      <picture>
                        <Image
                          src={available.imgSrc.url}
                          alt={available.title}
                          width='150%'
                          height='100%'
                        />
                      </picture>
                    )}
                  </a>
                </Link>
                <div className='flex flex-col w-full'>
                  <Link href={`/available/${available.id}`}>
                    <a className='font-bold'>{available.title}</a>
                  </Link>
                  <div className='pt-3'>{available.description}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <Pagination totalCount={totalCount} /> */}
    </Layout>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/available`, key);

  const repos = await res.json();

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => {
    return `/available/page/${repo}`;
  });

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const key = {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/available?offset=${
      (id - 1) * 5
    }&limit=5`,
    key
  )
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return null;
    });

  return {
    props: {
      available: data.contents,
      totalCount: data.totalCount,
    },
  };
};
