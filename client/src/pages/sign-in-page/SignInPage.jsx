import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import authImg from "../../assets/auth.jpg";
import whiteLogo from "../../assets/logo/logo-white.svg";
import "./SignInPage.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SignInPage = ({ setShowNav, setSignedIn }) => {
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
  }, []);
  return (
    <section className="authPage">
      <div className="authPage__left">
        <Link
          to="/explore"
          onClick={() => {
            setShowNav(true);
          }}
        >
          <img className="authPage__logo" src={whiteLogo} alt="" />
        </Link>
        <img className="authPage__img" src={authImg} alt="" />
      </div>
      <div className="authPage__right">
        <SignIn textContent={textContent} />
      </div>
    </section>
  );
};

export default SignInPage;
