/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const Success: NextPage = () => {
  const router = useRouter();
  return (
    <Layout theme="retired">
      <PageSEO title={`Success- ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle type="large">{router.query.subject}</PageTitle>
      <div className="flex justify-center">
        <iframe src="https://embed.lottiefiles.com/animation/83039"></iframe>
      </div>
      <div className="container p-3 text-lg">
        <div className="mt-10 whitespace-pre-line break-words">{router.query.text}</div>
        {/* <div className="flex justify-center">
          <img alt="Thanks!" src={"/static/gif/74797-thank-you-with-confetti.gif"} className="w-20 md:w-56" />
        </div> */}
      </div>
    </Layout>
  );
};

export default Success;
