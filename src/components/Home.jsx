import React from "react";
import BigHeading from "./BigHeading";
import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";
import LineVertical from "./LineVertical";
import Row from "./Row";
import SubHeading from "./SubHeading";
import LatestWork from "../latestWork";
import Rounded from "./Rounded";
import { roundedClassNames } from "./roundedClassNames";

const Home = () => (
  <>
    <Header />
    <div className="space-y-256">
      <div className="container">
        <BigHeading className="mb-64 max-w-screen-lg">
          <h1>Hello, I’m Patrick Hill, a product designer delivering user friendly solutions to challenging software problems.</h1>
        </BigHeading>

        <div className="flex justify-between items-stretch ">
          <div className="flex flex-col">
            <SubHeading>
              <h2 className="mb-32">Case Studies</h2>
            </SubHeading>

            <LineVertical className="flex-grow" />
          </div>
          <div>
            <a href="/casestudies/lookbuilder" className={`p-16 ${roundedClassNames} block hover-3d hover:bg-gray-700 transition duration-300`}>
              <div style={{ perspective: 800 }}>
                <div className="hover-3d-target transition duration-[300ms] ease-out">
                  <video class={`${roundedClassNames} max-w-2xl w-full`} loop autoPlay playsInline muted src="/assets/images/200504-093605.mp4" alt="Look Builder UI"></video>
                </div>
              </div>
              <div className="flex justify-between mt-32">
                <div>
                  <SubHeading>
                    <h2>The Look Builder</h2>
                  </SubHeading>
                  <p className="text-white text-base font-light">Visualizing custom suit combinations</p>
                </div>
                <Button>Read</Button>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <SubHeading>
          <h2>Miscellaneous Work</h2>
        </SubHeading>
        <BigHeading className="mb-64 max-w-screen-lg">
          <p>An assortment of past projects and personal work to give you a feel for what&nbsp;I&nbsp;do.</p>
        </BigHeading>

        <div className="grid-misc grid grid-cols-1 md:grid-cols-2 gap-64 place-items-center">
          {LatestWork.map((item, key) => (
            <div key={key}>
              <Rounded>{item.heroType === "video" ? <video autoPlay loop playsInline muted poster="/assets/images/loading.png" data-src={`${item.hero}#t=0.1`} alt={item.title} className="lazy-load" preload="metadata" /> : <img src="/assets/images/loading.png" data-src={item.hero} alt={item.title} className="lazy-load" />}</Rounded>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  </>
);

export default Home;
