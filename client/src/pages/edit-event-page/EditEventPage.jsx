import axios from "axios";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useParams } from "react-router-dom";
import CreateEventPage from "../create-event-page/CreateEventPage";

const EditEventPage = ({ edit, token }) => {
  const [postToEdit, setPostToEdit] = useState({
    name: "",
    location: "",
    time: "",
    address: "",
    about: "",
    spots: "",
    cuisine: "",
    meal: "",
  });

  const params = useParams();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const token = user.accessToken;
      axios
        .get(`http://localhost:8080/posts/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setPostToEdit(res.data);
        });
    });
  }, []);

  return (
    <>
      <CreateEventPage edit={edit} token={token} postToEdit={postToEdit} />
    </>
  );
};

export default EditEventPage;
