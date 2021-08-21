import React from "react";
import Button from "../components/Button";

const Footer = () => (
  <div>
    <div className="container">
      <div id="footer">
        <div className="bg-primary text-clip mb-64">
          <h2 className="uppercase text-xl font-black tracking-widest">
            Hire Me
          </h2>
          <p className="text-6xl font-thin leading-none">
            UI design, motion, front-end development. If you need help,
            say&nbsp;hello!
          </p>
        </div>
        <div className="flex justify-between items-stretch">
          <div className="hidden sm:block bg-primary w-4 rounded-full" />
          <form
            name="contact"
            netlify
            className="bg-white text-gray-800 rounded-xl sm:rounded-3xl p-32 sm:p-40 w-full max-w-md sm:ml-64"
          >
            <div className=" flex flex-col space-y-24 ">
              <div className="space-y-8">
                <label className="block" for="form-name">
                  Name:
                </label>
                <input
                  className="rounded-lg border border-gray-300 p-16 w-full"
                  id="form-name"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </div>

              <div className="space-y-8">
                <label className="block" for="form-email">
                  Email:
                </label>
                <input
                  className="rounded-lg border border-gray-300 p-16 w-full"
                  id="form-email"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>

              <div className="space-y-8">
                <label className="block" for="form-note">
                  Note:
                </label>
                <textarea
                  className="rounded-lg border border-gray-300 p-16 w-full"
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
        </div>
      </div>
      <div className="text-white">
        <ul className="pt-80 pb-40 px-64 flex flex-col sm:flex-row justify-between items-center text-base font-light tracking-wide">
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
  </div>
);

export default Footer;
