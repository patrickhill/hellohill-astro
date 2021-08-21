import React from "react";

const Button = ({ className = "", ...props }) => {
  baseClassNames =
    "bg-gradient-brand bg-full hover:shadow-2xl hover:bg-expand transition-all duration-150 px-32 py-16 rounded-3xl flex justify-center items-center";

  return props.href ? (
    <a href={props.href} className={`${baseClassNames} ${className}`}>
      {props.children}
    </a>
  ) : (
    <button className={`${baseClassNames} ${className}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
