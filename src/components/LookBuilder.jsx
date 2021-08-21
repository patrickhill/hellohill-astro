import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import BigHeading from "./BigHeading";

const LookBuilder = () => (
  <>
    <Header />

    <div className="container">
      <BigHeading>The Look Builder</BigHeading>
    </div>

    <div class="container bg-gray-800 sm:sticky top-0 z-50 mb-64 sm:mb-128 flex flex-wrap gap-x-16 gap-y-8 mt-16">
      <a class="inline-block text-gray-500 hover:text-white" href="#intro">
        Intro
      </a>
      <a
        class="inline-block text-gray-500 hover:text-white"
        href="#exploration"
      >
        Exploration
      </a>
      <a class="inline-block text-gray-500 hover:text-white" href="#process">
        Design
      </a>
      <a
        class="inline-block text-gray-500 hover:text-white"
        href="#prototyping"
      >
        Prototyping
      </a>
      <a class="inline-block text-gray-500 hover:text-white" href="#conclusion">
        Conclusion
      </a>
    </div>

    <Footer />
  </>
);

export default LookBuilder;
