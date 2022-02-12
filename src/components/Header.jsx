import React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";

const Header = () => (
  <>
    <div className="container flex items-center justify-between p-32 pb-80 md:pb-128">
      <a href="/" className="-ml-8 rounded-full p-8 transition duration-500 ease-in-out hover:rotate-180 hover:bg-gray-600">
        <Logo />
      </a>

      <Button href="#footer">Say Hello</Button>
    </div>
  </>
);

export default Header;
