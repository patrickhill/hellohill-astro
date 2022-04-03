import React from "react";
import Header from "./Header";
import BigHeading from "./BigHeading";
import Button from "./Button";
import ContentCard from "./ContentCard";
import Footer from "./Footer";
import VideoBlock from "./VideoBlock";
import ImageBlock from "./ImageBlock";
import { roundedClassNames } from "./roundedClassNames";

const title = "The Warehouse";
const desc = "Building a distribution center from scratch";
const heroImageUrl =
  "https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701684/look%20builder/lookbuilder-hero_zabett.jpg";
const heroVideoUrl =
  "https://res.cloudinary.com/dl4btvfxp/video/upload/v1644700337/home/200504-093605_dev8kc.mp4";
const tags = "caseStudy";
const layout = "caseStudyLayout.html";
const date = "2022-03-26";

const LookBuilder = () => (
  <>
    <Header />

    <div className="container">
      <BigHeading as="h1">The Warehouse</BigHeading>
    </div>

    <div className="container top-0 z-50 mb-64 mt-16 flex flex-wrap gap-x-16 gap-y-8 bg-gray-800 sm:sticky sm:mb-128">
      <a className="inline-block text-gray-500 hover:text-white" href="#intro">
        Intro
      </a>
      <a
        className="inline-block text-gray-500 hover:text-white"
        href="#exploration"
      >
        Exploration
      </a>
      <a
        className="inline-block text-gray-500 hover:text-white"
        href="#process"
      >
        Design
      </a>
      <a
        className="inline-block text-gray-500 hover:text-white"
        href="#prototyping"
      >
        Prototyping
      </a>
      <a
        className="inline-block text-gray-500 hover:text-white"
        href="#conclusion"
      >
        Conclusion
      </a>
    </div>

    <div className="space-y-64 overflow-hidden px-24 sm:space-y-128">
      <ContentCard id="intro">
        <h2 className="mt-0">Intro</h2>
        <hr className="border-gray-300" />

        <h3>The Challenge</h3>
        <p>
          Design distribution center workflows, processes, and UI for Generation
          Tux, an online tuxedo rental company.
        </p>

        <h3>Background</h3>
        <p>
          A small team of designers and engineers were given the task of
          replacing the entire system in time by the time the current software
          contract ended.
        </p>

        <h3>Details</h3>
        <div
          className="flex flex-col gap-8 rounded-b-lg bg-gray-100 p-32 sm:grid sm:gap-16 sm:rounded-b-2xl"
          style={{ gridTemplateColumns: "auto auto" }}
        >
          <h4>Requirements:</h4>
          <div className="space-y-8">
            <ul className="!ml-24">
              <li>Must support multiple brands</li>
              <li>Must be bi-lingual</li>
              <li>Should rely as little as possible on third party software</li>
              <li>
                Should create visibility around reporting, order flows, and
                auditing
              </li>
              <li>Should increase order capacity</li>
            </ul>
          </div>

          <h4>Resources:</h4>
          <div className="space-y-8">
            <p>The core design team consisted of:</p>
            <ul className="!ml-24">
              <li>1 UI designer (me)</li>
              <li>1 full stack engineer</li>
              <li>1 front end engineer</li>
              <li>1 product owner</li>
            </ul>
            <p>
              The team added 4 more engineers as we moved into implementation.
            </p>
          </div>

          <h4>Timeline:</h4>
          <p>3 months</p>

          <h4>My Role:</h4>
          <p>UI Design, UI Dev, Design Sprint Ideation</p>
        </div>
      </ContentCard>

      <div>
        <div className="mx-auto w-full max-w-[1182px]">
          <ImageBlock
            src="https://res.cloudinary.com/dl4btvfxp/image/upload/w_0.8,c_crop,g_east/w_1182,ar_16:9,c_fill,dpr_2/v1648317667/warehouse/4T9A8597_krirpd.jpg"
            alt="gentux warehouse clothing rack"
            className=" aspect-[16/9]"
          />
        </div>
      </div>

      <ContentCard id="exploration">
        <h2>Exploration</h2>
        <hr className="border-gray-300" />

        <h3>Problems to Solve</h3>
        <p>
          The previous system was a cobbled together mess built on top of a CRM
          tool. A CRM (customer relationship management) isn't meant to handle
          order processing and shipping so it barely functioned. As a result,
          tons of side processes and workarounds had developed over the years to
          keep orders shipping. In addition, the software was incredibly
          expensive.
        </p>
      </ContentCard>

      <div>
        <div className="case-study-grid-images mx-auto w-full max-w-[1182px]">
          <ImageBlock
            src="https://res.cloudinary.com/dl4btvfxp/image/upload/w_0.5,h_0.85,g_south_east,c_crop/h_0.7,c_crop/w_383,dpr_2/v1648319292/warehouse/_BS27676_oe8mg1.jpg"
            className="row-span-2"
          />
          <ImageBlock
            src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1648319115/warehouse/design-sprint-timelapse_s4xeef.gif"
            alt="design team pinning ideas to board in design sprint"
            className="aspect-[4/3]"
          />
        </div>
      </div>

      <ContentCard id="exploration">
        <p>
          The Gentux warehouse is responsible for processing new orders and
          receiving returned rental items so they can be cleaned, repaired, and
          packaged for new orders. This involves many stations dedicated to each
          of the individual processes. To tackle the overall problem, we decided
          to dedicate a design sprint to each station.
        </p>
      </ContentCard>

      <Footer />
    </div>
  </>
);

export default LookBuilder;
