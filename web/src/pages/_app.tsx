import { AppProps } from "next/app";
import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastProvider } from "react-toast-notifications";
import PageLoader from "../components/PageLoader/PageLoader";
import "../styles/tailwind.css";
import { initFontAwesome } from "../utils/initFontAwesome";
import { useRouterLoading } from "../utils/useRouterLoading";
import { Router } from "next/router";
import { pageview } from "../utils/gtag";

Router.events.on("routeChangeComplete", (url) => pageview(url));

initFontAwesome();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { loading } = useRouterLoading();

  if (loading) {
    return <PageLoader />;
  }

  return (
    <ToastProvider placement="bottom-left" autoDismiss>
      <Component {...pageProps} />
    </ToastProvider>
  );
};

export default App;
