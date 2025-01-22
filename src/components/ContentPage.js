import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Profile icon
import "./ContentPage.css";

const cards = [
    { id: 1, title: "CHAPTER 1", volume: "VOL 1", artist: "MARIZU"},
    { id: 2, title: "CHAPTER 2", volume: "VOL 2", artist: "JOHN DOE" },
    { id: 3, title: "CHAPTER 3", volume: "VOL 3", artist: "JANE DOE" },
    { id: 4, title: "CHAPTER 4", volume: "VOL 4", artist: "SMITH" },
    { id: 5, title: "CHAPTER 5", volume: "VOL 5", artist: "DOE SMITH" },
  ];
  
  const ContentPage = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Initially set the 3rd card as active (index 2)
  
    const handleCardClick = (index) => {
      setActiveIndex(index);
    };
  
    const getCardClass = (index) => {
      const relativeIndex = (index - activeIndex + cards.length) % cards.length;
  
      switch (relativeIndex) {
        case 0:
          return "active";
        case 1:
          return "left-stacked";
        case 2:
          return "left-stacked second";
        case cards.length - 1:
          return "right-stacked";
        case cards.length - 2:
          return "right-stacked second";
        default:
          return "hidden";
      }
    };



  return (
    <div className="content-page">
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
  <div className="cards-container">
    {cards.map((card, index) => (
      <div
        key={card.id}
        className={`card ${getCardClass(index)}`}
        onClick={() => handleCardClick(index)}
      >
        <div className="card-content">
          <span className="card-number">#{card.id}</span>
          <div className="card-details">
            <div className="card-title">ALBUM</div>
            <div className="card-subtitle">{card.title}</div>
            <div className="card-volume">{card.volume}</div>
            <div className="card-artist">{card.artist}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ContentPage;
