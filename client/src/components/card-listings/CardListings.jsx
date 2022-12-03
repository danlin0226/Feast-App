import React from "react";

import Card from "../../components/card/Card";
import "./CardListings.scss";

const CardListings = () => {
  return (
    <div className="listings">
      <div className="listings__filters">
        <select name="cuisines" id="cuisines">
          <option value="chinese">chinese</option>
        </select>
        <select name="cuisines" id="cuisines">
          <option value="chinese">chinese</option>
        </select>
        <select name="cuisines" id="cuisines">
          <option value="chinese">chinese</option>
        </select>
      </div>
      <div className="listings__card-cont">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardListings;
