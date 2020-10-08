import React, { HTMLAttributes } from "react";
import { IOnClickTagCard } from "../TagCard/TagCard";

export type TagVariant = "small";

interface ITag {
  name: string;
  variant?: TagVariant;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
}

const Tag: React.FC<ITag> = (props) => {
  const { name, variant, className, onClick, clickable } = props;

  const tagProps: ITag = {
    ...props,
    className: `border-2 border-black px-3 py-1 ${
      variant === "small" ? "text-sm" : ""
    } ${className ? className : ""}`,
  };

  if (clickable) {
    tagProps.onClick = onClick;
  }

  return React.createElement(clickable ? "button" : "div", tagProps, name);
};

export default Tag;
