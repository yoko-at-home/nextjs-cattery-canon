import Head from "next/head";
import { useRouter } from "next/router";

import { siteMetadata } from "../../data/siteMetadata";

export const CommonSEO = (props) => {
  const router = useRouter();
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={props.description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={props.ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:title" content={props.title} />
      {props.ogImage.constructor.name === "Array" ? (
        props.ogImage.map(({ url }) => {
          return <meta property="og:image" content={url} key={url} />;
        })
      ) : (
        <meta property="og:image" content={props.ogImage} key={props.ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.twImage} />
    </Head>
  );
};

export const PageSEO = (props) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  return (
    <>
      <CommonSEO
        title={props.title}
        description={props.description}
        ogType="website"
        ogImage={ogImageUrl}
        twImage={twImageUrl}
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};
