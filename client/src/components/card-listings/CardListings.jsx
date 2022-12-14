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
  heroSearch,
}) => {
  let location = useLocation();

  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState();
  const [isDelete, setIsDelete] = useState(false);
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [mealFilter, setMealFilter] = useState("");

  let hostingPosts;

  if (isHosting) {
    hostingPosts = posts.filter((post) => post.user_id === uid);
  }

  const filterPosts = posts.filter((post) => {
    if (cuisineFilter === "" && mealFilter === "" && heroSearch === "") {
      return post;
    }
    if (mealFilter === "" && heroSearch === "") {
      return post.cuisine === cuisineFilter;
    }
    if (cuisineFilter === "" && heroSearch === "") {
      return post.meal === mealFilter;
    }
    if (cuisineFilter === "" && mealFilter === "") {
      return post.address.includes(heroSearch);
    }
    if (cuisineFilter === "") {
      return post.address.includes(heroSearch) && post.meal === mealFilter;
    }
    if (mealFilter === "") {
      return (
        post.address.includes(heroSearch) && post.cuisine === cuisineFilter
      );
    }
    if (heroSearch === "") {
      return post.meal === mealFilter && post.cuisine === cuisineFilter;
    } else {
      return (
        post.meal === mealFilter &&
        post.cuisine === cuisineFilter &&
        post.address.includes(heroSearch)
      );
    }
  });

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
        <select
          className="listings__dropdown"
          name="cuisine"
          id="cuisine"
          onChange={(e) => {
            setCuisineFilter(e.target.value);
          }}
        >
          <option value="" defaultValue>
            All Cuisines
          </option>
          <option>American</option>
          <option>Canadian</option>
          <option>Chinese</option>
          <option>Filipino</option>
          <option>French</option>
          <option>Greek</option>
          <option>Indian</option>
          <option>Indonesian</option>
          <option>Italian</option>
          <option>Jamaican</option>
          <option>Japanese</option>
          <option>Korean</option>
          <option>Lebanese</option>
          <option>Mexican</option>
          <option>Spanish</option>
          <option>Thai</option>
          <option>Turkish</option>
          <option>Vietnamese</option>
        </select>
        <select
          className="listings__dropdown"
          name="meal"
          id="meal"
          onChange={(e) => {
            setMealFilter(e.target.value);
          }}
        >
          <option value="" defaultValue>
            All Meal Types
          </option>
          <option>Breakfast</option>
          <option>Brunch</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Drinks</option>
          <option>Appies</option>
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
          filterPosts.map((post) => {
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
