import React from "react";
import NextLink from "next/link";
import { useSocialsQuery } from "../../generated/graphql";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC<{}> = ({}) => {
  const { data: socialsData } = useSocialsQuery();

  return (
    <footer className="sticky flex flex-col w-full justify-center items-center bg-black text-white p-8">
      {socialsData?.socials && (
        <div className="grid grid-flow-col col-gap-6">
          {socialsData.socials.map((social) => (
            <NextLink key={social?.id} href={social?.url as string}>
              <FontAwesomeIcon
                key={social?.id}
                icon={["fab", social?.icon as IconName]}
                className="cursor-pointer transform easy-in-out text-xl duration-200 hover:scale-110"
              />
            </NextLink>
          ))}
        </div>
      )}
      <p className="text-xs font-secondary mt-4">
        Copyright Skórski Video. All Right Reserved {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
