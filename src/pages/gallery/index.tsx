import type { NextPage } from "next";
import { CarouselHorizontal } from "src/components/Carousel";
import { GalleryHexagon } from "src/components/GalleryHexagon";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const Gallery: NextPage = () => {
  return (
    <Layout theme="fushigi">
      <PageSEO title={`ギャラリー - ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle type="medium">Gallery - {siteMetadata.title} の世界を彩る美しい子たち</PageTitle>
      <div className="hidden justify-center my-20 md:flex">
        <GalleryHexagon />
      </div>
      <CarouselHorizontal />
      <div className="hidden justify-center mt-20 md:flex">
        <GalleryHexagon />
      </div>
    </Layout>
  );
};

export default Gallery;
