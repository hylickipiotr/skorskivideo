import React from "react";
import { VideoSource } from "../../interfaces";

interface IBackgroundVideo {
  sources: VideoSource[];
  imgSrc?: string;
  options?: {
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
  };
}

const BackgroundVideo: React.FC<IBackgroundVideo> = ({
  sources,
  options,
  imgSrc,
}) => {
  return (
    <div className="w-full h-screen relative z-n1">
      <video
        className={`${
          imgSrc ? "hidden md:block" : ""
        } w-full h-full object-cover`}
        {...options}
      >
        {sources.map(({ src, type }) => (
          <source key={src} src={src} type={type} />
        ))}
      </video>
      {imgSrc && (
        <img
          src={imgSrc}
          className="md:hidden w-full h-full object-cover"
        ></img>
      )}
    </div>
  );
};

export default BackgroundVideo;
