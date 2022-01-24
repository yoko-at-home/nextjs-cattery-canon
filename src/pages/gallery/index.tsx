import type { NextPage } from "next";
import { CarouselHorizontal } from "src/components/Carousel";
import { GalleryHexagon } from "src/components/GalleryHexagon";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const Gallery: NextPage = () => {
  return (
    <Layout theme="gallery" photographer="Yoshiko Yamashita">
      <PageSEO title={`ギャラリー - ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle type="large">Gallery</PageTitle>
      <PageTitle type="medium">{siteMetadata.title} の世界</PageTitle>
      <CarouselHorizontal />
      <div className="hidden justify-center mx-0 mb-16 sm:flex">
        <GalleryHexagon />
      </div>
    </Layout>
  );
};

export default Gallery;
