import React from "react";
import Button from "../components/Button";

const Header = () => (
  <>
    <div className="container flex items-center justify-between p-32 pb-80 md:pb-128">
      <a href="/" className="p-8 -ml-8 transition duration-500 ease-in-out rounded-full hover:bg-gray-600 hover:rotate-180">
        <img className="inline-block" src="/assets/images/logo.svg" alt="Hello Hill Logo" />
      </a>

      <Button href="#footer">Contact</Button>
    </div>
  </>
);

export default Header;
