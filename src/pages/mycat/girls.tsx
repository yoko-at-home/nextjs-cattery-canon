/* eslint-disable tailwindcss/no-custom-classname */

import { useCallback, useState } from "react";
import { useModal } from "react-hooks-use-modal";
import { Card } from "src/components/Card";
import { CardModal } from "src/components/CardModal";
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
      const result = mainecoonDataGirl.find(({ name }) => {
        return name === d.name;
      });
      setSelectedItem(result);
      open();
    },
    [open],
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
            <div className="m-4 flex flex-wrap">
              {mainecoonDataGirl.map((d) => {
                return (
                  <button
                    // eslint-disable-next-line react/jsx-handler-names
                    onClick={() => {
                      return handleOnClick(d);
                    }}
                    birth={d.birth}
                    kind={d.kind}
                    sire={d.sire}
                    dam={d.dam}
                    key={d.name}
                    photographer={d.photographer}
                    blogurl={d.blogurl}
                    className="md:w-1/2"
                  >
                    <Card
                      key={d.name}
                      name={d.name}
                      birth={d.birth}
                      image={d.image?.url}
                      photographer={d.photographer}
                      blogurl={d.blogurl}
                    />
                  </button>
                );
              })}
            </div>

            <Modal>
              <div className="rounded bg-white px-2 py-10 text-gray-500 nm-concave-gray-100-sm sm:px-4 md:px-10">
                <h1 className="mt-5">Girls - {siteMetadata.title} の女の子たち</h1>
                <p>
                  <CardModal
                    name={selectedItem?.name}
                    birth={selectedItem?.birth}
                    kind={selectedItem?.kind}
                    sire={selectedItem?.sire}
                    dam={selectedItem?.dam}
                    imgSrc={selectedItem?.imgSrc.url}
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
export default MyGirls;
