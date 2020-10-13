import React from "react";
import { AppProps } from "next/app";
import "../styles/tailwind.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { initFontAwesome } from "../utils/initFontAwesome";
import { ToastProvider } from "react-toast-notifications";
import { useRouterLoading } from "../utils/useRouterLoading";
import PageLoader from "../components/PageLoader/PageLoader";

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
