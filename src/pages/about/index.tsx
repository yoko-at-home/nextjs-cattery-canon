import { VFC } from "react";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import { About } from "src/type/types";

const description =
  "神話、伝説，伝承が、メインクーンにはあります。面白いものもあればファンタジーの世界へのものもあり、また単に、もっともらしいものもあります";

const About:VFC<About> = (props) => {
  return (
    <Layout theme="about">
      <PageSEO title={`メインクーンについて- ${siteMetadata.author}`} description={description} />

      <div className="divide-y divide-gray-200">
        <div className="pt-6 pb-8 space-y-2 md:mt-8 md:space-y-5">
          <PageTitle type="x-large">{props.data.title}</PageTitle>
          {/* <p className="text-lg leading-7 text-gray-500 mt-52">{siteMetadata.description}</p> */}
          <div
            className="pt-10 text-lg text-green-900 md:pt-20"
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line @typescript-eslint/naming-convention
              __html: `${props.data.body}`,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "about",
  });

  return {
    props: {
      data,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default About;
