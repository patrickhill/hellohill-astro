import React from "react";
import BigHeading from "./BigHeading";
import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";
import LineVertical from "./LineVertical";
import SubHeading from "./SubHeading";
import LatestWork from "../latestWork";
import Rounded from "./Rounded";
import { roundedClassNames } from "./roundedClassNames";

const Home = () => (
  <>
    <Header />
    <div className="space-y-128 md:space-y-256">
      <div className="container">
        <BigHeading as="h1" className="mb-64 max-w-screen-lg">
          Hello, I’m Patrick Hill, a product designer delivering user friendly solutions to challenging software problems.
        </BigHeading>

        <div className="flex flex-col md:flex-row justify-between items-stretch ">
          <div className="flex flex-col">
            <SubHeading as="h2" className="mb-32">
              Case Studies
            </SubHeading>

            <LineVertical className="flex-grow" />
          </div>
          <div className="space-y-64">
            <div className="max-w-2xl rounded-[1.1rem] sm:rounded-[1.9rem] bg-gray-700 p-2">
              <div className={`p-16 sm:p-24 rounded-[1.05rem] sm:rounded-[1.85rem] bg-gray-800 !overflow-visible block hover:cursor-auto`}>
                <div style={{ perspective: 800 }}>
                  <div className="hover-3d-target transition duration-[300ms] ease-out will-change">
                    <img className={`${roundedClassNames} w-full`} src="/assets/images/zenti-hh-hero.jpg" alt="Zenti Timer Screenshot" />
                  </div>
                </div>
                <div className="flex justify-between mt-32 space-x-8">
                  <div>
                    <SubHeading as="h2">Zenti</SubHeading>
                    <p className="text-white text-base font-light">A simple meditation timer</p>
                  </div>
                  <div className={`${roundedClassNames} text-gray-200 bg-gray-700 px-16 sm:px-32 flex justify-center items-center font-extralight `}>Coming Soon</div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl rounded-[1.1rem] sm:rounded-[1.9rem] bg-gradient-brand p-2">
              <a href="/casestudies/lookbuilder" className={`p-16 sm:p-24 rounded-[1.05rem] sm:rounded-[1.85rem] bg-gray-800 !overflow-visible block hover-3d   hover:bg-gray-700 transition duration-300`}>
                <div style={{ perspective: 800 }}>
                  <div className="hover-3d-target transition duration-[300ms] ease-out will-change">
                    <video className={`${roundedClassNames} w-full`} loop autoPlay playsInline muted src="/assets/images/200504-093605.mp4" alt="Look Builder UI" />
                  </div>
                </div>
                <div className="flex justify-between mt-32 space-x-8">
                  <div>
                    <SubHeading as="h2">The Look Builder</SubHeading>
                    <p className="text-white text-base font-light">Visualizing custom suit combinations</p>
                  </div>
                  <Button>Read</Button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <SubHeading as="h2">Miscellaneous Work</SubHeading>
        <BigHeading as="p" className="mb-64 max-w-screen-lg">
          An assortment of past projects and personal work to give you a feel for what&nbsp;I&nbsp;do.
        </BigHeading>

        <div className="grid-misc grid grid-cols-1 md:grid-cols-2 gap-64 place-items-center">
          {LatestWork.map((item, key) => (
            <div className="overflow-hidden" key={key}>
              {item.heroType === "video" ? (
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  poster="/assets/images/loading.png"
                  data-src={`${item.hero}#t=0.1`}
                  alt={item.title}
                  className={`
                      lazy-load 
                      ${roundedClassNames}
                    `}
                  preload="metadata"
                />
              ) : (
                <img
                  src="/assets/images/loading.png"
                  data-src={item.hero}
                  alt={item.title}
                  className={`
                      lazy-load 
                      ${roundedClassNames}
                    `}
                />
              )}
            </div>
          ))}

          <Button href="https://dribbble.com/patrickhill" className="!px-32 !py-64 flex flex-col">
            <svg className="w-24 h-24 mb-8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="128" height="128" viewBox="0 0 128 128">
              <path d="M64.000,128.002 C28.709,128.002 -0.002,99.291 -0.002,64.000 C-0.002,28.709 28.709,-0.002 64.000,-0.002 C99.291,-0.002 128.002,28.709 128.002,64.000 C128.002,99.291 99.291,128.002 64.000,128.002 ZM117.976,72.761 C116.106,72.171 101.055,67.682 83.924,70.424 C91.075,90.073 93.985,106.076 94.545,109.402 C106.809,101.109 115.540,87.972 117.976,72.761 ZM85.354,114.406 C84.541,109.610 81.367,92.895 73.692,72.950 C73.572,72.991 73.452,73.030 73.332,73.072 C42.497,83.816 31.428,105.200 30.444,107.211 C39.714,114.439 51.362,118.751 64.000,118.751 C71.573,118.751 78.791,117.202 85.354,114.406 ZM23.386,100.636 C24.624,98.516 39.628,73.674 67.822,64.561 C68.535,64.331 69.253,64.114 69.976,63.910 C68.604,60.805 67.109,57.696 65.544,54.633 C38.244,62.803 11.752,62.462 9.360,62.413 C9.343,62.968 9.332,63.524 9.332,64.083 C9.332,78.124 14.655,90.944 23.386,100.636 ZM10.487,52.887 C12.932,52.919 35.455,53.017 61.027,46.226 C51.968,30.124 42.199,16.586 40.758,14.610 C25.464,21.824 14.032,35.923 10.487,52.887 ZM51.189,10.935 C52.700,12.959 62.629,26.480 71.587,42.938 C91.026,35.652 99.256,24.591 100.239,23.191 C90.585,14.626 77.890,9.416 64.000,9.416 C59.589,9.416 55.300,9.944 51.189,10.935 ZM106.316,29.513 C105.164,31.072 96.003,42.815 75.790,51.068 C77.062,53.672 78.282,56.320 79.417,58.986 C79.820,59.931 80.211,60.871 80.595,61.807 C98.785,59.520 116.859,63.186 118.661,63.567 C118.541,50.664 113.930,38.815 106.316,29.513 Z" />
            </svg>
            See More on Dribbble
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  </>
);

export default Home;
