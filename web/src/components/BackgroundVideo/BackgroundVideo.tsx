import React from "react";
import { VideoSource } from "../../interfaces";

interface IBackgroundVideo {
  sources: VideoSource[];
  image?: {
    url: string;
    alt?: string | null;
    title?: string | null;
  };
  options?: {
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
  };
}

const BackgroundVideo: React.FC<IBackgroundVideo> = ({
  sources,
  options,
  image,
}) => {
  return (
    <div className="w-full h-screen relative z-n1">
      <video
        className={`${
          image ? "hidden md:block" : ""
        } w-full h-full object-cover`}
        {...options}
      >
        {sources.map(({ src, type }) => (
          <source key={src} src={src} type={type} />
        ))}
      </video>
      {image && (
        <img
          src={image.url}
          alt={image.alt || ""}
          title={image.title || ""}
          className="md:hidden w-full h-full object-cover"
        ></img>
      )}
    </div>
  );
};

export default BackgroundVideo;
