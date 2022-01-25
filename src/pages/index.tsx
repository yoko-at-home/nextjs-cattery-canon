import { PageSEO } from "src/components/SEO";
import { TopPage } from "src/components/TopPage";

import { siteMetadata } from "../data/siteMetadata";

const Home = () => {
  return (
    <>
      <PageSEO
        title={`ようこそ、メインクーンの世界へ！ - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
        siteUrl={siteMetadata.siteUrl}
      />
      <TopPage />
    </>
  );
};

export default Home;
