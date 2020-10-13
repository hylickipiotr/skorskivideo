import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Maybe, Tag as TTag } from "../../generated/graphql";
import Tag from "../Tag/Tag";
import { PlayerConsumer, PlayerProvider } from "../VideoPlayer/PlayerContext";
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
        {({ setIsOpen }) => (
          <div>
            <div
              className="relative cursor-pointer"
              onClick={() => handleVideoClick(setIsOpen)}
            >
              <div className="group absolute flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-0 hover:bg-opacity-50 transition-all ease-in-out duration-200">
                <div className="flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200 ">
                  <FontAwesomeIcon
                    className="text-2xl text-white"
                    icon={["fas", "play"]}
                  />
                </div>
              </div>
              <div className="relative w-full pb-7/12 z-n1">
                <img
                  className="absolute w-full h-full object-cover"
                  src={thumbnail.url}
                  alt={thumbnail.alt || title}
                  title={thumbnail.title || title}
                />
              </div>
            </div>
            <p
              className="mt-4 text-xl font-semibold cursor-pointer"
              onClick={() => handleVideoClick(setIsOpen)}
            >
              {title}
            </p>
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
