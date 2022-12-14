import React, { useEffect, useState } from "react";
import "./SignIn.scss";
import axios from "axios";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

const LogIn = ({ setSignedIn, textContent }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const logIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/explore");
    } catch (error) {
      console.log(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const token = await auth.currentUser.getIdToken();
      axios
        .post(
          "http://localhost:8080/auth/signup",
          {},
          {
            headers: { authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          navigate("/explore");
          console.log("res", res.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="auth">
      <h2 className="auth__title">{textContent.title}</h2>
      <p className="auth__subheader">{textContent.subheader}</p>
      <form className="auth__form" action="">
        <label className="auth__label" htmlFor="email">
          Email
          <input
            className="auth__input"
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label className="auth__label" htmlFor="password">
          Password
          <input
            className="auth__input"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        {textContent.page === "signin" && (
          <button className="auth__button" onClick={logIn}>
            Submit
          </button>
        )}
        {textContent.page === "register" && (
          <button className="auth__button" onClick={register}>
            Submit
          </button>
        )}

        <p className="auth__subheader2">
          {textContent.subheader2}{" "}
          <Link to={textContent.linkUrl} className="auth__create">
            {textContent.link}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
