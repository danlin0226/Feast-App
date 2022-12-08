import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

import "./PostDetailsPage.scss";

import chevron from "../../assets/icons/chevron.png";
import pin from "../../assets/icons/map-pin-teal.svg";
import calendar from "../../assets/icons/calendar.svg";
import map from "../../assets/maps-placeholder.png";

import Avatar from "../../components/avatar/Avatar";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/modal/Modal";

const PostDetailsPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [postData, setPostData] = useState({});

  const m = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async () => {
      const token = await auth.currentUser.getIdToken();
      console.log(token);
      axios
        .get(`http://localhost:8080/posts/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setPostData(res.data);
          console.log(res.data);
        });
    });
  }, [params.id]);

  return (
    <div className="details">
      <img className="details__hero" src={postData.image} alt="" />
      <div className="details__top-cont">
        <p
          className="details__breadcrumb-text"
          onClick={() => {
            navigate(-1);
          }}
        >
          <img className="details__icon" src={chevron} alt="" />
          Back to Explore
        </p>

        <div className="details__tag-cont">
          <div className="details__tag">Mediterranean</div>
          <div className="details__tag">Brunch</div>
        </div>
      </div>

      <div className="details__bottom-cont">
        <div className="details__left-cont">
          <h2 className="details__title">
            {`${postData.name} @ `}
            <span className="details__title--orange">
              {`${postData.location}`}
            </span>
          </h2>

          <div className="details__host">
            Hosted By: <Avatar avatar={postData.user_avatar} modal={m} />
            <p className="details__host-text">{postData.user_name}</p>
          </div>

          <div className="details__info-card-cont">
            <div className="details__info-card">
              <img className="details__icon" src={calendar} alt="" />
              {postData.time}
            </div>
            <div className="details__info-card">
              <img className="details__icon" src={pin} alt="" />
              {postData.address}
            </div>
          </div>

          <img className="details__map" src={map} alt="" />
          <h4 className="details__about-title">About the Event</h4>
          <p className="details__about-text">{postData.about}</p>
        </div>
        <div className="details__right-cont">
          <a className="details__sign-up" href="">
            Sign Up
          </a>
          <p className="details__spots">2/6 spots available</p>
          <div className="details__attending-cont">
            <p className="details__attending-label">Attending</p>
            <div className="details__attending-avatars">
              <Avatar modal={m} />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal title="Modal Title" setIsOpen={setIsOpen}>
          <p>Modal content goes here...</p>
        </Modal>
      )}
    </div>
  );
};

export default PostDetailsPage;
