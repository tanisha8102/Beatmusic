import React, { useState } from "react";
import "./Sidebar.css";
import { FaHome, FaSearch, FaMicrophone, FaClock, FaHeart, FaUser, FaFolderPlus, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/Beat-transparent.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Sidebar header */}
      <div className="sidebar-header">
      <img
        src={logo}
        alt="Logo"
        className="sidebar-logo"
        onClick={toggleSidebar}
      />
        <h1 className="sidebar-logo">BeatMusic</h1>
      </div>

      {/* Sidebar container */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        {/* Close button for mobile */}
        <button className="close-sidebar" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className="sidebar-menu">
          <div className="menu-section">
            <p onClick={closeSidebar}>
              <FaHome /> Home
            </p>
            <p onClick={closeSidebar}>
              <FaSearch /> Browse
            </p>
            <p onClick={closeSidebar}>
              <FaMicrophone /> Radio
            </p>
          </div>
          <div className="menu-section">
            <h3>Your Library</h3>
            <p onClick={closeSidebar}>
              <FaClock /> Recently Played
            </p>
            <p onClick={closeSidebar}>
              <FaHeart /> Favorite Songs
            </p>
            <p onClick={closeSidebar}>
              <FaUser /> Artists
            </p>
            <p onClick={closeSidebar}>
              <FaFolderPlus /> Albums
            </p>
          </div>
          <div className="menu-section">
            <h3>Playlists</h3>
            <p onClick={closeSidebar}>Gospel Rap Top 50</p>
            <p onClick={closeSidebar}>Praise Jamz 30</p>
            <p onClick={closeSidebar}>Hillsongs N Bethel</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
