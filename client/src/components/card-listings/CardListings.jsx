import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Card from "../../components/card/Card";
import "./CardListings.scss";

const CardListings = ({ isHosting, uid, userRequestPosts, editable }) => {
  let location = useLocation();
  console.log(location);

  const [posts, SetPosts] = useState([]);
  let filteredPost;

  if (isHosting) {
    filteredPost = posts.filter((post) => post.user_id === uid);
    console.log(filteredPost);
  }

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
        {userRequestPosts &&
          userRequestPosts.map((post) => {
            return <Card key={post.id} data={post} />;
          })}
        {filteredPost &&
          filteredPost.map((post) => {
            return <Card key={post.id} data={post} editable={editable} />;
          })}
        {location.pathname === "/explore" &&
          posts.map((post) => {
            return <Card key={post.id} data={post} />;
          })}
      </div>
    </div>
  );
};

export default CardListings;
