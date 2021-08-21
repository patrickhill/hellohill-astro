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

const Home = () => (
  <>
    <Header />
    <div className="space-y-256">
      <div className="container">
        <Row>
          <div className="col-span-12 lg:col-start-1 lg:col-end-12 ">
            <BigHeading className="mb-64">
              <h1>
                Hello, I’m Patrick Hill, a product designer delivering user
                friendly solutions to challenging software problems.
              </h1>
            </BigHeading>
          </div>
        </Row>

        <div className="flex justify-between items-stretch ">
          <div className="flex flex-col">
            <SubHeading>
              <h2 className="mb-32">Case Studies</h2>
            </SubHeading>

            <LineVertical className="flex-grow" />
          </div>
          <div>
            <video
              class="rounded-xl sm:rounded-3xl max-w-2xl w-full"
              loop
              autoPlay
              playsInline
              muted
              src="/assets/images/200504-093605.mp4"
              alt="Look Builder UI"
            ></video>

            <SubHeading>
              <p>Case Study:</p>
            </SubHeading>
            <p>Visualizing custom suit combinations</p>
            <Button>Read</Button>
          </div>
        </div>
      </div>

      <div className="container">
        <SubHeading>
          <h2>Miscellaneous Work</h2>
        </SubHeading>
        <BigHeading className="mb-64">
          <p>
            An assortment of past projects and personal work to give you a feel
            for what&nbsp;I&nbsp;do.
          </p>
        </BigHeading>

        <div className="grid-misc grid grid-cols-1 md:grid-cols-2 gap-64 place-items-center">
          {LatestWork.map((item, key) => (
            <div key={key}>
              <Rounded>
                {item.heroType === "video" ? (
                  <video
                    autoPlay
                    loop
                    playsInline
                    muted
                    src={`${item.hero}#t=0.1`}
                    alt={item.title}
                    preload="metadata"
                  />
                ) : (
                  <img src={item.hero} alt={item.title} loading="lazy" />
                )}
              </Rounded>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  </>
);

export default Home;
