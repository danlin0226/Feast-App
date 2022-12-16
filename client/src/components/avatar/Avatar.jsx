import React from "react";

import "./Avatar.scss";

const Avatar = ({ id, avatar, large, medium, handleSelectAttendee }) => {
  return (
    <div
      className={`avatar-cont ${large && "avatar-cont--large"} ${
        medium && "avatar-cont--medium"
      }`}
      onClick={() => {
        handleSelectAttendee(id);
      }}
    >
      <img
        className="avatar"
        src={avatar}
        onError={(i) => (i.target.style.display = "none")}
        alt="user headshot"
      />
    </div>
  );
};

export default Avatar;
