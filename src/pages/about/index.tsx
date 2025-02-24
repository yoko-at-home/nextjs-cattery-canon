import type { FC } from "react";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import type { About } from "src/type/types";
import parse from "html-react-parser";
const description =
  "神話、伝説，伝承が、メインクーンにはあります。面白いものもあればファンタジーの世界へのものもあり、また単に、もっともらしいものもあります";

const AboutPage: FC<About> = (props) => {
  return (
    <Layout theme="about" photographer="Yoshiko Yamashita">
      <PageSEO
        title={`メインクーンについて - ${siteMetadata.title}`}
        description={description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
        siteUrl={siteMetadata.siteUrl}
      />
      <div className="divide-y divide-gray-200">
        <div className="space-y-2 pt-6 pb-8 md:mt-8 md:space-y-5">
          <PageTitle type="x-large">{props.data.title}</PageTitle>
          <div className="pt-10 text-lg text-green-900 md:pt-20">{parse(props.data.body)}</div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "about" });

  return { props: { data } };
};

export default AboutPage;
