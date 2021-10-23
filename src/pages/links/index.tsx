import type { NextPage } from "next";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const Contact: NextPage = () => {
  return (
    <Layout theme='main'>
      <PageSEO
        title={`リンク集 - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />

      <PageTitle type='large'>お役立ちサイト</PageTitle>
      <div className='divide-y divide-gray-200 '>
        <div className='container py-12'></div>
      </div>
    </Layout>
  );
};

export default Contact;
