import React from "react";
import noodles from "../../assets/food/noodles.jpg";
import pin from "../../assets/icons/map-pin.svg";
import userCircle from "../../assets/icons/user-circle.svg";

import "./Card.scss";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <img className="card__img" src={data.image} alt="" />
      <div className="card__text-cont">
        <h2 className="card__header">{`${data.name} @ ${data.location}`}</h2>
        <div className="card__info-cont">
          <h4 className="card__subheader">{data.time}</h4>
          <div className="card__label">
            <img className="card__icon" src={pin} alt="" />
            <p className="card__text">{data.address}</p>
          </div>
          <div className="card__label">
            <img className="card__icon" src={userCircle} alt="" />
            <p className="card__text">{`2/${data.spots} spots available`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
