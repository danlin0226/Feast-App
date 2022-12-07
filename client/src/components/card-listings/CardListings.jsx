import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../../components/card/Card";
import "./CardListings.scss";

const CardListings = () => {
  const [posts, SetPosts] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      SetPosts(res.data);
    });
  }, []);

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
        {posts &&
          posts.map((post) => {
            return <Card key={post.id} data={post} />;
          })}
      </div>
    </div>
  );
};

export default CardListings;
