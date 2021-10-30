import '../styles/globals.css'
import { GoogleAnalytics } from "src/components/GoogleAnalytics";

import type { AppProps } from "next/app";

<GoogleAnalytics />;

const App = (props: AppProps) => {
  return <props.Component {...props.pageProps} />;
};

export default App;
