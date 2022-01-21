type Common = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  title: string;
  description: string;
  imgSrc: {
    height: number;
    url: string;
    width: number;
  };
  body: HTMLAnchorElement;
};
export type commonProps = {
  content: [Common];
};
export type commonPageProps = {
  content: Common;
};

export type About = {
  data: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    body: HTMLAnchorElement;
  };
};
