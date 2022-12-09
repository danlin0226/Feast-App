import React from "react";
import "./BioPage.scss";

import { Navigate, useNavigate } from "react-router-dom";
import chevron from "../../assets/icons/chevron.png";
import gender from "../../assets/icons/bigender.svg";
import cake from "../../assets/icons/cake.svg";
import fb from "../../assets/icons/fb-orange.svg";
import ig from "../../assets/icons/ig-orange.svg";
import Avatar from "../../components/avatar/Avatar";

const Bio = ({ userBio }) => {
  const navigate = useNavigate();
  return (
    <>
      <p
        className="details__breadcrumb-text"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img className="details__icon" src={chevron} alt="" />
        Back to Explore
      </p>
      <div className="bio">
        <div className="bio__middle-cont">
          <Avatar avatar={userBio.avatar} large={true} />
          <p className="bio__name">{userBio.name}</p>
          <div className="bio__stats-cont">
            <p className="bio__stats">
              <img src={gender} alt="" />
              {userBio.gender}
            </p>
            <p className="bio__stats">
              <img src={cake} alt="" />
              {`${userBio.age} years old`}
            </p>
          </div>
          <p className="bio__about">{userBio.about} </p>
          <div className="bio__prompt">
            <h4 className="bio__prompt-title">The best thing I ever ate...</h4>
            <p className="bio__prompt-text">
              I’m a Toronto native that just moved to Vancouver a few months
              ago! I’m looking to meet new friends to explore new restaurants in
              the city. In my spare time, you can find me training for my next
              half marathon or hanging out with my pup, Roger.
            </p>
          </div>
          <div className="bio__prompt">
            <h4 className="bio__prompt-title">
              If I were to choose my last meal, it would be...
            </h4>
            <p className="bio__prompt-text">
              My mom’s homemade chili recipe, 100%.
            </p>
          </div>
          <div className="bio__prompt">
            <h4 className="bio__prompt-title">
              My next travel destination will be...
            </h4>
            <p className="bio__prompt-text">
              Singapore. Bring on the hawker stands!!
            </p>
          </div>
          <div className="bio__socials">
            <img src={fb} alt="" />
            <img src={ig} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;
