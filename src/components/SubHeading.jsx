import React from "react";

const SubHeading = ({ as, className, ...props }) => {
  const tag = as ? as : `div`;
  const CustomTag = tag;
  return (
    <CustomTag
      className={`
        text-normal
        text-clip
        bg-gradient-brand
        font-black
        uppercase
        tracking-widest
        md:text-lg
        ${className ? className : ""}
      `}
    >
      {props.children}
    </CustomTag>
  );
};

export default SubHeading;
