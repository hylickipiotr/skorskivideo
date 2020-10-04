import { ReactChild, ReactNode } from "react";

export interface MenuItem {
    label: string;
    href: string;
    active?: boolean;
}

export interface SocialItem {
    name: string,
    href: string;
    icon: ReactChild,
}

export interface VideoSource {
    src: string;
    type: string;
}