import React, { useEffect, useState } from "react";

import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../firebase";

const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setUser(currentUser);
      }
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);

  const logIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const token = await auth.currentUser.getIdToken();
      console.log(token);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logOut = async (e) => {
    e.preventDefault();
    await signOut(auth);
    window.localStorage.setItem("auth", false);
    console.log("logged out");
  };

  return (
    <div>
      <h2>Log in</h2>
      <h3>{user?.email}</h3>
      <form action="">
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          password:
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
        </label>
        <button onClick={logIn}>Submit</button>
      </form>

      <button onClick={logOut}>LOG OUT</button>
    </div>
  );
};

export default LogIn;
