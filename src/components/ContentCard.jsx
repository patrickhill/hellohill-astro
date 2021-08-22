import React from "react";

const ContentCard = ({ className = "", ...props }) => {
  return (
    <div
      className={`
        prose
        bg-white
        rounded-xl
        shadow-2xl
        p-32
        space-y-32
        w-full
        max-w-3xl
        mx-auto
        sm:rounded-3xl sm:px-64 sm:pt-64 sm:pb-72
        ${className}
      `}
    >
      {props.children}
    </div>
  );
};

export default ContentCard;
