import React, { EventHandler } from "react";
import Tag, { TagVariant } from "../Tag/Tag";

export interface IOnClickTagCard {
  tag: string;
  isActive?: boolean;
}

interface ITagCard {
  tag: string;
  label?: string;
  onClick: ({ tag, isActive }: IOnClickTagCard) => void;
  variant?: TagVariant;
  isActive?: boolean;
}

const TagCard: React.FC<ITagCard> = ({
  tag,
  onClick,
  label,
  isActive,
  variant,
}) => {
  return (
    <Tag
      name={label || tag}
      className={`${isActive ? "bg-yellow-500" : "cursor-pointer"}`}
      onClick={() => onClick({ tag, isActive })}
      variant={variant}
    />
  );
};

export default TagCard;
