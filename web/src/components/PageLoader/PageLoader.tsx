import React from "react";
import Logo from "../Logo/Logo";

const PageLoader: React.FC<{}> = ({}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black">
      <Logo className="fill-current text-white h-1/12 w-auto" />
    </div>
  );
};

export default PageLoader;
