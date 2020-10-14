import React from "react";
import NextLink from "next/link";
import { useFooterQuery, useSocialsQuery } from "../../generated/graphql";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC<{}> = ({}) => {
  const { data: socialsData } = useSocialsQuery();
  const { data: footerData } = useFooterQuery();

  return (
    <footer className="sticky grid row-gap-4 w-full justify-center items-center bg-black text-white p-8 pt-6">
      {footerData?.footer?.bannerImageUrl && (
        <div className="flex justify-center">
          <a href={footerData.footer.bannerImageHref as string}>
            <img
              src={footerData.footer.bannerImageUrl}
              alt={footerData.footer.bannerImageAlt || ""}
              title={footerData.footer.bannerImageAlt || ""}
            />
          </a>
        </div>
      )}
      {socialsData?.socials && (
        <div className="flex justify-center">
          <div className="grid grid-flow-col col-gap-8">
            {socialsData.socials.map((social) => (
              <a key={social?.id} href={social?.url as string}>
                <FontAwesomeIcon
                  key={social?.id}
                  icon={["fab", social?.icon as IconName]}
                  className="cursor-pointer transform easy-in-out text-xl duration-200 hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <p className="text-xs font-secondary">
          Copyright Skórski Video. All Right Reserved {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
