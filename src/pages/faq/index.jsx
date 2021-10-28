import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";
import Faq from "react-faq-component";
import { faqData, faqData2 } from "src/data/faqData";

const styles = {
  // bgColor: 'white',
  titleTextColor: "green",
  rowTitleColor: "gray",
  rowContentColor: 'grey',
  arrowColor: "brown",
};

const config = {
  animate: true,
  arrowIcon: "V",
  tabFocus: true
};

const FAQ = () => {
  return (
    <Layout theme="home">
      <PageSEO title={`FAQ - ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle type="large">よくある質問にお答えします。</PageTitle>
      <div className="container">
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
