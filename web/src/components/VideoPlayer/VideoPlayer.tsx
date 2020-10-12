import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { usePlayerContext } from "./PlayerContext";

interface IVideoPlayer {
  url: string;
}

const VideoPlayer: React.FC<IVideoPlayer> = ({ url }) => {
  const { isOpen, setIsOpen } = usePlayerContext();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed top-0 left-0 w-full h-screen flex-col justify-center items-center bg-black bg-opacity-75 z-50 animate-video cursor-pointer`}
      onClick={() => setIsOpen(false)}
    >
      <div className="flex justify-end w-full p-8">
        <FontAwesomeIcon
          icon={["fas", "times"]}
          className="text-3xl text-white cursor-pointer transform easy-in-out duration-200 hover:scale-110"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <ReactPlayer
          style={{ width: "70%" }}
          url={url}
          controls={true}
          playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
