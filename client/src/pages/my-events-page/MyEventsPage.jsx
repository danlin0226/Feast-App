import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./MyEventsPage.scss";

import CardListings from "../../components/card-listings/CardListings";

const MyEventsPage = ({ uid }) => {
  const [userRequestPosts, setUserRequestPosts] = useState([]);
  const [hosting, setHosting] = useState(true);
  const [attending, setAttending] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
      }
      const uid = user.uid;
      const token = user.accessToken;
      axios
        .get(`http://localhost:8080/requests/user/${uid}`, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUserRequestPosts(res.data);
          console.log("answer", res.data);
        });
    });
  }, []);

  return (
    <section className="myEvents">
      <div className="myEvents__nav">
        <div
          onClick={() => {
            setAttending(false);
            setHosting(true);
          }}
          className={`myEvents__nav-item ${
            hosting && "myEvents__nav-item--underline"
          }`}
        >
          Hosting
        </div>
        <div
          onClick={() => {
            setAttending(true);
            setHosting(false);
          }}
          className={`myEvents__nav-item ${
            attending && "myEvents__nav-item--underline"
          }`}
        >
          Attending
        </div>
      </div>
      {hosting && (
        <CardListings
          isHosting={true}
          uid={uid}
          editable={true}
          deletable={true}
        />
      )}
      {attending && (
        <CardListings
          isHosting={false}
          uid={uid}
          userRequestPosts={userRequestPosts}
          deletable={true}
        />
      )}
    </section>
  );
};

export default MyEventsPage;
