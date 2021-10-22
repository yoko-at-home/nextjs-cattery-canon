import type { NextPage } from "next";
import { PageTitle } from "../../components/PageTitle";
import { PageSEO } from "../../components/SEO";
import { siteMetadata } from "../../data/siteMetadata";
import { Layout } from "../../layout";

const About: NextPage = () => {
  return (
    <Layout theme='baby'>
      <PageSEO
        title={`About- ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <PageTitle>About</PageTitle>
      <div className='divide-y divide-gray-200 '>
        <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
          <p className='text-lg leading-7 text-gray-500 '>紹介ページ</p>
        </div>
        <div className='container py-12'></div>
      </div>
    </Layout>
  );
};

export default About;
