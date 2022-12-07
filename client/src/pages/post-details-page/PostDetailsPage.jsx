import React from "react";

import "./PostDetailsPage.scss";

import chevron from "../../assets/icons/chevron.png";
import pin from "../../assets/icons/map-pin-teal.svg";
import calendar from "../../assets/icons/calendar.svg";
import map from "../../assets/maps-placeholder.png";

import Avatar from "../../components/avatar/Avatar";

const PostDetailsPage = () => {
  return (
    <div className="details">
      <img
        className="details__hero"
        src="https://i.postimg.cc/4yGcYMwK/davey-gravy-krs-Kf-CC1l-Yw-unsplash.jpg"
        alt=""
      />
      <div className="details__top-cont">
        <p className="details__breadcrumb-text">
          <img className="details__icon" src={chevron} alt="" />
          Back to Explore
        </p>

        <div className="details__tag-cont">
          <div className="details__tag">Mediterranean</div>
          <div className="details__tag">Brunch</div>
        </div>
      </div>

      <div className="details__bottom-cont">
        <div className="details__left-cont">
          <h2 className="details__title">
            Casual Brunch @{" "}
            <span className="details__title--orange">Cafe Madina</span>
          </h2>

          <div className="details__host">
            Hosted By: <Avatar />
            <p className="details__host-text">Savannah Wong</p>
          </div>

          <div className="details__info-card-cont">
            <div className="details__info-card">
              <img className="details__icon" src={calendar} alt="" />
              Sunday, January 2, 2023 6:00PM
            </div>
            <div className="details__info-card">
              <img className="details__icon" src={pin} alt="" />
              780 Richards St, Vancouver BC V6B 3A4
            </div>
          </div>

          <img className="details__map" src={map} alt="" />
          <h4 className="details__about-title">About the Event</h4>
          <p className="details__about-text">
            Come join for a casual brunch at Cafe Medina! If people are free
            afterwards, we can shop around Robson or check out a cafe around
            downown after. I’ll be closing the RSVPs a week prior to the event
            so I can make reservations!
          </p>
        </div>
        <div className="details__right-cont">
          <a className="details__sign-up" href="">
            Sign Up
          </a>
          <p className="details__spots">2/6 spots available</p>
          <div className="details__attending-cont">
            <p className="details__attending-label">Attending</p>
            <div className="details__attending-avatars">
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
