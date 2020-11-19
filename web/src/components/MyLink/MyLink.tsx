import { useRouter } from "next/dist/client/router";
import React from "react";
import Link, {
  ReactScrollLinkProps,
} from "react-scroll/modules/components/Link";
import { ROUTES } from "../../constans/router";
import NextLink from "next/link";

const MyLink: React.FC<ReactScrollLinkProps> = (props) => {
  const { children } = props;
  const router = useRouter();

  if (router.pathname === ROUTES.HOME) {
    return (
      <button type="button">
        <Link {...props}>{children}</Link>
      </button>
    );
  }

  return (
    <button type="button">
      <NextLink href={props.to}>{children}</NextLink>
    </button>
  );
};

export default MyLink;
