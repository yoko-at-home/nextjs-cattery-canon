import { PageSEO } from "src/components/SEO";
import { TopPage } from "src/components/TopPage";

import { siteMetadata } from "../data/siteMetadata";

const Home = () => {
  return (
    <>
      <PageSEO
        title={`ようこそ、メインクーンの世界へ！ - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <TopPage />
    </>
  );
};

export default Home;
