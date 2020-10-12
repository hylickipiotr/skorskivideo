import { IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { ROUTES } from "../../constans/router";
import { useSocialsQuery } from "../../generated/graphql";
import { MenuItems } from "../../utils/menuItems";
import Logo from "../Logo/Logo";

const Navbar: React.FC<{}> = () => {
  const { data: socialsData } = useSocialsQuery();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed flex w-full bg-black text-white z-50">
      <div className={`md:hidden p-6 w-full ${isMenuOpen ? "h-screen" : ""}`}>
        <div className="grid grid-cols-3 items-center w-full">
          <div className="flex items-center">
            <button
              onClick={() => {
                console.log(isMenuOpen);
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  className={isMenuOpen ? "hidden" : "block"}
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isMenuOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center">
            <NextLink href={ROUTES.HOME}>
              <div className="cursor-pointer">
                <Logo className="fill-current text-white h-8 w-auto" />
              </div>
            </NextLink>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full h-full flex-col justify-center items-center`}
        >
          {MenuItems.map(({ label, href }) => (
            <div key={label} className="py-4 uppercase text-xl">
              <Link
                to={href}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden w-full my-6 mx-12 md:block ">
        <div className="flex container mx-auto justify-between items-center">
          <div className="flex">
            <NextLink href={ROUTES.HOME}>
              <div className="cursor-pointer">
                <Logo className="fill-current text-white h-10 w-auto" />
              </div>
            </NextLink>
            <div className="grid grid-flow-col col-gap-6 xl:col-gap-12 items-center ml-12 xl:ml-16">
              {MenuItems.map(({ label, href, active }) => (
                <div key={label}>
                  <Link
                    to={href}
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={500}
                  >
                    <div className="relative">
                      <p
                        className={`uppercase text-sm tracking-wider cursor-pointer ${
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
            <div className="grid grid-flow-col col-gap-8 xl:col-gap-12">
              {socialsData?.socials?.map((social) => (
                <NextLink href={social?.url as string} key={social?.id}>
                  <FontAwesomeIcon
                    icon={["fab", social?.icon as IconName]}
                    className="cursor-pointer transform easy-in-out text-xl duration-200 hover:scale-110"
                  />
                </NextLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
