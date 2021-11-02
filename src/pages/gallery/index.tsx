import type { NextPage } from "next";
import { CarouselHorizontal } from "src/components/Carousel";
import { GalleryHexagon } from "src/components/GalleryHexagon";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { Tile } from "src/components/Tile";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const Gallery: NextPage = () => {
  return (
    <Layout theme="fushigi">
      <PageSEO title={`ギャラリー - ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle type="medium">Gallery - {siteMetadata.title} の世界を彩る美しい子たち</PageTitle>
      <div className="hidden justify-center mx-0 mb-16 sm:flex">
        <GalleryHexagon />
      </div>
      <CarouselHorizontal />
      <PageTitle type="large">Memory </PageTitle>
      <Tile />
    </Layout>
  );
};

export default Gallery;
