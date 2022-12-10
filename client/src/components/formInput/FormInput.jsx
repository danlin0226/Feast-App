import React from "react";
import { useState } from "react";
import "./FormInput.scss";

const FormInput = ({
  label,
  onChange,
  id,
  errorMessage,
  dropdown,
  ...inputProps
}) => {
  if (dropdown === "meal") {
    return (
      <div className="formInput">
        <label className="formInput__label" htmlFor={inputProps.name}>
          {label}
        </label>
        <select
          className="formInput__input"
          id={inputProps.name}
          {...inputProps}
          onChange={onChange}
          autoComplete="off"
        >
          <option>Please Select</option>
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
          className="formInput__input"
          id={inputProps.name}
          {...inputProps}
          onChange={onChange}
          autoComplete="off"
        >
          <option>Please Select</option>
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
          className="formInput__input"
          id={inputProps.name}
          {...inputProps}
          onChange={onChange}
          autoComplete="off"
        >
          <option>Please Select</option>
          <option>Chinese</option>
          <option>Japanese</option>
        </select>
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
