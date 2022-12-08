import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

import Avatar from "../../components/avatar/Avatar";

import logo from "../../assets/logo/feast-logo.svg";
import plus from "../../assets/icons/circle-plus.svg";

const Header = ({ userBio, signedIn }) => {
  const activeClassName = "active";
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/explore">
          <img className="header__logo" src={logo} alt="" />
        </Link>
        <h4 className="header__link">
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Explore
          </NavLink>
        </h4>
        <h4 className="header__link">
          {" "}
          <NavLink
            to="/post-details/2"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            My Events{" "}
          </NavLink>
        </h4>
      </div>
      <div className="header__right">
        <div className="header__create-event">
          <img className="header__create-icon" src={plus} alt="" />
          <p className="header__create-text">Create Event</p>
        </div>
        <Link to={signedIn ? "/bio" : "register"}>
          <Avatar avatar={userBio.avatar} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
