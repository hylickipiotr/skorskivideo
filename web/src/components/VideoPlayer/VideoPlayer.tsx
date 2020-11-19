import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useWindowSize } from "../../utils/useWindowSize";
import { usePlayerContext } from "./PlayerContext";

type ElementSize = {
  width: number;
  height: number;
};
interface IVideoPlayer {
  url: string;
}

const RATIO = 1280 / 720;
const REM = parseFloat(
  window.getComputedStyle(document.documentElement).fontSize
);
const PADDING_VIDEO = 4 * REM;

const VideoPlayer: React.FC<IVideoPlayer> = ({ url }) => {
  const windowSize = useWindowSize();
  const { isOpen, setIsOpen } = usePlayerContext();
  const playerContainer = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<ElementSize>({
    width: 0,
    height: 0,
  });

  const tempPlayerSize: ElementSize = {
    width: containerSize.width,
    height: containerSize.width / RATIO,
  };
  const playerSize =
    tempPlayerSize.height > containerSize.height
      ? {
          width: containerSize.height * RATIO,
          height: containerSize.height,
        }
      : tempPlayerSize;

  useEffect(() => {
    const { current } = playerContainer;
    if (!current) return;
    setContainerSize({
      width: current.clientWidth - PADDING_VIDEO * 2,
      height: current.clientHeight - PADDING_VIDEO * 2,
    });
  }, [windowSize, playerContainer, isOpen]);

  if (!isOpen) {
    return null;
  }
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed top-0 left-0 w-full h-screen flex-col bg-black bg-opacity-90 z-50 animate-video cursor-pointer`}
      onClick={() => setIsOpen(false)}
    >
      <div className="flex justify-end w-full p-6">
        <FontAwesomeIcon
          icon={["fas", "times"]}
          className="text-3xl text-white cursor-pointer transform easy-in-out duration-200 hover:scale-110"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div
        className="flex w-full h-full items-center justify-center"
        ref={playerContainer}
      >
        <ReactPlayer
          className="react-player"
          url={url}
          controls={true}
          playing={true}
          width={playerSize.width}
          height={playerSize.height}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
