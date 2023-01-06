/* eslint-disable tailwindcss/no-custom-classname */
import ErrorPage from "next/error";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { LayoutBlog } from "src/layout";
import { Date } from "src/lib/date";

const BabyId = (props) => {
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
        title={`Babies - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
        siteUrl={siteMetadata.siteUrl}
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
          <div className="mt-20 text-center text-yellow-600 bg-yellow-50 shadow-lg">
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
        <div className="mt-16 text-xl font-bold text-[#8ac405] whitespace-nowrap sm:text-xl sm:whitespace-normal sm:mt24">
          {props.content.status ? `ページをご覧いただきありがとうございます。` : null}
          <br />
          {props.content.status ? `${props.content.name} に` : null}
          <br />
          {props.content.status ? `素敵な家族が見つかりました✨` : null}
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

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY || "" },
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}baby`, key);
  const repos = await res.json();

  const paths = repos.contents.map((repo) => {
    return `/baby/${repo.id}`;
  });
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params, preview = false, previewData }) => {
  const id = params?.id;
  const draftKey = previewData?.draftKey;
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}baby/${id}?${draftKey !== undefined ? `draftKey=${draftKey}` : ""}`,
    key
  );
  const data = await res.json();

  return {
    props: {
      content: data,
      preview,
    },
    revalidate: 1,
  };
};
