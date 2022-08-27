import cc from "classcat";
import type { FC, ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  type?: "x-large" | "large" | "medium" | "small";
};

export const PageTitle: FC<Props> = (props) => {
  // const textSize = {
  //   large: "",
  //   medium: "",
  //   small: "",
  // };

  return (
    <h1
      className={cc([
        "bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-green-900 font-extrabold leading-loosee tracking-loose py-10",
        {
          "text-5xl tracking-widest": props.type === "x-large",
          "text-4xl": props.type === "large",
          "text-3xl": props.type === "medium",
          "text-lg": props.type === "small",
        },
      ])}
    >
      {props.children}
    </h1>
  );
};
