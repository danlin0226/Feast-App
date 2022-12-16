import React from "react";

import "./Avatar.scss";

const Avatar = ({ id, avatar, large, medium, handleSelectAttendee }) => {
  const handleClick = (id) => {
    if (!id) {
      return;
    }

    handleSelectAttendee(id);
  };

  return (
    <div
      className={`avatar-cont ${large && "avatar-cont--large"} ${
        medium && "avatar-cont--medium"
      }`}
      onClick={() => {
        handleClick(id);
      }}
    >
      <img
        className="avatar"
        src={avatar}
        onError={(i) => (i.target.style.display = "none")}
        alt=""
      />
    </div>
  );
};

export default Avatar;
