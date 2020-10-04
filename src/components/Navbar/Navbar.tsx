import React, { ReactNode } from "react";
import { MenuItems } from "../../utils/menuItems";
import NextLink from "next/link";
import { SocialItems } from "../../utils/socialItems";

const Navbar: React.FC<{}> = () => {
  return (
    <header className="fixed flex w-full bg-black text-white p-6 z-50">
      <div className="md:hidden grid grid-cols-3 items-center">
        <button className="col-span-1">
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div>
          {/* TODO: Change to original logo */}
          <NextLink href="/">
            <div className="cursor-pointer">
              <p>Skorski Video</p>
            </div>
          </NextLink>
        </div>
      </div>
      <div className="hidden w-full md:block">
        <div className="flex container mx-auto justify-between items-center">
          <div className="flex">
            <NextLink href="/">
              <div className="cursor-pointer">
                <p>Skorski Video</p>
              </div>
            </NextLink>
            <div className="flex items-center">
              {MenuItems.map(({ label, href, active }) => (
                <div key={label} className="ml-6">
                  {/* TODO: Create scroll navigation base on react-scroll */}
                  <NextLink href={href}>
                    <div className="relative">
                      <p className="uppercase text-sm font-light tracking-wide cursor-pointer">
                        {label}
                      </p>
                      {active && (
                        <div
                          className="absolute w-full bg-yellow-500 h-0.25"
                          style={{ bottom: "-0.125rem" }}
                        ></div>
                      )}
                    </div>
                  </NextLink>
                </div>
              ))}
            </div>
          </div>
          <div className="flex">
            {SocialItems.map(({ href, icon, name }) => (
              <NextLink key={name} href={href}>
                <div className="ml-4">
                  <div className="cursor-pointer">{icon}</div>
                </div>
              </NextLink>
            ))}
          </div>
          {/* TODO: Change to original logo */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;