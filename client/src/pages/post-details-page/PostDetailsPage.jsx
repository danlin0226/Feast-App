import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

import "./PostDetailsPage.scss";

import chevron from "../../assets/icons/chevron.png";
import pin from "../../assets/icons/map-pin-teal.svg";
import calendar from "../../assets/icons/calendar.svg";
import map from "../../assets/maps-placeholder.png";
import success from "../../assets/success.png";

import Avatar from "../../components/avatar/Avatar";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/modal/Modal";

const PostDetailsPage = ({ token, editable }) => {
  console.log("editable?", editable);
  const navigate = useNavigate();
  const params = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [postData, setPostData] = useState({});
  const [requests, setRequests] = useState([]);

  const activeRequests = requests.filter(
    (request) => request.status === "true"
  );

  const pendingRequests = requests.filter(
    (request) => request.status === "false"
  );
  console.log("activeRequests", activeRequests);

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

  useEffect(() => {
    onAuthStateChanged(auth, async () => {
      const token = await auth.currentUser.getIdToken();
      axios
        .get(`http://localhost:8080/requests/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setRequests(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  const submitRequestHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8080/requests",
        {
          listing_id: params.id,
          prompt1: e.target.prompt1.value,
          prompt2: e.target.prompt2.value,
          prompt3: e.target.prompt3.value,
          status: "false",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setIsOpen(false);
        setIsSubmitted(true);
      });
  };

  const submittedRequestHandler = (e) => {
    e.preventDefault();
    navigate("/explore");
  };

  return (
    <section className="details">
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
          <p
            className="details__sign-up"
            onClick={(e) => {
              setIsOpen(true);
            }}
            href=""
          >
            Sign Up
          </p>
          <p className="details__spots">2/6 spots available</p>
          <div className="details__attending-cont">
            <p className="details__attending-label">Attending</p>
            <div className="details__attending-avatars">
              {activeRequests.map((activeRequest) => {
                return (
                  <Avatar
                    key={activeRequest.id}
                    avatar={activeRequest.user_avatar}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      g
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <div className="request-modal">
            <h1 className="request-modal__title">
              Just a couple of question...
            </h1>
            <form
              action=""
              className="request-modal__form"
              onSubmit={submitRequestHandler}
            >
              <div className="request-modal__form-item">
                <label htmlFor="prompt1" className="request-modal__label">
                  Why do you want to come to this event
                </label>
                <textarea
                  className="request-modal__input"
                  name="prompt1"
                  id="prompt1"
                  rows="3"
                />
              </div>
              <div className="request-modal__form-item">
                <label htmlFor="prompt2" className="request-modal__label">
                  Why do you want to come to this event
                </label>
                <textarea
                  className="request-modal__input"
                  name="prompt2"
                  id="prompt2"
                  rows="3"
                />
              </div>
              <div className="request-modal__form-item">
                <label htmlFor="prompt3" className="request-modal__label">
                  Why do you want to come to this event
                </label>
                <textarea
                  className="request-modal__input"
                  rows="3"
                  name="prompt3"
                  id="prompt3"
                />
              </div>
              <button className="request-modal__submit">Submit Request</button>
            </form>
          </div>
        </Modal>
      )}
      {isSubmitted && (
        <Modal setIsOpen={setIsSubmitted}>
          <div className="success-modal">
            <h1 className="success-modal__title">Request Submitted!</h1>
            <img className="success-modal__img" src={success} alt="" />
            <p className="success-modal__text">
              You will get a notification once the host accepts or rejects your
              requests
            </p>
            <button
              onClick={submittedRequestHandler}
              className="success-modal__submit"
            >
              Go to My Events
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default PostDetailsPage;
