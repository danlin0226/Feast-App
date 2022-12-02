import React from "react";

import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <img src="" alt="" />
      <div className="card__text-cont">
        <h2 className="card__header">Dinner @ Sawasdee Thai Restaurant</h2>
        <h4 className="card__subheader"> Friday, Dec 30, 6:00pm</h4>
        <div className="card__label">
          <img className="card__icon" src="" alt="" />
          <p className="card__text">4250 Main Street</p>
        </div>
        <div className="card__label">
          <img className="card__icon" src="" alt="" />
          <p className="card__text">2 / 6 spots available</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
