import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";

import type { AppProps } from "next/app";
import { GoogleAnalytics } from "src/components/GoogleAnalytics";
import { usePageView } from "src/hooks/usePageView";

const App = (props: AppProps) => {
  usePageView();
  return (
    <>
      <GoogleAnalytics />
      <props.Component {...props.pageProps} />
    </>
  );
};

export default App;
