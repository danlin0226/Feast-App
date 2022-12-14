import React from "react";
import { useState } from "react";

import CardListings from "../components/card-listings/CardListings";
import Hero from "../components/hero/Hero";

const ExplorePage = () => {
  const [heroSearch, setHeroSearch] = useState("");
  return (
    <>
      <Hero setHeroSearch={setHeroSearch} />
      <CardListings heroSearch={heroSearch} />
    </>
  );
};

export default ExplorePage;
