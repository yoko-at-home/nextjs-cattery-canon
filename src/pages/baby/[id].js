/* eslint-disable tailwindcss/no-custom-classname */
import ErrorPage from "next/error";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { LayoutBlog } from "src/layout";

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
      <div className="mx-auto flex justify-center rounded-lg nm-flat-gray-300-xl">
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
          <div className="mt-20 bg-yellow-50 text-center text-yellow-600 shadow-lg">
            <Link href="/api/clear-preview">---プレビューモードです。タップして解除---</Link>
          </div>
        )}
        <PageTitle
          type="large"
          className="mt-6 py-12 text-lg font-bold sm:text-xl md:text-3xl lg:text-center lg:text-4xl"
        >
          <span className="mr-10 text-5xl">{props.content.sire ? "♀" : "♀"}</span>
          {props.content.name}
          <span className="ml-10 text-5xl">{props.content.sire ? "♀" : "♀"}</span>
        </PageTitle>
        <div className="mb-10 mt-3 flex flex-col text-gray-600">
          <div>誕生日: {dayjs(props.content.birthday).format("YYYY年MM月DD日")}</div>
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
        <div className="sm:mt24 mt-16 whitespace-nowrap text-xl font-bold text-[#8ac405] sm:whitespace-normal sm:text-xl">
          {props.content.status ? `ページをご覧いただきありがとうございます。` : null}
          <br />
          {props.content.status ? `${props.content.name} に` : null}
          <br />
          {props.content.status ? `素敵な家族が見つかりました✨` : null}
        </div>
        <div className="right-10 mt-5 inline-block rounded bg-gradient-to-r from-gray-400 to-gray-500 p-3 text-gray-300 opacity-80 sm:px-4 md:right-20 lg:right-40">
          <Link href={`/baby`} className="">
            baby Top
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
