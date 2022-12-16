import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import "./Header.scss";

import logo from "../../assets/logo/feast-logo.svg";
import plus from "../../assets/icons/circle-plus.svg";

import Avatar from "../../components/avatar/Avatar";

const Header = ({ userBio, signedIn, setSignedIn }) => {
  const navigate = useNavigate();

  const logOut = async (e) => {
    e.preventDefault();
    const status = await signOut(auth);
    console.log("status", status);
    setSignedIn(false);
    navigate("/explore");
    window.location.reload();
  };

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/explore">
          <img
            className="header__logo"
            src={logo}
            alt="cursive letters spelling feast"
          />
        </Link>
        <h4 className="header__link">
          <NavLink
            to="/explore"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Explore
          </NavLink>
        </h4>
        <h4 className="header__link">
          {" "}
          <NavLink
            to="/my-events"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            My Events{" "}
          </NavLink>
        </h4>
      </div>
      <div className="header__right">
        <Link to="/create-event">
          <div className="header__create-event">
            <img
              className="header__create-icon"
              src={plus}
              alt="plus sign icon"
            />
            <p className="header__create-text">Create Event</p>
          </div>
        </Link>
        <div className="dropdown">
          <Link to={signedIn ? "/bio" : "register"}>
            <Avatar avatar={userBio.avatar} />
          </Link>
          <div className="dropdown-content">
            <Link to="/bio">Profile</Link>
            {signedIn ? (
              <Link onClick={logOut}>Sign Out</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
