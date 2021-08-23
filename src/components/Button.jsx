import React from "react";
import { roundedClassNames } from "./roundedClassNames";

const Button = ({ big, className = "", ...props }) => {
  let bigClassNames = big ? "py-32 text-lg" : "py-8 sm:py-16 text-base";

  let baseClassNames = `
    ${bigClassNames}
    ${roundedClassNames}
    bg-gradient-brand
    bg-full
    hover:shadow-2xl
    hover:bg-expand
    transition-all
    duration-150
    px-16 sm:px-32
    flex
    justify-center
    items-center
    font-extralight 
  `;

  return props.href ? (
    <a href={props.href} className={`${baseClassNames} ${className}`} {...props}>
      {props.children}
    </a>
  ) : (
    <button className={`${baseClassNames} ${className}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
