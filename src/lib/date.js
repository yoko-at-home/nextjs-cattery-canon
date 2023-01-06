import { format, parseISO } from "date-fns";

// eslint-disable-next-line react/destructuring-assignment
export const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyyy 年 M 月 d 日")}</time>;
  // return <time dateTime={dateString}>{format(date, "yyy LLL ii")}</time>;
};
