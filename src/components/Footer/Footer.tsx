import React from "react";
import { SocialItems } from "../../utils/socialItems";
import NextLink from "next/link";

const Footer: React.FC<{}> = ({}) => {
  return (
    <footer className="sticky flex flex-col w-full justify-center items-center bg-black text-white p-8">
      <div className="grid grid-flow-col col-gap-6">
        {SocialItems.map(({ href, icon, name }) => (
          <NextLink key={name} href={href}>
            <div className="cursor-pointer transform easy-in-out duration-200 hover:scale-110">
              {icon}
            </div>
          </NextLink>
        ))}
      </div>
      <p className="text-sm mt-3">
        Copyright Skórski Video. All Right Reserved {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
