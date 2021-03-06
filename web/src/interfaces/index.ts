import { ReactChild } from "react";

export interface MenuItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface SocialItem {
  name: string;
  href: string;
  icon: ReactChild;
}

export interface VideoSource {
  src: string;
  type: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface ImageFormat {
  url: string;
  width: number;
}
