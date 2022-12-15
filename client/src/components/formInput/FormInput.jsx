import React, { useState } from "react";
import "./FormInput.scss";
import { Autocomplete } from "@react-google-maps/api";

const FormInput = ({
  label,
  onChange,
  id,
  errorMessage,
  dropdown,
  isLoaded,
  setAutoCompleteName,
  emptyValues,
  setValues,
  ...inputProps
}) => {
  const [searchResult, setSearchResult] = useState("");

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  if (dropdown === "meal") {
    return (
      <div className="formInput">
        <label className="formInput__label" htmlFor={inputProps.name}>
          {label}
        </label>
        <select
          className="formInput__input formInput__input--dropdown"
          id={inputProps.name}
          {...inputProps}
          onChange={onChange}
          autoComplete="off"
        >
          <option value="" defaultValue disabled hidden>
            Please Select
          </option>
          <option>Breakfast</option>
          <option>Brunch</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Drinks</option>
          <option>Appies</option>
        </select>
        <p className="formInput__error">{errorMessage}</p>
      </div>
    );
  }

  if (dropdown === "spots") {
    return (
      <div className="formInput">
        <label className="formInput__label" htmlFor={inputProps.name}>
          {label}
        </label>
        <select
          className="formInput__input formInput__input--dropdown"
          id={inputProps.name}
          {...inputProps}
          onChange={onChange}
          autoComplete="off"
        >
          <option value="" defaultValue disabled hidden>
            Please Select
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        <p className="formInput__error">{errorMessage}</p>
      </div>
    );
  }

  if (dropdown === "cuisine") {
    return (
      <div className="formInput">
        <label className="formInput__label" htmlFor={inputProps.name}>
          {label}
        </label>
        <select
          placeholder="Select an option"
          className="formInput__input formInput__input--dropdown"
          id={inputProps.name}
          {...inputProps}
          onChange={onChange}
          autoComplete="off"
        >
          <option value="" defaultValue disabled hidden>
            Please Select
          </option>
          <option>American</option>
          <option>Canadian</option>
          <option>Chinese</option>
          <option>Filipino</option>
          <option>French</option>
          <option>Greek</option>
          <option>Indian</option>
          <option>Indonesian</option>
          <option>Italian</option>
          <option>Jamaican</option>
          <option>Japanese</option>
          <option>Korean</option>
          <option>Lebanese</option>
          <option>Mexican</option>
          <option>Spanish</option>
          <option>Thai</option>
          <option>Turkish</option>
          <option>Vietnamese</option>
        </select>
        <p className="formInput__error">{errorMessage}</p>
      </div>
    );
  }

  if (dropdown === "textarea") {
    return (
      <div className="formInput">
        <label className="formInput__label" htmlFor={inputProps.name}>
          {label}
        </label>
        <textarea
          rows={4}
          className="formInput__input"
          id={inputProps.name}
          {...inputProps}
          onChange={onChange}
          autoComplete="off"
        />
        <p className="formInput__error">{errorMessage}</p>
      </div>
    );
  }

  if (dropdown === "address") {
    function onLoad(autocomplete) {
      setSearchResult(autocomplete);
    }
    function onPlaceChanged() {
      console.log("search result", searchResult);

      if (searchResult != null) {
        //variable to store the result
        const place = searchResult.getPlace();
        console.log("place", place);
        //variable to store the name from place details result
        const name = place.name;

        setValues({
          ...emptyValues,
          location: place.name,
          address: place.vicinity,
          geo: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
        });
        //variable to store the status from place details result
        const status = place.geometry.location;
        //variable to store the formatted address from place details result
        const formattedAddress = place.formatted_address;
        // console.log(place);
        //console log all results
        console.log(`Name: ${name}`);
        console.log("geo", {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
        console.log(`Business Status: ${status}`);
        console.log(`Formatted Address: ${formattedAddress}`);
      } else {
        alert("Please enter text");
      }
    }
    return (
      <div className="formInput">
        <label className="formInput__label" htmlFor={inputProps.name}>
          {label}
        </label>
        <Autocomplete
          onPlaceChanged={onPlaceChanged}
          onLoad={onLoad}
          types={["restaurant"]}
          restrictions={{ country: "ca" }}
        >
          <input
            className="formInput__input"
            id={inputProps.name}
            {...inputProps}
            onChange={onChange}
            autoComplete="off"
            style={{ width: "100%" }}
            onKeyDown={handleKeyDown}
          />
        </Autocomplete>
        <p className="formInput__error">{errorMessage}</p>
      </div>
    );
  }
  return (
    <div className="formInput">
      <label className="formInput__label" htmlFor={inputProps.name}>
        {label}
      </label>
      <input
        className="formInput__input"
        id={inputProps.name}
        {...inputProps}
        onChange={onChange}
        autoComplete="off"
      />
      <p className="formInput__error">{errorMessage}</p>
    </div>
  );
};

export default FormInput;
