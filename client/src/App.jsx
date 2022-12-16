import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useJsApiLoader } from "@react-google-maps/api";

//components
import ExplorePage from "./pages/ExplorePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BioPage from "./pages/bio-page/BioPage";
import PostDetailsPage from "./pages/post-details-page/PostDetailsPage";
import CreateEventPage from "./pages/create-event-page/CreateEventPage";
import EditEventPage from "./pages/edit-event-page/EditEventPage";
import MyEventsPage from "./pages/my-events-page/MyEventsPage";
import SignInPage from "./pages/sign-in-page/SignInPage";
import RegisterPage from "./pages/register-page/RegisterPage";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState({});
  const [userBio, setUserBio] = useState({});
  const [showNav, setShowNav] = useState(true);
  const [libraries] = useState(["places"]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        axios
          .get("http://localhost:8080/auth/bio", {
            headers: {
              Authorization: `Bearer ${currentUser.accessToken}`,
            },
          })
          .then((res) => {
            setUserBio(res.data);
            setSignedIn(true);
            setShowNav(true);
          });
        setUser(currentUser);
      }
    });
  }, []);

  return (
    <>
      {showNav && (
        <Header
          userBio={userBio}
          setUserBio={setUserBio}
          setSignedIn={setSignedIn}
          signedIn={signedIn}
        />
      )}
      <Routes>
        <Route path="/" element={<ExplorePage isLoaded={isLoaded} />} />
        <Route path="/explore" element={<ExplorePage isLoaded={isLoaded} />} />
        <Route
          path="/my-events"
          element={<MyEventsPage token={user.accessToken} uid={user.uid} />}
        />
        <Route
          path="/event-details/:id"
          element={
            <PostDetailsPage token={user.accessToken} isLoaded={isLoaded} />
          }
        />
        <Route
          path="/event-details/hosting/:id"
          element={
            <PostDetailsPage
              editable={true}
              token={user.accessToken}
              isLoaded={isLoaded}
            />
          }
        />
        <Route
          path="/register"
          setShowNav={setShowNav}
          element={<RegisterPage setShowNav={setShowNav} />}
        />
        <Route
          path="/signin"
          element={
            <SignInPage setShowNav={setShowNav} setSignedIn={setSignedIn} />
          }
        />
        <Route path="/bio" element={<BioPage userBio={userBio} />} />
        <Route
          path="/create-event"
          element={
            <CreateEventPage token={user.accessToken} isLoaded={isLoaded} />
          }
        />
        <Route
          path="/edit-event/:id"
          element={
            <EditEventPage
              edit={true}
              token={user.accessToken}
              isLoaded={isLoaded}
            />
          }
        />
        <Route path="*" element={<Navigate to="/explore" />} />
      </Routes>
      {showNav && <Footer />}
    </>
  );
}

export default App;
