import React from "react";
import { AppProps } from "next/app";

import "../styles/tailwind.css";
import { withApollo } from "../utils/withApollo";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withApollo({ ssr: true })(App);
