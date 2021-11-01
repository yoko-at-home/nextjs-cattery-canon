import type { NextPage } from "next";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const links = [
  {
    title: "Canonのブログ",
    description: "Canonのブログです。Canonの子供たちの様子や最新情報をお知らせしています。",
    url: "http://catterycanoncat.blog.fc2.com",
    backgroundImg: 'url("/static/images/boys/lento.jpg")',
  },
  {
    title: "湘南キャットクラブ",
    description:
      "Canonが所属しております。ショーナンキャットクラブは、アメリカテキサス州に本部を置くTICA(The International Cat Association)公認ブランチです。",
    url: "http://www.shonan-catclub.com",
    backgroundImg: 'url("/static/images/links/SCC.jpg")',
  },
  {
    title: "The Cat Fanciers’ Association",
    description:
      "アメリカオハイオ州に本部を置く、The Cat Fanciers’ AssociationのWebサイトです。Mainecoonのホットな情報が掲載されます。",
    url: "https://cfa.org/maine-coon-cat/",
    backgroundImg: 'url("/static/images/links/TCFA.jpg")',
  },
  {
    title: "The International Cat Association (TICA)",
    description: "純血種の猫とHHP（家庭猫）の世界最大の登録機関です。",
    url: "https://tica.org/ja/",
    backgroundImg: 'url("/static/images/links/TICA.jpg")',
  },
];

const phtographers = [
  {
    name: "Yoshiko Yamashita",
    description: "Coming soon ...",
    url: "https://www.canon-cat.com/links#photographers",
    backgroundImg: 'url("")',
  },
  {
    name: "Yamazaki Testsu",
    description: "Coming soon ...",
    url: "",
    backgroundImg: 'url("https://www.canon-cat.com/links#photographers")',
  },
  {
    name: "Fukuda UFP",
    description: "動物写真専門",
    url: "http://www.u-f-p.jp",
    backgroundImg: 'url("/static/images/links/fukuda-ufp.jpg")',
  },
];

const Links: NextPage = () => {
  return (
    <Layout theme="home">
      <PageSEO title={`リンク集 - ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle type="large">リンク集 - Canon のおすすめサイト</PageTitle>
      <div className="divide-y divide-gray-200 ">
        <div className="container pb-12">
          <div className="p-5 mx-auto max-w-screen-xl text-white dark:bg-gray-800">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {links.map((link) => {
                return (
                  <a
                    href={link.url}
                    target="_blank"
                    rel=" noopener noreferrer"
                    className="py-2 px-3 font-semibold tracking-wider uppercase hover:cursor-pointer"
                    key={link.url}
                  >
                    <div
                      className="flex relative justify-start items-end w-full h-96 text-left dark:bg-gray-500 bg-center bg-cover rounded"
                      style={{
                        backgroundImage: link.backgroundImg,
                      }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 bg-gradient-to-b dark:via-transparent rounded"></div>
                      <div className="flex absolute top-0 right-0 left-0 justify-between items-center mx-5 mt-3">
                        {link.title}
                        <div className="flex flex-col justify-start text-center">
                          <span className="text-3xl font-semibold tracking-wide leading-none"></span>
                          <span className="leading-none uppercase"></span>
                        </div>
                      </div>
                      <h2 className="z-10 p-5">{link.description}</h2>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <PageTitle type="large">Photographers</PageTitle>
      <div className="container pb-12" id="photographers">
        <div className="p-5 mx-auto max-w-screen-xl text-white dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {phtographers.map((phtographer) => {
              return (
                <a
                  href={phtographer.url}
                  target="_blank"
                  rel=" noopener noreferrer"
                  className="py-2 px-3 font-semibold tracking-wider uppercase hover:cursor-pointer"
                  key={phtographer.url}
                >
                  <div
                    className="flex relative justify-start items-end w-full h-52 text-left dark:bg-gray-500 bg-center bg-cover rounded"
                    style={{
                      backgroundImage: phtographer.backgroundImg,
                    }}
                  >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 bg-gradient-to-b dark:via-transparent rounded"></div>
                    <div className="flex absolute top-0 right-0 left-0 justify-between items-center mx-5 mt-3">
                      {phtographer.name}
                      <div className="flex flex-col justify-start text-center">
                        <span className="text-3xl font-semibold tracking-wide leading-none"></span>
                        <span className="leading-none uppercase"></span>
                      </div>
                    </div>
                    <h2 className="z-10 p-5">{phtographer.description}</h2>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Links;
