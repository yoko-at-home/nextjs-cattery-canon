/* eslint-disable tailwindcss/no-custom-classname */

import { useCallback, useState } from "react";
import { useModal } from "react-hooks-use-modal";
import { Card } from "src/components/Card";
import { CardModal } from "src/components/Card";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { mainecoonDataBoy } from "src/data/mainecoonData";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const MyBoys = () => {
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
  });
  const [selectedItem, setSelectedItem] = useState();

  const handleOnClick = useCallback(
    (d) => {
      const result = mainecoonDataBoy.find(({ title }) => {
        return title === d.title;
      });
      setSelectedItem(result);
      open();
    },
    [open]
  );

  return (
    <div style={{ backgroundColor: "#e4f8d7" }}>
      <Layout theme="boys" photographer="Yoshiko Yamashita">
        <PageSEO
          title={`Boys - ${siteMetadata.title}`}
          description={siteMetadata.description}
          ogType="website"
          ogImage={siteMetadata.siteUrl + siteMetadata.ogImage}
          siteUrl={siteMetadata.siteUrl}
        />{" "}
        <PageTitle type="large">Boys- {siteMetadata.title} の男の子たち</PageTitle>
        <div className="divide-y divide-gray-200 ">
          <div className="container py-12">
            <div className="m-4 flex flex-wrap">
              {mainecoonDataBoy.map((d) => {
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
              <div className="rounded bg-white py-10 px-2 text-gray-500 nm-concave-gray-100-sm sm:px-4 md:px-10">
                <h1 className="mt-5">Boys - {siteMetadata.title} の男の子たち</h1>
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
                <div className="mt-8 flex justify-end">
                  <button
                    // eslint-disable-next-line react/jsx-handler-names
                    onClick={close}
                    className="mb-3 rounded bg-gradient-to-r from-gray-400 to-gray-500 p-1 text-center font-medium text-gray-300 opacity-80 hover:text-gray-100 focus:from-purple-600 focus:to-yellow-600 sm:px-4 lg:mr-3 lg:py-2"
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
export default MyBoys;
