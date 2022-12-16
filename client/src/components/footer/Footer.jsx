import React from "react";
import "./Footer.scss";

import logoWhite from "../../assets/logo/feast-white.png";
import ig from "../../assets/icons/ig.svg";
import fb from "../../assets/icons/fb.svg";
import linkedIn from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img
          className="footer__logo"
          src={logoWhite}
          alt="white cursive letters spelling feast"
        />
      </div>
      <div className="footer__text-cont">
        <p className="footer__text">About Us</p>
        <p className="footer__text">Careers</p>
      </div>
      <div className="footer__social-cont">
        <img
          className="footer__social"
          src={ig}
          alt="square camera icon representing instagram"
        />
        <img
          className="footer__social"
          src={fb}
          alt="blue font that says fb representing fb"
        />
        <img
          className="footer__social"
          src={linkedIn}
          alt="in representing linkedin"
        />
      </div>
    </div>
  );
};

export default Footer;
