import { AppProps } from "next/app";
import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastProvider } from "react-toast-notifications";
import PageLoader from "../components/PageLoader/PageLoader";
import "../styles/tailwind.css";
import "../styles/main.css";
import { initFontAwesome } from "../utils/initFontAwesome";
import { useRouterLoading } from "../utils/useRouterLoading";

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
