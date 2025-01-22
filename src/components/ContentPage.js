import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa"; // Profile icon
import "./ContentPage.css";
import img1 from "../assets/artist/arijit.jpg";
import img2 from "../assets/artist/justin.jpg";
import img3 from "../assets/artist/rahman.jpg";
import img4 from "../assets/artist/sonu.jpg";
import img5 from "../assets/artist/taylor.jpg";
import img6 from "../assets/artist/diljit1.jpg";

const cards = [
  { id: 1, title: "CHAPTER 1", volume: "VOL 1", artist: "MARIZU", backgroundImage: img6 },
  { id: 2, title: "CHAPTER 2", volume: "VOL 2", artist: "JOHN DOE", backgroundImage: img1 },
  { id: 3, title: "CHAPTER 3", volume: "VOL 3", artist: "JANE DOE", backgroundImage: img3 },
  { id: 4, title: "CHAPTER 4", volume: "VOL 4", artist: "SMITH", backgroundImage: img2 },
  { id: 5, title: "CHAPTER 5", volume: "VOL 5", artist: "DOE SMITH", backgroundImage: img5 },
];

const featured = [
  { id: 1, title: "Featured Album 1", artist: "Artist 1", backgroundImage: img4 },
  { id: 2, title: "Featured Album 2", artist: "Artist 2", backgroundImage: img6 },
  { id: 3, title: "Featured Album 3", artist: "Artist 3", backgroundImage: img5 },
  { id: 4, title: "Featured Album 4", artist: "Artist 4", backgroundImage: img3 },
  { id: 5, title: "Featured Album 5", artist: "Artist 5", backgroundImage: img2 },
];

const ContentPage = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Initially set the 3rd card as active (index 2)
  const featuredRowRef = useRef(null);

  const clonedFeatured = [
    featured[featured.length - 1], // Clone last item to the start
    ...featured,
    featured[0], // Clone first item to the end
  ];

  useEffect(() => {
    const featuredRow = featuredRowRef.current;

    if (featuredRow) {
      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = featuredRow;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (scrollLeft <= 0) {
          // If at the start, jump to the last original item
          featuredRow.scrollLeft = maxScrollLeft - clientWidth;
        } else if (scrollLeft >= maxScrollLeft) {
          // If at the end, jump to the first original item
          featuredRow.scrollLeft = clientWidth;
        }
      };

      featuredRow.addEventListener("scroll", handleScroll);
      return () => featuredRow.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    // Initialize scroll position to the first original item
    if (featuredRowRef.current) {
      const clientWidth = featuredRowRef.current.clientWidth;
      featuredRowRef.current.scrollLeft = clientWidth;
    }
  }, []);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 7000); // Change card every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);


  // const handleRowScroll = (event) => {
  //   if (featuredRowRef.current) {
  //     event.preventDefault();
  //     const scrollAmount = event.deltaY || event.deltaX; // Handles both vertical and horizontal scrolling
  //     featuredRowRef.current.scrollLeft += scrollAmount;

  //     // Ensures continuous smooth scrolling
  //     const scrollWidth = featuredRowRef.current.scrollWidth;
  //     const clientWidth = featuredRowRef.current.clientWidth;
  //     if (featuredRowRef.current.scrollLeft >= scrollWidth - clientWidth) {
  //       featuredRowRef.current.scrollLeft = 0;
  //     } else if (featuredRowRef.current.scrollLeft <= 0) {
  //       featuredRowRef.current.scrollLeft = scrollWidth - clientWidth;
  //     }
  //   }
  // };

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

      {/* Cards Container */}
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${getCardClass(index)}`}
            onClick={() => handleCardClick(index)}
            style={{ backgroundImage: `url(${card.backgroundImage})` }}
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

      {/* Featured Section */}
      <div className="featured-this-week">
      <h2>Featured This Week</h2>
      <div className="featured-row-wrapper" ref={featuredRowRef}>
        <div className="featured-cards-container">
          {clonedFeatured.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="featured-card"
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            >
              <div className="featured-card-content">
                <div className="featured-title">{item.title}</div>
                <div className="featured-artist">{item.artist}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContentPage;
