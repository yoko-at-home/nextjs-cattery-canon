import type { NextPage } from "next";
import { GalleryHexagon } from "src/components/GalleryHexagon";
import { Carousel } from "src/components/Carousel";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const Gallery: NextPage = () => {
  return (
    <Layout theme="retired">
      <PageSEO title={`ギャラリー - ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle type="medium">Gallery - {siteMetadata.title} の世界を彩る美しい子たち</PageTitle>
      <div className="hidden md:flex my-20 justify-center">
        <GalleryHexagon />
      </div>
      <Carousel />
      <div className="hidden md:flex justify-center mt-20">
        <GalleryHexagon />
      </div>
    </Layout>
  );
};

export default Gallery;
