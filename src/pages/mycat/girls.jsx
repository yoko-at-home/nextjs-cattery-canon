/* eslint-disable tailwindcss/no-custom-classname */

import { useCallback, useState } from "react";
import { useModal } from "react-hooks-use-modal";
import { Card } from "src/components/Card";
import { CardModal } from "src/components/Card";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { mainecoonDataGirl } from "src/data/mainecoonData";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const MyGirls = () => {
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
  });
  const [selectedItem, setSelectedItem] = useState();

  const handleOnClick = useCallback(
    (d) => {
      const result = mainecoonDataGirl.find(({ title }) => {
        return title === d.title;
      });
      setSelectedItem(result);
      open();
    },
    [open]
  );

  return (
    <div className="bg-purple-100">
      <Layout theme="girls" photographer="Yamazaki Tstsu">
        <PageSEO
          title={`Girls - ${siteMetadata.title}`}
          description={siteMetadata.description}
          ogType="website"
          ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
          siteUrl={siteMetadata.siteUrl}
        />{" "}
        <PageTitle type="large">Girls - {siteMetadata.title} の女の子たち</PageTitle>
        <div className="divide-y divide-gray-200 ">
          <div className="container py-12">
            <div className="flex flex-wrap m-4">
              {mainecoonDataGirl.map((d) => {
                return (
                  <button
                    // eslint-disable-next-line react/jsx-handler-names
                    onClick={() => {
                      return handleOnClick(d);
                    }}
                    description={d.description1}
                    description2={d.description2}
                    father={d.father}
                    mother={d.mother}
                    key={d.title}
                    photographer={d.photographer}
                    blogurl={d.blogurl}
                    className="md:w-1/2"
                  >
                    <Card
                      key={d.title}
                      title={d.title}
                      description={d.description1}
                      imgSrc={d.imgSrc}
                      photographer={d.photographer}
                      blogurl={d.blogurl}
                    />
                  </button>
                );
              })}
            </div>

            <Modal>
              <div className="py-10 px-2 text-gray-500 bg-white rounded sm:px-4 md:px-10 nm-concave-gray-100-sm">
                <h1 className="mt-5">Girls - {siteMetadata.title} の女の子たち</h1>
                <p>
                  <CardModal
                    title={selectedItem?.title}
                    description1={selectedItem?.description1}
                    description2={selectedItem?.description2}
                    father={selectedItem?.father}
                    mother={selectedItem?.mother}
                    imgSrc={selectedItem?.imgSrc}
                    photographer={selectedItem?.photographer}
                    blogurl={selectedItem?.blogurl}
                  />
                </p>
                <div className="flex justify-end mt-8">
                  <button
                    // eslint-disable-next-line react/jsx-handler-names
                    onClick={close}
                    className="p-1 mb-3 font-medium text-center text-gray-300 hover:text-gray-100 bg-gradient-to-r from-gray-400 focus:from-purple-600 to-gray-500 focus:to-yellow-600 rounded opacity-80 sm:px-4 lg:py-2 lg:mr-3"
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </Layout>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default MyGirls;
