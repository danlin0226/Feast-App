import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignInPage.scss";

//assets
import authImg from "../../assets/auth.jpg";
import whiteLogo from "../../assets/logo/logo-white.svg";

import SignIn from "../../components/sign-in/SignIn";

const SignInPage = ({ setShowNav }) => {
  const textContent = {
    page: "signin",
    title: "Welcome back",
    subheader: "Please enter your login details",
    subheader2: "Don't have an account?",
    link: "Create an account",
    linkUrl: "/register",
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
            alt="feast logo in cursive letters"
          />
        </Link>
        <img
          className="authPage__img"
          src={authImg}
          alt="food laid out on a round table"
        />
      </div>
      <div className="authPage__right">
        <SignIn textContent={textContent} />
      </div>
    </section>
  );
};

export default SignInPage;
