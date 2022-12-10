import React, { useState } from "react";
import "./CreateEventPage.scss";

import { Navigate, useNavigate } from "react-router-dom";
import chevron from "../../assets/icons/chevron.png";

import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton, UploadDropzone } from "react-uploader";

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
    width="100%"
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
      <div className="create-event__img-cont">
        {files.length ? (
          <MyUploadedFiles files={files} />
        ) : (
          <MyDropzone setFiles={setFiles} />
        )}
      </div>

      <h1>hi</h1>
    </div>
  );
};

export default CreateEventPage;
