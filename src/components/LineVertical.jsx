import React from "react";

const LineVertical = ({ className = "", ...props }) => {
  return (
    <div
      className={`hidden sm:block bg-gradient-brand w-4 rounded-full ${className}`}
    />
  );
};

export default LineVertical;
