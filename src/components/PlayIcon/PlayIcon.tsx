import React from "react";

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
};

export default PlayIcon;
