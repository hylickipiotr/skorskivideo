import { MenuItem } from "../interfaces";

export enum SECTION {
  ABOUT_US = "aboutus",
  VIDEO = "video",
  PHOTO = "photo",
  FAQ = "faq",
  CONTACT = "contact",
}

export const MENU_ITEMS: MenuItem[] = [
  {
    label: "O nas",
    href: SECTION.ABOUT_US,
  },
  {
    label: "Wideo",
    href: SECTION.VIDEO,
  },
  {
    label: "Fotografia",
    href: SECTION.PHOTO,
  },
  {
    label: "FAQ",
    href: SECTION.FAQ,
  },
  {
    label: "Kontakt",
    href: SECTION.CONTACT,
  },
];
