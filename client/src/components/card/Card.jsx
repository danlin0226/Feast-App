import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

import pin from "../../assets/icons/map-pin.svg";
import userCircle from "../../assets/icons/user-circle.svg";
import close from "../../assets/icons/close.png";

const Card = ({ data, editable, deletable, selectPostHandler }) => {
  return (
    <Link
      to={
        editable
          ? `/event-details/hosting/${data.id}`
          : `/event-details/${data.id}`
      }
    >
      <article className="card">
        <img
          className="card__img"
          src={data.image}
          alt="user submitted food photography"
        />
        {deletable && (
          <img
            className="card__close"
            src={close}
            alt="x icon"
            onClick={(e) => {
              selectPostHandler(e, data.id);
            }}
          />
        )}
        <div className="card__text-cont">
          <h2 className="card__header">{`${data.name} @ ${data.location}`}</h2>
          <div className="card__info-cont">
            <h4 className="card__subheader">{data.time}</h4>
            <div className="card__label">
              <img className="card__icon" src={pin} alt="pin icon" />
              <p className="card__text">{data.address}</p>
            </div>
            <div className="card__label">
              <img className="card__icon" src={userCircle} alt="circle icon" />
              <p className="card__text">{`${data.spots}/${data.spots} spots available`}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Card;
