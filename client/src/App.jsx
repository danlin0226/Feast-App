import "./App.scss";

import { Routes, Route, Navigate } from "react-router-dom";

import ExplorePage from "./pages/ExplorePage";

import Header from "./components/header/Header";
// import CardListings from "./components/card-listings/CardListings";
import Footer from "./components/footer/Footer";

import SignUp from "./components/sign-up/SignUp";
import SignIn from "./components/sign-in/SignIn";
import Bio from "./components/bio/Bio";
import PostDetailsPage from "./pages/post-details-page/PostDetailsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/post-details/:id" element={<PostDetailsPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="*" element={<Navigate to="/explore" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
