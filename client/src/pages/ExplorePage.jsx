import React, { useState } from "react";

import CardListings from "../components/card-listings/CardListings";
import Hero from "../components/hero/Hero";

const ExplorePage = ({ isLoaded }) => {
  const [heroSearch, setHeroSearch] = useState("");
  return (
    <>
      <Hero setHeroSearch={setHeroSearch} isLoaded={isLoaded} />
      <CardListings heroSearch={heroSearch} />
    </>
  );
};

export default ExplorePage;
