import React, { useState, useRef, useEffect } from "react";
import "../../Css files/ContentPage.css";
import TopBar from "../../components/TopBar";
import SongPlayer from "../../components/SongPlayer";
import { artistImages, coverImages, playlistImages } from "../../assets/images";
import { useNavigate } from "react-router-dom";


const cards = [
  { id: 1, title: "CHAPTER 1", volume: "VOL 1", artist: "MARIZU", backgroundImage: artistImages.diljit },
  { id: 2, title: "CHAPTER 2", volume: "VOL 2", artist: "JOHN DOE", backgroundImage: artistImages.arijit },
  { id: 3, title: "CHAPTER 3", volume: "VOL 3", artist: "JANE DOE", backgroundImage: artistImages.rahman },
  { id: 4, title: "CHAPTER 4", volume: "VOL 4", artist: "SMITH", backgroundImage: artistImages.justin },
  { id: 5, title: "CHAPTER 5", volume: "VOL 5", artist: "DOE SMITH", backgroundImage: artistImages.taylor },
];

const featured = [
  { id: 2, title: "Stay", artist: "Justin Bieber", backgroundImage: coverImages.stay, audioSrc: "/assets/songs/Stay(PagalNew.Com.Se).mp3" },
  { id: 4, title: "Tumse Milke", artist: "AR Rahman", backgroundImage: coverImages.tumseMilke, audioSrc: "/assets/songs/Tumse Milke Dil Ka Main Hoon Na 128 Kbps.mp3" },
  { id: 3, title: "Shake It Off", artist: "Taylor", backgroundImage: coverImages.shakeItOff, audioSrc: "/assets/songs/shake_it_off.mp3" },
  { id: 1, title: "Ranjhana", artist: "Sonu Nigam", backgroundImage: coverImages.ranjhna, audioSrc: "/assets/songs/128-Raanjhanaa - Raanjhanaa 128 Kbps.mp3" },
  { id: 5, title: "Lover", artist: "Diljit", backgroundImage: coverImages.lover, audioSrc: "/assets/songs/Lover.mp3" },
];

const popularPlaylists = [
  { id: 1, title: "Cold Play", backgroundImage: playlistImages.coldlay },
  { id: 2, title: "Old is gold", backgroundImage: playlistImages.oldisgold },
  { id: 3, title: "Punjabi Hit", backgroundImage: playlistImages.punjabi },
  { id: 4, title: "Party Hits", backgroundImage: playlistImages.partyHits },
  { id: 5, title: "Happy Vibes", backgroundImage: playlistImages.happy },
  { id: 6, title: "Sad Hits", backgroundImage: playlistImages.sadHits },
];

const ContentPage = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Initially set the 3rd card as active (index 2)
  const featuredRowRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);
  const popularRowRef = useRef(null);
  const navigate = useNavigate();

  const handlePlaylistClick = (playlist) => {
    navigate("/playlist", { state: playlist }); // Pass the clicked playlist's data
  };
  

  // const handleScrollPopular = (direction) => {
  //   if (popularRowRef.current) {
  //     const scrollAmount = 300; // Adjust scroll amount as needed
  //     popularRowRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
  //   }
  // };

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
    if (featuredRowRef.current) {
      // Ensure the total scrollable width is greater than the container
      const containerWidth = featuredRowRef.current.offsetWidth;
      const contentWidth = featuredRowRef.current.scrollWidth;
  
      if (contentWidth <= containerWidth) {
        console.warn("Content width is less than or equal to the container width.");
      }
    }
  }, []);
  

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleFeatureCardClick = (song) => {
    setCurrentSong(song);
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
     <TopBar />

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
                onClick={() => handleFeatureCardClick(item)} // Set the clicked song
              >
                <div className="featured-card-content">
                  <div className="featured-title">{item.title}</div>
                  <div className="featured-artist">{item.artist}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Playlist Section */}
        <div className="popular-playlists">
  <h2>Popular Playlists</h2>
  <div className="popular-row" ref={popularRowRef}>
    {popularPlaylists.map((playlist) => (
      <div
        key={playlist.id}
        className="popular-card"
        style={{ backgroundImage: `url(${playlist.backgroundImage})` }}
        onClick={() => handlePlaylistClick(playlist)} // Navigate on click
      ></div>
    ))}
  </div>
</div>;

      
      
    </div>
     {/* Audio Player */}
       {currentSong && <SongPlayer song={currentSong} />}
    </div>
  );
};

export default ContentPage;
