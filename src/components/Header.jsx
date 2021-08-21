import React from "react";
import Button from "../components/Button";

const Header = () => (
  <>
    <div className=" flex justify-between items-center p-32 pb-128">
      <a href="/">
        <img
          className="inline-block"
          src="/assets/images/logo.svg"
          alt="Hello Hill Logo"
        />
      </a>

      <Button href="#footer">Hire Me</Button>
    </div>
  </>
);

export default Header;
