/* eslint-disable tailwindcss/no-custom-classname */
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
    backgroundImg: 'url("/static/images/boys/lento.webp")',
  },
  {
    title: "湘南キャットクラブ",
    description:
      "Canonが所属しております。ショーナンキャットクラブは、アメリカテキサス州に本部を置くTICA(The International Cat Association)公認ブランチです。",
    url: "http://www.shonan-catclub.com",
    backgroundImg: 'url("/static/images/links/SCC.webp")',
  },
  {
    title: "The International Cat Association (TICA)",
    description: "純血種の猫とHHP（家庭猫）の世界最大の登録機関です。",
    url: "https://tica.org/ja/",
    backgroundImg: 'url("/static/images/links/TICA.webp")',
  },
  {
    title: "The Cat Fanciers’ Association",
    description:
      "アメリカオハイオ州に本部を置く、The Cat Fanciers’ AssociationのWebサイトです。Mainecoonのホットな情報が掲載されます。",
    url: "https://cfa.org/maine-coon-cat/",
    backgroundImg: 'url("/static/images/links/TCFA.webp")',
  },
];

const phtographers = [
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
    backgroundImg: 'url("/static/images/links/fukuda-ufp.webp")',
  },
  {
    name: "Yoshiko Yamashita",
    description: "Coming soon ...",
    url: "https://www.canon-cat.com/links#photographers",
    backgroundImg: 'url("")',
  },
];

const Links: NextPage = () => {
  return (
    <Layout theme="home">
      <PageSEO
        title={`リンク集 - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
        siteUrl={siteMetadata.siteUrl}
      />
      <PageTitle type="large">リンク集 - Canon のおすすめサイト</PageTitle>
      <div className="divide-y divide-gray-200 ">
        <div className="container pb-12">
          <div className="mx-auto max-w-screen-xl p-5 text-white">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {links.map((link) => {
                return (
                  <a
                    href={link.url}
                    target="_blank"
                    rel=" noopener noreferrer"
                    className="py-2 px-3 font-semibold uppercase tracking-wider hover:cursor-pointer"
                    key={link.url}
                  >
                    <div
                      className="relative flex h-96 w-full items-end justify-start rounded bg-cover bg-center text-left"
                      style={{
                        backgroundImage: link.backgroundImg,
                      }}
                    >
                      <div className="absolute inset-0 rounded bg-black/40 bg-gradient-to-b" />
                      <div className="absolute inset-y-4 inset-x-0 mx-5 mt-3 flex flex-col items-center justify-between text-lg">
                        {link.title}
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
        <div className="mx-auto max-w-screen-xl p-5 text-white">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {phtographers.map((phtographer) => {
              return (
                <a
                  href={phtographer.url}
                  target="_blank"
                  rel=" noopener noreferrer"
                  className="py-2 px-3 font-semibold uppercase tracking-wider hover:cursor-pointer"
                  key={phtographer.url}
                >
                  <div
                    className="relative flex h-52 w-full items-end justify-start rounded bg-cover bg-center text-left"
                    style={{
                      backgroundImage: phtographer.backgroundImg,
                    }}
                  >
                    <div className="absolute inset-0 rounded bg-black/40 bg-gradient-to-b" />
                    <div className="absolute inset-x-0 my-2 mx-5 flex items-center justify-between bg-black/20 p-3">
                      {phtographer.name}
                      <br />
                      {phtographer.description}
                    </div>
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
