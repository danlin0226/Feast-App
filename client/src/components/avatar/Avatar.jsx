import React from "react";

import "./Avatar.scss";

const Avatar = ({ avatar, modal }) => {
  return (
    <div className="avatar-cont" onClick={modal}>
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
