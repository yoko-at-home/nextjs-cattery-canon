import type { NextPage } from "next";
import NextImage from "next/image";
import type { ReactNode } from "react";

type Props = {
  className: string;
  children?: ReactNode;
};

export const CustomImage: NextPage<Props> = (props: any) => {
  return <NextImage {...props.rest} />;
};
