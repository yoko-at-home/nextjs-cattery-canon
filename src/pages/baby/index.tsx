import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const Baby = () => {
  return (
    <div className="bg-[#50c4cc] relative">
      <Layout theme="home">
        <PageSEO title={`赤ちゃん - ${siteMetadata.author}`} description={siteMetadata.description} />

        <PageTitle type="large">
          <span className="text-white">
            かわいい赤ちゃんが誕生しました ...こちらでお知らせできるまでしばらくお待ちください
          </span>
        </PageTitle>
        <div className="orb"></div>
        <style jsx>
          {`
            .orb {
              animation: spin 4s linear infinite;
              width: 250px;
              height: 250px;
              margin: auto;
              margin-top: 100px;
              border-radius: 50%;
              box-shadow: inset 0 0 50px #fff, inset 20px 0 60px violet, inset -20px 0 60px #0ff,
                inset 20px 0 250px violet, inset -20px 0 250px #0ff, 0 0 50px #fff, -10px 0 60px violet,
                10px 0 60px #0ff;
            }
            @keyframes spin {
              100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </Layout>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Baby;
