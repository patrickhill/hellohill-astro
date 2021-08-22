import React from "react";

const BigHeading = ({ as, className = "", ...props }) => {
  const tag = as ? as : `div`;
  const CustomTag = tag;

  return (
    <CustomTag
      className={`
        text-3xl
        sm:text-4xl
        lg:text-5xl
        xl:text-6xl
        font-thin
        leading-tight
        bg-gradient-brand
        text-clip
        ${className}
      `}
    >
      {props.children}
    </CustomTag>
  );
};

export default BigHeading;
