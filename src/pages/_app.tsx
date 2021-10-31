import '../styles/globals.css'
import { GoogleAnalytics } from "src/components/GoogleAnalytics";
import type { AppProps } from "next/app";

const App = (props: AppProps) => {
  return (
    <>
      <GoogleAnalytics />
      <props.Component {...props.pageProps} />
    </>
  );
};

export default App;
