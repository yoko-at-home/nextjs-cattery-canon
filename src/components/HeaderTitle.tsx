import { useRouter } from "next/router";
import { CustomLink } from "src/components/CustomLink";
import { siteMetadata } from "src/data/siteMetadata";

export const HeaderTitle = () => {
  return (
    <h1 className="absolute -bottom-12 -left-3 p-5 sm:-bottom-5 sm:left-2 md:-bottom-20 animation">
      <CustomLink href="/home" aria-label="Cattery Canon">
        <div className="flex justify-between mb-8">
          <div
            style={{
              border: "double 5px #636363",
              textShadow: "3px 3px 5px#ffffff",
              color: "#71745b",
              // background: "linearGradient(75deg;rgba(2, 9, 66, 1) 4 % rgba(6, 85, 92, 1) 76%)",
            }}
            className="py-2 pr-4 text-6xl font-bold whitespace-nowrap backdrop-blur-lg md:mt-12 md:mb-20"
          >
            {siteMetadata.headerTitle}
          </div>
        </div>
      </CustomLink>
    </h1>
  );
};

export const HeaderTitleMobile = () => {
  const router = useRouter();

  return (
    <div className="relative w-screen min-h-screen">
      {router.pathname === "/about" ? (
        <h1 className="absolute top-[5%] right-[50%] translate-x-[50%] translate-y-[50%]">
          <CustomLink href="/home" aria-label="Cattery Canon">
            <div
              style={{
                border: "double 5px #636363",
                textShadow: "1px 2px 2px#b3dfec",
                color: "#71745b",
                // background: "linearGradient(75deg;rgba(2, 9, 66, 1) 4 % rgba(6, 85, 92, 1) 76%)",
              }}
            >
              <div className="p-3 text-5xl font-black whitespace-nowrap backdrop-blur-lg animation">
                {siteMetadata.headerTitle}
              </div>
            </div>
          </CustomLink>
        </h1>
      ) : (
        <h1 className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[50%]">
          <CustomLink href="/home" aria-label="Cattery Canon">
            <div
              style={{
                border: "double 5px #835314",
                textShadow: "1px 2px 2px#c061b0",
                color: "#d3a365",
                // background: "linearGradient(75deg;rgba(2, 9, 66, 1) 4 % rgba(6, 85, 92, 1) 76%)",
              }}
            >
              <div className="p-3 text-5xl font-black whitespace-nowrap backdrop-blur-lg animation">
                {siteMetadata.headerTitle}
              </div>
            </div>
          </CustomLink>
        </h1>
      )}
    </div>
  );
};
