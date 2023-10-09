/* eslint-disable tailwindcss/no-custom-classname */
import dayjs from "dayjs";
import ErrorPage from "next/error";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { LayoutBlog } from "src/layout";


const MyCatId = (props) => {
  const router = useRouter();

  const handleReturn = () => {
    return router.back();
  };

  if (router.isFallback && !props.content?.id) {
    return <ErrorPage statusCode={404} />;
  }

  const imgUrl = props.content.imgSrc.url;
  const imgUrlwidth = props.content.imgSrc.width * 1.5;
  const imgUrlheight = props.content.imgSrc.height * 1.5;

  return (
    <LayoutBlog>
      <PageSEO
        title={`Babies - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
        siteUrl={siteMetadata.siteUrl}
      />
      <div className="relative mx-auto flex justify-center rounded-lg nm-flat-gray-300-xl">
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
        <div className="flex flex-col items-center">
          <h1 className="mt-6 bg-gradient-to-r from-yellow-600 to-green-900 bg-clip-text text-lg font-extrabold text-transparent md:text-4xl">
            <span className="mr-10 text-lg lg:text-3xl">{props.content.sire ? "♀" : "♀"}</span>
            {props.content.name}
            <span className="ml-10 text-lg lg:text-3xl">{props.content.sire ? "♀" : "♀"}</span>
          </h1>
          {props.content.name1 === undefined ? null : (
            <h2 className="mb-6 bg-gradient-to-r from-yellow-600 to-green-900 bg-clip-text text-lg font-extrabold text-transparent md:text-4xl">
              {props.content.name1}
            </h2>
          )}
        </div>
        <div className="mb-10 mt-3 flex flex-col text-gray-600">
          <div>
            Date of Birth:
            {dayjs(props.content.birthday).format(" YYYY.MM.DD")}
          </div>
          <div>Sire: {props.content.sire}</div>
          <div>Dam: {props.content.dam}</div>
        </div>
        {props.content.body === undefined ? null : (
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line @typescript-eslint/naming-convention
              __html: `${props.content.body}`,
            }}
          />
        )}

        <button
          type="button"
          onClick={handleReturn}
          className="right-10 mt-5 inline-block rounded bg-gradient-to-r from-gray-400 to-gray-500 p-3 text-gray-300 opacity-80 sm:px-4 md:right-20 lg:right-40"
        >
          Return
        </button>
      </main>
    </LayoutBlog>
  );
};

export default MyCatId;

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY || "" },
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}mycat`, key);
  const repos = await res.json();

  const paths = repos.contents.map((repo) => {
    return `/mycat/${repo.id}`;
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
    `${process.env.NEXT_PUBLIC_API_URL}mycat/${id}?${draftKey !== undefined ? `draftKey=${draftKey}` : ""}`,
    key,
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
