import type { NextPage } from "next";
import { FormMemberRegistration } from "src/components/FormMemberRegistration";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const Contact: NextPage = () => {
  return (
    <Layout theme="main">
      <PageSEO title={`Contact- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Contact -お気軽にお問い合わせください</PageTitle>
      <div className="divide-y divide-gray-200 ">
        <div className="container py-12">
          <FormMemberRegistration />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
