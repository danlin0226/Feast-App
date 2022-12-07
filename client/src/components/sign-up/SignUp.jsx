import React, { useEffect, useRef, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getIdToken,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../../firebase";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      window.localStorage.setItem("auth", true);
    });
  }, []);

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      const token = await auth.currentUser.getIdToken();
      console.log(token);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>sign up</h2>
      <h2>{user?.email}</h2>
      <form action="">
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
            ref={emailRef}
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          password:
          <input
            type="text"
            name="password"
            id="password"
            ref={passwordRef}
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
        </label>
        <button onClick={register}>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
