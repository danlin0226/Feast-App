import React from "react";

import "./Hero.scss";

const Hero = ({ setHeroSearch }) => {
  return (
    <div className="hero">
      <div className="hero__text-cont">
        <h1 className="hero__header">Connect with foodies</h1>
        <h4 className="hero__subheader">Find events in your city</h4>
        <form
          className="hero__form"
          autoComplete="off"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setHeroSearch(e.target.city.value);
          }}
        >
          <input
            className="hero__searchbar"
            type="text"
            name="city"
            placeholder="Vancouver"
          />
          <button className="hero__submit"></button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
