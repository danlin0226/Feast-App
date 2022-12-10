import React, { useState } from "react";
import "./CreateEventPage.scss";

import { useNavigate } from "react-router-dom";
import chevron from "../../assets/icons/chevron.png";

import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";

import FormInput from "../../components/formInput/FormInput";
import { useEffect } from "react";

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

const MyUploadedFiles = ({ files }) =>
  files.map((file) => {
    const filePath = file.filePath;
    const fileUrl = uploader.url(filePath, "raw"); // "raw" for un-transformed file.
    return (
      <p key={fileUrl}>
        <img className="uploaded-img" src={fileUrl} alt="" />
      </p>
    );
  });

const CreateEventPage = () => {
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
  });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
      placeholder: "location",
      label: "location",
    },
    {
      id: 3,
      name: "time",
      type: "datetime-local",
      placeholder: "time",
      label: "time",
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "address",
      label: "address",
    },
    {
      id: 6,
      name: "spots",
      type: "text",
      placeholder: "spots",
      label: "spots",
      dropdown: "spots",
    },
    {
      id: 7,
      name: "cuisine",
      type: "text",
      placeholder: "cuisine",
      label: "cuisine",
      dropdown: "cuisine",
    },
    {
      id: 8,
      name: "meal",
      type: "text",
      placeholder: "meal",
      label: "meal",
      dropdown: "meal",
    },
    {
      id: 5,
      name: "about",
      type: "text",
      placeholder: "about",
      label: "about",
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [errors]);

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
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="create-event">
      <p
        className="details__breadcrumb-text"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img className="details__icon" src={chevron} alt="" />
        Back to Explore
      </p>
      <div className="create-event__dropzone">
        {files.length ? (
          <MyUploadedFiles files={files} />
        ) : (
          <MyDropzone setFiles={setFiles} />
        )}
      </div>
      <form className="form" onSubmit={submitHandler}>
        {inputs.map((input) => {
          return (
            <FormInput
              onChange={onChangeHandler}
              key={input.id}
              {...input}
              value={values[input.name]}
              errorMessage={errors[input.name]}
            />
          );
        })}
        <button className="form__button">Submit</button>
      </form>
    </div>
  );
};

export default CreateEventPage;
