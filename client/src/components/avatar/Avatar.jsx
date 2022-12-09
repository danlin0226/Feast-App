import React from "react";

import "./Avatar.scss";

const Avatar = ({ avatar, modal, large }) => {
  return (
    <div
      className={`avatar-cont ${large && "avatar-cont--large"}`}
      onClick={modal}
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
