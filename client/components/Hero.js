import React from "react";

const Hero = () => {
  return (
    <div className="container py-4">
      <img src="./images/homepage/mobile/image-homepage-hero.jpg" />
      <div id="hero-text" className="pt-4">
        <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
      </div>
      <div id="about-button">
        <img src="./images/icons/down-arrows.svg" />
        <button type="button" className="btn btn-secondary">
          About Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
