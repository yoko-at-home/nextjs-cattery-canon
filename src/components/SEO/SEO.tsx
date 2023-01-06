import Head from "next/head";
import { useRouter } from "next/router";
import type { FC } from "react";

import { siteMetadata } from "../../data/siteMetadata";

type Props = {
  title: string;
  description: string;
  ogType: string;
  ogImage: string;
  siteUrl: string;
};

// eslint-disable-next-line react/destructuring-assignment
const CommonSEO: FC<Props> = ({ description, ogImage, ogType, title }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/static/favicons/favicon.ico" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} key={ogImage} />
    </Head>
  );
};

// eslint-disable-next-line react/destructuring-assignment
export const PageSEO: FC<Props> = ({ description, title }) => {
  const ogSiteLogo = siteMetadata.siteUrl + siteMetadata.ogImage;

  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        siteUrl={siteMetadata.siteUrl}
        ogImage={ogSiteLogo}
      />
      <link rel="icon" href="/static/favicons/favicon.ico" />
    </>
  );
};
