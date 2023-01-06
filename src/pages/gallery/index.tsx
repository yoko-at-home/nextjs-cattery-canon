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
      <PageSEO
        title={`ギャラリー - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
        siteUrl={siteMetadata.siteUrl}
      />{" "}
      <PageTitle type="large">Gallery</PageTitle>
      <PageTitle type="medium">{siteMetadata.title} の世界</PageTitle>
      <CarouselHorizontal />
      <div className="mx-0 mb-16 hidden justify-center sm:flex">
        <GalleryHexagon />
      </div>
    </Layout>
  );
};

export default Gallery;
