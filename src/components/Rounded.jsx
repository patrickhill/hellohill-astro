import React from "react";
import { roundedClassNames } from "./roundedClassNames";

const Rounded = ({ className = "", ...props }) => <div className={`${roundedClassNames} overflow-hidden ${className}`}>{props.children}</div>;

export default Rounded;
