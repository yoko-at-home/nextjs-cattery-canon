import { CustomLink } from "src/components/CustomLink";
import { siteMetadata } from "src/data/siteMetadata";

export const HeaderTitle = () => {
  return (
    <h1 className="absolute -bottom-12 -left-3 p-5 sm:-bottom-5 sm:left-2 md:-bottom-20 animation">
      <CustomLink href="/home" aria-label="Cattery Canon">
        <div className="flex justify-between items-center mb-8">
          {typeof siteMetadata.headerTitle === "string" ? (
            <div
              style={{
                border: "double 5px #636363",
                textShadow: "3px 3px 5px#ffffff",
                color: "#71745b",
                // background: "linearGradient(75deg;rgba(2, 9, 66, 1) 4 % rgba(6, 85, 92, 1) 76%)",
              }}
              className="py-1 pr-3 my-6 text-2xl font-semibold whitespace-nowrap bg-clip-text bg-opacity-40 backdrop-filter backdrop-blur-lg sm:py-2 sm:pr-4 sm:text-5xl md:mt-12 md:mb-20"
            >
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </CustomLink>
    </h1>
  );
};
