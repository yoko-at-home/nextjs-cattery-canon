import type { MicroCMSContentId, MicroCMSDate, MicroCMSListResponse } from "microcms-js-sdk";
import type { ParsedUrlQuery } from "querystring";

export type BlogProps = MyCatProps & {
  maincoonData: MicroCMSListResponse<MyCatProps>;
};

export type PropsPath = MyCatProps & MicroCMSContentId & MicroCMSDate & ParsedUrlQuery;

type Common = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  title?: string;
  description?: string;
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
    },
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

export type MyCatProps = Common & {
  name: string;
  name1?: string;
  sex: boolean;
  sire: string;
  dam: string;
  birth: Date;
  kind: string;
};
