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
export type babyProps = {
  content: [
    Common & {
      name: string;
      sex: boolean;
      sire: string;
      dam: string;
      birthday: Date;
      status: boolean;
    }
  ];
};
export type commonPageProps = {
  content: Common;
};
export type babyPageProps = {
  content: Common & {
    name: string;
    sex: boolean;
    sire: string;
    dam: string;
    birthday: Date;
    status: boolean;
  };
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
