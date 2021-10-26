import { PageTitle } from "../../components/PageTitle";
import { PageSEO } from "../../components/SEO";
import { siteMetadata } from "../../data/siteMetadata";
import { Layout } from "../../layout";
import { client } from "../../lib/client";

const About = (props) => {
  return (
    <Layout theme='retired'>
      <PageSEO
        title={`メインクーンについて- ${siteMetadata.author}`}
        description={siteMetadata.description}
      />

      <div className='divide-y divide-gray-200'>
        <div className='pt-6 md:mt-8 pb-8 space-y-2 md:space-y-5'>
          <PageTitle type='x-large'>{props.data.title}</PageTitle>
          {/* <p className="text-lg leading-7 text-gray-500 mt-52">{siteMetadata.description}</p> */}
          <div
            className='text-lg text-green-900 pt-25'
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
