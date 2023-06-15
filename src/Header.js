import React from "react";

const Header = ({ profileImg, username }) => {
  return (
    <div>
      <img src={profileImg} alt="" />
      <h1>{username}</h1>
    </div>
  );
};

export default Header;
