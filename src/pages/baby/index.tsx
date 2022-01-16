import type { NextPage } from "next";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const description = "クリスマスイブのイブにかわいい赤ちゃんが誕生しました";

const Baby: NextPage = () => {
  return (
    <div className="relative bg-[#50c4cc]">
      <Layout theme="baby" photographer="Canon">
        <PageSEO title={`赤ちゃん - ${siteMetadata.author}`} description={description} />

        <PageTitle type="medium">
          <span className="text-white">{description}</span>
        </PageTitle>
        <div className="flex flex-col items-center">
          <div className="orb" />
          <div className="flex flex-col justify-evenly sm:flex-row items-center">
            <div className="orb" />
            <div className="orb2 flex m-6 justify-items-end h-96 w-80 rounded-full overflow-hidden border-double border-4 border-pink-200">
              <div className="orb2">
                <video autoPlay muted loop src="/static/gif/2022-babies.mov" />
              </div>
            </div>
            <div className="orb" />
          </div>
          <div className="orb" />
        </div>
        <style jsx>
          {`
            .orb {
              animation: spin 4s linear infinite;
              width: 100px;
              height: 100px;
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
            .orb2 {
              box-shadow: inset 0 0 150px #fff, inset 20px 0 160px violet, inset -20px 0 160px #0ff,
                inset 20px 0 250px violet, inset -20px 0 250px #0ff, 0 0 50px #fff, -10px 0 160px violet,
                10px 0 60px #0ff;
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
