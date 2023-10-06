import type { MicroCMSContentId, MicroCMSDate, MicroCMSListResponse } from "microcms-js-sdk";
import type { ParsedUrlQuery } from "querystring";

export type Blog = {
  id?: string;
  name?: string;
  name1?: string;
  kind?: string;
  sire: string;
  dam: string;
  createdAt?: string;
  image?: {
    height?: number;
    url?: string;
    width?: number;
  };
  sex?: string;
  limit?: number;
  offset?: number;
  publishedAt?: Date;
  totalCount?: number;
  blogurl?: string;
};

export type BlogProps = {
  maincoonData: MicroCMSListResponse<Blog>;
};

export type PropsPath = Blog & MicroCMSContentId & MicroCMSDate & ParsedUrlQuery;
