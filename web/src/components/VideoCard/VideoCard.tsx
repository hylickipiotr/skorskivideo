import React from "react";
import { Maybe, Tag as TTag } from "../../generated/graphql";
import PlayIcon from "../Icon/PlayIcon";
import Tag from "../Tag/Tag";

export interface IVideoCard {
  thumbnailUrl: string;
  title: string;
  description: string;
  sourceUrl: string;
  tags?:
    | Maybe<
        {
          __typename?: "Tag" | undefined;
        } & Pick<TTag, "id" | "name">
      >[]
    | null
    | undefined;
  showTags?: boolean;
}

const VideoCard: React.FC<IVideoCard> = ({
  thumbnailUrl,
  title,
  description,
  sourceUrl,
  tags,
  showTags,
}) => {
  return (
    <div>
      <div className="relative">
        <div className="absolute flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-25 hover:bg-opacity-0 transition-all ease-in-out duration-200 group">
          <PlayIcon className="w-12 h-12 fill-current text-white" />
        </div>
        <img
          className="w-full md:h-40 lg:h-56 object-cover"
          src={thumbnailUrl}
          alt={title}
          title={title}
        />
      </div>
      <p className="mt-4 text-xl font-semibold">{title}</p>
      <p className="mt-1 text-sm font-secondary leading-6 text-gray-700">
        {description}
      </p>
      {tags && showTags && (
        <div className="mt-4 flex flex-wrap gap-4">
          {tags.map((tag) => (
            <Tag key={tag?.id} name={tag?.name as string} variant="small">
              {tag?.name}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoCard;
