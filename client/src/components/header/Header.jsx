import React from "react";
import "./Header.scss";

import logo from "../../assets/logo/feast-logo.svg";
import plus from "../../assets/icons/circle-plus.svg";
import avatar from "../../assets/profile-pics/steph.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="" />
        <h4 className="header__link">Explore</h4>
        <h4 className="header__link">My Events</h4>
      </div>
      <div className="header__right">
        <div className="header__create-event">
          <img className="header__create-icon" src={plus} alt="" />
          <p className="header__create-text">Create Event</p>
        </div>
        <img className="header__avatar" src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
