import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";

import Card from "../../components/card/Card";
import Modal from "../../components/modal/Modal";
import "./CardListings.scss";

const CardListings = ({
  isHosting,
  uid,
  userRequestPosts,
  editable,
  deletable,
}) => {
  let location = useLocation();

  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState();
  const [isDelete, setIsDelete] = useState(false);

  let hostingPosts;

  if (isHosting) {
    hostingPosts = posts.filter((post) => post.user_id === uid);
    console.log(hostingPosts);
  }

  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      setPosts(res.data);
    });
  }, []);

  const selectPostHandler = (e, id) => {
    e.preventDefault();
    setSelectedPost(id);
    setIsDelete(true);
  };

  const deleteEventHandler = (e, selectedPost) => {
    e.preventDefault();
    const newPosts = posts.filter((post) => {
      return post.id !== selectedPost;
    });

    onAuthStateChanged(auth, async (user) => {
      if (user) {
      }
      const token = user.accessToken;
      axios
        .delete(`http://localhost:8080/posts/${selectedPost}`, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then(() => {
          setPosts(newPosts);
          setIsDelete(false);
        });
    });
  };

  return (
    <section className="listings">
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
            return <Card key={post.id} data={post} deletable={deletable} />;
          })}
        {hostingPosts &&
          hostingPosts.map((post) => {
            return (
              <Card
                key={post.id}
                data={post}
                editable={editable}
                deletable={deletable}
                selectPostHandler={selectPostHandler}
              />
            );
          })}
        {location.pathname === "/explore" &&
          posts.map((post) => {
            return <Card key={post.id} data={post} />;
          })}
      </div>
      {isDelete && (
        <Modal setIsOpen={setIsDelete} smallModal={true}>
          <div className="success-modal">
            <h1 className="success-modal__title">Cancel Attendance?</h1>
            <p className="success-modal__text">
              Are you sure you want to cancel your attendance to this event?
              This action cannot be undone.
            </p>
            <button
              onClick={(e) => {
                deleteEventHandler(e, selectedPost);
              }}
              className="success-modal__submit"
            >
              Cancel Event
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default CardListings;
