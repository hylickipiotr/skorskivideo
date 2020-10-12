import React, { createRef, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Maybe, Tag as TTag } from "../../generated/graphql";
import PlayIcon from "../Icon/PlayIcon";
import Tag from "../Tag/Tag";
import screenfull from "screenfull";
import { findDOMNode } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PlayerConsumer,
  PlayerProvider,
  usePlayerContext,
} from "../VideoPlayer/PlayerContext";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export interface IVideoCard {
  thumbnail: {
    url: string;
    alt?: string | null;
    title?: string | null;
  };
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
  thumbnail,
  title,
  description,
  sourceUrl,
  tags,
  showTags,
}) => {
  const handleVideoClick = (
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsOpen(true);
  };

  return (
    <PlayerProvider value={{ isOpen: false }}>
      <PlayerConsumer>
        {({ isOpen, setIsOpen }) => (
          <div>
            <div
              className="relative cursor-pointer"
              onClick={() => handleVideoClick(setIsOpen)}
            >
              <div className="absolute flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-25 hover:bg-opacity-0 transition-all ease-in-out duration-200 group">
                <PlayIcon className="w-12 h-12 fill-current text-white" />
              </div>
              <div className="relative w-full pb-7/12">
                <img
                  className="absolute w-full h-full object-cover"
                  src={thumbnail.url}
                  alt={thumbnail.alt || title}
                  title={thumbnail.title || title}
                />
              </div>
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
            <VideoPlayer url={sourceUrl} />
          </div>
        )}
      </PlayerConsumer>
    </PlayerProvider>
  );
};

export default VideoCard;
