import React from "react";
import Button from "../components/Button";
import BigHeading from "./BigHeading";
import LineVertical from "./LineVertical";
import Rounded from "./Rounded";
import SubHeading from "./SubHeading";

const Footer = ({ className = "" }) => (
  <div className={`container space-y-128 ${className}`}>
    <div id="footer">
      <div className=" mb-64">
        <SubHeading>
          <h2>Hire Me</h2>
        </SubHeading>
        <BigHeading className="max-w-screen-lg">
          <p>UI design, motion, front-end development. If you need help, say&nbsp;hello!</p>
        </BigHeading>
      </div>
      <div className="flex justify-between items-stretch">
        <LineVertical />

        <Rounded className="bg-white text-gray-800 p-32 sm:p-40 w-full sm:max-w-md sm:ml-64">
          <form name="contact" netlify="">
            <div className=" flex flex-col space-y-24 ">
              <div className="space-y-8">
                <label className="block" htmlFor="form-name">
                  Name:
                </label>
                <input className="rounded-lg border border-gray-300 p-16 w-full outline-none focus:border-aqua focus:bg-gray-100" id="form-name" type="text" placeholder="Name" name="name" />
              </div>

              <div className="space-y-8">
                <label className="block" htmlFor="form-email">
                  Email:
                </label>
                <input className="rounded-lg border border-gray-300 p-16 w-full outline-none focus:border-aqua focus:bg-gray-100" id="form-email" type="email" placeholder="Email" name="email" />
              </div>

              <div className="space-y-8">
                <label className="block" htmlFor="form-note">
                  Note:
                </label>
                <textarea className="rounded-lg border border-gray-300 p-16 w-full outline-none focus:border-aqua focus:bg-gray-100" id="form-note" type="text" name="note" placeholder="Hello there..." />
              </div>

              <Button type="submit" className="w-full">
                Send
              </Button>
            </div>
          </form>
        </Rounded>
      </div>
    </div>
    <div className="text-white">
      <ul className="pb-40 px-64 flex flex-col sm:flex-row justify-between items-center text-base font-light tracking-wide">
        <li>
          <a className="hover:underline" href="https://dribbble.com/patrickhill">
            Dribbble
          </a>
        </li>
        <li>
          <a className="hover:underline" href="https://www.instagram.com/hellohellohill/">
            Instagram
          </a>
        </li>
        <li>
          <a className="hover:underline" href="https://github.com/patrickhill">
            GitHub
          </a>
        </li>
        <li>
          <a className="hover:underline" href="http://twitter.com/PatrickHill">
            Twitter
          </a>
        </li>
        <li>
          <a className="hover:underline" href="mailto:patrickrhill@gmail.com">
            Email
          </a>{" "}
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
