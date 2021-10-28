import cc from "classcat";
import type { ReactNode, VFC } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  type?: "x-large" | "large" | "medium" | "small";
};

export const PageTitle: VFC<Props> = (props) => {
  const textSize = {
    large: "",
    medium: "",
    small: "",
  };

  return (
    <h1
      className={cc([
        "bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-green-900 font-extrabold leading-loosee tracking-loose pb-5",
        {
          "mt-16 mb-6 text-4xl md:text-5xl tracking-widest": props.type === "x-large",
          "mt-16 mb-6 text-4xl": props.type === "large",
          "mt-16 mb-6 text-3xl": props.type === "medium",
          "text-lg": props.type === "small",
        },
      ])}
    >
      {props.children}
    </h1>
  );
};

