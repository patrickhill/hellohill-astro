import React from "react";

const BigHeading = ({ className = "", ...props }) => (
  <div
    className={`text-6xl font-thin leading-tight bg-gradient-brand text-clip ${className}`}
  >
    {props.children}
  </div>
);

export default BigHeading;
