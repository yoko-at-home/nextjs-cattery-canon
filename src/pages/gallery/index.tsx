import type { NextPage } from "next";
import { Carousel } from "src/components/Carousel";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const Gallery: NextPage = () => {
  return (
    <Layout theme='matured'>
      <PageSEO
        title={`ギャラリー - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <PageTitle type="medium">Gallery - Cattery Canonの世界を彩る美しい子たち</PageTitle>
      <Carousel />
    </Layout>
  );
};

export default Gallery;
