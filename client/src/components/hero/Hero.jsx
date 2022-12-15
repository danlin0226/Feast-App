import React, { useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

import "./Hero.scss";

const Hero = ({ setHeroSearch, isLoaded }) => {
  const [searchResult, setSearchResult] = useState("");
  const [searchString, setSearchString] = useState("");

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }

  function onPlaceChanged() {
    console.log("search result", searchResult);

    if (searchResult != null) {
      console.log(searchResult);
      const place = searchResult.getPlace();
      console.log("place", place);
      const name = place.name;
      setSearchString(place.address_components[0].long_name);
    } else {
      alert("Please enter text");
    }
  }

  if (!isLoaded) {
    return <div>Loading</div>;
  }

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
            setHeroSearch(searchString);
          }}
        >
          <Autocomplete
            onPlaceChanged={onPlaceChanged}
            onLoad={onLoad}
            types={["locality"]}
            restrictions={{ country: "ca" }}
            fields={["address_components"]}
          >
            <input
              className="hero__searchbar"
              type="text"
              name="city"
              placeholder="Vancouver"
            />
          </Autocomplete>

          <button className="hero__submit"></button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
