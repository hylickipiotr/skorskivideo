import React, { ReactNode } from "react";
import { MenuItems } from "../../utils/menuItems";
import NextLink from "next/link";

const Header: React.FC<{}> = () => {
  return (
    <header className="sticky flex w-full bg-black text-white p-6">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
      <div className="hidden w-full md:flex justify-between items-center">
        {/* TODO: Change to original logo */}
        <NextLink href="/">
          <div className="cursor-pointer">
            <p>Skorski Video</p>
          </div>
        </NextLink>
        <div className="flex">
          {MenuItems.map(({ label, href, active }) => (
            <div className="ml-6">
              {/* TODO: Create scroll navigation base on react-scroll */}
              <NextLink href={href}>
                <div className="relative">
                  <p className="uppercase text-base font-light tracking-wide cursor-pointer">
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
    </header>
  );
};

export default Header;
