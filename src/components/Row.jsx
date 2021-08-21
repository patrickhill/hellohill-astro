import React from "react";

const Row = ({ className = "", ...props }) => (
  <div className={`grid grid-cols-12 gap-x-16 sm:gap-x-32 ${className}`}>
    {props.children}
  </div>
);

export default Row;
