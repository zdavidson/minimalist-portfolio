import React from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

const Home = () => {
  return (
    <div className="px-4">
      <Hero />
      <AboutMe />
      <ContactMe />
    </div>
  );
};

export default Home;
