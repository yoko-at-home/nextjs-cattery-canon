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
export type CommonProps = {
  content: [Common];
};
export type BabyProps = {
  content: [
    Common & {
      name: string;
      girl: boolean;
      sire: string;
      dam: string;
      birthday: Date;
      status: boolean;
    }
  ];
};
export type CommonPageProps = {
  content: Common;
};
export type BabyPageProps = {
  content: Common & {
    name: string;
    girl: boolean;
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

export type MyCatProps = {
  name: string;
  name1?: string;
  birth: string;
  kind: string;
  sire: string;
  dam: string;
  imgSrc: string;
  photographer: string;
  blogurl?: string;
};
