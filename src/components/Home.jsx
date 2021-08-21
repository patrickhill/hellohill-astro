import React from "react";
import Header from "./Header";
import TestComponent from "./TestComponent";

const Home = () => (
  <>
    <Header />
    <main>
      <header>
        <div>
          <img width="60" height="80" src="/assets/logo.svg" alt="Astro logo" />
          <h1>
            Welcome to <a href="https://astro.build/">Astro</a>
          </h1>
        </div>
      </header>

      <TestComponent />
    </main>
  </>
);

export default Home;
