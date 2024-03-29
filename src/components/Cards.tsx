import type { MicroCMSListResponse } from "microcms-js-sdk";

import type { CardProps } from "./Card";
import { Card } from "./Card";

// eslint-disable-next-line react/destructuring-assignment
export const Cards = ({ items }: { items: MicroCMSListResponse<CardProps>["contents"] }) => {
  return (
    <ul className=" container m-4 flex flex-wrap py-12">
      {items.map((item) => {
        return <Card {...item} key={item.id} />;
      })}
    </ul>
  );
};
