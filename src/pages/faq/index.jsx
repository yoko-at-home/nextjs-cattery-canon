import Link from "next/link";
import Faq from "react-faq-component";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { faqData, faqData2 } from "src/data/faqData";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const styles = {
  // bgColor: 'white',
  titleTextColor: "green",
  rowTitleColor: "gray",
  rowContentColor: "grey",
  arrowColor: "green",
};

const config = {
  animate: true,
  arrowIcon: "V",
  tabFocus: true,
};

const FAQ = () => {
  return (
    <Layout theme="home">
      <PageSEO
        title={`FAQ - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
        siteUrl={siteMetadata.siteUrl}
      />
      <PageTitle type="large">よくある質問にお答えします。</PageTitle>
      <div className="container">
        <div className="text-gray-500">
          お問い合わせはいつでも受け付けております。
          <Link href="/contact" className="text-blue-400 hover:text-green-600">
            お問い合わせフォーム
          </Link>
          をご利用ください。
        </div>
        <div className="py-12">
          <Faq data={faqData} styles={styles} config={config} />
        </div>
        <div className="mt-5 py-12">
          <Faq data={faqData2} styles={styles} config={config} />
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
