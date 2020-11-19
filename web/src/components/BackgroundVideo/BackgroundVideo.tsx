import React from "react";
import { VideoSource } from "../../interfaces";

interface IBackgroundVideo {
  source?: VideoSource | null | undefined;
  image?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  options?: {
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
  };
}

const BackgroundVideo: React.FC<IBackgroundVideo> = ({
  source,
  options,
  image,
}) => {
  return (
    <div className="w-full h-screen relative z-n1">
      {source && (
        <video
          className={`${
            image ? "hidden md:block" : ""
          } w-full h-full object-cover`}
          {...options}
        >
          <source src={source?.src} type={source?.type} />
        </video>
      )}
      {image && (
        <img
          {...image}
          className={`${source ? "md:hidden" : ""} w-full h-full object-cover`}
        ></img>
      )}
    </div>
  );
};

export default BackgroundVideo;
