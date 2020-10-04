import React from "react";
import { SocialItems } from "../../utils/socialItems";
import NextLink from "next/link";

const Footer: React.FC<{}> = ({}) => {
  return (
    <footer className="sticky flex flex-col w-full justify-center items-center bg-black text-white p-6">
      <div className="flex">
        {SocialItems.map(({ href, icon, name }) => (
          <NextLink key={name} href={href}>
            <div className="ml-4">
              <div className="cursor-pointer">{icon}</div>
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
