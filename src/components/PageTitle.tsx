import cc from "classcat";
import type { ReactNode, VFC } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  type?: "large" | "medium" | "small";
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
        "bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-green-900 font-extrabold leading-loosee tracking-loose",
        {
          "my-16 text-4xl": props.type === "large",
          "my-16 text-3xl": props.type === "medium",
          "text-lg": props.type === "small",
        },
      ])}
    >
      {props.children}
    </h1>
  );
};
// export const PageTitleLarge = (props) => {
//   return (
//     <h1 className='mt-10 mb-14 text-4xl font-extrabold leading-loosee tracking-loose bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-green-900   sm:text-3xl  md:text-4xl md:mb-16'>
//       {props.children}
//     </h1>
//   );
// };
