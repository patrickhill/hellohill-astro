import React from "react";
import BigHeading from "./BigHeading";
import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";
import LineVertical from "./LineVertical";
import Row from "./Row";
import SubHeading from "./SubHeading";

const Home = () => (
  <>
    <Header />

    <div className="container">
      <Row>
        <div className="col-span-12 lg:col-start-3 lg:col-end-12">
          <BigHeading>
            <h1>
              Hello, I’m Patrick Hill, a product designer delivering user
              friendly solutions to challenging software problems.
            </h1>
          </BigHeading>
        </div>
      </Row>
    </div>

    <div className="container flex justify-between items-stretch py-128">
      <div className="flex flex-col">
        <SubHeading>
          <h2 className="mb-32">Case Studies</h2>
        </SubHeading>

        <LineVertical className="flex-grow" />
      </div>
      <div>
        <video
          class="rounded-xl sm:rounded-3xl max-w-2xl w-full"
          loop=""
          autoplay=""
          playsinline=""
          muted=""
          src="/assets/images/200504-093605.mp4"
          alt=""
        ></video>

        <SubHeading>
          <p>Case Study:</p>
        </SubHeading>
        <p>Visualizing custom suit combinations</p>
        <Button>Read</Button>
      </div>
    </div>

    <Footer />
  </>
);

export default Home;
