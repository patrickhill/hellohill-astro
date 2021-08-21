import React from "react";

const Header = () => (
  <div>
    <div className="container">
      <a href="/">
        <img
          className="inline-block"
          src="/images/logo.svg"
          alt="Hello Hill Logo"
        />
      </a>

      <a href="#footer">
        <div className="btn btn-primary">Hire Me</div>
      </a>
    </div>
  </div>
);

export default Header;
