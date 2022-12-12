import "./App.scss";

import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import ExplorePage from "./pages/ExplorePage";

import Header from "./components/header/Header";
// import CardListings from "./components/card-listings/CardListings";
import Footer from "./components/footer/Footer";

import SignUp from "./components/sign-up/SignUp";
import SignIn from "./components/sign-in/SignIn";
import BioPage from "./pages/bio-page/BioPage";
import PostDetailsPage from "./pages/post-details-page/PostDetailsPage";
import { useEffect, useState } from "react";
import axios from "axios";
import CreateEventPage from "./pages/create-event-page/CreateEventPage";
import MyEventsPage from "./pages/my-events-page/MyEventsPage";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState({});
  const [userBio, setUserBio] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      axios
        .get("http://localhost:8080/auth/bio", {
          headers: {
            Authorization: `Bearer ${currentUser.accessToken}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setUserBio(res.data);
          setSignedIn(true);
        });
      setUser(currentUser);
    });
  }, []);

  const signIn = (data) => {
    setUser(data);
  };

  return (
    <>
      <Header userBio={userBio} signedIn={signedIn} />
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route
          path="/my-events"
          element={<MyEventsPage token={user.accessToken} uid={user.uid} />}
        />
        <Route
          path="/event-details/:id"
          element={<PostDetailsPage token={user.accessToken} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn signIn={signIn} />} />
        <Route path="/bio" element={<BioPage userBio={userBio} />} />

        <Route
          path="/create-event"
          element={<CreateEventPage token={user.accessToken} />}
        />
        <Route path="*" element={<Navigate to="/explore" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
