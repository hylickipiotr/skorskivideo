import React, { ReactNode } from "react";

interface IHeader {
  children: ReactNode;
}

const Header: React.FC<IHeader> = ({ children }) => {
  return (
    <div className="inline-flex flex-col relative">
      <p className="text-4xl uppercase tracking-wider">{children}</p>
      <div className="h-0.75 w-3/4 bg-yellow-500"></div>
    </div>
  );
};

export default Header;
