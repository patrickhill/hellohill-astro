import React from "react";

const SubHeading = ({ ...props }) => (
  <div className="bg-gradient-brand text-clip uppercase text-xl font-black tracking-widest">
    {props.children}
  </div>
);

export default SubHeading;
