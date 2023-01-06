import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";
import { client } from "src/lib/client";

const Home = (props) => {
  return (
    <Layout theme="home">
      <PageSEO
        title={`ご挨拶 - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
        siteUrl={siteMetadata.siteUrl}
      />
      <div className="divide-y divide-gray-200">
        <div className="space-y-2 pt-6 pb-8 md:mt-8 md:space-y-5">
          <PageTitle type="x-large">{props.data.title}</PageTitle>
          <div
            className="animation p-5 text-lg text-green-900 md:py-10 lg:py-16"
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
    endpoint: "top",
  });

  return {
    props: {
      data,
    },
  };
};

export default Home;
