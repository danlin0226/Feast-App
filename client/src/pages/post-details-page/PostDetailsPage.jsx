import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, useParams } from "react-router-dom";

import "./PostDetailsPage.scss";

import chevron from "../../assets/icons/chevron.png";
import pin from "../../assets/icons/map-pin-teal.svg";
import calendar from "../../assets/icons/calendar.svg";
import map from "../../assets/maps-placeholder.png";
import edit from "../../assets/icons/edit.svg";
import success from "../../assets/success.png";
import gender from "../../assets/icons/bigender.svg";
import cake from "../../assets/icons/cake.svg";
import fb from "../../assets/icons/fb-orange.svg";
import ig from "../../assets/icons/ig-orange.svg";

import Avatar from "../../components/avatar/Avatar";
import Modal from "../../components/modal/Modal";

const PostDetailsPage = ({ token, editable }) => {
  const navigate = useNavigate();
  const params = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isManageAttendee, setIsManageAttendee] = useState(false);
  const [postData, setPostData] = useState({});
  const [requests, setRequests] = useState([]);
  const [selectedAttendee, setSelectedAttendee] = useState({});

  const acceptedRequests = requests.filter(
    (request) => request.status === "true"
  );

  const spots = acceptedRequests.length;

  const pendingRequests = requests.filter(
    (request) => request.status === "false"
  );

  const rejectedRequests = requests.filter(
    (request) => request.status === "rejected"
  );

  const handleSelectAttendee = (id) => {
    const singleRequest = requests.filter((request) => {
      return request.id === id;
    });
    setSelectedAttendee(singleRequest[0]);
    setIsManageAttendee(true);
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
          console.error(err);
        });
    });
  }, [isManageAttendee]);

  const submitRequestHandler = (e) => {
    e.preventDefault();
    console.log({
      listing_id: params.id,
      prompt1: e.target.prompt1.value,
      prompt2: e.target.prompt2.value,
      status: "false",
    });
    axios
      .post(
        "http://localhost:8080/requests",
        {
          listing_id: params.id,
          prompt1: e.target.prompt1.value,
          prompt2: e.target.prompt2.value,
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

  const acceptRequestHandler = (e) => {
    console.log(token);
    axios
      .patch(
        `http://localhost:8080/requests/${selectedAttendee.id}`,
        {
          status: "true",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setIsManageAttendee(false);
      });
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
          {editable && (
            <div className="details__edit">
              <img className="details__icon" src={edit} alt="" />
              Edit Event
            </div>
          )}
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
            Hosted By: <Avatar avatar={postData.user_avatar} />
            {editable ? (
              <p className="details__host-text">You</p>
            ) : (
              <p className="details__host-text">{postData.user_name}</p>
            )}
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
          {editable ? (
            <h2 className="details__manage">Manage attendees</h2>
          ) : (
            <p
              className="details__sign-up"
              onClick={(e) => {
                setIsOpen(true);
              }}
              href=""
            >
              Sign Up
            </p>
          )}
          <p className={`details__spots ${editable && "details__spots--left"}`}>
            {`${postData.spots - spots} / ${postData.spots} spots available`}
          </p>
          <div className="details__attending-cont">
            <p className="details__attending-label">Attending</p>
            <div className="details__attending-avatars">
              {acceptedRequests.map((activeRequest) => {
                return (
                  <Avatar
                    key={activeRequest.id}
                    avatar={activeRequest.avatar}
                  />
                );
              })}
            </div>
            {editable && (
              <>
                <p className="details__attending-label">Pending</p>
                <div className="details__attending-avatars">
                  {pendingRequests.map((pendingRequest) => {
                    return (
                      <Avatar
                        key={pendingRequest.id}
                        id={pendingRequest.id}
                        avatar={pendingRequest.avatar}
                        handleSelectAttendee={handleSelectAttendee}
                      />
                    );
                  })}
                </div>
                <p className="details__attending-label">Rejected</p>
                <div className="details__attending-avatars">
                  {rejectedRequests.map((rejectedRequest) => {
                    return (
                      <Avatar
                        key={rejectedRequest.id}
                        id={rejectedRequest.id}
                        avatar={rejectedRequest.avatar}
                        handleSelectAttendee={handleSelectAttendee}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

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
      {isManageAttendee && (
        <Modal setIsOpen={setIsManageAttendee} largeModal={true}>
          <div className="manage-modal">
            <h1 className="manage-modal__title">Pending Request</h1>
            <div className="modal-bio">
              <div className="modal-bio__middle-cont">
                <Avatar avatar={selectedAttendee.avatar} medium={true} />
                <p className="modal-bio__name">
                  {selectedAttendee.name}
                  {selectedAttendee.id}
                </p>
                <div className="modal-bio__stats-cont">
                  <p className="modal-bio__stats">
                    <img src={gender} alt="" />
                    {selectedAttendee.gender}
                  </p>
                  <p className="modal-bio__stats">
                    <img src={cake} alt="" />
                    {`${selectedAttendee.age} years old`}
                  </p>
                </div>
                <p className="modal-bio__about">{selectedAttendee.about} </p>
                <div className="modal-bio__prompt">
                  <h4 className="modal-bio__prompt-title">
                    The best thing I ever ate...
                  </h4>
                  <p className="modal-bio__prompt-text">
                    {selectedAttendee.prompt1}
                  </p>
                </div>
                <div className="modal-bio__prompt">
                  <h4 className="modal-bio__prompt-title">
                    The best thing I ever ate...
                  </h4>
                  <p className="modal-bio__prompt-text">
                    {selectedAttendee.prompt2}
                  </p>
                </div>
                <h1 className="modal-bio__name">Full Bio</h1>
                <div className="modal-bio__prompt">
                  <h4 className="modal-bio__prompt-title">
                    The best thing I ever ate...
                  </h4>
                  <p className="modal-bio__prompt-text">
                    {selectedAttendee.user_prompt1}
                  </p>
                </div>
                <div className="modal-bio__prompt">
                  <h4 className="modal-bio__prompt-title">
                    If I were to choose my last meal, it would be...
                  </h4>
                  <p className="modal-bio__prompt-text">
                    {selectedAttendee.user_prompt2}
                  </p>
                </div>
                <div className="modal-bio__prompt">
                  <h4 className="modal-bio__prompt-title">
                    My next travel destination will be...
                  </h4>
                  <p className="modal-bio__prompt-text">
                    {selectedAttendee.user_prompt3}
                  </p>
                </div>
                <div className="modal-bio__socials">
                  <img src={fb} alt="" />
                  <img src={ig} alt="" />
                </div>
              </div>
            </div>
            <div className="manage-modal__bottomBar">
              <button
                onClick={() => {
                  setIsManageAttendee(false);
                }}
                className="manage-modal__submit manage-modal__submit--white"
              >
                Reject
              </button>
              <button
                onClick={() => {
                  acceptRequestHandler();
                }}
                className="manage-modal__submit"
              >
                Accept
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default PostDetailsPage;
