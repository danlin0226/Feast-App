import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.scss";

import authImg from "../../assets/auth.jpg";
import whiteLogo from "../../assets/logo/logo-white.svg";

import SignIn from "../../components/sign-in/SignIn";

const RegisterPage = ({ setShowNav }) => {
  const textContent = {
    page: "register",
    title: "Create Account",
    subheader: "Please enter account details",
    subheader2: "Already have an account?",
    link: "Sign in",
    linkUrl: "/signin",
  };

  useEffect(() => {
    setShowNav(false);
  }, [setShowNav]);
  return (
    <section className="authPage">
      <div className="authPage__left">
        <Link
          to="/explore"
          onClick={() => {
            setShowNav(true);
          }}
        >
          <img
            className="authPage__logo"
            src={whiteLogo}
            alt="cursive letters spelling feast"
          />
        </Link>
        <img
          className="authPage__img"
          src={authImg}
          alt="food laid out on a large table"
        />
      </div>
      <div className="authPage__right">
        <SignIn textContent={textContent} />
      </div>
    </section>
  );
};

export default RegisterPage;
