import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

interface LayoutProps {
  children?: ReactNode;
  lang?: string;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, lang }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta lang={lang} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  </>
);

export default Layout;
