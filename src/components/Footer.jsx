import React from "react";
import Button from "../components/Button";
import BigHeading from "./BigHeading";
import LineVertical from "./LineVertical";
import Rounded from "./Rounded";
import SubHeading from "./SubHeading";

const Footer = ({ className = "" }) => (
  <>
    <div className={`container space-y-128 ${className}`}>
      <div id="footer">
        <div className=" mb-64">
          <SubHeading>
            <h2>Hire Me</h2>
          </SubHeading>
          <BigHeading as="p" className="max-w-screen-lg">
            UI, motion, 3d, front-end development. If you need help,
            say&nbsp;hello!
          </BigHeading>
        </div>
        <div className="flex items-stretch justify-between">
          <LineVertical />

          <Rounded className="w-full bg-white p-32 text-gray-800 sm:ml-64 sm:max-w-2xl sm:p-40">
            <form name="contact" netlify="">
              <div className=" flex flex-col space-y-24 font-sans text-base font-extralight">
                <div className="space-y-8">
                  <label className="block" htmlFor="form-name">
                    Name:
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 p-16 font-sans text-base font-extralight placeholder-gray-500 outline-none focus:border-aqua focus:bg-gray-100"
                    id="form-name"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>

                <div className="space-y-8">
                  <label className="block" htmlFor="form-email">
                    Email:
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 p-16 font-sans text-base font-extralight placeholder-gray-500 outline-none focus:border-aqua focus:bg-gray-100"
                    id="form-email"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>

                <div className="space-y-8">
                  <label className="block" htmlFor="form-note">
                    Note:
                  </label>
                  <textarea
                    className=" w-full rounded-lg border border-gray-300 p-16 font-sans text-base font-extralight placeholder-gray-500 outline-none focus:border-aqua focus:bg-gray-100"
                    id="form-note"
                    type="text"
                    name="note"
                    placeholder="Hello there..."
                  />
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
        <ul className="flex flex-col items-center justify-between px-64 pb-40 text-base font-light tracking-wide sm:flex-row">
          <li>
            <a
              className="hover:underline"
              href="https://dribbble.com/patrickhill"
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="https://www.instagram.com/hellohellohill/"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="https://github.com/patrickhill"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="http://twitter.com/PatrickHill"
            >
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
  </>
);

export default Footer;
