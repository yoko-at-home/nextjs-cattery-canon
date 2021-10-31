import '../styles/globals.css'
import { GoogleAnalytics } from "src/components/GoogleAnalytics";
import type { AppProps } from "next/app";
import usePageView from 'src/hooks/usePageView';

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
