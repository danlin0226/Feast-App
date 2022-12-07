import React from "react";

import "./Avatar.scss";

import avatar from "../../assets/profile-pics/steph.jpg";

const Avatar = () => {
  return (
    <div className="avatar-cont">
      <img
        className="avatar"
        src={avatar}
        onError={(i) => (i.target.style.display = "none")}
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
