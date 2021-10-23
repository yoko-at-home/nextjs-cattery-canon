import type { NextPage } from "next";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const links = [
  {
    title: "Canonのブログ",
    description:
      "Canonのブログです。Canonの子供たちの様子や最新情報をお知らせしています。",
    url: "http://catterycanoncat.blog.fc2.com",
    backgroundImg: 'url("https://source.unsplash.com/random/240x320?cats")',
  },
  {
    title: "湘南キャットクラブ",
    description:
      "Canonが所属しております。ショーナンキャットクラブは、アメリカテキサス州に本部を置くTICA(The International Cat Association)公認ブランチです。",
    url: "http://www.shonan-catclub.com",
    backgroundImg:
      'url("https://source.unsplash.com/random/241x320?mainecoon")',
  },
  {
    title: "The Cat Fanciers’ Association",
    description:
      "アメリカオハイオ州に本部を置く、The Cat Fanciers’ AssociationのWebサイトです。Maincoonのホットな情報が掲載されます。",
    url: "https://cfa.org/maine-coon-cat/",
    backgroundImg: 'url("https://source.unsplash.com/random/242x320?tiger")',
  },
  {
    title: "The International Cat Association (TICA)",
    description:
      "血統書付き猫と家庭猫の世界最大の登録機関。Canonは正規会員です。",
    url: "https://tica.org/ja/",
    backgroundImg: 'url("https://source.unsplash.com/random/243x320?nature")',
  },
];

const Contact: NextPage = () => {
  return (
    <Layout theme='home'>
      <PageSEO
        title={`リンク集 - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />

      <PageTitle type='large'>リンク集 - Canonのおすすめサイト</PageTitle>
      <div className='divide-y divide-gray-200 '>
        <div className='container pb-12'>
          <div className='text-white max-w-screen-xl p-5 mx-auto dark:bg-coolGray-800'>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2'>
              {links.map((link) => {
                return (
                  <a
                    href={link.url}
                    target='_blank'
                    rel=' noopener'
                    className='px-3 py-2 font-semibold tracking-wider uppercase bgundefined hover:cursor-pointer'
                  >
                    <div
                      className='rounded relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-coolGray-500'
                      style={{
                        backgroundImage: link.backgroundImg,
                      }}
                    >
                      <div className='rounded bg-black bg-opacity-30 absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-coolGray-900'></div>
                      <div className='absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3'>
                        {link.title}
                        <div className='flex flex-col justify-start text-center'>
                          <span className='text-3xl font-semibold leading-none tracking-wide'></span>
                          <span className='leading-none uppercase'></span>
                        </div>
                      </div>
                      <h2 className='z-10 p-5'>{link.description}</h2>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
