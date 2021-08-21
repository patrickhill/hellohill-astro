import React from "react";

const Rounded = ({ className = "", ...props }) => (
  <div className={`rounded-xl sm:rounded-3xl overflow-hidden ${className}`}>
    {props.children}
  </div>
);

export default Rounded;
