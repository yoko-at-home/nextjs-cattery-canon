/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import Image404 from "public/static/animation/404-error.gif";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const Custom404: NextPage = () => {
  return (
    <Layout theme="about" photographer="Yoshiko Yamashita">
      <PageSEO
        title={`メインクーンについて - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
        siteUrl={siteMetadata.siteUrl}
      />
      <PageTitle>ページが見つかりません</PageTitle>
      <div className="container p-3 text-lg">
        <div className="flex justify-center">
          <Image alt="お探しのページが見つかりません" src={Image404} />
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
