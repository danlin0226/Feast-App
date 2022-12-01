import React from "react";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text-cont">
        <h1 className="hero__header">Connect with foodies</h1>
        <h4 className="hero__subheader">Find events in your city</h4>
        <form action="">
          <input
            className="hero__searchbar"
            type="text"
            name="city"
            value="Vancouver"
          />
          <button className="hero__submit"></button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
