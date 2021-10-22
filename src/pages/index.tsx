import { PageSEO } from "src/components/SEO";
import { TopPage } from "../components/TopPage";
import { siteMetadata } from "../data/siteMetadata";

const Home = () => {
  return (
    <>
      <PageSEO
        title={`Top - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <TopPage />
    </>
  );
};

export default Home;
