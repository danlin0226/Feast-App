import React from "react";
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
