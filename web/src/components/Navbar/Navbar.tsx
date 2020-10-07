import { IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";
import React from "react";
import { Link } from "react-scroll";
import { useSocialsQuery } from "../../generated/graphql";
import { MenuItems } from "../../utils/menuItems";

const Navbar: React.FC<{}> = () => {
  const { data: socialsData } = useSocialsQuery();

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
                  <Link
                    to={href}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <div className="relative">
                      <p
                        className={`uppercase text-sm font-light tracking-wide cursor-pointer ${
                          !active
                            ? "transform ease-in-out duration-200 hover:-translate-y-0.5"
                            : ""
                        }`}
                      >
                        {label}
                      </p>
                      {active && (
                        <div
                          className="absolute w-full bg-yellow-500 h-0.25"
                          style={{ bottom: "-0.125rem" }}
                        ></div>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {socialsData?.socials && (
            <div className="grid grid-flow-col col-gap-8">
              {socialsData?.socials?.map((social) => (
                <FontAwesomeIcon
                  key={social?.id}
                  icon={["fab", social?.icon as IconName]}
                  className="cursor-pointer transform easy-in-out text-xl duration-200 hover:scale-110"
                />
              ))}
            </div>
          )}
          {/* TODO: Change to original logo */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
