/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-handler-names */
/* eslint-disable import/no-default-export */
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
      <Layout theme="boys">
        <PageSEO title={`Boys - ${siteMetadata.author}`} description={siteMetadata.description1} />
        <PageTitle type="large">Boys- {siteMetadata.title} の男の子たち</PageTitle>
        <div className="divide-y divide-gray-200 ">
          <div className="container py-12">
            <div className="flex flex-wrap m-4">
              {mainecoonDataBoy.map((d) => {
                return (
                  <button
                    onClick={() => {
                      return handleOnClick(d);
                    }}
                    description={d.description1}
                    description2={d.description2}
                    father={d.father}
                    mother={d.mother}
                    key={d.title}
                    photographer={d.photographer}
                    blogUrl={d.blogUrl}
                    className="md:w-1/2"
                  >
                    <Card
                      key={d.title}
                      title={d.title}
                      description={d.description1}
                      imgSrc={d.imgSrc}
                      photographer={d.photographer}
                      blogUrl={d.blogUrl}
                    />
                  </button>
                );
              })}
            </div>

            <Modal>
              <div className="py-10 px-2 text-gray-500 bg-white rounded sm:px-4 md:px-10 nm-concave-gray-100-sm">
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
                    blogUrl={selectedItem?.blogUrl}
                  />
                </p>
                <div className="flex justify-end mt-8">
                  <button
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

export default MyBoys;
