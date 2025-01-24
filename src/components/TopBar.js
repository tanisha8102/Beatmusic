import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "../Css files/TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="search-bar">
        <input type="text" placeholder="Search for songs, artists etc..." />
      </div>
      <div className="auth-buttons">
        <button className="sign-in-btn">Sign In</button>
        <button className="sign-up-btn">Sign Up</button>
        <FaUserCircle className="profile-icon" />
      </div>
    </div>
  );
};

export default TopBar;
