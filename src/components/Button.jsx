import React from "react";
import { roundedClassNames } from "./roundedClassNames";

const Button = ({ className = "", ...props }) => {
  let baseClassNames = `
    ${roundedClassNames}
    bg-gradient-brand
    bg-full
    hover:shadow-2xl
    hover:bg-expand
    transition-all
    duration-150
    px-16 sm:px-32
    py-8 sm:py-16
    flex
    justify-center
    items-center
    font-light text-base
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
