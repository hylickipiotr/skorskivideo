import React from "react";
import PlayIcon from "../Icon/PlayIcon";

export interface IVideoCard {
  thumbnailUrl: string;
  title: string;
  description: string;
  sourceUrl: string;
}

const VideoCard: React.FC<IVideoCard> = ({
  thumbnailUrl,
  title,
  description,
  sourceUrl,
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
      <p className="mt-1 text-sm font-secondary leading-6">{description}</p>
    </div>
  );
};

export default VideoCard;
