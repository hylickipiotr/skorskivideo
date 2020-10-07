import React from "react";
import { AppProps } from "next/app";
import "../styles/tailwind.css";
import { initFontAwesome } from "../utils/initFontAwesome";

initFontAwesome();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
