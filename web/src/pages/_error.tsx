import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ROUTES } from "../constans/router";

const Error: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(ROUTES.HOME);
  }, []);
  return null;
};

export default Error;
