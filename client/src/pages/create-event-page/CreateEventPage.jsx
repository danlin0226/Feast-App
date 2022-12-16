import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreateEventPage.scss";
import { useNavigate } from "react-router-dom";

import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";

import chevron from "../../assets/icons/chevron.png";
import success from "../../assets/success.png";

import FormInput from "../../components/formInput/FormInput";
import Modal from "../../components/modal/Modal";

import { convertDateLocalToString } from "../../utils/dateConversion";

// Initialize once (at the start of your app).
const uploader = Uploader({ apiKey: "free" });
const myCustomLocale = {
  orDragDropFile: "...or drag and drop a file.",
  uploadFile: "Upload an image",
};

const uploaderOptions = {
  multi: false,
  styles: {
    colors: {
      primary: "#d16427",
    },
  },
  editor: {
    images: {
      crop: false, // True by default.
    },
  },
  locale: myCustomLocale,
};

const MyDropzone = ({ setFiles }) => (
  <UploadDropzone
    uploader={uploader}
    options={uploaderOptions}
    onUpdate={setFiles}
    width="100vw"
    height="375px"
  />
);

const MyUploadedFiles = ({ files, postToEdit }) =>
  files.map((file) => {
    const filePath = file.filePath;
    const fileUrl = uploader.url(filePath, "raw"); // "raw" for un-transformed file.

    if (postToEdit) {
      console.log(postToEdit.image);
      return (
        <p key={postToEdit.image}>
          <img
            className="uploaded-img"
            src={postToEdit.image}
            alt="food the user has submitted"
          />
        </p>
      );
    }

    return (
      <p key={fileUrl}>
        <img
          className="uploaded-img"
          src={fileUrl}
          alt="food that the user has inputted"
        />
      </p>
    );
  });

const CreateEventPage = ({ token, edit, postToEdit, isLoaded }) => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [values, setValues] = useState({
    name: "",
    location: "",
    time: "",
    address: "",
    about: "",
    spots: "",
    cuisine: "",
    meal: "",
    geo: "",
  });

  useEffect(() => {
    if (edit) {
      setValues(postToEdit);
      // console.log(postToEdit.image);
      // setFiles(postToEdit.image);f
    }
  }, [postToEdit, edit]);
  const [errors, setErrors] = useState({});
  const [eventCreated, setEventCreated] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Ex. Casual Drinks",
      label: "Event Name",
    },
    {
      id: 2,
      name: "location",
      type: "text",
      placeholder: "Enter restaurant",
      label: "Restaurant",
      dropdown: "address",
    },
    {
      id: 3,
      name: "time",
      type: "datetime-local",
      placeholder: "time",
      label: "Date",
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Enter address",
      label: "Address",
      dropdown: "address",
    },
    {
      id: 6,
      name: "spots",
      type: "text",
      placeholder: "spots",
      label: "Spots Available",
      dropdown: "spots",
    },
    {
      id: 7,
      name: "cuisine",
      type: "text",
      placeholder: "Cuisine",
      label: "Cuisine",
      dropdown: "cuisine",
    },
    {
      id: 8,
      name: "meal",
      type: "text",
      placeholder: "Type of Event",
      label: "Type of Event",
      dropdown: "meal",
    },
    {
      id: 5,
      name: "about",
      type: "textarea",
      placeholder: "Enter description",
      label: "Event Description",
      dropdown: "textarea",
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validate(values));

    if (
      !values.name ||
      !values.location ||
      !values.time ||
      !values.address ||
      !values.about ||
      !values.spots ||
      !values.cuisine ||
      !values.meal
    ) {
      return;
    }

    axios.post(
      "http://localhost:8080/posts/",
      {
        name: values.name,
        image: files[0].fileUrl,
        location: values.location,
        time: convertDateLocalToString(values.time),
        about: values.about,
        spots: values.spots,
        address: values.address,
        cuisine: values.cuisine,
        meal: values.meal,
        geo: values.geo,
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    setEventCreated(true);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Please complete this field.";
    }
    if (!values.location) {
      errors.location = "Please complete this field.";
    }
    if (!values.time) {
      errors.time = "Please complete this field.";
    }
    if (!values.address) {
      errors.address = "Please complete this field.";
    }
    if (!values.about) {
      errors.about = "Please complete this field.";
    }
    if (!values.spots) {
      errors.spots = "Please complete this field.";
    }
    if (!values.cuisine) {
      errors.cuisine = "Please complete this field.";
    }
    if (!values.meal) {
      errors.meal = "Please complete this field.";
    }

    return errors;
  };

  const onChangeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="create-event">
      <p
        className="details__breadcrumb-text"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img className="details__icon" src={chevron} alt="chevron logo" />
        Back
      </p>
      {edit && <h1 className="details__edit-title">Edit Event</h1>}
      {postToEdit ? (
        <p key={postToEdit.image}>
          <img
            className="uploaded-img"
            src={postToEdit.image}
            alt="food that the user has submitted"
          />
        </p>
      ) : (
        <div className="create-event__dropzone">
          {files.length ? (
            <MyUploadedFiles files={files} postToEdit={postToEdit} />
          ) : (
            <MyDropzone setFiles={setFiles} />
          )}
        </div>
      )}
      <form className="form" onSubmit={submitHandler}>
        {inputs.map((input) => {
          return (
            <FormInput
              onChange={onChangeHandler}
              key={input.id}
              {...input}
              value={values[input.name]}
              setValues={setValues}
              emptyValues={values}
              errorMessage={errors[input.name]}
              isLoaded={isLoaded}
            />
          );
        })}
        <button className="form__button">
          {edit ? "Save changes" : "Submit"}
        </button>
      </form>
      {eventCreated && (
        <Modal setIsOpen={setEventCreated}>
          <div className="success-modal">
            <h1 className="success-modal__title">Event Created!</h1>
            <img
              className="success-modal__img"
              src={success}
              alt="celebration with confetti"
            />
            <p className="success-modal__text">
              Hang tight while other foodies request to join your event!
            </p>
            <button
              onClick={() => {
                navigate("/explore");
              }}
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

export default CreateEventPage;
