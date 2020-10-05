import React from "react";
import FacebookIcon from "../components/Icon/FacebookIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import YoutubeIcon from "../components/Icon/YoutubeIcon";
import { SocialItem } from "../interfaces";

export const SocialItems: SocialItem[] = [
  {
    name: "facebook",
    href:
      "https://www.facebook.com/pages/category/Video-Creator/Skórskivideo-114340516652461/",
    icon: <FacebookIcon className="w-5 h-5 fill-current" />,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/skorskivideo/",
    icon: <InstagramIcon className="w-5 h-5 fill-current" />,
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/skorszczaki",
    icon: <YoutubeIcon className="w-5 h-5 fill-current" />,
  },
];
