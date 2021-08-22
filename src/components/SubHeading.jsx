import React from "react";

const SubHeading = ({ as, className, ...props }) => {
  const tag = as ? as : `div`;
  const CustomTag = tag;
  return (
    <CustomTag
      className={`
        bg-gradient-brand
        text-clip
        uppercase
        text-normal
        md:text-lg
        font-black
        tracking-widest
        ${className}
      `}
    >
      {props.children}
    </CustomTag>
  );
};

export default SubHeading;
