import Markdown from "markdown-to-jsx";
import React from "react";

interface IRichText {
  children: string | null | undefined;
}

const RichText: React.FC<IRichText> = ({ children }) => {
  return (
    <div className="rich-text">
      <Markdown>{children || ""}</Markdown>
    </div>
  );
};

export default RichText;
