import React from "react";

const BigHeading = ({ ...props }) => (
  <div className="text-6xl font-thin leading-none bg-gradient-brand text-clip">
    {props.children}
  </div>
);

export default BigHeading;
