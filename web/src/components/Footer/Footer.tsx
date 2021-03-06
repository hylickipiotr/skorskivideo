import React from "react";
import NextLink from "next/link";
import { useFooterQuery, useSocialsQuery } from "../../generated/graphql";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ROUTES } from "../../constans/router";

const Footer: React.FC<{}> = ({}) => {
  const { data: socialsData } = useSocialsQuery();
  const { data: footerData } = useFooterQuery();

  return (
    <footer className="sticky grid gap-y-4 w-full justify-center items-center bg-black text-white p-8 pt-6">
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
          <div className="grid grid-flow-col gap-x-8">
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
          <NextLink href={ROUTES.PRIVACY_POLICY}>Polityka Prywatności</NextLink>
          {" | "}Copyright Skórski Video. All Right Reserved{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
