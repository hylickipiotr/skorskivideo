import React from "react";
import Loader from "react-loader-spinner";

const MyLoader: React.FC<{}> = ({}) => (
  <div className="flex justify-center w-full mt-8">
    <Loader type="Triangle" color="black" height={50} width={50} />
  </div>
);

export default MyLoader;
