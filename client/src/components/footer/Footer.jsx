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
        <img className="footer__logo" src={logoWhite} alt="" />
      </div>
      <div className="footer__text-cont">
        <p className="footer__text">About Us</p>
        <p className="footer__text">Careers</p>
      </div>
      <div className="footer__social-cont">
        <img className="footer__social" src={ig} alt="" />
        <img className="footer__social" src={fb} alt="" />
        <img className="footer__social" src={linkedIn} alt="" />
      </div>
    </div>
  );
};

export default Footer;
